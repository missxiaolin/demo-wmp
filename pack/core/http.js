let uid = 0; // 初始id
let count = 0; // 当前请求数量
let max = 10; // 最大请求数量
let pool = []; // 请求队列
let hash = {}; // 当前所有请求的信息

/**
 * 队列请求
 * @param {*} params 
 */
function WxHttp(params) {
    let id = uid++;
    let context = this;
    pool.push(hash[id] = {
        id,
        params,
        isAbort: false,
        instance: context
    });

    /**
     * 请求
     */
    function request() {
        if (count >= max || !pool.length) return false;
        let obj = pool.shift() || {};
        let {
            id,
            params,
            isAbort
        } = obj;
        if (!params || !params.url || isAbort) return request();
        count++;
        return new Promise(async (resolve, reject) => {
            if (!params.url) {
                console.error('url为必填值')
                reject('url为必填值')
            }
            if (params.timeout) {
                obj.timeout = setTimeout(() => {
                    obj.request.abort();
                }, params.timeout);
            }
            obj.request = wx.request({
                ...params,
                url: `${params.baseUrl || 'HTTP_BASE_URL'}` + params.url,
                method: params.method || 'GET',
                data: params.data || {},
                success(res) {
                    if (res.statusCode == 200) {
                        resolve(res.data);
                    }
                },
                fail(err) {
                    reject(err);
                },
                complete() {
                    obj.timeout && clearTimeout(obj.timeout);
                    delete hash[id];
                    count--;
                    request();
                }
            })

        })
    }

    this.$abort = function () {
        let obj = hash[id];
        if (!obj) return false;
        if (obj.request) {
            obj.request.abort();
        } else {
            obj.hasAbort = true;
            obj.params.fail && obj.params.fail();
            obj.params.complete && obj.params.complete();
        }
    }
}

export {
    WxHttp
}