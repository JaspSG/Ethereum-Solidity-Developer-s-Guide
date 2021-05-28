(function() {
var exports = {};
exports.id = "pages/campaigns/requests";
exports.ids = ["pages/campaigns/requests"];
exports.modules = {

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");

var _jsxFileName = "A:\\Documents\\GitHub\\Ethereum-Solidity-Developer-s-Guide\\kickstart\\components\\RequestRow.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RequestRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onApprove", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    });

    _defineProperty(this, "onFinalize", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
    });
  }

  render() {
    const {
      Row,
      Cell
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table; //destrucutring es2015

    const {
      id,
      request,
      approversCount
    } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      disabled: request.complete,
      positive: readyToFinalize && !request.complete,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.fromWei(request.value, 'ether')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.recipient
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: [request.approvalCount, "/", approversCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "green",
          basic: true,
          onClick: this.onApprove,
          children: "Approve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "teal",
          basic: true,
          onClick: this.onFinalize,
          children: "Finalize"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");

var _jsxFileName = "A:\\Documents\\GitHub\\Ethereum-Solidity-Developer-s-Guide\\kickstart\\pages\\campaigns\\requests\\index.js";







class RequestIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  //get address out of URL
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__.default)(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call(); //Fancy javascript 220 to get array of structs from solidity. Cant do it normally, limitations of solidity

    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    return {
      address,
      requests,
      requestCount,
      approversCount
    }; //place return here to work with it in component
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_6__.default //passing all the props
      , {
        //property of react
        id: index,
        request: request,
        address: this.props.address,
        approversCount: this.props.approversCount
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this);
    });
  }

  render() {
    const {
      Header,
      Row,
      HeaderCell,
      Body
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table; //ES 2015 destructuring

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Requests"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
        route: `/campaigns/${this.props.address}/requests/new`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            primary: true,
            floated: "right",
            style: {
              marginBottom: 10
            },
            children: "Add Request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Recipient"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approval Count"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Finalize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {
          children: this.renderRows()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: ["Found ", this.props.requestCount, " requests."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiQ29tcG9uZW50IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwiVGFibGUiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50Iiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSIsIlJlcXVlc3RJbmRleCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVxdWVzdENvdW50IiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0cyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlbmRlclJvd3MiLCJIZWFkZXIiLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRv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O0FBQUE7QUFBQTtBQUFBLG9CQUxELGVBTUMsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORCxlQU9DLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVlDLDhEQUFDLElBQUQ7QUFBQSxvQkFBTyxLQUFLSixVQUFMO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURCxlQXVCQztBQUFBLDZCQUFZLEtBQUt2QyxLQUFMLENBQVcyQixZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUEyQkE7O0FBaEVtQzs7QUFtRXJDLCtEQUFlSCxZQUFmLEU7Ozs7Ozs7Ozs7O0FDMUVBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5cclxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0b25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cdFx0YXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuXHRcdFx0ZnJvbTogYWNjb3VudHNbMF0sXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRvbkZpbmFsaXplID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cdFx0YXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcblx0XHRcdGZyb206IGFjY291bnRzWzBdLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlOyAvL2Rlc3RydWN1dHJpbmcgZXMyMDE1XHJcblx0XHRjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Um93IGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfSBwb3NpdGl2ZT17cmVhZHlUb0ZpbmFsaXplICYmICFyZXF1ZXN0LmNvbXBsZXRlfT5cclxuXHRcdFx0XHQ8Q2VsbD57aWR9PC9DZWxsPlxyXG5cdFx0XHRcdDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfTwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG5cdFx0XHRcdDxDZWxsPlxyXG5cdFx0XHRcdFx0e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fVxyXG5cdFx0XHRcdDwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD5cclxuXHRcdFx0XHRcdHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PlxyXG5cdFx0XHRcdFx0XHRcdEFwcHJvdmVcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvQ2VsbD5cclxuXHRcdFx0XHQ8Q2VsbD5cclxuXHRcdFx0XHRcdHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PlxyXG5cdFx0XHRcdFx0XHRcdEZpbmFsaXplXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0NlbGw+XHJcblx0XHRcdDwvUm93PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuXHJcbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Ly9nZXQgYWRkcmVzcyBvdXQgb2YgVVJMXHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG5cdFx0Y29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuXHRcdGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcblx0XHRjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XHJcblx0XHRjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XHJcblxyXG5cdFx0Ly9GYW5jeSBqYXZhc2NyaXB0IDIyMCB0byBnZXQgYXJyYXkgb2Ygc3RydWN0cyBmcm9tIHNvbGlkaXR5LiBDYW50IGRvIGl0IG5vcm1hbGx5LCBsaW1pdGF0aW9ucyBvZiBzb2xpZGl0eVxyXG5cdFx0Y29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuXHRcdFx0QXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcclxuXHRcdFx0XHQuZmlsbCgpXHJcblx0XHRcdFx0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQgfTsgLy9wbGFjZSByZXR1cm4gaGVyZSB0byB3b3JrIHdpdGggaXQgaW4gY29tcG9uZW50XHJcblx0fVxyXG5cclxuXHRyZW5kZXJSb3dzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxSZXF1ZXN0Um93XHJcblx0XHRcdFx0XHQvL3Bhc3NpbmcgYWxsIHRoZSBwcm9wc1xyXG5cdFx0XHRcdFx0a2V5PXtpbmRleH0gLy9wcm9wZXJ0eSBvZiByZWFjdFxyXG5cdFx0XHRcdFx0aWQ9e2luZGV4fVxyXG5cdFx0XHRcdFx0cmVxdWVzdD17cmVxdWVzdH1cclxuXHRcdFx0XHRcdGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuXHRcdFx0XHRcdGFwcHJvdmVyc0NvdW50PXt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlOyAvL0VTIDIwMTUgZGVzdHJ1Y3R1cmluZ1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8aDM+UmVxdWVzdHM8L2gzPlxyXG5cdFx0XHRcdDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcblx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcblx0XHRcdFx0XHRcdFx0QWRkIFJlcXVlc3RcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHRcdDxIZWFkZXI+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvSGVhZGVyPlxyXG5cdFx0XHRcdFx0PEJvZHk+e3RoaXMucmVuZGVyUm93cygpfTwvQm9keT5cclxuXHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdDxkaXY+Rm91bmQge3RoaXMucHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0cy48L2Rpdj5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=