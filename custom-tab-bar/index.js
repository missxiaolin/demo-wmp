Component({
  data: {
    selected: 0,
    list: [
      {
        key: 0,
        pagePath: "/pages/main/main",
        text: "认养",
        iconPath: "https://guidedog.oss-cn-hangzhou.aliyuncs.com/icon_1_20230216.png",
        selectedIconPath: "https://guidedog.oss-cn-hangzhou.aliyuncs.com/icon_1_select_20230216.png",
      },
      {
        key: 1,
        pagePath: "/pages/community/community",
        text: "社区",
        iconPath: "https://guidedog.oss-cn-hangzhou.aliyuncs.com/icon_2_20230216.png",
        selectedIconPath: "https://guidedog.oss-cn-hangzhou.aliyuncs.com/icon_2_select_20230216.png",
      },
      {
        key: 2,
        pagePath: "/pages/userCenter/index",
        text: "我的",
        iconPath: "https://guidedog.oss-cn-hangzhou.aliyuncs.com/icon_3_20230216.png",
        selectedIconPath: "https://guidedog.oss-cn-hangzhou.aliyuncs.com/icon_3_select_20230216.png",
      },
    ],
  },
  pageLifetimes: {
    show () {
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      
      wx.switchTab({ url })
    }
  }

  
});
