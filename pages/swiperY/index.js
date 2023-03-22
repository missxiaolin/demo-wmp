const DEFAULT_PAGE = 0;

Page({
    startPageY: 0,
    currentView: DEFAULT_PAGE,
    data: {
        toView: `card_${DEFAULT_PAGE}`,
        list: ['Javascript', 'Typescript', 'Java', 'PHP', 'Go']
    },

    touchStart(e) {
        this.startPageY = e.changedTouches[0].pageY;
    },

    touchEnd(e) {
        const moveY = e.changedTouches[0].pageY - this.startPageY;
        const maxPage = this.data.list.length - 1;
        if ((moveY > 0 && this.currentView == 0) || (maxPage == this.currentView)) {
          return
        }

        
        if (Math.abs(moveY) >= 150) {
            if (moveY > 0) {
                this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
            } else {
                this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
            }
        }
        this.setData({
            toView: `card_${this.currentView}`
        });
    }
})