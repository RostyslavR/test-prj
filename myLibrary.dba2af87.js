var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var i=n[e];delete n[e];var t={id:e,exports:{}};return r[e]=t,i.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){n[e]=r},e.parcelRequired7c6=i);var t=i("hPiKJ"),o=i("i2O9m");i("kPAA9").refs.filter.addEventListener("click",(function(e){if(!e.target.closest("input"))return;(0,t.renderMovies)()})),async function(){await(0,o.initGenres)(),(0,t.renderMovies)()}();t=i("hPiKJ");i("kPAA9").refs.gallery.addEventListener("click",(function(e){const r=e.target.closest(".gallery__item");if(!r)return;const n=r.dataset.movieid;(0,t.renderModalCard)(n)})),i("bgGq6"),i("aSWUZ"),i("bUb57"),i("5jXsB"),i("it0VB");
//# sourceMappingURL=myLibrary.dba2af87.js.map
