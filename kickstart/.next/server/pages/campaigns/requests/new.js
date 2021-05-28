(function() {
var exports = {};
exports.id = "pages/campaigns/requests/new";
exports.ids = ["pages/campaigns/requests/new"];
exports.modules = {

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "A:\\Documents\\GitHub\\Ethereum-Solidity-Developer-s-Guide\\kickstart\\pages\\campaigns\\requests\\new.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class RequestNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);
      const {
        description,
        value,
        recipient
      } = this.state;
      this.setState({
        loading: true,
        errorMessage: ''
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
        await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(value, 'ether'), recipient).send({
          from: accounts[0]
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false
      });
    });
  }

  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    return {
      address
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
        route: `/campaigns/${this.props.address}/requests`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Create a Request"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.description,
            onChange: event => this.setState({
              description: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Value in Ether"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.value,
            onChange: event => this.setState({
              value: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.recipient,
            onChange: event => this.setState({
              recipient: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
          error: true,
          header: "Oops!",
          content: this.state.errorMessage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          primary: true,
          loading: this.state.loading,
          children: "Create!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestNew);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/new.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJSZXF1ZXN0TmV3IiwiQ29tcG9uZW50IiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInN0YXRlIiwic2V0U3RhdGUiLCJhY2NvdW50cyIsIndlYjMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwiZXJyIiwibWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUMxQjtBQUNQQyxXQUFLLEVBQUUsRUFEQTtBQUVQQyxpQkFBVyxFQUFFLEVBRk47QUFHUEMsZUFBUyxFQUFFLEVBSEo7QUFJUEMsYUFBTyxFQUFFLEtBSkY7QUFLUEMsa0JBQVksRUFBRTtBQUxQLEtBRDBCOztBQUFBLHNDQWV2QixNQUFPQyxL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SUFBVyxLQUFLTyxRQUFMLENBQWM7QUFBRVYsdUJBQVMsRUFBRUcsS0FBSyxDQUFDcUIsTUFBTixDQUFhMUI7QUFBMUIsYUFBZDtBQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRCxlQXNCQyw4REFBQyxzREFBRDtBQUFTLGVBQUssTUFBZDtBQUFlLGdCQUFNLEVBQUMsT0FBdEI7QUFBOEIsaUJBQU8sRUFBRSxLQUFLVyxLQUFMLENBQVdQO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJELGVBdUJDLDhEQUFDLHFEQUFEO0FBQVEsaUJBQU8sTUFBZjtBQUFnQixpQkFBTyxFQUFFLEtBQUtPLEtBQUwsQ0FBV1IsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBbUNBOztBQXZFaUM7O0FBMEVuQywrREFBZUwsVUFBZixFOzs7Ozs7Ozs7OztBQ2pGQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY2xhc3MgUmVxdWVzdE5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHR2YWx1ZTogJycsXHJcblx0XHRkZXNjcmlwdGlvbjogJycsXHJcblx0XHRyZWNpcGllbnQ6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvck1lc3NhZ2U6ICcnLFxyXG5cdH07XHJcblxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuXHRcdGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcblxyXG5cdFx0cmV0dXJuIHsgYWRkcmVzcyB9O1xyXG5cdH1cclxuXHJcblx0b25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cdFx0Y29uc3QgeyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcblx0XHRcdGF3YWl0IGNhbXBhaWduLm1ldGhvZHNcclxuXHRcdFx0XHQuY3JlYXRlUmVxdWVzdChkZXNjcmlwdGlvbiwgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJyksIHJlY2lwaWVudClcclxuXHRcdFx0XHQuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG5cdFx0XHRSb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG5cdH07XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG5cdFx0XHRcdFx0PGE+QmFjazwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PGgzPkNyZWF0ZSBhIFJlcXVlc3Q8L2gzPlxyXG5cdFx0XHRcdDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcblx0XHRcdFx0XHQ8Rm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XHJcblx0XHRcdFx0XHQ8Rm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XHJcblx0XHRcdFx0XHQ8Rm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnJlY2lwaWVudH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgcmVjaXBpZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XHJcblx0XHRcdFx0XHRcdENyZWF0ZSFcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9