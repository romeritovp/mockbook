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
