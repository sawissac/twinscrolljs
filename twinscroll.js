export class TwinScroll {
    constructor(options) {
        this.target = [...options];
    }
    start() {
        for (let i in this.target) {
            let targetEle = this.target[i];
            let excludeItem = this.target
                .map((item, index) => {
                if (index != Number(i)) {
                    return item;
                }
                else {
                    return 0;
                }
            })
                .filter((item) => item !== 0);
            targetEle.onScroll(() => {
                for (let ei of excludeItem) {
                    let targetEi = ei;
                    targetEi.scrollTo("x", targetEle.getScrollPosX(), "auto");
                    targetEi.scrollTo("y", targetEle.getScrollPosY(), "auto");
                }
            });
        }
    }
    close() {
        for (let i of this.target) {
            i.removeScrollBarAction();
        }
    }
}
