## 自动化测试

###  安装自动化测试SDK

~~~
npm i miniprogram-automator --save-dev
~~~

开启工具安全设置中的CLI/HTTP调用功能。

具体操作指南如下: 打开微信开发者工具->设置-> 安全设置 -> 启用服务端口.

### demo演示

先准备个需要做自动化测试的页面(为方便、下面会以最简单的demo来演示)

~~~
// 想要测试的页面index
// index.wxml
<view class="usermotto">
  <text class="user-motto" bind:tap="tapFn">{{motto}}</text>
</view>

// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  tapFn (e) {
    console.log(e,'测试自动化结果')
  }
})

// index.wxss
.usermotto {
  margin-top: 200px;
  text-align: center;
}
~~~

在项目中新建文件、以.spec.js结尾(本文以在项目根目录下新建index.spce.js为例子), 输入类似如下内容（在实际过程中根据自己的项目修改即可）

~~~
const automator = require('miniprogram-automator')

automator.launch({
  cliPath: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  projectPath: '/Users/susan.li/files/mini-demo', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/pages/index/index')
  await page.waitFor(500)
  const element = await page.$('.user-motto')
  console.log(await element.attribute('class'))
  await element.tap()

  await miniProgram.close()
})
~~~

这里有3个点需要注意:

- 修改cli工具的路径(若您没更改过微信开发者工具的默认安装路径、可忽略此项、若改过安装路径的、就需要自行寻找安装路径是什么然后补充到这);
- 修改项目的文件路径(这里推荐绝对路径);
- 修改下面demo中实际想要操作的元素;

在终端输入如下命令、就在执行自动化测试结果了。

~~~
node index.spec.js
~~~

最后我们再看看终端, 你会发现终端会输出如下内容, 跟你代码的预期是符合的.

### Jest框架

~~~
npm i jest --save
~~~

脚本

~~~
const automator = require('miniprogram-automator')
describe('index', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      projectPath: '/Users/susan.li/files/mini-demo',
      cliPath: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli'
    })
    page = await miniProgram.reLaunch('/pages/index/index')
    await page.waitFor(5000)
  }, 30000)

  it('点击hello world文本', async () => {
      await page.waitFor(3000)
      // 通过.user-motto选择目标元素
      const tabbar = await page.$('.user-motto')
      tabbar.tap()
  })
  // afterAll(async () => {
  //   await miniProgram.close()
  // })
})
~~~

开启工具安全设置中的CLI/HTTP调用功能(同2.4打开步骤)
关闭后、重新启动小程序到首页
关闭工具安全设置中的CLI/HTTP调用功能(同2.4打开步骤)并关闭微信开发者工具
在项目根目录下, 执行如下脚本

~~~
jest index.spec.js
~~~

### 进阶玩法

上述做法需要在代码内注入微信开发者工具的安装路径&&项目路径, 不同项目成员内的配置是不同、那我们思考下能否做成隔离的?
即项目本身只维护测试用例脚本、至于在哪里执行脚本、执行的项目目录是什么、由开发者自行决定.

通过命令打开开发版微信开发者工具的自动化接口并连接自动化接口。 A. 找到微信开发者工具安装目录, 在该目录终端下输入如下命令:

~~~
// 进入微信开发者工具的安装目录(笔者的目录结构是: /Applications/wechatwebdevtools.app) -> /微信开发者工具安装目录/Contents/MacOS
cd /Applications/wechatwebdevtools.app/Contents/MacOS
// 找到要执行自动化测试的目录(笔者项目路径是:/Users/susan.li/files/mini-demo)
cli --auto /Users/susan.li/files/mini-demo --auto-port 9420
~~~

Tips: 自动化端口是独立于服务端口的(你在开发者工具->设置->安全->打印出来的52968其实是服务器端口); 我们需要在终端看到如下提示才意味着成功打开了自动化端口(9420)

~~~
// 要看到这句话、这句话很关键！！！！！！
✔ Open project with automation enabled success /Users/susan.li/files/mini-demo
~~~

找到自动化测试的项目根目录下, 执行如下命令安装SDK(若已安装、可忽略)

~~~
// 若需要安装、安装命令如下:
npm i miniprogram-automator --save-dev
~~~

引入自动化测试SDK, 在脚本中连接自动化操作端口

~~~
const automator = require('miniprogram-automator');

const miniProgram = automator.connect({
  wsEndpoint: 'ws://localhost:9420',
})
~~~

根据业务需要编写对应的脚本并进行相关操作

~~~
const automator = require('miniprogram-automator')

describe('index', () => {
  let miniProgram
  // 运行测试前调用、启用自动化端口9420
  beforeAll(async () => {
    miniProgram = await automator.connect({
      wsEndpoint: 'ws://localhost:9420',
    })
  })
  // 运行测试后调用
  afterAll(() => {
    miniProgram.disconnect();
  })
  // 自动化测试内容
  it('点击hello world文本', async () => {
    // 获取页面相关信息
    const page = await miniProgram.reLaunch('/pages/index/index')
    // 通过.user-motto选择目标元素
    const tabbar = await page.$('.user-motto')
    // 模拟tap事件
    tabbar.tap()
  })
})
~~~

执行脚本

~~~
jest index.spec.js
~~~