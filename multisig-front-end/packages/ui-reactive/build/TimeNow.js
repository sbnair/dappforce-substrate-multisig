"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TimeNow = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiApi = require("@polkadot/ui-api");

var _Elapsed = _interopRequireDefault(require("./Elapsed"));

// Copyright 2017-2019 @polkadot/ui-reactive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class TimeNow extends _react.default.PureComponent {
  render() {
    const {
      children,
      className,
      label = '',
      style,
      timestamp_now
    } = this.props;
    return _react.default.createElement("div", {
      className: className,
      style: style
    }, label, _react.default.createElement(_Elapsed.default, {
      value: timestamp_now
    }), children);
  }

}

exports.TimeNow = TimeNow;

var _default = (0, _uiApi.withCall)('query.timestamp.now')(TimeNow);

exports.default = _default;