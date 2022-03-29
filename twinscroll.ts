export interface ScrollBar {
  onScroll(
    callback: (direction: { scrollY: -1 | 0 | 1; scrollX: -1 | 0 | 1 }) => void
  ): void;
  getScrollPosY(): number;
  getScrollPosX(): number;
  scrollTo(options: "x" | "y", pos: number, behavior: "smooth" | "auto"): void;
  removeScrollBarAction(): void;
}

interface TwinScrollInterface{
    start(): void;
    close(): void;
}

export class TwinScroll implements TwinScrollInterface{
    private target: Array<ScrollBar>;

    constructor(options: Array<ScrollBar>){
        this.target = [...options];
    }

    public start(): void {
      for (let i in this.target) {
            let targetEle = this.target[i];
            let excludeItem = this.target
            .map((item,index)=>{
                if(index != Number(i)){
                  return item;
                }
                else{
                  return 0
                }
            })
            .filter((item)=> item !== 0);

            targetEle.onScroll(()=>{
              for(let ei  of excludeItem){
                let targetEi = ei as unknown as ScrollBar;
                targetEi.scrollTo("x", targetEle.getScrollPosX(),"auto");
                targetEi.scrollTo("y", targetEle.getScrollPosY(),"auto");
              }
            });
        }
    }
    public close(): void {
        for(let i of this.target){
          i.removeScrollBarAction();
        }
    }
}
