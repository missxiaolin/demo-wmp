let Handler = new Map() //事件容器

function addEventListener(eventName, self, callback) {
    if (!Handler.has(eventName)) {
        Handler.set(eventName, [])
    }
    Handler.set(eventName, [...Handler.get(eventName), [self, callback]])
}

// 触发
function emit(eventName, params) {
    if (!Handler.has(eventName)) {
        return new Error(`${eventName}--该事件未注册`)
    }
    Handler.get(eventName).forEach(item => {
        item[1].call(item[0], params)
    })
}
// 移除事件监听
function remove(eventName, self) {
    if (!Handler.has(eventName)) {
        return new Error(`${eventName}--该事件未注册`)
    }
    Handler.get(eventName).filter((item) => {
        return item[0] != self
    })
}


module.exports = {
    addEventListener: addEventListener,
    emit: emit,
    remove
};