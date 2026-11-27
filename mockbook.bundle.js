(function(){if(typeof document==="undefined"||document.getElementById("mkb-css"))return;var s=document.createElement("style");s.id="mkb-css";s.textContent=".mkb{--ratio:1.414;--bw:56;--thick:.03;--rx:0deg;--ry:-16deg;--rz:0deg;--persp:3.6;--back:#10131c;--page:#f1e9db;position:relative;display:block;width:100%;container-type:inline-size;contain:layout style;line-height:0;-webkit-font-smoothing:antialiased}.mkb *,.mkb *::before,.mkb *::after{box-sizing:border-box}.mkb-stage{position:relative;width:100%;height:calc(var(--stage-h) * 1cqw);overflow:visible}.mkb img{display:block;width:100%;height:100%;object-fit:fill;user-select:none;-webkit-user-drag:none}.mkb-scene{--W:calc(var(--bw) * 1cqw);--H:calc(var(--bw) * var(--ratio) * 1cqw);--D:calc(var(--bw) * var(--thick) * 1cqw);--I:calc(var(--bw) * .005cqw);position:absolute;left:50%;top:calc(var(--cy) * 1cqw);width:var(--W);height:var(--H);margin-left:calc(var(--W) * -.5);margin-top:calc(var(--H) * -.5);perspective:calc(var(--W) * var(--persp));perspective-origin:50% 50%}.mkb-book{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateZ(var(--rz)) rotateX(var(--rx)) rotateY(var(--ry))}.mkb-face{position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.mkb-front{inset:0;transform:translateZ(calc(var(--D) * .5));background:var(--back);border-radius:calc(var(--W) * .004) calc(var(--W) * .008) calc(var(--W) * .008) calc(var(--W) * .004);overflow:hidden;box-shadow:0 0 0 .05cqw rgba(0,0,0,.35)}.mkb-front::after{content:\"\";position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(255,255,255,.14) 1.1%,rgba(0,0,0,.12) 2.4%,rgba(0,0,0,0) 5%),linear-gradient(112deg,rgba(255,255,255,.10) 0,rgba(255,255,255,0) 38%,rgba(0,0,0,.10) 100%)}.mkb-back{inset:0;transform:rotateY(180deg) translateZ(calc(var(--D) * .5));background:var(--back);border-radius:calc(var(--W) * .004) calc(var(--W) * .008) calc(var(--W) * .008) calc(var(--W) * .004)}.mkb-spine{top:0;height:100%;left:calc(var(--D) * -.5);width:var(--D);transform:rotateY(-90deg);background:linear-gradient(90deg,rgba(255,255,255,.10),rgba(0,0,0,.25)),var(--back)}.mkb-pages-right{top:var(--I);height:calc(100% - var(--I) * 2);left:calc(100% - var(--I) - var(--D) * .5);width:var(--D);transform:rotateY(90deg);background:linear-gradient(90deg,rgba(0,0,0,.20),rgba(0,0,0,0) 30%,rgba(0,0,0,0) 70%,rgba(0,0,0,.14)),repeating-linear-gradient(90deg,var(--page) 0 1.3px,rgba(120,100,70,.55) 1.3px 1.8px)}.mkb-pages-top,.mkb-pages-bottom{left:0;width:calc(100% - var(--I));height:var(--D);background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,0) 40%),repeating-linear-gradient(180deg,var(--page) 0 1.3px,rgba(120,100,70,.55) 1.3px 1.8px)}.mkb-pages-top{top:calc(var(--I) - var(--D) * .5);transform:rotateX(90deg)}.mkb-pages-bottom{top:calc(100% - var(--I) - var(--D) * .5);transform:rotateX(-90deg)}.mkb--reflection{--bw:56;--ry:-21deg;--rx:0deg;--rz:0deg;--persp:3.4;--thick:.15;--stage-h:calc(var(--bw) * var(--ratio) * 1.4 + 10);--cy:calc(var(--bw) * var(--ratio) * .5 + 6)}.mkb--reflection .mkb-ground{position:absolute;left:50%;width:calc(var(--bw) * 1.02cqw);margin-left:calc(var(--bw) * -.51cqw);top:calc((var(--cy) + var(--bw) * var(--ratio) * .5 - 1.2) * 1cqw);height:3cqw;background:radial-gradient(closest-side,rgba(0,0,0,.45),rgba(0,0,0,0));filter:blur(.7cqw)}.mkb--reflection .mkb-reflection{position:absolute;left:50%;width:calc(var(--bw) * 1.7cqw);margin-left:calc(var(--bw) * -.85cqw);top:calc((var(--cy) + var(--bw) * var(--ratio) * .35) * 1cqw);height:calc(var(--bw) * var(--ratio) * .77cqw);opacity:.55;filter:blur(.45cqw);-webkit-mask-image:linear-gradient(to bottom,#000 0%,#000 20%,rgba(0,0,0,0) 90%);mask-image:linear-gradient(to bottom,#000 0%,#000 20%,rgba(0,0,0,0) 90%);pointer-events:none}.mkb--reflection .mkb-reflection .mkb-scene{top:calc(var(--bw) * var(--ratio) * -.85cqw);left:50%;margin-top:0}.mkb-mirror{position:absolute;inset:0;transform-style:preserve-3d;transform:translateY(calc(var(--H) + .35cqw)) scaleY(-1)}.mkb-mirror .mkb-face{backface-visibility:visible;-webkit-backface-visibility:visible}.mkb--floating{--bw:58;--ry:-24deg;--rx:7deg;--rz:9deg;--persp:3.4;--thick:.15;--stage-h:calc(var(--bw) * var(--ratio) * 1.24 + 14);--cy:calc(var(--bw) * var(--ratio) * .5 * 1.08 + 4)}.mkb--floating .mkb-ground{position:absolute;left:52%;width:calc(var(--bw) * 1.1cqw);margin-left:calc(var(--bw) * -.55cqw);bottom:1cqw;height:calc(var(--bw) * .2cqw);background:radial-gradient(closest-side,rgba(0,0,0,.62) 0%,rgba(0,0,0,.30) 48%,rgba(0,0,0,0) 100%);filter:blur(.5cqw)}.mkb--trio{--cw:41;--sw:39;--stage-h:calc(var(--cw) * var(--ratio) * 1.14 + 5)}.mkb-card{position:absolute;background:#fff;overflow:hidden;border-radius:calc(var(--w) * .03cqw);height:calc(var(--w) * var(--ratio) * 1cqw);width:calc(var(--w) * 1cqw);box-shadow:0 calc(var(--w) * .07cqw) calc(var(--w) * .12cqw) calc(var(--w) * -.02cqw) rgba(0,0,0,.34),0 calc(var(--w) * .015cqw) calc(var(--w) * .035cqw) rgba(0,0,0,.20)}.mkb-card--center{--w:var(--cw);left:50%;margin-left:calc(var(--cw) * -.5cqw);top:1.5cqw;z-index:3}.mkb-card--left{--w:var(--sw);left:23.5%;margin-left:calc(var(--sw) * -.5cqw);top:calc((var(--cw) * var(--ratio) * .13 + 1.5) * 1cqw);transform:perspective(70cqw) rotateY(11deg) rotateZ(-5.5deg);z-index:1}.mkb-card--right{--w:var(--sw);left:76.5%;margin-left:calc(var(--sw) * -.5cqw);top:calc((var(--cw) * var(--ratio) * .13 + 1.5) * 1cqw);transform:perspective(70cqw) rotateY(-11deg) rotateZ(5.5deg);z-index:2}.mkb-card--blank{background:repeating-linear-gradient(180deg,#d4d9e2 0 calc(var(--w) * .006cqw),transparent calc(var(--w) * .006cqw) calc(var(--w) * .022cqw)) center 22% / 78% 66% no-repeat,linear-gradient(180deg,#0f2c6b 0,#0f2c6b 11%,#fff 11%)}.mkb--sheets{--lw:36;--stage-h:calc(var(--lw) * var(--ratio) * 1.2 + 6);--cyl:calc(var(--lw) * var(--ratio) * .5 + 3)}.mkb--cascade{--lw:42;--stage-h:calc(var(--lw) * var(--ratio) + 16);--cyl:calc(var(--lw) * var(--ratio) * .5 + 2)}.mkb--desk{--lw:36;--rx:50deg;--rz:-6deg;--stage-h:calc(var(--lw) * var(--ratio) * .78 + 12);--cyl:calc(var(--stage-h) * .5)}.mkb-leaf{position:absolute;left:50%;top:calc(var(--cyl) * 1cqw);width:calc(var(--lw) * 1cqw);height:calc(var(--lw) * var(--ratio) * 1cqw);margin-left:calc(var(--lw) * -.5cqw);margin-top:calc(var(--lw) * var(--ratio) * -.5cqw);background:#fff;border-radius:calc(var(--lw) * .012cqw);overflow:hidden;box-shadow:0 calc(var(--lw) * .05cqw) calc(var(--lw) * .1cqw) calc(var(--lw) * -.02cqw) rgba(0,0,0,.30),0 calc(var(--lw) * .008cqw) calc(var(--lw) * .02cqw) rgba(0,0,0,.14)}.mkb-leaf::after{content:\"\";position:absolute;inset:0;pointer-events:none;background:linear-gradient(125deg,rgba(255,255,255,.12) 0,rgba(255,255,255,0) 40%,rgba(0,0,0,.05) 100%)}.mkb-leaf--blank{background:repeating-linear-gradient(180deg,#d4d9e2 0 calc(var(--lw) * .006cqw),transparent calc(var(--lw) * .006cqw) calc(var(--lw) * .022cqw)) center 50% / 78% 78% no-repeat,#fff}.mkb--sheets .mkb-leaf{transform-origin:50% 125%;transform:rotate(var(--r))}.mkb--cascade .mkb-leaf{transform:translate(calc(var(--x) * 1cqw),calc(var(--y) * 1cqw)) rotate(var(--r))}.mkb-desk{position:absolute;inset:0;perspective:calc(var(--lw) * 3.4cqw);perspective-origin:50% 35%}.mkb--desk .mkb-leaf{transform:rotateX(var(--rx)) rotateZ(var(--rz)) translate3d(calc(var(--x) * 1cqw),calc(var(--y) * 1cqw),0) rotateZ(var(--r));box-shadow:0 calc(var(--lw) * .03cqw) calc(var(--lw) * .08cqw) rgba(0,0,0,.26),0 calc(var(--lw) * .006cqw) calc(var(--lw) * .015cqw) rgba(0,0,0,.16)}.mkb-cast{display:none}.mkb-spine img{position:absolute;inset:0}.mkb--spine{--bw:50;--ry:34deg;--rx:0deg;--rz:0deg;--persp:3.2;--thick:.18;--stage-h:calc(var(--bw) * var(--ratio) * 1.1 + 10);--cy:calc(var(--bw) * var(--ratio) * .5 + 5)}.mkb--spine .mkb-ground{position:absolute;left:50%;width:calc(var(--bw) * 1.15cqw);margin-left:calc(var(--bw) * -.6cqw);top:calc((var(--cy) + var(--bw) * var(--ratio) * .5 - 2) * 1cqw);height:4cqw;background:radial-gradient(closest-side,rgba(0,0,0,.5),rgba(0,0,0,0));filter:blur(.7cqw)}.mkb--spine .mkb-spine{background:linear-gradient(90deg,rgba(0,0,0,.30),rgba(255,255,255,.06) 55%,rgba(255,255,255,.16)),var(--back)}.mkb--spine .mkb-spine::after{content:\"\";position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(0,0,0,.30),rgba(0,0,0,0) 30%,rgba(0,0,0,0) 70%,rgba(255,255,255,.12))}.mkb--lying{--bw:46;--rx:52deg;--ry:0deg;--rz:24deg;--persp:3;--thick:.06;--stage-h:calc(var(--bw) * (.42 + var(--ratio) * .56) + 6);--cy:calc(var(--stage-h) * .5)}.mkb--lying .mkb-book{transform:rotateX(var(--rx)) rotateZ(var(--rz)) rotateY(var(--ry))}.mkb--lying .mkb-cast,.mkb--multi .mkb-cast{display:block;inset:0;transform:translateZ(calc(var(--D) * -.5 - .1cqw));background:rgba(0,0,0,.5);border-radius:calc(var(--W) * .01);box-shadow:0 0 calc(var(--W) * .06) calc(var(--W) * .01) rgba(0,0,0,.45),calc(var(--W) * .03) calc(var(--W) * .05) calc(var(--W) * .12) rgba(0,0,0,.25)}.mkb--pile{--bw:44;--rx:50deg;--ry:0deg;--rz:22deg;--persp:3;--thick:.06;--stage-h:calc(var(--bw) * (.62 + var(--ratio) * .56) + 10);--cy:calc(var(--stage-h) * .47)}.mkb--showcase{--bw:36;--rx:73deg;--ry:0deg;--rz:0deg;--persp:4;--thick:.09;--stage-h:calc(var(--bw) * var(--ratio) * 1.42 + 12);--cy:calc(var(--stage-h) - var(--bw) * var(--ratio) * .42 - 6)}.mkb--balance{--bw:34;--rx:66deg;--ry:0deg;--rz:0deg;--persp:4;--thick:.09;--stage-h:calc(var(--bw) * var(--ratio) * 1.62 + 14);--cy:calc(var(--stage-h) - var(--bw) * var(--ratio) * .4 - 6)}.mkb--fan{--bw:30;--rx:48deg;--ry:0deg;--rz:-22deg;--persp:3.6;--thick:.07;--stage-h:calc(var(--bw) * (var(--ratio) * .8 + .5) + 8);--cy:calc(var(--stage-h) * .5)}.mkb--multi .mkb-book{transform:rotateX(var(--rx)) rotateZ(var(--rz)) translate3d(calc(var(--dx) * var(--W)),calc(var(--dy) * var(--W)),calc(var(--j) * (var(--D) + .1cqw))) rotateZ(var(--spin))}.mkb--fan .mkb-book{transform:rotateX(var(--rx)) rotateZ(var(--rz)) translate3d(calc(var(--dx) * var(--W)),calc(var(--dy) * var(--W)),calc(var(--j) * var(--D) * .35)) rotateZ(var(--spin))}.mkb--multi .mkb-cast{opacity:calc(1 - min(var(--j),1) * .4)}.mkb--showcase .mkb-scene{perspective-origin:50% -25%}.mkb--balance .mkb-scene{perspective-origin:50% 10%}.mkb--multi .mkb-book--standing{transform:rotateX(var(--rx)) rotateZ(var(--rz)) translate3d(calc(var(--dx) * var(--W)),calc(var(--dy) * var(--W)),calc((var(--j) - 1) * (var(--D) + .1cqw) + var(--D) * .5 + var(--H) * var(--lh) + var(--W) * var(--lw))) rotateZ(var(--spin)) rotateX(-90deg) rotateZ(var(--roll))}.mkb--multi .mkb-book--standing .mkb-cast{display:none}.mkb-floor{position:absolute;left:0;width:100%;top:calc(50% - var(--D) * .5 - var(--W) * .03);height:calc(var(--D) + var(--W) * .1);background:rgba(0,0,0,.45);border-radius:30%;filter:blur(calc(var(--W) * .025));transform:rotateX(var(--rx)) rotateZ(var(--rz)) translate3d(calc(var(--dx) * var(--W)),calc(var(--dy) * var(--W) - var(--W) * .03),calc((var(--j) - 1) * (var(--D) + .1cqw) + var(--D) * .5 + .05cqw)) rotateZ(var(--spin))}.mkb--spread{--bw:40;--rx:34deg;--ry:0deg;--rz:0deg;--persp:4.2;--stage-h:calc(var(--bw) * var(--ratio) * .98 + 12)}.mkb-spread-scene{--W:calc(var(--bw) * 2cqw);--H:calc(var(--bw) * var(--ratio) * 1cqw);position:absolute;left:50%;top:47%;width:var(--W);height:var(--H);margin-left:calc(var(--W) * -.5);margin-top:calc(var(--H) * -.5);perspective:calc(var(--W) * var(--persp));perspective-origin:50% 30%}.mkb-spread-book{position:absolute;inset:0;transform-style:preserve-3d;transform:rotateZ(var(--rz)) rotateX(var(--rx)) rotateY(var(--ry))}.mkb-spread-board{position:absolute;inset:-.3cqw -.7cqw -.8cqw;background:linear-gradient(90deg,rgba(255,255,255,0) 47%,rgba(0,0,0,.35) 50%,rgba(255,255,255,0) 53%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(0,0,0,.15)),var(--back);border-radius:.7cqw;transform:translateZ(-.2cqw);box-shadow:0 .6cqw 1.4cqw rgba(0,0,0,.22),0 2.5cqw 6cqw -1cqw rgba(0,0,0,.22)}.mkb--spread .mkb-ground{position:absolute;left:50%;width:calc(var(--bw) * 2.1cqw);margin-left:calc(var(--bw) * -1.05cqw);bottom:2cqw;height:7cqw;background:radial-gradient(closest-side,rgba(0,0,0,.28),rgba(0,0,0,0));filter:blur(1.2cqw)}.mkb-sheet{--LW:calc(var(--bw) * 1cqw);--step:calc(var(--LW) / 16);position:absolute;top:0;left:50%;width:0;height:100%;transform-style:preserve-3d}.mkb-strip{position:absolute;top:0;height:100%;width:calc(var(--step) + 1px);transform-style:preserve-3d;background-color:var(--page);background-repeat:no-repeat;background-size:var(--LW) 100%;background-position:calc(var(--i,0) * var(--step) * -1) 0}.mkb-sheet--right .mkb-strip{left:var(--step);transform-origin:0 50%}.mkb-sheet--left .mkb-strip{right:var(--step);transform-origin:100% 50%}.mkb-sheet--right>.mkb-strip{left:0}.mkb-sheet--left>.mkb-strip{right:0}.mkb-strip::after{content:\"\";position:absolute;inset:0;pointer-events:none;background:rgba(40,30,15,var(--shade,0))}.mkb-sheet--right .mkb-strip--gutter::after{background:linear-gradient(90deg,rgba(0,0,0,.42),rgba(0,0,0,.14) 45%,rgba(40,30,15,var(--shade)) 100%)}.mkb-sheet--left .mkb-strip--gutter::after{background:linear-gradient(270deg,rgba(0,0,0,.42),rgba(0,0,0,.14) 45%,rgba(40,30,15,var(--shade)) 100%)}.mkb-strip--lines{background-image:repeating-linear-gradient(180deg,transparent 0 calc(var(--bw) * .02cqw),rgba(60,50,35,.16) calc(var(--bw) * .02cqw) calc(var(--bw) * .026cqw));background-size:100% 76%;background-position:0 50%}.mkb-edge{position:absolute;--edge-h:calc(var(--h) * var(--bw) * 1cqw + .25cqw);--lines:rgba(120,100,70,.22) 0 .06cqw,var(--page) .06cqw .2cqw}.mkb-edge--bottom{top:100%;left:0;width:100%;height:var(--edge-h);transform-origin:50% 0;transform:rotateX(-90deg);background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.16)),repeating-linear-gradient(180deg,var(--lines))}.mkb-edge--outer{top:0;height:100%;width:var(--edge-h);background:linear-gradient(180deg,rgba(0,0,0,.10),rgba(0,0,0,0) 40%,rgba(0,0,0,.08)),repeating-linear-gradient(90deg,var(--lines))}.mkb-sheet--right .mkb-edge--outer{left:100%;transform-origin:0 50%;transform:rotateY(90deg)}.mkb-sheet--left .mkb-edge--outer{right:100%;transform-origin:100% 50%;transform:rotateY(-90deg);background:linear-gradient(180deg,rgba(0,0,0,.10),rgba(0,0,0,0) 40%,rgba(0,0,0,.08)),repeating-linear-gradient(270deg,var(--lines))}.mkb--error .mkb-stage{outline:1px dashed rgba(200,0,0,.5)}";(document.head||document.documentElement).appendChild(s);})();
/*!
 * mockbook.js — realistic ebook mockups in plain JS + HTML + CSS.
 *
 *   MockBook.render('#target', { variant: 'floating', cover: 'cover.jpeg' });
 *
 * or, without JS:
 *
 *   <div data-mockbook="trio" data-cover="cover.jpeg"
 *        data-left="p1.jpeg" data-right="p2.jpeg"></div>
 *
 * Variants: 'reflection' | 'floating' | 'trio' | 'spine' | 'lying' | 'spread' |
 *           'pile' | 'showcase' | 'balance' | 'fan' | 'sheets' | 'cascade' | 'desk'
 *           (also accepts 1–13)
 */
