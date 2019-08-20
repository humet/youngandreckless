webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_formErrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/formErrors */ "./components/formErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/robhumar/Sites/youngandreckless/components/form.js";




var Form =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Form, _Component);

  function Form(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Form);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Form).call(this, props));
    _this.state = {
      email: "",
      optin: "",
      formErrors: {
        email: '',
        optin: ''
      },
      emailValid: false,
      optinTicked: false,
      formValid: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Form, [{
    key: "handleUserInput",
    value: function handleUserInput(e) {
      var _this2 = this;

      var name = e.target.name;
      var value = e.target.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value), function () {
        _this2.validateField(name, value);
      });
    }
  }, {
    key: "handleUserCheckbox",
    value: function handleUserCheckbox(e) {
      var _this3 = this;

      var name = e.target.name;
      var value = e.target.checked;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value), function () {
        _this3.validateField(name, value);
      });
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(e) {
      var data = new FormData();
      data.append("email", this.state.email);
      data.append("ajax", "1");
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function () {
        if (this.readyState === 4) {
          alert(this.response);
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/confirm');
        }
      });
      xhr.open("POST", "https://yr.dev.ps-tek.de/selligent/gamification/ajax");
      xhr.send(data);
      e.preventDefault();
    }
  }, {
    key: "validateField",
    value: function validateField(fieldName, value) {
      var fieldValidationErrors = this.state.formErrors;
      var emailValid = this.state.emailValid;
      var optinTicked = this.state.optinTicked;

      switch (fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : 'Please enter a valid email.';
          break;

        case 'optin':
          optinTicked = value == true;
          fieldValidationErrors.optin = optinTicked ? '' : 'You must agree to the terms and conditions.';
          break;

        default:
          break;
      }

      this.setState({
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        optinTicked: optinTicked
      }, this.validateForm);
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      this.setState({
        formValid: this.state.emailValid && this.state.optinTicked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        style: {
          marginBottom: 20
        },
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "emailWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        style: {
          fontWeight: "bold",
          textTransform: "uppercase",
          display: "block",
          width: 160,
          "float": "left"
        },
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "E-Mail Adresse:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "email",
        style: {
          padding: 10,
          marginBottom: 10
        },
        id: "email",
        type: "email",
        name: "email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this4.handleUserInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "optin",
        type: "checkbox",
        id: "optin",
        style: {
          margin: "0 10px 0",
          "float": "left"
        },
        checked: this.state.optin,
        onChange: function onChange(event) {
          return _this4.handleUserCheckbox(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "emailOptinLabel small",
        htmlFor: "optin",
        style: {
          "float": "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Hinweis: Mit Deiner Einwilligung best\xE4tigst du uns, Dich regelm\xE4\xDFig per E-Mail \xFCber Neuerungen und aktuelle Angebote von Young & Reckless informieren zu d\xFCrfen. Deine E-Mail Adresse wird nicht an Dritte weitergegeben. Eine Abmeldung ist jederzeit m\xF6glich. Die Datenschutzhinweise habe ich zur Kenntnis genommen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_formErrors__WEBPACK_IMPORTED_MODULE_7__["default"], {
        formErrors: this.state.formErrors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick(event) {
          return _this4.handleButtonClick(event);
        },
        disabled: !this.state.formValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Jetzt teilnehmen")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.559538af9ee616ff4f16.hot-update.js.map