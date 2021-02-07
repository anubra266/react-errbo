function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var styles = {"errContainer":"_2sbxU"};

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidCatch = function componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  };

  _proto.render = function render() {
    if (this.state.errorInfo) {
      return /*#__PURE__*/React.createElement("div", {
        className: styles.errContainer
      }, /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row justify-content-md-center mt-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-9"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col text-danger mb-2"
      }, /*#__PURE__*/React.createElement("h4", null, "Failed to compile"))), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col"
      }, /*#__PURE__*/React.createElement("pre", {
        className: "pt-2 pl-3 pb-2 alert alert-danger"
      }, /*#__PURE__*/React.createElement("code", {
        className: "text-danger"
      }, this.state.error && this.state.error.toString()), this.state.errorInfo.componentStack), /*#__PURE__*/React.createElement("small", {
        className: "text-muted text-sm"
      }, "This error occurred during the build time and cannot be dismissed. -", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://github.com/anubra266"
      }, "anubra266 "), "Error Analyzer")))))));
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(React.Component);

module.exports = ErrorBoundary;
//# sourceMappingURL=index.js.map