(function (global) {
  'use strict';

  var VARIANTS = ['reflection', 'floating', 'trio', 'spine', 'lying', 'spread', 'pile', 'showcase', 'balance', 'fan',
                  'sheets', 'cascade', 'desk'];
  var DEFAULT_RATIO = 1.414;

  function div(cls, parent) {
    var d = document.createElement('div');
    if (cls) d.className = cls;
    if (parent) parent.appendChild(d);
    return d;
  }

  function img(src, alt) {
    var i = document.createElement('img');
    i.decoding = 'async';
    i.draggable = false;
    i.alt = alt || '';
    i.src = src;
    return i;
  }

  function normalizeVariant(v) {
    if (typeof v === 'number' || /^([1-9]|1[0-3])$/.test(String(v))) v = VARIANTS[Number(v) - 1];
    v = String(v || 'reflection').toLowerCase();
    return VARIANTS.indexOf(v) > -1 ? v : 'reflection';
  }

  // ---- a complete 3D book (front cover, back cover, spine, page block) ----
  function addBook(parent, cover, spineSrc, alt) {
    var book = div('mkb-book', parent);

    // contact shadow on the surface under the book (shown by the lying variants)
    div('mkb-face mkb-cast', book);

    var front = div('mkb-face mkb-front', book);
    front.appendChild(img(cover, alt));

    div('mkb-face mkb-back', book);
    var spine = div('mkb-face mkb-spine', book);
    if (spineSrc) spine.appendChild(img(spineSrc, ''));
    div('mkb-face mkb-pages-right', book);
    div('mkb-face mkb-pages-top', book);
    div('mkb-face mkb-pages-bottom', book);
    return book;
  }

  function buildBook(o, alt, mirrored) {
    var scene = div('mkb-scene');
    // in the reflection, the book sits inside a 3D "mirror" (see .mkb-mirror in the CSS)
    addBook(mirrored ? div('mkb-mirror', scene) : scene, o.cover, o.spine, alt);
    return scene;
  }

  // ---- several books on the same table ----
  //   pile:     books lying stacked
  //   showcase: books lying sideways in a pile + one standing upright on top
  //   balance:  a pile of two + one standing, tilted, balanced on its bottom corner on top
  //   fan:      books lying in a staggered diagonal row, each resting on the one behind
  // dx/dy: position on the table (in book widths); j: level in the pile; spin: turn on the table
  var MULTI = {
    pile: {
      count: 3,
      lying: [
        { dx: 0,    dy: 0,    spin: 0 },
        { dx: .05,  dy: -.03, spin: -8 },
        { dx: -.03, dy: -.07, spin: 7 },
        { dx: .02,  dy: -.1,  spin: -4 }
      ]
    },
    showcase: {
      count: 2,
      // top of the cover to the left, spine towards the viewer
      lying: [
        { dx: .12,  dy: .12,  spin: -66 },
        { dx: -.02, dy: 0,    spin: -80 },
        { dx: .05,  dy: -.06, spin: -73 },
        { dx: -.03, dy: -.1,  spin: -84 }
      ],
      stand: { dx: .02, dy: -.02, spin: -6, roll: 0, floor: true }
    },
    balance: {
      count: 2,
      // turned so the spine faces front-left and the page block front-right
      lying: [
        { dx: -.1,  dy: .12,  spin: -28 },
        { dx: 0,    dy: 0,    spin: -34 },
        { dx: -.05, dy: -.08, spin: -30 },
        { dx: .03,  dy: -.14, spin: -36 }
      ],
      // spine towards the viewer, leaning left, resting on its bottom-left corner
      stand: { dx: .14, dy: .1, spin: -28, roll: -14 }
    },
    fan: { count: 3 }   // positions computed in buildMulti
  };

  function listCovers(o) {
    var c = o.covers;
    if (typeof c === 'string') c = c.split(',');
    c = (Array.isArray(c) ? c : []).map(function (s) { return String(s).trim(); }).filter(Boolean);
    return c.length ? c : [o.cover];
  }

  function fanLayout(n) {
    // staggered back-left: the front-right book is on top (painted last)
    var out = [];
    for (var j = 0; j < n; j++) {
      var k = j - (n - 1) / 2;   // centred around the middle book
      out.push({ dx: k * .46, dy: k * .16, spin: 0 });
    }
    return out;
  }

  function buildMulti(stage, o) {
    var cfg = MULTI[o.variant];
    var covers = listCovers(o);
    var n = Math.round(Number(o.count) ||
      (o.variant === 'pile' && covers.length > 1 ? covers.length : cfg.count));
    n = Math.min(4, Math.max(1, n));
    var lying = o.variant === 'fan' ? fanLayout(n) : cfg.lying;
    var stand = cfg.stand;
    var scene = div('mkb-scene', stage);
    var books = [];
    // books are painted in DOM order, bottom of the pile first (matches the view from above)
    for (var j = 0; j < n; j++) {
      books.push({ dx: lying[j].dx, dy: lying[j].dy, spin: lying[j].spin, j: j, cover: j + (stand ? 1 : 0) });
    }
    // the standing book sits on top of the pile (level n), painted last
    if (stand) {
      var r = stand.roll * Math.PI / 180;
      books.push({
        stand: true, dx: stand.dx, dy: stand.dy, spin: stand.spin, roll: stand.roll, floor: stand.floor,
        j: n, cover: 0,
        // lift of its centre above the surface, so the lowest corner touches it after the roll
        lh: .5 * Math.cos(r), lw: .5 * Math.abs(Math.sin(r))
      });
    }
    books.forEach(function (b, i) {
      var vars = '--dx:' + b.dx + ';--dy:' + b.dy + ';--spin:' + b.spin + 'deg;--j:' + b.j;
      if (b.stand) {
        vars += ';--roll:' + b.roll + 'deg;--lh:' + b.lh.toFixed(4) + ';--lw:' + b.lw.toFixed(4);
        if (b.floor) div('mkb-floor', scene).style.cssText = vars;   // its shadow on the pile
      }
      var book = addBook(scene, covers[b.cover % covers.length], o.spine, i === books.length - 1 ? o.alt : '');
      book.style.cssText = vars;
      if (b.stand) book.className += ' mkb-book--standing';
    });
  }

  function buildBookVariant(stage, o) {
    var scene = buildBook(o, o.alt);
    if (o.variant === 'reflection') {
      var ground = div('mkb-ground', stage);
      var refl = div('mkb-reflection', stage);
      refl.setAttribute('aria-hidden', 'true');
      refl.appendChild(buildBook(o, '', true));
      stage.appendChild(scene);
      return [ground, refl, scene];
    }
    div('mkb-ground', stage);
    stage.appendChild(scene);
    return [scene];
  }

  function buildTrio(stage, o) {
    function card(cls, src, alt) {
      var c = div('mkb-card ' + cls + (src ? '' : ' mkb-card--blank'), stage);
      if (src) c.appendChild(img(src, alt));
      return c;
    }
    card('mkb-card--left', o.left, '');
    card('mkb-card--right', o.right, '');
    card('mkb-card--center', o.cover, o.alt);
  }

  // ---- three loose sheets of paper (cover + left + right) ----
  //   sheets:  fanned like a hand of cards (flat, no perspective)
  //   cascade: staggered diagonally, overlapping (flat, no perspective)
  //   desk:    lying on a table, spread out, seen at an angle (3D perspective)
  // Listed back to front (painted in that order). x/y: offset in % of the container width; r: rotation.
  var LEAVES = {
    sheets: [
      { src: 'left',  x: 0,   y: 0,  r: -19 },
      { src: 'right', x: 0,   y: 0,  r: 19 },
      { src: 'cover', x: 0,   y: 0,  r: 0 }
    ],
    cascade: [
      { src: 'right', x: -15, y: 0,  r: -4 },
      { src: 'left',  x: -1,  y: 5,  r: 2.5 },
      { src: 'cover', x: 13,  y: 10, r: -1.5 }
    ],
    desk: [
      { src: 'left',  x: -21, y: -1, r: -15 },
      { src: 'right', x: 21,  y: -3, r: 12 },
      { src: 'cover', x: 0,   y: 4,  r: -3 }
    ]
  };

  function buildLeaves(stage, o) {
    var parent = o.variant === 'desk' ? div('mkb-desk', stage) : stage;
    LEAVES[o.variant].forEach(function (l) {
      var src = o[l.src];
      var leaf = div('mkb-leaf' + (src ? '' : ' mkb-leaf--blank'), parent);
      leaf.style.cssText = '--x:' + l.x + ';--y:' + l.y + ';--r:' + l.r + 'deg';
      if (src) leaf.appendChild(img(src, l.src === 'cover' ? o.alt : ''));
    });
  }

  // ---- open book: two curved facing pages on a page block and a flat hard cover ----
  // Each page is a chain of vertical strips, each one turned a little relative to the
  // previous, so the paper rises from the gutter and flattens out like a real open book.
  // The page block is drawn as walls hanging from the page edges down to the cover
  // (bottom edge + outer edge). Walls are perpendicular to the page, so the browser's 3D
  // sorting stays reliable (stacked near-parallel planes would poke through each other).
  var STRIPS = 16;   // keep in sync with --step in the CSS

  // Height of the top page above the cover, as a fraction of the page width, at x
  // (0 = gutter, 1 = outer edge): rises to the block thickness T, plus a small arch
  // near the gutter whose size is set by `curl`.
  function pageHeight(x, T, curl) {
    var arch = .028 * curl * (x / .2) * Math.exp(1 - x / .2);
    return T * (1 - Math.exp(-x / .07)) + arch;
  }

  function buildSheet(book, side, src, T, curl) {
    var sheet = div('mkb-sheet mkb-sheet--' + side, book);
    var parent = sheet, prev = 0;
    for (var i = 0; i < STRIPS; i++) {
      var s = div('mkb-strip' + (i === 0 ? ' mkb-strip--gutter' : ''), parent);
      var x0 = i / STRIPS, x1 = (i + 1) / STRIPS;
      var h0 = pageHeight(x0, T, curl), h1 = pageHeight(x1, T, curl);
      var a = Math.atan2(h1 - h0, 1 / STRIPS) * 180 / Math.PI, d = a - prev;
      prev = a;
      s.style.transform = 'rotateY(' + (side === 'left' ? d : -d).toFixed(3) + 'deg)';
      // gutter shadow + slight fall-off at the outer edge
      s.style.setProperty('--shade', (.22 * Math.exp(-x0 / .06) + .035 * Math.pow(x0, 3)).toFixed(4));
      var idx = side === 'left' ? STRIPS - 1 - i : i;   // which slice of the image
      s.style.setProperty('--i', idx);
      if (src) s.style.backgroundImage = 'url("' + String(src).replace(/"/g, '\\"') + '")';
      else if (idx > 0 && idx < STRIPS - 1) s.className += ' mkb-strip--lines';
      // page block: bottom edge under this strip, and the outer edge on the last strip
      div('mkb-edge mkb-edge--bottom', s).style.setProperty('--h', ((h0 + h1) / 2).toFixed(4));
      if (i === STRIPS - 1) div('mkb-edge mkb-edge--outer', s).style.setProperty('--h', h1.toFixed(4));
      parent = s;
    }
  }

  function buildSpread(stage, o) {
    div('mkb-ground', stage);
    var scene = div('mkb-spread-scene', stage);
    var book = div('mkb-spread-book', scene);
    var curl = o.curl != null && !isNaN(o.curl) ? Number(o.curl) : 1;
    // thickness of each half of the page block, as a fraction of the page width
    var T = o.thickness != null && !isNaN(o.thickness) ? Number(o.thickness)
      : o.pages != null && !isNaN(o.pages) ? Math.min(.12, Math.max(.004, Number(o.pages) * .00022))
      : .025;
    div('mkb-spread-board', book);
    buildSheet(book, 'left', o.left || o.cover, T, curl);
    buildSheet(book, 'right', o.right, T, curl);
  }

  // ---- apply options that become CSS variables ----
  function applyVars(root, o) {
    var s = root.style;
    function set(k, v) { if (v !== undefined && v !== null && v !== '') s.setProperty(k, v); }

    if (o.ratio) set('--ratio', o.ratio);
    if (o.width) set('--bw', o.width);                 // book width (% of the container)
    if (o.backColor) set('--back', o.backColor);
    if (o.pageColor) set('--page', o.pageColor);

    var thick = o.thickness;
    if (thick == null && o.pages != null) {
      // ~0.12% of the width per page (slightly exaggerated on purpose, so the page edge shows)
      thick = Math.min(.22, Math.max(.03, Number(o.pages) * .0012));
    }
    if (thick != null) set('--thick', thick);

    var r = o.rotate;
    if (r) {
      if (typeof r === 'string') r = r.split(',').map(Number);
      if (Array.isArray(r)) r = { x: r[0], y: r[1], z: r[2] };
      if (r.x != null && !isNaN(r.x)) set('--rx', r.x + 'deg');
      if (r.y != null && !isNaN(r.y)) set('--ry', r.y + 'deg');
      if (r.z != null && !isNaN(r.z)) set('--rz', r.z + 'deg');
    }
  }

  function render(target, opts) {
    var host = typeof target === 'string' ? document.querySelector(target) : target;
    if (!host) throw new Error('MockBook: target not found (' + target + ')');
    var o = Object.assign({}, opts || {});
    o.variant = normalizeVariant(o.variant);
    // multi-book variants can take their covers from "covers" alone
    if (!o.cover && MULTI[o.variant]) o.cover = listCovers(o)[0];
    // image the aspect ratio is read from: the cover, or the first page of a spread
    var main = o.variant === 'spread' ? (o.left || o.cover || o.right) : o.cover;
    if (!main) {
      throw new Error(o.variant === 'spread'
        ? 'MockBook: provide a page image in "left"/"right" (or "cover").'
        : 'MockBook: provide the cover image in "cover".');
    }

    if (host.__mkb) host.__mkb.destroy();
    host.textContent = '';

    var root = div('mkb mkb--' + o.variant + (MULTI[o.variant] ? ' mkb--multi' : ''), host);
    root.setAttribute('role', 'img');
    root.setAttribute('aria-label', o.alt || 'Ebook mockup');
    var stage = div('mkb-stage', root);

    applyVars(root, o);

    if (o.variant === 'trio') buildTrio(stage, o);
    else if (o.variant === 'spread') buildSpread(stage, o);
    else if (MULTI[o.variant]) buildMulti(stage, o);
    else if (LEAVES[o.variant]) buildLeaves(stage, o);
    else buildBookVariant(stage, o);

    // aspect ratio comes from the cover itself (unless "ratio" is provided)
    if (!o.ratio) {
      var probe = new Image();
      probe.onload = function () {
        if (probe.naturalWidth) root.style.setProperty('--ratio', probe.naturalHeight / probe.naturalWidth);
        root.classList.add('mkb--ready');
      };
      probe.onerror = function () { root.classList.add('mkb--error'); };
      root.style.setProperty('--ratio', DEFAULT_RATIO);
      probe.src = main;
    } else {
      root.classList.add('mkb--ready');
    }

    var api = {
      el: root,
      update: function (patch) { return render(host, Object.assign({}, o, patch)); },
      destroy: function () { host.removeChild(root); delete host.__mkb; }
    };
    host.__mkb = api;
    return api;
  }

  // ---- auto-init from data-* attributes ----
  function fromAttrs(el) {
    var d = el.dataset, o = {};
    o.variant = d.variant || d.mockbook || 'reflection';
    o.cover = d.cover;
    if (d.left) o.left = d.left;
    if (d.right) o.right = d.right;
    if (d.spine) o.spine = d.spine;
    if (d.alt) o.alt = d.alt;
    if (d.pages) o.pages = Number(d.pages);
    if (d.thickness) o.thickness = Number(d.thickness);
    if (d.ratio) o.ratio = Number(d.ratio);
    if (d.width) o.width = Number(d.width);
    if (d.rotate) o.rotate = d.rotate;
    if (d.curl) o.curl = Number(d.curl);
    if (d.covers) o.covers = d.covers;
    if (d.count) o.count = Number(d.count);
    if (d.backColor) o.backColor = d.backColor;
    if (d.pageColor) o.pageColor = d.pageColor;
    return o;
  }

  function init(root) {
    var list = (root || document).querySelectorAll('[data-mockbook]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var d = el.dataset;
      if (el.__mkb || !(d.cover || d.covers || d.left || d.right)) continue;
      try { render(el, fromAttrs(el)); } catch (e) { console.error(e); }
    }
  }

  function autoInit() {
    init(document);
    // page builders often insert blocks after load
    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          if (muts[i].addedNodes.length || muts[i].type === 'attributes') { init(document); break; }
        }
      }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-cover', 'data-covers', 'data-left', 'data-right'] });
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoInit);
    else autoInit();
  }

  global.MockBook = { render: render, init: init, variants: VARIANTS.slice() };
})(typeof window !== 'undefined' ? window : this);
