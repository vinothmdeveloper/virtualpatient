function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n            <ion-label>\r\n              {{p.title}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resolver/data-resolver.service */
    "./src/app/resolver/data-resolver.service.ts");

    var routes = [{
      path: '',
      redirectTo: 'select-virtual-hospital',
      pathMatch: 'full'
    }, {
      path: 'folder/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | folder-folder-module */
        "folder-folder-module").then(__webpack_require__.bind(null,
        /*! ./folder/folder.module */
        "./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'select-virtual-hospital',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | select-virtual-hospital-select-virtual-hospital-module */
        "select-virtual-hospital-select-virtual-hospital-module").then(__webpack_require__.bind(null,
        /*! ./select-virtual-hospital/select-virtual-hospital.module */
        "./src/app/select-virtual-hospital/select-virtual-hospital.module.ts")).then(function (m) {
          return m.SelectVirtualHospitalPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'search-virtual-hospital/:id',
      resolve: {
        svData: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DataResolverService"]
      },
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-virtual-hospital-search-virtual-hospital-module */
        "search-virtual-hospital-search-virtual-hospital-module").then(__webpack_require__.bind(null,
        /*! ./search-virtual-hospital/search-virtual-hospital.module */
        "./src/app/search-virtual-hospital/search-virtual-hospital.module.ts")).then(function (m) {
          return m.SearchVirtualHospitalPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'subscription-page/:id',
      resolve: {
        sbData: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DataResolverService"]
      },
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | subscription-page-subscription-page-module */
        [__webpack_require__.e("common"), __webpack_require__.e("subscription-page-subscription-page-module")]).then(__webpack_require__.bind(null,
        /*! ./subscription-page/subscription-page.module */
        "./src/app/subscription-page/subscription-page.module.ts")).then(function (m) {
          return m.SubscriptionPagePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'subscribed-doctor-circle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | subscribed-doctor-circle-subscribed-doctor-circle-module */
        [__webpack_require__.e("default~share-circle-share-circle-module~subscribed-doctor-circle-subscribed-doctor-circle-module"), __webpack_require__.e("subscribed-doctor-circle-subscribed-doctor-circle-module")]).then(__webpack_require__.bind(null,
        /*! ./subscribed-doctor-circle/subscribed-doctor-circle.module */
        "./src/app/subscribed-doctor-circle/subscribed-doctor-circle.module.ts")).then(function (m) {
          return m.SubscribedDoctorCirclePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'virtual-clinic-detail/:id',
      resolve: {
        vcData: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DataResolverService"]
      },
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | virtual-clinic-detail-virtual-clinic-detail-module */
        "virtual-clinic-detail-virtual-clinic-detail-module").then(__webpack_require__.bind(null,
        /*! ./virtual-clinic-detail/virtual-clinic-detail.module */
        "./src/app/virtual-clinic-detail/virtual-clinic-detail.module.ts")).then(function (m) {
          return m.VirtualClinicDetailPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'pt-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pt-profile-pt-profile-module */
        "pt-profile-pt-profile-module").then(__webpack_require__.bind(null,
        /*! ./pt-profile/pt-profile.module */
        "./src/app/pt-profile/pt-profile.module.ts")).then(function (m) {
          return m.PtProfilePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'health-locker-prescription',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | health-locker-prescription-health-locker-prescription-module */
        [__webpack_require__.e("common"), __webpack_require__.e("health-locker-prescription-health-locker-prescription-module")]).then(__webpack_require__.bind(null,
        /*! ./health-locker-prescription/health-locker-prescription.module */
        "./src/app/health-locker-prescription/health-locker-prescription.module.ts")).then(function (m) {
          return m.HealthLockerPrescriptionPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'pt-eprescription/:id',
      resolve: {
        dxData: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DataResolverService"]
      },
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pt-eprescription-pt-eprescription-module */
        "pt-eprescription-pt-eprescription-module").then(__webpack_require__.bind(null,
        /*! ./pt-eprescription/pt-eprescription.module */
        "./src/app/pt-eprescription/pt-eprescription.module.ts")).then(function (m) {
          return m.PtEPrescriptionPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'chatroom/:id',
      resolve: {
        ctData: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DataResolverService"]
      },
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | chatroom-chatroom-module */
        [__webpack_require__.e("default~chatroom-chatroom-module~send-triage-doc-complaint-send-triage-doc-complaint-module"), __webpack_require__.e("common"), __webpack_require__.e("chatroom-chatroom-module")]).then(__webpack_require__.bind(null,
        /*! ./chatroom/chatroom.module */
        "./src/app/chatroom/chatroom.module.ts")).then(function (m) {
          return m.ChatroomPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'getmobilenumber',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | getmobilenumber-getmobilenumber-module */
        "getmobilenumber-getmobilenumber-module").then(__webpack_require__.bind(null,
        /*! ./getmobilenumber/getmobilenumber.module */
        "./src/app/getmobilenumber/getmobilenumber.module.ts")).then(function (m) {
          return m.GetmobilenumberPageModule;
        });
      }
    }, {
      path: 'familymembers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | familymembers-familymembers-module */
        "familymembers-familymembers-module").then(__webpack_require__.bind(null,
        /*! ./familymembers/familymembers.module */
        "./src/app/familymembers/familymembers.module.ts")).then(function (m) {
          return m.FamilymembersPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'addfamilymember',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addfamilymember-addfamilymember-module */
        "addfamilymember-addfamilymember-module").then(__webpack_require__.bind(null,
        /*! ./addfamilymember/addfamilymember.module */
        "./src/app/addfamilymember/addfamilymember.module.ts")).then(function (m) {
          return m.AddfamilymemberPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'videocall/:id',
      resolve: {
        videocall: _resolver_data_resolver_service__WEBPACK_IMPORTED_MODULE_4__["DataResolverService"]
      },
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | videocall-videocall-module */
        "videocall-videocall-module").then(__webpack_require__.bind(null,
        /*! ./videocall/videocall.module */
        "./src/app/videocall/videocall.module.ts")).then(function (m) {
          return m.VideocallPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'share-circle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | share-circle-share-circle-module */
        [__webpack_require__.e("default~share-circle-share-circle-module~subscribed-doctor-circle-subscribed-doctor-circle-module"), __webpack_require__.e("share-circle-share-circle-module")]).then(__webpack_require__.bind(null,
        /*! ./share-circle/share-circle.module */
        "./src/app/share-circle/share-circle.module.ts")).then(function (m) {
          return m.ShareCirclePageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'subscribe-family-member',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | subscribe-family-member-subscribe-family-member-module */
        "subscribe-family-member-subscribe-family-member-module").then(__webpack_require__.bind(null,
        /*! ./subscribe-family-member/subscribe-family-member.module */
        "./src/app/subscribe-family-member/subscribe-family-member.module.ts")).then(function (m) {
          return m.SubscribeFamilyMemberPageModule;
        });
      },
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'send-triage-doc-complaint',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | send-triage-doc-complaint-send-triage-doc-complaint-module */
        [__webpack_require__.e("default~chatroom-chatroom-module~send-triage-doc-complaint-send-triage-doc-complaint-module"), __webpack_require__.e("send-triage-doc-complaint-send-triage-doc-complaint-module")]).then(__webpack_require__.bind(null,
        /*! ./send-triage-doc-complaint/send-triage-doc-complaint.module */
        "./src/app/send-triage-doc-complaint/send-triage-doc-complaint.module.ts")).then(function (m) {
          return m.SendTriageDocComplaintPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXHN3YXN0aFxcc3dhc3RodmlydHVhbHBhdGllbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsaUNBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59IiwiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");

    var config = {
      apiKey: 'AIzaSyBrF9C3m2KSRI7b-ctKLInSaFcVRacZT5Y',
      authDomain: 'ionic-push-demo-6914e.firebaseapp.com',
      databaseURL: 'https://ionic-push-demo-6914e.firebaseio.com',
      projectId: 'ionic-push-demo-6914e',
      storageBucket: 'ionic-push-demo-6914e.appspot.com'
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, router, splashScreen, statusBar, authService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Profile',
          url: '/pt-profile',
          icon: 'person'
        }, {
          title: 'Change Network',
          url: '/select-virtual-hospital',
          icon: 'git-network-outline'
        }, {
          title: 'Subscribed Networks',
          url: '/subscribed-doctor-circle',
          icon: 'logo-electron'
        }, {
          title: 'Health Locker',
          url: '/health-locker-prescription',
          icon: 'medkit'
        }, {
          title: 'Family Members',
          url: '/familymembers',
          icon: 'people'
        } // {
        //   title: 'Add Family Members',
        //   url: '/subscribe-family-member',
        //   icon: 'people'
        // }
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.router.navigateByUrl('login');

            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
          firebase__WEBPACK_IMPORTED_MODULE_6__["initializeApp"](config);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.logout();
          /* const path = window.location.pathname.split('folder/')[1];
          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
          } */
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: jwtOptionsFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
      return jwtOptionsFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _webservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./webservice.service */
    "./src/app/webservice.service.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_pagination_service_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../app/pagination-service.service */
    "./src/app/pagination-service.service.ts");
    /* harmony import */


    var _app_chatAudioRecording_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../app/chatAudioRecording.service */
    "./src/app/chatAudioRecording.service.ts");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/__ivy_ngcc__/esm2015/ngx-filter-pipe.js"); // import { AndroidPermissions } from '@ionic-native/android-permissions';
    // import { Transfer } from '@ionic-native/transfer/ngx';


    function jwtOptionsFactory(storage) {
      return {
        tokenGetter: function tokenGetter() {
          return storage.get('jwt_token');
        },
        whitelistedDomains: ['localhost:8080']
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
        jwtOptionsProvider: {
          provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JWT_OPTIONS"],
          useFactory: jwtOptionsFactory,
          deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]]
        }
      }), _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot({
        driverOrder: ['localstorage']
      }), ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterPipeModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_19__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__["FileOpener"], // Transfer,
      _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__["Camera"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_22__["FilePath"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_24__["Media"], _app_pagination_service_service__WEBPACK_IMPORTED_MODULE_20__["PaginationServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], _app_chatAudioRecording_service__WEBPACK_IMPORTED_MODULE_21__["ChatAudioRecordingService"], // AndroidPermissions,
      _webservice_service__WEBPACK_IMPORTED_MODULE_13__["WebserviceService"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_14__["Clipboard"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/config */
    "./src/config.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpClient, storage, jwtHelper) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.storage = storage;
        this.jwtHelper = jwtHelper;
        this.logo_url = src_config__WEBPACK_IMPORTED_MODULE_3__["HEADER_LOGO"];
        this.site_url = src_config__WEBPACK_IMPORTED_MODULE_3__["SITE_URL"];
        this.S3BASE_URL = src_config__WEBPACK_IMPORTED_MODULE_3__["S3BASE_URL"];
        this.authUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.jwtTokenName = 'jwt_token';
      } // new user sign up


      _createClass(AuthService, [{
        key: "signup",
        value: function signup(values) {
          console.log(values);
          return this.httpClient.post("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["PATIENT_URL"], "/signup"), values, {
            responseType: 'text'
          });
          /*.pipe(tap(jwt => {
            console.log("response===="+jwt);
            if (jwt !== 'EXISTS') {
              return this.handleJwtResponse(jwt);
            }
            return jwt;
          }));*/
        } // new user sign up

      }, {
        key: "circlesignup",
        value: function circlesignup(values) {
          console.log(values);
          return this.httpClient.post("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"], "/circlepatientsignup"), values, {
            responseType: 'text'
          });
          /*.pipe(tap(jwt => {
            console.log("response===="+jwt);
            if (jwt !== 'EXISTS') {
              return this.handleJwtResponse(jwt);
            }
            return jwt;
          }));*/
        } // check user logged in

      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this2 = this;

          this.storage.get(this.jwtTokenName).then(function (jwt) {
            if (jwt && !_this2.jwtHelper.isTokenExpired(jwt)) {
              _this2.authUser.next(jwt);
            } else {
              console.log("JWT False" + jwt);

              _this2.storage.remove(_this2.jwtTokenName).then(function () {
                return _this2.authUser.next(null);
              });
            }
          });
        } // user session login 

      }, {
        key: "login",
        value: function login(values, rememberValues) {
          var _this3 = this;

          return this.httpClient.post("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"], "/circlelogin"), values, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (jwt) {
            if (jwt !== 'NOTEXISTS') {
              if (rememberValues == 1) {
                return _this3.handleJwtResponse(jwt);
              } else {
                _this3.authUser.next(jwt);
              }
            }

            return jwt;
          }));
        } // forget password

      }, {
        key: "forgotUidCheck",
        value: function forgotUidCheck(ptID) {
          console.log("user---" + ptID);
          return this.httpClient.get("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"], "/checkuid/") + ptID, {
            responseType: "json"
          });
        } // user logout session

      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          this.storage.remove(this.jwtTokenName).then(function () {
            return _this4.authUser.next(null);
          });
        } // store jwt Token

      }, {
        key: "handleJwtResponse",
        value: function handleJwtResponse(jwt) {
          var _this5 = this;

          return this.storage.set(this.jwtTokenName, jwt).then(function () {
            return _this5.authUser.next(jwt);
          }).then(function () {
            return jwt;
          });
        } // get Patient detail by uid

      }, {
        key: "patientdetail",
        value: function patientdetail(values) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getcirclepatientdetails/" + values;
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } //patient address api

      }, {
        key: "getAddressByUser",
        value: function getAddressByUser(userid) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["PATIENT_URL"] + "/useraddress/" + userid; //console.log("url......"+epurl);

          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } // update patient profile

      }, {
        key: "update",
        value: function update(values, user) {
          console.log(values);
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["PATIENT_URL"];
          console.log(url);
          return this.httpClient.put("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["PATIENT_URL"], "/update/") + user, values, {
            responseType: 'text'
          });
        } // edit/add address of patiient

      }, {
        key: "addAddress",
        value: function addAddress(values) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["PATIENT_URL"] + "/addaddress";
          return this.httpClient.post(epurl, values, {
            responseType: "text"
          });
        } // seperate family member account into seperate

      }, {
        key: "separateAccount",
        value: function separateAccount(value, mobno) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["PATIENT_URL"] + "/updatesplitaccount/" + mobno;
          console.log(url);
          return this.httpClient.put(url, value, {
            responseType: 'text'
          });
        } // View Health Alert

      }, {
        key: "viewHealthAlert",
        value: function viewHealthAlert() {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/viewhealthalerts"; //console.log("url......"+epurl);    

          var alertList = this.httpClient.get(epurl, {
            responseType: "json"
          }); //console.log(ptlist);

          return alertList;
        } // healthlocker prescription search

      }, {
        key: "prescriptionSearch",
        value: function prescriptionSearch(search) {
          console.log("prescription search values", search);
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["MEDICINE_URL"] + "/prescriptionlist";
          return this.httpClient.put(epurl, search, {
            responseType: "json"
          });
        } // get single circle healthlocker prescription list

      }, {
        key: "singleCirclePrescriptionList",
        value: function singleCirclePrescriptionList(userid, search) {
          console.log("prescription search values", search);
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["MEDICINE_URL"] + "/circleprescriptionlist/" + userid;
          return this.httpClient.put(epurl, search, {
            responseType: "json"
          });
        } // single prescription

      }, {
        key: "uniquePrescription",
        value: function uniquePrescription(values) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["MEDICINE_URL"] + "/unique/" + values;
          console.log("url......" + epurl);
          console.log(JSON.stringify(values));
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } //Get doctors list

      }, {
        key: "doctorsList",
        value: function doctorsList() {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["DOCTOR_URL"] + "/profile_list";
          console.log("url......" + epurl);
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        }
      }, {
        key: "getDocumentsByDxid",
        value: function getDocumentsByDxid(dxid) {
          var pf_url = src_config__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_URL"] + "/view_documents/" + dxid;
          console.log(pf_url); // debugger;       

          return this.httpClient.get(pf_url, {
            responseType: "json"
          });
        } // get doc uid by name

      }, {
        key: "docUIDSearch",
        value: function docUIDSearch(docname) {
          console.log("doctor name", docname);
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["DOCTOR_URL"] + "/doctoruidbydocname/" + docname;
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        }
      }, {
        key: "downloadDocumentByKeyname",
        value: function downloadDocumentByKeyname(keyname) {
          var pf_url = src_config__WEBPACK_IMPORTED_MODULE_3__["DOWNLOAD_URL"] + "/api/file/" + keyname;
          console.log(pf_url); // debugger;       

          return this.httpClient.get(pf_url, {
            responseType: "text"
          });
        }
      }, {
        key: "prescriptionVital",
        value: function prescriptionVital(dxid) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["MEDICINE_URL"] + "/vital/" + dxid;
          console.log("url......" + epurl);
          console.log("dxid----" + dxid);
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } //Add QR Code

      }, {
        key: "getQrCode",
        value: function getQrCode(values) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["MEDICINE_URL"] + "/getqrcode/" + values;
          console.log("url......" + epurl);
          console.log(values);
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        }
      }, {
        key: "getDocumentKeyName",
        value: function getDocumentKeyName(documentID) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_URL"] + "/get_keyname/" + documentID;
          console.log("url......" + epurl);
          console.log("Template Name----" + documentID);
          return this.httpClient.get(epurl, {
            responseType: "text"
          });
        }
      }, {
        key: "getHospitalDetailsByTenantid",
        value: function getHospitalDetailsByTenantid(tenantid) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["HOSPITAL_URL"] + "/hospitalprofile/" + tenantid; //console.log("url......"+epurl);

          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } // get virtual hospital circle

      }, {
        key: "getVirtualCircleBySpec",
        value: function getVirtualCircleBySpec(specObj) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getvcirclebyspec";
          return this.httpClient.put(epurl, specObj, {
            responseType: "json"
          });
        } // get virtual circle detail by circle code

      }, {
        key: "getCircleDetailByCode",
        value: function getCircleDetailByCode(circlecode) {
          console.log("get circle", circlecode);
          return this.httpClient.get("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"], "/getvcircledocbycode/") + circlecode, {
            responseType: "json"
          });
        } // get virtual circle doc detail by docuid array

      }, {
        key: "getCircleDocProfile",
        value: function getCircleDocProfile(docuidlist) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getvcircledocdetail";
          return this.httpClient.put(epurl, docuidlist, {
            responseType: "json"
          });
        } // get swasth subscribe plan list

      }, {
        key: "getSubscribPlanList",
        value: function getSubscribPlanList() {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getplanmaster";
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } // get razorpay subscribe plan list

      }, {
        key: "getRazorpaySubscribPlanList",
        value: function getRazorpaySubscribPlanList() {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/viewplans";
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } // create razorpay subscribe 

      }, {
        key: "createRazorpaySubscribe",
        value: function createRazorpaySubscribe(subscribeObj) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/createsubscription";
          return this.httpClient.post(epurl, subscribeObj, {
            responseType: "json"
          });
        } // create chat restriction after subscription

      }, {
        key: "createChatRestriction",
        value: function createChatRestriction(chatrestrictobj) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/createchatrestrictsubscription";
          return this.httpClient.post(epurl, chatrestrictobj, {
            responseType: "json"
          });
        } // get pt chat restriction detail

      }, {
        key: "getChatRestrictDetail",
        value: function getChatRestrictDetail(value) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getptchatrestricdetail";
          return this.httpClient.put(url, value, {
            responseType: "json"
          });
        } // add vchat complaints

      }, {
        key: "addChatComplaint",
        value: function addChatComplaint(chatcomplaintobj) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/addvchatcomplaint";
          return this.httpClient.post(epurl, chatcomplaintobj, {
            responseType: "json"
          });
        } // create admin doc pt chat restriction complaint

      }, {
        key: "adminPtChatRestriction",
        value: function adminPtChatRestriction(value) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/createadmindocchatrestrict";
          return this.httpClient.post(epurl, value, {
            responseType: 'text'
          });
        } // get patient chat by docuserid and circle code

      }, {
        key: "getPatientChatByPatientUserid",
        value: function getPatientChatByPatientUserid(userid, circleCode) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getpatientchat/" + userid + "/" + circleCode;
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // get doctor specialization list

      }, {
        key: "getDoctorSpecialization",
        value: function getDoctorSpecialization() {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getspecialisation";
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // add patient to circle

      }, {
        key: "addPtToCircle",
        value: function addPtToCircle(values) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/addptcircle";
          return this.httpClient.post(epurl, values, {
            responseType: "json"
          });
        } // add patient admin chat detail

      }, {
        key: "createPtChat",
        value: function createPtChat(values) {
          console.log("value", values);
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/createpatientchat";
          return this.httpClient.post(epurl, values, {
            responseType: "json"
          });
        } // get patient subscribed circle code list

      }, {
        key: "getPtCircleList",
        value: function getPtCircleList(ptuid) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getptcirclecodelist/" + ptuid;
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // get circle detail for doctor

      }, {
        key: "getCircleDetail",
        value: function getCircleDetail(circleCode) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getcircledetail";
          return this.httpClient.put(url, circleCode, {
            responseType: "json"
          });
        } // get chat by userid and circle code

      }, {
        key: "getChatByUserid",
        value: function getChatByUserid(userid, circleCode) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getchatdeatils/" + userid + "/" + circleCode;
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // triage reference doctor

      }, {
        key: "triageRefDoctor",
        value: function triageRefDoctor(triageobj) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/triagetodoctorchat";
          return this.httpClient.post(epurl, triageobj, {
            responseType: 'text'
          });
        } // get chat format detail of patient for triaging doctor

      }, {
        key: "getChatFormatDetailPt",
        value: function getChatFormatDetailPt(value) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getchatformat";
          return this.httpClient.put(epurl, value, {
            responseType: "json"
          });
        } // add family member

      }, {
        key: "addFamilyMember",
        value: function addFamilyMember(familyMember) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/addfamilymember";
          return this.httpClient.post(url, familyMember, {
            responseType: "text"
          });
        }
      }, {
        key: "addAllFamilyMember",
        value: function addAllFamilyMember(familyMember) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/addallfamilymembers";
          return this.httpClient.post(url, familyMember, {
            responseType: "text"
          });
        } // get all circle list detail 

      }, {
        key: "getAllCircleDetailList",
        value: function getAllCircleDetailList() {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getallvcirclelist";
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // get virtual consultation fee

      }, {
        key: "getConsultFeeDetailSingleCircle",
        value: function getConsultFeeDetailSingleCircle(billobj) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getvirtualconsultfee";
          return this.httpClient.put(url, billobj, {
            responseType: "json"
          });
        } // get virtual consultation fee

      }, {
        key: "getConsultFeeDetailAllCircle",
        value: function getConsultFeeDetailAllCircle(billobj, ptuid) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getallcirclevirtualconsultfee/" + ptuid;
          return this.httpClient.put(url, billobj, {
            responseType: "json"
          });
        } // update chat format history for triage detail

      }, {
        key: "updateChatFormat",
        value: function updateChatFormat(value, formatid) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/updatechatformat/" + formatid;
          return this.httpClient.put(epurl, value, {
            responseType: 'text'
          });
        } // update virtual consultation fee

      }, {
        key: "updateConsultFee",
        value: function updateConsultFee(billobj) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/updatevirtualconsultfee";
          return this.httpClient.post(url, billobj, {
            responseType: "text"
          });
        } // update patient profile

      }, {
        key: "updateCirclePatientAccountType",
        value: function updateCirclePatientAccountType(userid, accountType) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/updateaccounttype/" + userid + "/" + accountType;
          console.log("Update Account Type==>", url);
          return this.httpClient.get(url, {
            responseType: "text"
          });
        } // get Family Members

      }, {
        key: "getFamilyMember",
        value: function getFamilyMember(primary_userid) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getfamilymembers/" + primary_userid;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } //get primary user profile

      }, {
        key: "getPrimaryUserProfile",
        value: function getPrimaryUserProfile(userid) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getcirclepatientdetails/" + userid;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // get family member profile

      }, {
        key: "getFamilyMemberProfile",
        value: function getFamilyMemberProfile(userid) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getfamilymemberprofile/" + userid;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } //get circle code by family primary user id

      }, {
        key: "getCircleCode",
        value: function getCircleCode(userid, subscriptiontype) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getcirclecode/" + userid + "/" + subscriptiontype;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "text"
          });
        } // get circle entity by circle code

      }, {
        key: "getCircleEntity",
        value: function getCircleEntity(circleCode) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getcircle/" + circleCode;
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // get doctor profile by userid

      }, {
        key: "getDoctorProfile",
        value: function getDoctorProfile(docuserID) {
          ////console.log("Doctor---"+docuserID);    
          return this.httpClient.get("".concat(src_config__WEBPACK_IMPORTED_MODULE_3__["DOCTOR_URL"], "/profile/") + docuserID, {
            responseType: "json"
          });
        } // get triage doctor chat detail

      }, {
        key: "getPtTriageDocChatDetail",
        value: function getPtTriageDocChatDetail(uid, docid, ccode) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/gettriagedoctorchat/" + uid + "/" + docid + "/" + ccode;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // verify family member

      }, {
        key: "checkFamilyMember",
        value: function checkFamilyMember(userid) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/verifyfamilymember/" + userid;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // check patient subscribed in circle

      }, {
        key: "checkPatientSubscribedInCircle",
        value: function checkPatientSubscribedInCircle(userid, circlecode) {
          var url = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/checkpatientsubscripedincircle/" + userid + "/" + circlecode;
          console.log(url);
          return this.httpClient.get(url, {
            responseType: "json"
          });
        } // get mobile country code list

      }, {
        key: "getCountryCodes",
        value: function getCountryCodes() {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/countrycodes";
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } // get circle obj and  circle doctor list

      }, {
        key: "getCircleDocListByCcode",
        value: function getCircleDocListByCcode(ccode) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/getvcircledoclistbyccode/" + ccode;
          return this.httpClient.get(epurl, {
            responseType: "json"
          });
        } // update chat request count

      }, {
        key: "updateChatRequestCount",
        value: function updateChatRequestCount(userid, circlecode, type) {
          var epurl = src_config__WEBPACK_IMPORTED_MODULE_3__["LOOKUP_URL"] + "/updatechatrequestcount/" + userid + "/" + circlecode + "/" + type;
          return this.httpClient.put(epurl, {
            responseType: 'text'
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/chatAudioRecording.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/chatAudioRecording.service.ts ***!
    \***********************************************/

  /*! exports provided: ChatAudioRecordingService */

  /***/
  function srcAppChatAudioRecordingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatAudioRecordingService", function () {
      return ChatAudioRecordingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! recordrtc */
    "./node_modules/recordrtc/RecordRTC.js");
    /* harmony import */


    var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

    var ChatAudioRecordingService = /*#__PURE__*/function () {
      function ChatAudioRecordingService() {
        _classCallCheck(this, ChatAudioRecordingService);

        this._recorded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._recordingTime = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._recordingFailed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ChatAudioRecordingService, [{
        key: "init",
        value: function init() {
          return new Promise(function (resolve, reject) {
            navigator.serviceWorker.ready.then(function (registration) {
              // Don't crash an error if messaging not supported
              if (!firebase__WEBPACK_IMPORTED_MODULE_5__["messaging"].isSupported()) {
                console.log("Not supported");
                resolve();
                return;
              }

              var messaging = firebase__WEBPACK_IMPORTED_MODULE_5__["messaging"](); // Register the Service Worker

              messaging.useServiceWorker(registration);
              console.log("registration done"); // Initialize your VAPI key

              messaging.usePublicVapidKey("BBAbx1PxBXXmOwey2bgwtni8a4a4f1ICkxlKasRj1JyYCJPfnTeP8GbmAKN8g3WnlbkyR1kGLE8Hn2okxv2bwaI"); // Optional and not covered in the article
              // Listen to messages when your app is in the foreground

              messaging.onMessage(function (payload) {
                console.log("payload", payload);
              }); // Optional and not covered in the article
              // Handle token refresh

              messaging.onTokenRefresh(function () {
                messaging.getToken().then(function (refreshedToken) {
                  console.log("Refreshed token", refreshedToken);
                })["catch"](function (err) {
                  console.error(err);
                });
              });
              resolve();
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "requestPermission",
        value: function requestPermission() {
          var _this6 = this;

          return new Promise(function (resolve) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (Notification) {
                        _context.next = 3;
                        break;
                      }

                      resolve();
                      return _context.abrupt("return");

                    case 3:
                      if (firebase__WEBPACK_IMPORTED_MODULE_5__["messaging"].isSupported()) {
                        _context.next = 6;
                        break;
                      }

                      resolve();
                      return _context.abrupt("return");

                    case 6:
                      try {
                        Notification.requestPermission(function (status) {
                          console.log('Notification permission status: ', status);

                          if (status === "granted") {
                            navigator.serviceWorker.getRegistration().then(function (reg) {
                              reg.getNotifications(); // var options = {
                              //   body: 'Here is a notification body!',
                              //   // icon: 'images/example.png',
                              //   vibrate: [100, 50, 100],
                              //   data: {
                              //     dateOfArrival: Date.now(),
                              //     primaryKey: 1
                              //   }
                              // };
                              // reg.showNotification('Hello world!', options);
                            });
                          }
                        });
                      } catch (err) {// No notifications granted
                      }

                      resolve();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          });
        }
      }, {
        key: "getRecordedBlob",
        value: function getRecordedBlob() {
          return this._recorded.asObservable();
        }
      }, {
        key: "getRecordedTime",
        value: function getRecordedTime() {
          return this._recordingTime.asObservable();
        }
      }, {
        key: "recordingFailed",
        value: function recordingFailed() {
          return this._recordingFailed.asObservable();
        }
      }, {
        key: "startRecording",
        value: function startRecording() {
          var _this7 = this;

          if (this.recorder) {
            // It means recording is already started or it is already recording something
            return;
          }

          this._recordingTime.next('00:00');

          navigator.mediaDevices.getUserMedia({
            audio: true
          }).then(function (s) {
            _this7.stream = s;

            _this7.record();
          })["catch"](function (error) {
            _this7._recordingFailed.next();
          });
        }
      }, {
        key: "abortRecording",
        value: function abortRecording() {
          this.stopMedia();
        }
      }, {
        key: "record",
        value: function record() {
          var _this8 = this;

          this.recorder = new recordrtc__WEBPACK_IMPORTED_MODULE_2__["MediaStreamRecorder"](this.stream, {
            type: 'audio',
            mimetype: 'audio/webm',
            numberOfAudioChannels: 1,
            bufferSize: 16384,
            // recorderType: 'MediaStreamRecorder',
            disableLogs: true,
            // timeSlice: 1000,
            audioBitsPerSecond: 256 * 8 * 1024
          });
          this.recorder.record();
          this.startTime = moment__WEBPACK_IMPORTED_MODULE_3__();
          this.interval = setInterval(function () {
            var currentTime = moment__WEBPACK_IMPORTED_MODULE_3__();
            var diffTime = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](currentTime.diff(_this8.startTime));

            var time = _this8.toString(diffTime.minutes()) + ':' + _this8.toString(diffTime.seconds());

            _this8._recordingTime.next(time);
          }, 100);
        }
      }, {
        key: "toString",
        value: function toString(value) {
          var val = value;

          if (!value) {
            val = '00';
          }

          if (value < 10) {
            val = '0' + value;
          }

          return val;
        }
      }, {
        key: "stopRecording",
        value: function stopRecording() {
          var _this9 = this;

          if (this.recorder) {
            this.recorder.stop(function (blob) {
              if (_this9.startTime) {
                var mp3Name = encodeURIComponent('audio_' + new Date().getTime() + '.wav');
                console.log("Type", blob.type);

                _this9.stopMedia();

                _this9._recorded.next({
                  blob: blob,
                  title: mp3Name
                });
              }
            }, function () {
              _this9.stopMedia();

              _this9._recordingFailed.next();
            });
          }
        }
      }, {
        key: "stopMedia",
        value: function stopMedia() {
          if (this.recorder) {
            this.recorder = null;
            clearInterval(this.interval);
            this.startTime = null;

            if (this.stream) {
              this.stream.getAudioTracks().forEach(function (track) {
                return track.stop();
              });
              this.stream = null;
            }
          }
        }
      }]);

      return ChatAudioRecordingService;
    }();

    ChatAudioRecordingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ChatAudioRecordingService);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/login-auth.service */
    "./src/app/services/login-auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(loginAuth, router, alertCtrl) {
        _classCallCheck(this, AuthGuard);

        this.loginAuth = loginAuth;
        this.router = router;
        this.alertCtrl = alertCtrl;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var _this10 = this;

          return this.loginAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            console.log("in canactivate", user);

            if (!user) {
              _this10.alertCtrl.create({
                header: "Unauthorized",
                message: "You are not allowed to access this page",
                buttons: ['ok']
              }).then(function (alert) {
                return alert.present();
              });

              _this10.router.navigateByUrl('login'); //this.router.navigateByUrl('/');


              return false;
            } else {
              return true;
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pagination-service.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/pagination-service.service.ts ***!
    \***********************************************/

  /*! exports provided: PaginationServiceService */

  /***/
  function srcAppPaginationServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationServiceService", function () {
      return PaginationServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaginationServiceService = /*#__PURE__*/function () {
      function PaginationServiceService(http) {
        _classCallCheck(this, PaginationServiceService);

        this.http = http;
        console.log('Hello PaginationserviceProvider Provider');
      }

      _createClass(PaginationServiceService, [{
        key: "getPager",
        value: function getPager(totalItems) {
          var currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
          // calculate total pages
          var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range

          if (currentPage < 1) {
            currentPage = 1;
          } else if (currentPage > totalPages) {
            currentPage = totalPages;
          }

          var startPage, endPage;

          if (totalPages <= 6) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
          } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 4) {
              startPage = 1;
              endPage = 6;
            } else if (currentPage + 3 >= totalPages) {
              startPage = totalPages - 5;
              endPage = totalPages;
            } else {
              startPage = currentPage - 2;
              endPage = currentPage + 3;
            }
          } // calculate start and end item indexes


          var startIndex = (currentPage - 1) * pageSize;
          var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

          var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
            return startPage + i;
          }); // return object with all pager properties required by the view

          return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
          };
        }
      }]);

      return PaginationServiceService;
    }();

    PaginationServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    PaginationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], PaginationServiceService);
    /***/
  },

  /***/
  "./src/app/resolver/data-resolver.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/resolver/data-resolver.service.ts ***!
    \***************************************************/

  /*! exports provided: DataResolverService */

  /***/
  function srcAppResolverDataResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataResolverService", function () {
      return DataResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var DataResolverService = /*#__PURE__*/function () {
      function DataResolverService(dateService) {
        _classCallCheck(this, DataResolverService);

        this.dateService = dateService;
      }

      _createClass(DataResolverService, [{
        key: "resolve",
        value: function resolve(route) {
          var id = route.paramMap.get('id');
          return this.dateService.getData(id);
        }
      }]);

      return DataResolverService;
    }();

    DataResolverService.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    DataResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], DataResolverService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.data = [];
      }

      _createClass(DataService, [{
        key: "setData",
        value: function setData(id, data) {
          this.data[id] = data;
        }
      }, {
        key: "getData",
        value: function getData(id) {
          return this.data[id];
        }
      }]);

      return DataService;
    }();

    DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DataService);
    /***/
  },

  /***/
  "./src/app/services/login-auth.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/login-auth.service.ts ***!
    \************************************************/

  /*! exports provided: LoginAuthService */

  /***/
  function srcAppServicesLoginAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginAuthService", function () {
      return LoginAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/config */
    "./src/config.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../storage/swasth-storage.service */
    "./src/app/storage/swasth-storage.service.ts");

    var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    var TOKEN_KEY = "patient-jwt-token";

    var LoginAuthService = /*#__PURE__*/function () {
      function LoginAuthService(storage, http, plt, router, swasthStorage) {
        _classCallCheck(this, LoginAuthService);

        this.storage = storage;
        this.http = http;
        this.plt = plt;
        this.router = router;
        this.swasthStorage = swasthStorage;
        this.LOGINUSER_PROFILE = "patient_profile";
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loginUserProfile = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loadStoredToken();
      }

      _createClass(LoginAuthService, [{
        key: "loadStoredToken",
        value: function loadStoredToken() {
          var _this11 = this;

          var platformObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.plt.ready());
          this.user = platformObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this11.storage.get(TOKEN_KEY));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (token) {
            console.log("token from storage", token);

            if (token) {
              _this11.decodedToken = helper.decodeToken(token);
              console.log('decoded: ', _this11.decodedToken);

              _this11.userData.next(_this11.decodedToken);

              return true;
            } else {
              return false;
            }
          }));
        } // user session login 

      }, {
        key: "login",
        value: function login(values, rememberValues) {
          var _this12 = this;

          return this.http.post("".concat(src_config__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"], "/circlelogin"), values, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (token) {
            if (token !== 'NOTEXISTS') {
              /* if(rememberValues==1)
              {
                return this.handleJwtResponse(jwt);
              } */
              return token;
            } else if (token == 'NOTEXISTS') {
              return token;
            } else {
              alert("user not exists");
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (token) {
            _this12.decodedToken = helper.decodeToken(token);
            console.log('decoded: ', _this12.decodedToken); //this.getUserApi(this.decodedToken.UID);

            _this12.userData.next(_this12.decodedToken);

            _this12.storageObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this12.storage.set(TOKEN_KEY, token));
            return _this12.storageObs;
          }));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.userData.getValue();
        }
      }, {
        key: "getUserApi",
        value: function getUserApi(uid) {
          var _this13 = this;

          console.log("user id", uid);
          this.http.get("".concat(src_config__WEBPACK_IMPORTED_MODULE_8__["LOOKUP_URL"], "/getcirclepatientdetails/") + uid, {
            responseType: "json"
          }).subscribe(function (data) {
            console.log("pt api response-->", data);

            if (data != null) {
              console.log("pt api response-->", data); //this.swasthStorage.setStorage(this.LOGINUSER_PROFILE,data);

              _this13.storage.set(_this13.LOGINUSER_PROFILE, data);

              return _this13.loginUserProfile.next(data);
            } else {
              return _this13.loginUserProfile.next(null);
            }
          });
        }
      }, {
        key: "getUserdetail",
        value: function getUserdetail() {
          /* console.log("after set",this.loginUserProfile.getValue());
          return this.loginUserProfile.getValue(); */
          this.storage.get(this.LOGINUSER_PROFILE).then(function (data) {
            console.log("storage profile----->", data);

            if (data != undefined) {
              return data;
            } else {
              return null;
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this14 = this;

          // this.swasthStorage.clearStorage();
          //   this.storage.clear();
          //   localStorage.clear();
          //   window.location.href='';
          //   //this.router.navigateByUrl('login']); 
          this.storage.remove(TOKEN_KEY).then(function () {
            //this.router.navigateByUrl('/');
            // this.userData.next(null);
            // this.loginUserProfile.next(null);
            _this14.swasthStorage.clearStorage();

            _this14.storage.clear();

            localStorage.clear(); //window.location.href='';

            _this14.router.navigateByUrl('login');
          });
        }
      }]);

      return LoginAuthService;
    }();

    LoginAuthService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_10__["SwasthStorageService"]
      }];
    };

    LoginAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _storage_swasth_storage_service__WEBPACK_IMPORTED_MODULE_10__["SwasthStorageService"]])], LoginAuthService);
    /***/
  },

  /***/
  "./src/app/storage/swasth-storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/storage/swasth-storage.service.ts ***!
    \***************************************************/

  /*! exports provided: SwasthStorageService */

  /***/
  function srcAppStorageSwasthStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwasthStorageService", function () {
      return SwasthStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var SwasthStorageService = /*#__PURE__*/function () {
      function SwasthStorageService(storage) {
        _classCallCheck(this, SwasthStorageService);

        this.storage = storage;
      }

      _createClass(SwasthStorageService, [{
        key: "setStorage",
        value: function setStorage(key, value) {
          this.storage.set(key, value);
        }
      }, {
        key: "getStorage",
        value: function getStorage(key) {
          /* this.storage.get(key).then((data)=>{
            if(data != null && data != undefined) {
                console.log("storage data", data);
                this.storageValue = data;
            } else {
              this.storageValue = null;
            }
              
          });
          return this.storageValue; */
          return this.storage.get(key);
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          this.storage.clear();
        }
      }, {
        key: "removeStorage",
        value: function removeStorage(key) {
          this.storage.remove(key);
        }
      }]);

      return SwasthStorageService;
    }();

    SwasthStorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    SwasthStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], SwasthStorageService);
    /***/
  },

  /***/
  "./src/app/webservice.service.ts":
  /*!***************************************!*\
    !*** ./src/app/webservice.service.ts ***!
    \***************************************/

  /*! exports provided: WebserviceService */

  /***/
  function srcAppWebserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebserviceService", function () {
      return WebserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var WebserviceService = /*#__PURE__*/function () {
      function WebserviceService(http, loadingCtrl) {
        _classCallCheck(this, WebserviceService);

        this.http = http;
        this.loadingCtrl = loadingCtrl;
      }

      _createClass(WebserviceService, [{
        key: "callPost",
        value: function callPost(url, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this15 = this;

            var headers, load;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded'); //let options = new RequestOptions({ headers: headers });

                    _context2.next = 4;
                    return this.loadingCtrl.create({});

                  case 4:
                    load = _context2.sent;
                    load.present();
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      _this15.http.post("http://api.razorpay.com/" + url, data).subscribe(function (res) {
                        load.dismiss();
                        resolve(res);
                      }, function (err) {
                        reject(err);
                        load.dismiss();
                      });
                    }));

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "callGet",
        value: function callGet(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this16 = this;

            var headers, load;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded'); //let options = new RequestOptions({ headers: headers });

                    _context3.next = 4;
                    return this.loadingCtrl.create({});

                  case 4:
                    load = _context3.sent;
                    load.present();
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      _this16.http.get("http://api.razorpay.com/" + url).subscribe(function (res) {
                        load.dismiss();
                        resolve(res);
                      }, function (err) {
                        reject(err);
                        load.dismiss();
                      });
                    }));

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return WebserviceService;
    }();

    WebserviceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    WebserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], WebserviceService);
    /***/
  },

  /***/
  "./src/config.ts":
  /*!***********************!*\
    !*** ./src/config.ts ***!
    \***********************/

  /*! exports provided: S3BASE_URL, HEADER_LOGO, SITE_URL, SERVER_URL, PATIENT_URL, DOCTOR_URL, NURSE_URL, DX_URL, PHARMACY_URL, MEDICINE_URL, LOOKUP_URL, VITAL_URL, RECP_URL, PRESC_TEMPLATE, SEND_MEDICINE, SEND_DXCENTER, SEND_NURSE, SEND_DOCTOR, APPOINTMENT_URL, UPLOAD_URL, DOWNLOAD_URL, HOSPITAL_URL */

  /***/
  function srcConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S3BASE_URL", function () {
      return S3BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HEADER_LOGO", function () {
      return HEADER_LOGO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SITE_URL", function () {
      return SITE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERVER_URL", function () {
      return SERVER_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PATIENT_URL", function () {
      return PATIENT_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOCTOR_URL", function () {
      return DOCTOR_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NURSE_URL", function () {
      return NURSE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DX_URL", function () {
      return DX_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PHARMACY_URL", function () {
      return PHARMACY_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MEDICINE_URL", function () {
      return MEDICINE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOOKUP_URL", function () {
      return LOOKUP_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VITAL_URL", function () {
      return VITAL_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECP_URL", function () {
      return RECP_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRESC_TEMPLATE", function () {
      return PRESC_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEND_MEDICINE", function () {
      return SEND_MEDICINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEND_DXCENTER", function () {
      return SEND_DXCENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEND_NURSE", function () {
      return SEND_NURSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEND_DOCTOR", function () {
      return SEND_DOCTOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APPOINTMENT_URL", function () {
      return APPOINTMENT_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPLOAD_URL", function () {
      return UPLOAD_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWNLOAD_URL", function () {
      return DOWNLOAD_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOSPITAL_URL", function () {
      return HOSPITAL_URL;
    }); //Image URLS


    var S3BASE_URL = "https://document.swasth.online/";
    var HEADER_LOGO = "https://swasth.online/logo-swasth-icon.svg";
    var SITE_URL = "https://swasth.online/"; //Server SSL

    var SERVER_URL = "https://api.swasth.online/auth";
    var PATIENT_URL = "https://api.swasth.online/patient";
    var DOCTOR_URL = "https://api.swasth.online/doctor";
    var NURSE_URL = "https://api.swasth.online/nurse";
    var DX_URL = "https://api.swasth.online/dxcenter";
    var PHARMACY_URL = "https://api.swasth.online/pharmacy";
    var MEDICINE_URL = "https://api.swasth.online/prescription";
    var LOOKUP_URL = "https://api.swasth.online/lookup";
    var VITAL_URL = "https://api.swasth.online/vital";
    var RECP_URL = "https://api.swasth.online/recp";
    var PRESC_TEMPLATE = "https://api.swasth.online/presctemplate";
    var SEND_MEDICINE = "https://api.swasth.online/pharsend";
    var SEND_DXCENTER = "https://api.swasth.online/dxsend";
    var SEND_NURSE = "https://api.swasth.online/sendnurse";
    var SEND_DOCTOR = "https://api.swasth.online/senddoctor";
    var APPOINTMENT_URL = "https://api.swasth.online/appt";
    var UPLOAD_URL = "https://api.swasth.online/upload";
    var DOWNLOAD_URL = "https://api.swasth.online/download";
    var HOSPITAL_URL = "https://api.swasth.online/hospital"; //New Server With SSl
    // export const SERVER_URL = "https://abc.swasth.online/auth";
    // export const PATIENT_URL = "https://abc.swasth.online/patient";
    // export const DOCTOR_URL = "https://abc.swasth.online/doctor";
    // export const NURSE_URL = "https://abc.swasth.online/nurse";
    // export const DX_URL = "https://abc.swasth.online/dxcenter";
    // export const PHARMACY_URL = "https://abc.swasth.online/pharmacy";
    // export const MEDICINE_URL = "https://abc.swasth.online/prescription";
    // export const LOOKUP_URL="https://abc.swasth.online/lookup";
    // export const VITAL_URL = "https://abc.swasth.online/vital";
    // export const RECP_URL = "https://abc.swasth.online/recp";
    // export const PRESC_TEMPLATE = "https://abc.swasth.online/presctemplate";
    // export const SEND_MEDICINE = "https://abc.swasth.online/pharsend";
    // export const SEND_DXCENTER = "https://abc.swasth.online/dxsend";
    // export const SEND_NURSE = "https://abc.swasth.online/sendnurse";
    // export const SEND_DOCTOR = "https://abc.swasth.online/senddoctor"; 
    // export const APPOINTMENT_URL = "https://abc.swasth.online/appt"; 
    // export const UPLOAD_URL = "https://abc.swasth.online/upload";
    // export const DOWNLOAD_URL = "https://abc.swasth.online/download";
    // export const HOSPITAL_URL="https://abc.swasth.online/hospital";
    //Server Without SSl
    // export const SERVER_URL = "http://api.swasth.online/auth";
    //export const PATIENT_URL = "http://api.swasth.online/patient";
    //export const DOCTOR_URL = "http://api.swasth.online/doctor";
    //export const NURSE_URL = "http://api.swasth.online/nurse"; 
    //export const DX_URL = "http://api.swasth.online/dxcenter";
    //export const PHARMACY_URL = "http://api.swasth.online/pharmacy";
    //export const MEDICINE_URL = "http://api.swasth.online/prescription";
    // export const LOOKUP_URL="http://api.swasth.online/lookup";
    //export const VITAL_URL = "http://api.swasth.online/vital";
    //export const RECP_URL = "http://api.swasth.online/recp";
    //export const PRESC_TEMPLATE = "http://api.swasth.online/presctemplate";
    //export const SEND_MEDICINE = "http://api.swasth.online/pharsend";
    //export const SEND_DXCENTER = "http://api.swasth.online/dxsend";
    //export const SEND_NURSE = "http://api.swasth.online/sendnurse";
    //export const SEND_DOCTOR = "http://api.swasth.online/senddoctor"; 
    // export const APPOINTMENT_URL = "http://api.swasth.online/appt"; 
    //export const UPLOAD_URL = "http://api.swasth.online/upload";
    //export const DOWNLOAD_URL = "http://api.swasth.online/download";
    //export const HOSPITAL_URL="http://api.swasth.online/hospital";  
    //Local Room
    // export const SERVER_URL = " http://localhost:5052/auth";
    // export const HOSPITAL_URL = "http://localhost:5054/hospital";
    //export const PATIENT_URL = "http://localhost:5051/patient";
    //export const DOCTOR_URL = "http://localhost:5054/doctor";
    // export const DOCTOR_URL = "http://localhost:5054/doctor";
    // export const NURSE_URL = "http://localhost:5054/nurse"; 
    // export const DX_URL = "http://localhost:5054/dxcenter";
    // export const PHARMACY_URL = "http://localhost:5054/pharmacy";
    // export const MEDICINE_URL = "http://localhost:5058/prescription";
    // export const LOOKUP_URL="http://localhost:5072/lookup";
    // export const VITAL_URL = "http://localhost:5051/vital";
    // export const RECP_URL = "http://localhost:5054/recp";
    // export const PRESC_TEMPLATE = "http://localhost:5058/presctemplate";
    // export const SEND_MEDICINE = "http://localhost:5068/pharsend";
    // export const SEND_DXCENTER = "http://localhost:5068/dxsend";
    // export const SEND_NURSE = "http://localhost:5068/sendnurse";
    // export const SEND_DOCTOR = "http://localhost:5068/senddoctor";
    //export const APPOINTMENT_URL = "http://localhost:5071/appt"; 
    // export const UPLOAD_URL = "http://localhost:5074/upload";
    // export const DOWNLOAD_URL = "http://localhost:5074/download";
    // export const PAYMENT_URL = "http://localhost:5080/payment"; 

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\swasth\swasthvirtualpatient\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map