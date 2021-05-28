(function() {
var exports = {};
exports.id = "pages/campaigns/show";
exports.ids = ["pages/campaigns/show"];
exports.modules = {

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "A:\\Documents\\GitHub\\Ethereum-Solidity-Developer-s-Guide\\kickstart\\components\\ContributeForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //import {Router} from '../routes';



class ContributeForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      //event is the argument/parameter such as function (input X) {}
      event.preventDefault();
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);
      this.setState({
        loading: true,
        errorMessage: ""
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(this.state.value, 'ether')
        });
        next_router__WEBPACK_IMPORTED_MODULE_5___default().reload();
      } catch (error) {
        this.setState({
          errorMessage: error.message
        });
      }

      this.setState({
        loading: false,
        value: ''
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Amount to Contribute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
          value: this.state.value,
          onChange: event => this.setState({
            value: event.target.value
          }),
          label: "ether",
          labelPosition: "right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        primary: true,
        loading: this.state.loading,
        children: "Contribute!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContributeForm);

/***/ }),

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "A:\\Documents\\GitHub\\Ethereum-Solidity-Developer-s-Guide\\kickstart\\pages\\campaigns\\show.js";


 //CUSTOM FUNCTION TO GET A SPECIFIC CAMPAIGN






class CampaignShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    //props here seperate from the one below in render
    //props.query.address; get address of campaign from url
    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      address: props.query.address,
      //We can request them later in components as this.props.balance etc.
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [{
      header: manager,
      meta: 'Address of Manager',
      description: 'The manager created this campaign and can create requests to withdraw money',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: minimumContribution,
      meta: 'Minimum Contribution (wei)',
      description: 'You must contribute atleast this much wei to be an approver'
    }, {
      header: requestsCount,
      meta: 'Number of Requests',
      description: 'A request tries to withdraw money from the contract, request must be approved by approvers'
    }, {
      header: approversCount,
      meta: 'Number of Approvers',
      description: 'Number of people who have already donated to this campaign'
    }, {
      header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance (ether)',
      description: 'The balance is how much money this campaign has left to spend'
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Campaign Show"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
            width: 10,
            children: this.renderCards()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
            width: 6,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__.default, {
              address: this.props.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {
              route: `/campaigns/${this.props.address}/requests`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                  primary: true,
                  children: "View Requests"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_web3_js","ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/show.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIiwid2VicGFjazovL2tpY2tzdGFydC8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkNvbnRyaWJ1dGVGb3JtIiwiQ29tcG9uZW50IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJzdGF0ZSIsIlJvdXRlciIsImVycm9yIiwibWVzc2FnZSIsInJlbmRlciIsIm9uU3VibWl0IiwidGFyZ2V0IiwiQ2FtcGFpZ25TaG93IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJzdW1tYXJ5IiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwi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QUFBLFlBREQ7QUF1QkE7O0FBL0VtQzs7QUFrRnJDLCtEQUFlZSxZQUFmLEU7Ozs7Ozs7Ozs7O0FDMUZBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2NhbXBhaWducy9zaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbi8vaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7IC8vZXZlbnQgaXMgdGhlIGFyZ3VtZW50L3BhcmFtZXRlciBzdWNoIGFzIGZ1bmN0aW9uIChpbnB1dCBYKSB7fVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS52YWx1ZSwgJ2V0aGVyJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgUm91dGVyLnJlbG9hZCgpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlLCB2YWx1ZTogJyd9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEZvcm0gb25TdWJtaXQgPSB7dGhpcy5vblN1Ym1pdH0gZXJyb3IgPSB7ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcblx0XHRcdFx0PEZvcm0uRmllbGQ+XHJcblx0XHRcdFx0XHQ8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XHJcblx0XHRcdFx0PE1lc3NhZ2UgZXJyb3IgaGVhZGVyID0gXCJPb3BzIVwiIGNvbnRlbnQgPSB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nID0ge3RoaXMuc3RhdGUubG9hZGluZ30+Q29udHJpYnV0ZSE8L0J1dHRvbj5cclxuXHRcdFx0PC9Gb3JtPlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJzsgLy9DVVNUT00gRlVOQ1RJT04gVE8gR0VUIEEgU1BFQ0lGSUMgQ0FNUEFJR05cclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG5cdFx0Ly9wcm9wcyBoZXJlIHNlcGVyYXRlIGZyb20gdGhlIG9uZSBiZWxvdyBpbiByZW5kZXJcclxuXHRcdC8vcHJvcHMucXVlcnkuYWRkcmVzczsgZ2V0IGFkZHJlc3Mgb2YgY2FtcGFpZ24gZnJvbSB1cmxcclxuXHRcdGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuXHRcdFx0Ly9XZSBjYW4gcmVxdWVzdCB0aGVtIGxhdGVyIGluIGNvbXBvbmVudHMgYXMgdGhpcy5wcm9wcy5iYWxhbmNlIGV0Yy5cclxuXHRcdFx0bWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuXHRcdFx0YmFsYW5jZTogc3VtbWFyeVsxXSxcclxuXHRcdFx0cmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcclxuXHRcdFx0YXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcblx0XHRcdG1hbmFnZXI6IHN1bW1hcnlbNF0sXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyQ2FyZHMoKSB7XHJcblx0XHRjb25zdCB7IGJhbGFuY2UsIG1hbmFnZXIsIG1pbmltdW1Db250cmlidXRpb24sIHJlcXVlc3RzQ291bnQsIGFwcHJvdmVyc0NvdW50IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBtYW5hZ2VyLFxyXG5cdFx0XHRcdG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5JyxcclxuXHRcdFx0XHRzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG5cdFx0XHRcdG1ldGE6ICdNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKScsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdZb3UgbXVzdCBjb250cmlidXRlIGF0bGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZSBhbiBhcHByb3ZlcicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHQnQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LCByZXF1ZXN0IG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnbicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcclxuXHRcdFx0XHRtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpJyxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ1RoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHJcblx0XHRyZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgzPkNhbXBhaWduIFNob3c8L2gzPlxyXG5cdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQuUm93PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcblx0XHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcblx0XHRcdFx0XHRcdFx0PENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdFx0XHRcdDwvR3JpZC5Sb3c+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWQuUm93PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZC5Db2x1bW4+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQuQ29sdW1uPlxyXG5cdFx0XHRcdFx0PC9HcmlkLlJvdz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==