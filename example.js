import {ScrollDetect} from "./lib/scrollbarjs/scrollbar.js";
import {TwinScroll} from "./twinscroll.js";

let ft = new ScrollDetect({target: "#scrolltwo"});
let st = new ScrollDetect({target: "#scrollone"});
let tt = new ScrollDetect({target: "#scrollthree"});

let ts = new TwinScroll([ft,st,tt])
ts.start();

// enable twinscroll
ts.close();