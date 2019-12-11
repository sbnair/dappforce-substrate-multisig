"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/elements/Label/Label"));

var _index = _interopRequireDefault(require("@polkadot/df-settings/index"));

var _util = require("./util");

var _Icon = _interopRequireDefault(require("./Icon"));

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class Bubble extends _react.default.PureComponent {
  render() {
    const {
      color,
      children,
      className,
      icon,
      label
    } = this.props;
    return _react.default.createElement(_Label.default, {
      className: (0, _util.classes)("theme--".concat(_index.default.uiTheme), 'ui--Bubble', className),
      color: color
    }, _react.default.createElement("div", {
      className: "ui--Bubble-header"
    }, icon ? _react.default.createElement(_Icon.default, {
      name: icon,
      size: "large"
    }) : undefined, label ? _react.default.createElement("div", {
      className: "text"
    }, label) : undefined), _react.default.createElement("div", {
      className: "ui--Bubble-children"
    }, children));
  }

}

exports.default = Bubble;