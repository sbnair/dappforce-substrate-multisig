"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _media = _interopRequireDefault(require("./media"));

var _util = require("./util");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    align-items: flex-start;\n    display: flex;\n    flex: 1 1;\n    margin: 0;\n    text-align: left;\n\n    > label {\n      align-items: center;\n      display: flex;\n      flex: 0 0 15rem;\n      justify-content: flex-end;\n      min-height: 2.715rem; /* more-or-less 2 lines with adjustments, 38px as per input box */\n      min-width: 15rem;\n      text-align: right;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const defaultLabel = // node?
_react.default.createElement("div", null, "\xA0");

const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Labelled__Wrapper",
  componentId: "sc-1hj9moc-0"
})(["display:block;> label{margin:0.25rem 0 0 0;padding-right:0.5rem;position:relative;.help-hover{background:#222;border-radius:0.25rem;color:#fff;display:none;padding:0.5rem 1rem;position:absolute;text-align:left;top:0.5rem;left:2.5rem;right:-5rem;z-index:10;opacity:.9;}i.icon.help{margin:0 0 0 0.25rem;line-height:1rem;}&.with-help:hover .help-hover{display:block;}}&.label-small{display:block;> label{margin:0;min-width:0;padding-right:0;}}> .ui--Labelled-content{box-sizing:border-box;flex:1 1;min-width:0;}", ""], _media.default.DESKTOP(_templateObject()));

class Labelled extends _react.default.PureComponent {
  render() {
    const {
      className,
      children,
      help,
      isSmall,
      isHidden,
      label = defaultLabel,
      style,
      withLabel = true
    } = this.props;

    if (isHidden) {
      return null;
    } else if (!withLabel) {
      return _react.default.createElement("div", {
        className: className
      }, children);
    }

    const labelNode = help ? _react.default.createElement("label", {
      className: "with-help"
    }, label, _react.default.createElement(_Icon.default, {
      name: "help circle"
    }), _react.default.createElement("div", {
      className: "help-hover"
    }, help)) : _react.default.createElement("label", null, label);
    return _react.default.createElement(Wrapper, {
      className: (0, _util.classes)('ui--Labelled', isSmall ? 'label-small' : '', className),
      style: style
    }, labelNode, _react.default.createElement("div", {
      className: "ui--Labelled-content"
    }, children));
  }

}

exports.default = Labelled;