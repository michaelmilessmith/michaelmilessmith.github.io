"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      result: 'No Pizza',
      people: 0,
      slices: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "handlePeopleChange",
    value: function handlePeopleChange(e) {
      console.log(this.state);
      this.change(e.target.value, this.state.slices);
    }
  }, {
    key: "handleSliceChange",
    value: function handleSliceChange(e) {
      this.change(this.state.people, e.target.value);
    }
  }, {
    key: "change",
    value: function change(people, slices) {
      this.setState({
        people: people,
        slices: slices,
        result: people * slices
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var solution = "No Pizza",
          slicesAvailible = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.options.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (key >= this.state.result) {
            solution = this.props.options.get(key);
            slicesAvailible = key;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return React.createElement(
        "div",
        null,
        React.createElement(Input, { handlePeopleChange: function handlePeopleChange(e) {
            return _this2.handlePeopleChange(e);
          }, handleSliceChange: function handleSliceChange(e) {
            return _this2.handleSliceChange(e);
          } }),
        React.createElement(Result, { solution: solution, result: this.state.result, slices: slicesAvailible, people: this.state.people })
      );
    }
  }]);

  return App;
}(React.Component);

var Input = function (_React$Component2) {
  _inherits(Input, _React$Component2);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "form",
          null,
          React.createElement(
            "div",
            { className: "form-group row" },
            React.createElement(
              "div",
              { className: "col-sm-12" },
              React.createElement("input", { type: "number", onChange: function onChange(e) {
                  return _this4.props.handlePeopleChange(e);
                }, placeholder: "Number of People", className: "form-control" })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group row" },
            React.createElement(
              "div",
              { className: "col-sm-12" },
              React.createElement("input", { type: "number", onChange: function onChange(e) {
                  return _this4.props.handleSliceChange(e);
                }, placeholder: "Number of Slices per Person", className: "form-control" })
            )
          )
        )
      );
    }
  }]);

  return Input;
}(React.Component);

var Result = function (_React$Component3) {
  _inherits(Result, _React$Component3);

  function Result() {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
  }

  _createClass(Result, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "p",
          null,
          React.createElement(
            "span",
            { className: "lead" },
            React.createElement(
              "strong",
              null,
              this.props.solution
            )
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            this.props.slices
          ),
          " slices"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            this.props.slices - this.props.result
          ),
          " left over"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            (this.props.slices / this.props.people).toFixed(2)
          ),
          " slices each"
        )
      )

      // for a total of  slices,
      // leaving <strong>{this.props.slices - this.props.result}</strong> left over or
      // <strong> {(this.props.slices / this.props.people).toFixed(2)}</strong> slices each</p>);
      ;
    }
  }]);

  return Result;
}(React.Component);

var options = new Map();
options.set(16, "Two Mediums");
options.set(20, "Two Larges");
options.set(32, "Four Mediums");
options.set(36, "Two Larges, Two Mediums");
options.set(40, "Four Larges");
options.set(48, "Six Mediums");
options.set(52, "Two Larges, Four Mediums");
options.set(56, "Four Larges, Two Mediums");
options.set(60, "Six Larges");
options.set(64, "Eight Mediums");
options.set(68, "Two Larges, Six Mediums");
options.set(72, "Four Larges, Four Mediums");
options.set(76, "Six Larges, Two Mediums");
options.set(80, "Eight Larges");

ReactDOM.render(React.createElement(App, { options: options }), document.getElementById('container'));
