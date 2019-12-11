"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _with = require("@polkadot/ui-api/with");

var _uiIdenticon = _interopRequireDefault(require("@polkadot/ui-identicon"));

var _Context = require("./Status/Context");

var _translate = _interopRequireDefault(require("./translate"));

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class CopyIcon extends _react.default.PureComponent {
  constructor() {
    super(...arguments);

    this.onCopy = account => {
      const {
        onCopy,
        queueAction,
        t
      } = this.props;

      if (onCopy) {
        onCopy(account);
      }

      if (queueAction) {
        queueAction({
          account,
          action: t('clipboard'),
          status: 'queued',
          message: t('address copied')
        });
      }
    };
  }

  render() {
    return _react.default.createElement(_uiIdenticon.default, (0, _extends2.default)({}, this.props, {
      onCopy: this.onCopy
    }));
  }

}

const CopyIconI18N = (0, _translate.default)(CopyIcon);

class IdentityIcon extends _react.default.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isValidator: false
    };
  }

  static getDerivedStateFromProps(_ref, prevState) {
    let {
      session_validators = [],
      staking_bonded,
      value
    } = _ref;
    const address = value ? value.toString() : null;
    const bonded = staking_bonded && staking_bonded.isSome ? staking_bonded.unwrap().toString() : null;
    const isValidator = !!session_validators.find(validator => [address, bonded].includes(validator.toString()));
    return prevState.isValidator !== isValidator ? {
      isValidator
    } : null;
  }

  render() {
    const {
      isValidator
    } = this.state;
    return _react.default.createElement(_Context.QueueConsumer, null, (_ref2) => {
      let {
        queueAction
      } = _ref2;
      return _react.default.createElement(CopyIconI18N, (0, _extends2.default)({
        isHighlight: isValidator
      }, this.props, {
        queueAction: queueAction
      }));
    });
  }

}

var _default = (0, _with.withCalls)('query.session.validators', ['query.staking.bonded', {
  paramName: 'value'
}])(IdentityIcon);

exports.default = _default;