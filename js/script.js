(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("section", { className: "row" });
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-sm-4" },
          _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
              "div",
              { className: "card-header" },
              "Intro"
            ),
            _react2.default.createElement(
              "div",
              { className: "card-block" },
              _react2.default.createElement(
                "p",
                { className: "card-text" },
                "I'm Lionel, Frontend Developer Expert at ",
                _react2.default.createElement(
                  "a",
                  { href: "http://kms-technology.com" },
                  "KMS Technology"
                ),
                " and a trainer in KMS Launch Program."
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-sm-8" },
          _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
              "div",
              { className: "card-block" },
              _react2.default.createElement(
                "p",
                { className: "card-text" },
                _react2.default.createElement(
                  "div",
                  null,
                  "Software technology professional well versed in multiple platforms focused on building robust web applications while leveraging proven industry best practices. Always open to learning new technologies, languages, platforms, primarily interested in working with a strong team focused on delivering working software to clients."
                ),
                _react2.default.createElement(
                  "div",
                  null,
                  "I'm interested in full-stack open source development opportunities, preferably with a front-end, especially Data Visualization & Analyses in the browser."
                ),
                _react2.default.createElement(
                  "dl",
                  null,
                  _react2.default.createElement(
                    "dt",
                    null,
                    "Front-End Specialties:"
                  ),
                  _react2.default.createElement(
                    "dd",
                    null,
                    "SPA, HTML5, CSS3, SASS, JavaScript, jQuery, AngularJS, ReactJS, Bower, Gulp, NodeJS, NPM, ExpressJS, Twitter Bootstrap, etc..."
                  ),
                  _react2.default.createElement(
                    "dt",
                    null,
                    "Java/Open Source Specialties:"
                  ),
                  _react2.default.createElement(
                    "dd",
                    null,
                    "Java 8, J2EE, Spring Boot, Hibernate, MySQL, Maven, JUnit, Mockito, Tomcat, Dropwizard, Elasticsearch, Cassandra, etc..."
                  ),
                  _react2.default.createElement(
                    "dt",
                    null,
                    "Microsoft/.NET Specialties:"
                  ),
                  _react2.default.createElement(
                    "dd",
                    null,
                    "C#, ASP.NET Core, LINQ, EF, SQL Server, etc..."
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'main-container' },
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('img', { src: 'img/cover.jpg', alt: 'Cover Image' }),
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-light' },
            _react2.default.createElement('span', { className: 'col-sm-3' }),
            _react2.default.createElement(
              _reactRouter.IndexLink,
              { to: '/', className: 'nav-link col-sm-2', activeClassName: 'active font-weight-bold' },
              'Post'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/about', className: 'nav-link col-sm-2', activeClassName: 'active font-weight-bold' },
              'About'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'profilePic' },
            _react2.default.createElement('img', { src: 'img/avatar.jpg', alt: 'Profile Photo', className: 'img-thumbnail' })
          )
        ),
        _react2.default.createElement(
          'main',
          null,
          this.props.children
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
(function (global){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _layout = require('./components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _about = require('./components/about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.jQuery = require('jquery');
global.Tether = require('tether');

var routes = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _layout2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _about2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _home2.default })
  )
);

(0, _reactDom.render)(routes, document.getElementById('react-root'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/about":1,"./components/home":2,"./components/layout":3,"babel-polyfill":"babel-polyfill","jquery":"jquery","react":"react","react-dom":"react-dom","react-router":"react-router","tether":"tether"}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzeCIsIl9zY3JpcHRzL2NvbXBvbmVudHMvaG9tZS5qc3giLCJfc2NyaXB0cy9jb21wb25lbnRzL2xheW91dC5qc3giLCJfc2NyaXB0cy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWCxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTywyQ0FBUyxXQUFVLEtBQW5CLEdBQVA7QUFFRDs7Ozs7O2tCQVJrQixLOzs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUNuQixnQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUdBQ1gsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxLQUFuQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFBQTtBQUFBLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQzJDO0FBQUE7QUFBQSxvQkFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQSxpQkFEM0M7QUFBQTtBQUFBO0FBREY7QUFKRjtBQURGLFNBREs7QUFhTDtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFdBQVUsV0FBYjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFIRjtBQURGO0FBREY7QUFERjtBQWJLLE9BQVA7QUFnQ0Q7Ozs7OztrQkF0Q2tCLEk7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUIsTTs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFTLFdBQVUsZ0JBQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQ0UsaURBQUssS0FBSSxlQUFULEVBQXlCLEtBQUksYUFBN0IsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUscUJBQWY7QUFDRSxvREFBTSxXQUFVLFVBQWhCLEdBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVcsSUFBRyxHQUFkLEVBQWtCLFdBQVUsbUJBQTVCLEVBQWdELGlCQUFnQix5QkFBaEU7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQU0sSUFBRyxRQUFULEVBQWtCLFdBQVUsbUJBQTVCLEVBQWdELGlCQUFnQix5QkFBaEU7QUFBQTtBQUFBO0FBSEYsV0FGRjtBQU9FO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLG1EQUFLLEtBQUksZ0JBQVQsRUFBMEIsS0FBSSxlQUE5QixFQUE4QyxXQUFVLGVBQXhEO0FBREY7QUFQRixTQURLO0FBWUw7QUFBQTtBQUFBO0FBQ0csZUFBSyxLQUFMLENBQVc7QUFEZDtBQVpLLE9BQVA7QUFnQkQ7Ozs7OztrQkFsQmtCLE07Ozs7OztBQ0hyQjs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsT0FBTyxNQUFQLEdBQWdCLFFBQVEsUUFBUixDQUFoQjtBQUNBLE9BQU8sTUFBUCxHQUFnQixRQUFRLFFBQVIsQ0FBaEI7O0FBRUEsSUFBTSxTQUFTO0FBQUE7QUFBQSxJQUFRLGlDQUFSO0FBQ2I7QUFBQTtBQUFBLE1BQU8sTUFBSyxHQUFaLEVBQWdCLDJCQUFoQjtBQUNFLDZEQUFZLHlCQUFaLEdBREY7QUFFRSx3REFBTyxNQUFLLE9BQVosRUFBb0IsMEJBQXBCLEdBRkY7QUFHRSx3REFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCO0FBSEY7QUFEYSxDQUFmOztBQVFBLHNCQUFPLE1BQVAsRUFBZSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIEludHJvXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgSSdtIExpb25lbCwgRnJvbnRlbmQgRGV2ZWxvcGVyIEV4cGVydCBhdCA8YSBocmVmPVwiaHR0cDovL2ttcy10ZWNobm9sb2d5LmNvbVwiPktNUyBUZWNobm9sb2d5PC9hPiBhbmQgYSB0cmFpbmVyIGluIEtNUyBMYXVuY2ggUHJvZ3JhbS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgPGRpdj5Tb2Z0d2FyZSB0ZWNobm9sb2d5IHByb2Zlc3Npb25hbCB3ZWxsIHZlcnNlZCBpbiBtdWx0aXBsZSBwbGF0Zm9ybXMgZm9jdXNlZCBvbiBidWlsZGluZyByb2J1c3Qgd2ViIGFwcGxpY2F0aW9ucyB3aGlsZSBsZXZlcmFnaW5nIHByb3ZlbiBpbmR1c3RyeSBiZXN0IHByYWN0aWNlcy4gQWx3YXlzIG9wZW4gdG8gbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcywgbGFuZ3VhZ2VzLCBwbGF0Zm9ybXMsIHByaW1hcmlseSBpbnRlcmVzdGVkIGluIHdvcmtpbmcgd2l0aCBhIHN0cm9uZyB0ZWFtIGZvY3VzZWQgb24gZGVsaXZlcmluZyB3b3JraW5nIHNvZnR3YXJlIHRvIGNsaWVudHMuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+SSdtIGludGVyZXN0ZWQgaW4gZnVsbC1zdGFjayBvcGVuIHNvdXJjZSBkZXZlbG9wbWVudCBvcHBvcnR1bml0aWVzLCBwcmVmZXJhYmx5IHdpdGggYSBmcm9udC1lbmQsIGVzcGVjaWFsbHkgRGF0YSBWaXN1YWxpemF0aW9uICYgQW5hbHlzZXMgaW4gdGhlIGJyb3dzZXIuPC9kaXY+XG4gICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICA8ZHQ+RnJvbnQtRW5kIFNwZWNpYWx0aWVzOjwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPlNQQSwgSFRNTDUsIENTUzMsIFNBU1MsIEphdmFTY3JpcHQsIGpRdWVyeSwgQW5ndWxhckpTLCBSZWFjdEpTLCBCb3dlciwgR3VscCwgTm9kZUpTLCBOUE0sIEV4cHJlc3NKUywgVHdpdHRlciBCb290c3RyYXAsIGV0Yy4uLjwvZGQ+XG4gICAgICAgICAgICAgICAgPGR0PkphdmEvT3BlbiBTb3VyY2UgU3BlY2lhbHRpZXM6PC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+SmF2YSA4LCBKMkVFLCBTcHJpbmcgQm9vdCwgSGliZXJuYXRlLCBNeVNRTCwgTWF2ZW4sIEpVbml0LCBNb2NraXRvLCBUb21jYXQsIERyb3B3aXphcmQsIEVsYXN0aWNzZWFyY2gsIENhc3NhbmRyYSwgZXRjLi4uPC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+TWljcm9zb2Z0Ly5ORVQgU3BlY2lhbHRpZXM6PC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+QyMsIEFTUC5ORVQgQ29yZSwgTElOUSwgRUYsIFNRTCBTZXJ2ZXIsIGV0Yy4uLjwvZGQ+XG4gICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgSW5kZXhMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvY292ZXIuanBnXCIgYWx0PVwiQ292ZXIgSW1hZ2VcIiAvPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtc20tM1wiIC8+XG4gICAgICAgICAgPEluZGV4TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGluayBjb2wtc20tMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZSBmb250LXdlaWdodC1ib2xkXCI+UG9zdDwvSW5kZXhMaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sLXNtLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmUgZm9udC13ZWlnaHQtYm9sZFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUGljXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFyLmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGhvdG9cIiBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3A+XG4gICAgICA8bWFpbj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0J1xuXG5nbG9iYWwualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jylcbmdsb2JhbC5UZXRoZXIgPSByZXF1aXJlKCd0ZXRoZXInKVxuXG5jb25zdCByb3V0ZXMgPSA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD1cImFib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gIDwvUm91dGU+XG48L1JvdXRlcj5cblxucmVuZGVyKHJvdXRlcywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKSkiXX0=
