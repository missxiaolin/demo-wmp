module.exports = {
  "pages": [
    "pages/list/index",
    "pages/lottery/index",
    "pages/nav/index",
    "pages/nav/demo1/index",
    "pages/nav/demo2/index",
    "pages/nav/demo3/index",
    "pages/nav/demo4/index",
    "pages/nav/demo5/index",
    "pages/nav/demo6/index",
    "pages/nav/demo7/index",
    "pages/nav/demo8/index",
    "pages/nav/demo9/index",
    "pages/nav/demo10/index",
    "pages/signName/index",
    "pages/main/main",
    "pages/swiperY/index",
    "pages/swiperX/index",
    "pages/example/index",
    "pages/index/index",
    "pageB/index/index",
    "pages/userCenter/index",
    "pages/community/community"
  ],
  "requiredPrivateInfos": [
    "chooseLocation"
  ],
  "tabBar": {
    "custom": true,
    "list": [{
        "pagePath": "pages/main/main",
        "text": "认养"
      },
      {
        "pagePath": "pages/community/community",
        "text": "社区"
      },
      {
        "pagePath": "pages/userCenter/index",
        "text": "我的"
      }
    ]
  },
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "",
    "navigationBarTextStyle": "black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}