exports.ids = [1];
exports.modules = {

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
throw new Error("Cannot find module \"react-router-dom\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(314);
var _jsxFileName = "D:\\episode12new\\src\\app\\global\\header\\breadcrumb.component.js",
    _this = this;




// import axios from 'axios';




var BreadCrumb = function BreadCrumb(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: _this
    },
    props.display ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      { className: "breadcrumb-nav", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { href: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: _this
            },
            "Home"
          )
        ),
        props.refinementBreadCrumbs && props.refinementBreadCrumbs.ancestors && props.refinementBreadCrumbs.ancestors.length > 0 && props.refinementBreadCrumbs.ancestors[0].obj && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
            {
              to: "/c/category/" + props.refinementBreadCrumbs.ancestors[0].obj.slug.en,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: _this
            },
            props.refinementBreadCrumbs.ancestors[0].obj.name.en
          )
        ),
        props.refinementBreadCrumbs && props.refinementBreadCrumbs.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
            { to: "/c/category/" + props.refinementBreadCrumbs.slug.en, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: _this
            },
            props.refinementBreadCrumbs.name.en
          )
        )
      )
    ) : null
  );
};

/* harmony default export */ __webpack_exports__["default"] = (BreadCrumb);

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import '../../../base_styles/01_settings/settings';\n| @import '../../../base_styles/02_tools/tools';\n| @import '../../../base_styles/07_utilities/utilities';");

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var CONSTANTS = [{
	DOMAIN: 'https://ccstore-z0wa.oracleoutsourcing.com/',
	ACMC_LOGIN_API: 'http://localhost:3000/ccagent/custom/v1/login',
	XAMPP_BASE_API: 'http://localhost:8085/occ/proxy/index.php?url=https://occapi-z0wa.taistech.com/ccstoreui/v1/',
	// XAMPP_BASE_API: 'http://localhost/occ/proxy/index.php?url=https://ccstore-z0wa.oracleoutsourcing.com/ccstoreui/v1/'
	AXIOS_TIMEOUT: 30000,

	CT_PROJECT_KEY: 'hello-world-34',
	CT_AUTH_HOST: 'https://auth.sphere.io',
	CT_API_HOST: 'https://api.sphere.io',
	CT_CLIENT_ID: 'CZmXeqTQe3_6x7-I9SGzpNRn',
	CT_CLIENT_SECRET: 'OQ2cjdot7511Pi262wLKbWGVMDex6ob8',
	SCOPES: scopes(),
	//APPLICATION:'OCC'
	APPLICATION: 'COMMERCETOOLS'
}];

function scopes() {
	return ['create_anonymous_token', 'view_products', 'manage_my_orders', 'manage_my_payments', 'manage_my_profile', 'manage_my_shopping_lists'].map(function (scope) {
		return scope + ':hello-world-34';
	}).join(' ');
}

/* unused harmony default export */ var _unused_webpack_default_export = (CONSTANTS);

/***/ })

};;
//# sourceMappingURL=1.server.js.map