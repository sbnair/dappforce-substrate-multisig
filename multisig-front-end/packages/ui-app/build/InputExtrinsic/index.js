"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./InputExtrinsic.css");

var _react = _interopRequireDefault(require("react"));

var _uiApi = require("@polkadot/ui-api");

var _Labelled = _interopRequireDefault(require("../Labelled"));

var _translate = _interopRequireDefault(require("../translate"));

var _SelectMethod = _interopRequireDefault(require("./SelectMethod"));

var _SelectSection = _interopRequireDefault(require("./SelectSection"));

var _method = _interopRequireDefault(require("./options/method"));

var _section = _interopRequireDefault(require("./options/section"));

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class InputExtrinsic extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.state = void 0;

    this.onKeyChange = newValue => {
      const {
        onChange
      } = this.props;
      const {
        value
      } = this.state;

      if (value.section === newValue.section && value.method === newValue.method) {
        return;
      }

      this.setState({
        value: newValue
      }, () => onChange(newValue));
    };

    this.onSectionChange = newSection => {
      const {
        api
      } = this.props;
      const {
        value
      } = this.state;

      if (newSection === value.section) {
        return;
      }

      const optionsMethod = (0, _method.default)(api, newSection);
      const fn = api.tx[newSection][optionsMethod[0].value];
      this.setState({
        optionsMethod
      }, () => this.onKeyChange(fn));
    };

    this.state = {
      value: this.props.defaultValue
    };
  }

  static getDerivedStateFromProps(_ref, _ref2) {
    let {
      api
    } = _ref;
    let {
      value
    } = _ref2;
    return {
      optionsMethod: (0, _method.default)(api, value.section),
      optionsSection: (0, _section.default)(api)
    };
  }

  render() {
    const {
      api,
      className,
      help,
      label,
      style,
      withLabel
    } = this.props;
    const {
      optionsMethod,
      optionsSection,
      value
    } = this.state;
    return _react.default.createElement("div", {
      className: className,
      style: style
    }, _react.default.createElement(_Labelled.default, {
      help: help,
      label: label,
      withLabel: withLabel
    }, _react.default.createElement("div", {
      className: " ui--DropdownLinked ui--row"
    }, _react.default.createElement(_SelectSection.default, {
      className: "small",
      onChange: this.onSectionChange,
      options: optionsSection,
      value: value
    }), _react.default.createElement(_SelectMethod.default, {
      api: api,
      className: "large",
      onChange: this.onKeyChange,
      options: optionsMethod,
      value: value
    }))));
  }

}

var _default = (0, _uiApi.withMulti)(InputExtrinsic, _translate.default, _uiApi.withApi);

exports.default = _default;