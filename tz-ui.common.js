module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace.js");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(4);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/ellipsis/src/index.vue?vue&type=template&id=92d67826&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tooltip",
    _vm._b(
      { attrs: { disabled: !_vm.tooltip } },
      "el-tooltip",
      typeof _vm.tooltip === "boolean" ? _vm.defaultTooltip : _vm.tooltip,
      false
    ),
    [
      _vm.$slots.tooltip
        ? _c(
            "div",
            { attrs: { slot: "content" }, slot: "content" },
            [_vm._t("tooltip")],
            2
          )
        : _c(
            "div",
            { attrs: { slot: "content" }, slot: "content" },
            [_vm._t("default")],
            2
          ),
      _c(
        "div",
        {
          staticClass: "tz-ellipsis",
          class: [_vm.lineClamp ? "tz-ellipsis--line-clamp" : ""],
          style: {
            "-webkit-line-clamp": _vm.expanded ? "" : _vm.lineClamp
          },
          on: {
            click: function($event) {
              _vm.expandTrigger == "click" ? (_vm.expanded = !_vm.expanded) : ""
            }
          }
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/ellipsis/src/index.vue?vue&type=template&id=92d67826&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/ellipsis/src/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "TzEllipsis",
  props: {
    lineClamp: [String, Number],
    expandTrigger: {
      type: String,
      default: ""
    },
    tooltip: {
      type: [Boolean, Object],
      default: true
    }
  },
  data: function data() {
    return {
      expanded: false,
      defaultTooltip: {
        placement: "top"
      }
    };
  }
});
// CONCATENATED MODULE: ./packages/ellipsis/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ellipsis_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/ellipsis/src/index.vue





/* normalize component */

var component = normalizeComponent(
  ellipsis_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/ellipsis/src/index.vue"
/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./packages/ellipsis/index.js



src.install = function (Vue) {
  Vue.component(src.name, src);
};

/* harmony default export */ var ellipsis = (src);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/timer/src/index.vue?vue&type=template&id=deb0c4ee&
var srcvue_type_template_id_deb0c4ee_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._t("default", null, null, _vm.timeData),
      _vm._v(
        "\n    " +
          _vm._s(_vm.$scopedSlots.default ? "" : _vm.formattedTime) +
          "\n"
      )
    ],
    2
  )
}
var srcvue_type_template_id_deb0c4ee_staticRenderFns = []
srcvue_type_template_id_deb0c4ee_render._withStripped = true


// CONCATENATED MODULE: ./packages/timer/src/index.vue?vue&type=template&id=deb0c4ee&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace.js"
var es_string_replace_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.array.slice.js"
var es_array_slice_js_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/utils/util.js






/**
 * 创建定时器
 */
var util_CreatTimer = /*#__PURE__*/function () {
  function CreatTimer(startTime) {
    _classCallCheck(this, CreatTimer);

    this.diff = startTime ? Date.now() - startTime : 0;
    this.counting = false;
    this.endTime = 0;
    this.time = 0;
  }

  _createClass(CreatTimer, [{
    key: "start",
    value: function start(callback) {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() - this.time;
      this.microTick(callback);
    }
  }, {
    key: "pause",
    value: function pause() {
      if (!this.counting) {
        return;
      }

      this.counting = false;
      window.cancelAnimationFrame(this.timerId);
    }
  }, {
    key: "clear",
    value: function clear() {
      if (!this.counting) {
        return;
      }

      this.counting = false;
      window.cancelAnimationFrame(this.timerId);
    }
  }, {
    key: "microTick",
    value: function microTick(callback) {
      var _this2 = this;

      var _this = this;

      this.timerId = window.requestAnimationFrame(function () {
        _this2.time = Date.now() - _this.endTime;
        callback(_this2.time + _this2.diff);

        _this2.microTick(callback);
      });
    }
  }]);

  return CreatTimer;
}();
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', padZero(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', padZero(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', padZero(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', padZero(seconds));
  }

  if (format.indexOf('S') !== -1) {
    var ms = padZero(milliseconds, 3);

    if (format.indexOf('SSS') !== -1) {
      format = format.replace('SSS', ms);
    } else if (format.indexOf('SS') !== -1) {
      format = format.replace('SS', ms.slice(0, 2));
    } else {
      format = format.replace('S', ms.charAt(0));
    }
  }

  return format;
}

function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/timer/src/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//


/* harmony default export */ var timer_srcvue_type_script_lang_js_ = ({
  name: "tzTimer",
  props: {
    autoStart: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    startTime: [String, Number, Date]
  },
  data: function data() {
    return {
      time: "",
      timer: null
    };
  },
  created: function created() {
    if (this.autoStart) {
      this.start();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
  },
  computed: {
    timeData: function timeData() {
      return parseTimeData(this.time);
    },
    formattedTime: function formattedTime() {
      return parseFormat(this.format, this.timeData);
    }
  },
  methods: {
    start: function start() {
      var _this = this;

      if (!this.timer) {
        this.timer = new util_CreatTimer(external_moment_default()(this.startTime || new Date()).format("x"));
      }

      this.timer.start(function (time) {
        _this.time = time;
      });
    },
    pause: function pause() {
      this.timer && this.timer.pause();
    },
    clear: function clear() {
      this.timer && this.timer.clear();
      this.timer = null;
      this.time = 0;
    }
  }
});
// CONCATENATED MODULE: ./packages/timer/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_timer_srcvue_type_script_lang_js_ = (timer_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/timer/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  packages_timer_srcvue_type_script_lang_js_,
  srcvue_type_template_id_deb0c4ee_render,
  srcvue_type_template_id_deb0c4ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var src_api; }
src_component.options.__file = "packages/timer/src/index.vue"
/* harmony default export */ var timer_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/timer/index.js



timer_src.install = function (Vue) {
  Vue.component(timer_src.name, timer_src);
};

/* harmony default export */ var timer = (timer_src);
// CONCATENATED MODULE: ./src/index.js




var components = [ellipsis, timer];

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

/* harmony default export */ var src_0 = __webpack_exports__["default"] = ({
  install: install,
  Ellipsis: ellipsis,
  Timer: timer
});

/***/ })
/******/ ])["default"];