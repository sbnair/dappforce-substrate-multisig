"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("../util");

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class ButtonDivider extends _react.default.Component {
  render() {
    const {
      className,
      style
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _util.classes)('ui button compact mini basic', className),
      style: style
    });
  }

}

exports.default = ButtonDivider;