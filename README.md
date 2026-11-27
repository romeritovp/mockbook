# MockBook

Ebook mockups in plain JS + HTML + CSS. No dependencies, no required build step, works by opening the HTML file directly (`file://`).
The output is DOM (not an image), with a transparent background, and it scales with the width of the element it is placed in.

## Usage

Single file (CSS embedded in the JS):

```html
<script src="mockbook.bundle.js"></script>
```

or separately: `mockbook.css` + `mockbook.js`.

### With JS

```js
MockBook.render('#target', { variant: 'floating', cover: 'cover.jpeg', pages: 120 });
MockBook.render('#trio', { variant: 'trio', cover: 'cover.jpeg', left: 'p1.jpeg', right: 'p2.jpeg' });
```

### With attributes (no JS; also works for elements inserted after load)

```html
<div data-mockbook="reflection" data-cover="cover.jpeg" data-pages="120"></div>
```

## Variants

| name | shortcut | description |
|---|---|---|
| `reflection` | 1 | book in slight perspective, page edge visible, blurred reflection on the floor |
| `floating`   | 2 | 3D rotation, back cover visible, elliptical gradient shadow |
| `trio`       | 3 | three overlapping pages, rounded corners, drop shadow |
| `spine`      | 4 | standing book turned to show the spine (optional `spine` image), floor shadow |
| `lying`      | 5 | book lying flat on a table, seen from above at an angle, contact shadow |
| `spread`     | 6 | open book with two curved facing pages (`left`/`right`), page block edges, soft shadow |
| `pile`       | 7 | 2–4 books lying stacked on a table, each turned a little (`count`, `covers`) |
| `showcase`   | 8 | books lying sideways in a pile with one book standing on top of it (`count` = books in the pile) |
| `balance`    | 9 | a pile of books with one standing on top, tilted, balanced on its bottom corner |
| `fan`        | 10 | books lying in a staggered diagonal row, each resting on the one behind (`count`) |
| `sheets`     | 11 | three loose sheets (`cover` + `left`/`right`) fanned like a hand of cards — no perspective |
| `cascade`    | 12 | three loose sheets staggered diagonally, overlapping — no perspective |
| `desk`       | 13 | three loose sheets lying spread out on a table, seen at an angle — 3D perspective |

## Options

| option (JS) | attribute | default | |
|---|---|---|---|
| `cover` | `data-cover` | — | **required** (except for `spread`); the book's aspect ratio is read from the image |
| `left`, `right` | `data-left`, `data-right` | blank page | side pages of `trio`, `sheets`, `cascade`, `desk`; facing pages of `spread` (`left` falls back to `cover`) |
| `spine` | `data-spine` | solid `backColor` | spine image (seen mainly in `spine`) |
| `curl` | `data-curl` | `1` | how much the pages of `spread` curve up from the gutter (`0` = flat, `1.5` = strong) |
| `count` | `data-count` | `3` (`pile`, `fan`), `2` (`showcase`, `balance`) | number of lying books (1–4) |
| `covers` | `data-covers="a.png,b.png"` | `cover` for all | one cover per book in `pile`/`showcase`/`balance`/`fan` (repeats if shorter; the first one goes on the standing book) |
| `pages` | `data-pages` | — | page count; sets the thickness of the book (also of the open book in `spread`) |
| `thickness` | `data-thickness` | per variant | book thickness / width (overrides `pages`); in `spread`, the height of each half of the page block / page width |
| `rotate` | `data-rotate="x,y,z"` | per variant | rotation in degrees (`{x,y,z}`, array or string) |
| `width` | `data-width` | per variant | book width in % of the container |
| `backColor` | `data-back-color` | `#10131c` | back cover and spine color |
| `pageColor` | `data-page-color` | `#f1e9db` | page color |
| `ratio` | `data-ratio` | read from the image | height / width |
| `alt` | `data-alt` | — | alt text |

`render()` returns `{ el, update(patch), destroy() }`.

## Building the bundle

```
node build.js   # generates mockbook.bundle.js (CSS inlined into the JS)
```

## Browser requirements

Container query units (`cqw`) and `container-type`: Chrome/Edge 105+, Safari 16+, Firefox 110+.
