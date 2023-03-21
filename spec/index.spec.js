const automator = require('miniprogram-automator')
describe('index', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      projectPath: '/Users/xiaolin/web/miss/demo-wmp',
      cliPath: '/Applications/wechatwebdevtools.app/Contents/MacOS/cli'
    })
    page = await miniProgram.reLaunch('/pages/main/main')
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