(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', null);
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

},{"react":"react"}],2:[function(require,module,exports){
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
          'section',
          null,
          _react2.default.createElement('img', { src: 'img/cover.jpg', alt: 'Cover Image' }),
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-light' },
            _react2.default.createElement('span', { className: 'col-sm-3' }),
            _react2.default.createElement(
              _reactRouter.IndexLink,
              { to: '/', className: 'nav-link col-sm-2', activeClassName: 'active font-weight-bold' },
              'Home'
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

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.jQuery = require('jquery');
global.Tether = require('tether');

var routes = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _layout2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default })
  )
);

(0, _reactDom.render)(routes, document.getElementById('react-root'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/home":1,"./components/layout":2,"babel-polyfill":"babel-polyfill","jquery":"jquery","react":"react","react-dom":"react-dom","react-router":"react-router","tether":"tether"}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9jb21wb25lbnRzL2hvbWUuanN4IiwiX3NjcmlwdHMvY29tcG9uZW50cy9sYXlvdXQuanN4IiwiX3NjcmlwdHMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLEk7OztBQUNuQixnQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUdBQ1gsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQU8sOENBQVA7QUFHRDs7Ozs7O2tCQVRrQixJOzs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLGdCQUFuQjtBQUNMO0FBQUE7QUFBQTtBQUNFLGlEQUFLLEtBQUksZUFBVCxFQUF5QixLQUFJLGFBQTdCLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHFCQUFmO0FBQ0Usb0RBQU0sV0FBVSxVQUFoQixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFXLElBQUcsR0FBZCxFQUFrQixXQUFVLG1CQUE1QixFQUFnRCxpQkFBZ0IseUJBQWhFO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFNLElBQUcsUUFBVCxFQUFrQixXQUFVLG1CQUE1QixFQUFnRCxpQkFBZ0IseUJBQWhFO0FBQUE7QUFBQTtBQUhGLFdBRkY7QUFPRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxtREFBSyxLQUFJLGdCQUFULEVBQTBCLEtBQUksZUFBOUIsRUFBOEMsV0FBVSxlQUF4RDtBQURGO0FBUEYsU0FESztBQVlMO0FBQUE7QUFBQTtBQUNHLGVBQUssS0FBTCxDQUFXO0FBRGQ7QUFaSyxPQUFQO0FBZ0JEOzs7Ozs7a0JBbEJrQixNOzs7Ozs7QUNIckI7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsUUFBUSxRQUFSLENBQWhCO0FBQ0EsT0FBTyxNQUFQLEdBQWdCLFFBQVEsUUFBUixDQUFoQjs7QUFFQSxJQUFNLFNBQVM7QUFBQTtBQUFBLElBQVEsaUNBQVI7QUFDYjtBQUFBO0FBQUEsTUFBTyxNQUFLLEdBQVosRUFBZ0IsMkJBQWhCO0FBQ0UsNkRBQVkseUJBQVo7QUFERjtBQURhLENBQWY7O0FBTUEsc0JBQU8sTUFBUCxFQUFlLFNBQVMsY0FBVCxDQUF3QixZQUF4QixDQUFmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uPlxuICAgICAgXG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgSW5kZXhMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvY292ZXIuanBnXCIgYWx0PVwiQ292ZXIgSW1hZ2VcIiAvPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtc20tM1wiIC8+XG4gICAgICAgICAgPEluZGV4TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGluayBjb2wtc20tMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZSBmb250LXdlaWdodC1ib2xkXCI+SG9tZTwvSW5kZXhMaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sLXNtLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmUgZm9udC13ZWlnaHQtYm9sZFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUGljXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFyLmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGhvdG9cIiBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8bWFpbj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnXG5cbmdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKVxuZ2xvYmFsLlRldGhlciA9IHJlcXVpcmUoJ3RldGhlcicpXG5cbmNvbnN0IHJvdXRlcyA9IDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xheW91dH0+XG4gICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lfSAvPlxuICA8L1JvdXRlPlxuPC9Sb3V0ZXI+XG5cbnJlbmRlcihyb3V0ZXMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290JykpIl19
