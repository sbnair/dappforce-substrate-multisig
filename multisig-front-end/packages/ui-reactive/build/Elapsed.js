"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// Copyright 2017-2019 @polkadot/ui-reactive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const TICK_TIMEOUT = 100;
const tickers = new Map();

function tick() {
  const now = new Date();

  for (const ticker of tickers.values()) {
    ticker(now);
  }

  setTimeout(tick, TICK_TIMEOUT);
}

tick();

class Elapsed extends _react.default.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillMount() {
    tickers.set(this, now => {
      this.setState({
        now
      });
    });
  }

  componentWillUnmount() {
    tickers.delete(this);
  }

  render() {
    const {
      className,
      style,
      value
    } = this.props;
    const {
      now
    } = this.state;
    return _react.default.createElement("div", {
      className: ['ui--Elapsed', className].join(' '),
      style: style
    }, this.getDisplayValue(now, value));
  }

  getDisplayValue(now, value) {
    const tsNow = now && now.getTime() || 0;
    const tsValue = value && (value.getTime ? value.getTime() : value) || 0;
    let display = '0.0s';

    if (tsNow && tsValue) {
      const elapsed = Math.max(Math.abs(tsNow - tsValue), 0) / 1000;

      if (elapsed < 15) {
        display = "".concat(elapsed.toFixed(1), "s");
      } else if (elapsed < 60) {
        display = "".concat(elapsed | 0, "s");
      } else if (elapsed < 3600) {
        display = "".concat(elapsed / 60 | 0, "m");
      } else {
        display = "".concat(elapsed / 3600 | 0, "h");
      }
    }

    return display;
  }

}

exports.default = Elapsed;