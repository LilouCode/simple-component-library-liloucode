"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./TextInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextInput = _ref => {
  let {
    type = "text",
    label,
    placeholder,
    value,
    onChange: _onChange,
    helpText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "simple-form-group"
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    className: "simple-text-label"
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    className: "simple-text-input",
    value: value,
    onChange: e => _onChange && _onChange(e.target.value),
    placeholder: placeholder
  }), helpText && /*#__PURE__*/_react.default.createElement("small", {
    className: "simple-form-text"
  }, helpText));
};

var _default = TextInput;
exports.default = _default;