"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AccountIndexDisplay = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiApi = require("@polkadot/ui-api");

// Copyright 2017-2019 @polkadot/ui-reactive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class AccountIndexDisplay extends _react.default.PureComponent {
  render() {
    const {
      children,
      className,
      label = '',
      style,
      accounts_idAndIndex = []
    } = this.props;
    const [, accountIndex] = accounts_idAndIndex;
    return _react.default.createElement("div", {
      className: className,
      style: style
    }, label, accountIndex ? accountIndex.toString() : '-', children);
  }

}

exports.AccountIndexDisplay = AccountIndexDisplay;

var _default = (0, _uiApi.withCall)('derive.accounts.idAndIndex', {
  paramName: 'params'
})(AccountIndexDisplay);

exports.default = _default;