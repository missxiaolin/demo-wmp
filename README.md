# 文档

开发者需要在详情->本地设置->设置启动自定义处理命令

### 启动命令

~~~
npm run build
~~~

### 组件

- 长列表组件 https://github.com/wechat-miniprogram/recycle-view
- 小程序内通过静态模板和样式绘制 canvas ，导出图片，可用于生成分享图等场景 https://github.com/wechat-miniprogram/wxml-to-canvas
- 包含vtabs、select-text、sticky等组件 https://github.com/wechat-miniprogram/miniprogram-component-plus
- lottie 动画库适配小程序的版本 https://github.com/wechat-miniprogram/lottie-miniprogram
- 语音输入，文本翻译插件 https://github.com/Tencent/Face2FaceTranslator/
- 可将HTML、Markdown转为微信小程序WXML https://github.com/sbfkcel/towxml
- 小程序富文本组件 https://github.com/jin-yufeng/mp-html
- 自动化测试 https://www.npmjs.com/package/miniprogram-automator

### 图片渲染优化

- 利用压缩技术对图片进行压缩，在图片显示质量不受太大影响的情况下，可以对图片进行适度压缩，可以使用 [tinypng](https://tinypng.com/)、[squoosh](https://squoosh.app/)等工具
- 小程序Image组件支持通过配置lazy-load参数来实现 [懒加载](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
- 利用cdn服务商（[阿里云OSS](https://help.aliyun.com/document_detail/44703.html?spm=a2c4g.11186623.6.1097.7f4d720ds2hjep)）提供的能力获取适当的图片,支持格式转换、质量变换、尺寸处理
- 使用webp格式的图片

~~~
// in app.wxs 利用阿里云oss提供的服务转换图片格式
var wrapUrl = function (url) {
  var fConfig = '?x-oss-process=image/format,webp'
  return url + fConfig
}
// in wxml
<image webp src="{{ tools.wrapUrl(url) }}"  />
~~~

### 代码注入优化

~~~
// in app.json
{
  "lazyCodeLoading": "requiredComponents"
}
~~~

