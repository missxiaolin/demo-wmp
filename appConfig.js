module.exports = {
  "pages": [
    "pages/nav/index",
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