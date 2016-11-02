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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      posts: [],
      dateOptions: {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      }
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          posts = _state.posts,
          dateOptions = _state.dateOptions;

      return _react2.default.createElement(
        'section',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(
            'div',
            { className: 'card' },
            _react2.default.createElement(
              'div',
              { className: 'card-header' },
              'Intro'
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-block' },
              _react2.default.createElement(
                'p',
                { className: 'card-text' },
                'I\'m Lionel, Frontend Developer Expert at ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://kms-technology.com' },
                  'KMS Technology'
                ),
                ' and a trainer in KMS Launch Program.'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          posts.map(function (post) {
            return _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-block' },
                _react2.default.createElement(
                  'label',
                  null,
                  new Date(post.time).toLocaleTimeString("en-us", dateOptions)
                ),
                _react2.default.createElement('p', { className: 'card-text', dangerouslySetInnerHTML: { __html: post.content } })
              )
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'card' },
            _react2.default.createElement(
              'div',
              { className: 'card-block' },
              _react2.default.createElement(
                'p',
                { className: 'card-text' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Software technology professional well versed in multiple platforms focused on building robust web applications while leveraging proven industry best practices. Always open to learning new technologies, languages, platforms, primarily interested in working with a strong team focused on delivering working software to clients.'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'I\'m interested in full-stack open source development opportunities, preferably with a front-end, especially Data Visualization & Analyses in the browser.'
                ),
                _react2.default.createElement(
                  'dl',
                  null,
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Front-End Specialties:'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'SPA, HTML5, CSS3, SASS, JavaScript, jQuery, AngularJS, ReactJS, Bower, Gulp, NodeJS, NPM, ExpressJS, Twitter Bootstrap, etc...'
                  ),
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Java/Open Source Specialties:'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'Java 8, J2EE, Spring Boot, Hibernate, MySQL, Maven, JUnit, Mockito, Tomcat, Dropwizard, Elasticsearch, Cassandra, etc...'
                  ),
                  _react2.default.createElement(
                    'dt',
                    null,
                    'Microsoft/.NET Specialties:'
                  ),
                  _react2.default.createElement(
                    'dd',
                    null,
                    'C#, ASP.NET Core, LINQ, EF, SQL Server, etc...'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var posts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, post;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _jquery2.default.ajax('posts/index.json');

              case 2:
                posts = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = posts[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 16;
                  break;
                }

                post = _step.value;
                _context.next = 12;
                return _jquery2.default.ajax('posts/' + post.content + '.html');

              case 12:
                post.content = _context.sent;

              case 13:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 16:
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 22:
                _context.prev = 22;
                _context.prev = 23;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 25:
                _context.prev = 25;

                if (!_didIteratorError) {
                  _context.next = 28;
                  break;
                }

                throw _iteratorError;

              case 28:
                return _context.finish(25);

              case 29:
                return _context.finish(22);

              case 30:
                this.setState({ posts: posts });

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 18, 22, 30], [23,, 25, 29]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

},{"jquery":"jquery","react":"react"}],3:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzeCIsIl9zY3JpcHRzL2NvbXBvbmVudHMvaG9tZS5qc3giLCJfc2NyaXB0cy9jb21wb25lbnRzL2xheW91dC5qc3giLCJfc2NyaXB0cy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWCxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTywyQ0FBUyxXQUFVLEtBQW5CLEdBQVA7QUFFRDs7Ozs7O2tCQVJrQixLOzs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFDbkIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTyxFQURJO0FBRVgsbUJBQWE7QUFDWCxpQkFBUyxNQURFLEVBQ00sTUFBTSxTQURaLEVBQ3VCLE9BQU8sT0FEOUI7QUFFWCxhQUFLLFNBRk0sRUFFSyxNQUFNLFNBRlgsRUFFc0IsUUFBUTtBQUY5QjtBQUZGLEtBQWI7QUFGaUI7QUFTbEI7Ozs7NkJBRVE7QUFBQSxtQkFDd0IsS0FBSyxLQUQ3QjtBQUFBLFVBQ0MsS0FERCxVQUNDLEtBREQ7QUFBQSxVQUNRLFdBRFIsVUFDUSxXQURSOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxLQUFuQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFBQTtBQUFBLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFB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TyxNQUFLLEdBQVosRUFBZ0IsMkJBQWhCO0FBQ0UsNkRBQVkseUJBQVosR0FERjtBQUVFLHdEQUFPLE1BQUssT0FBWixFQUFvQiwwQkFBcEIsR0FGRjtBQUdFLHdEQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEI7QUFIRjtBQURhLENBQWY7O0FBUUEsc0JBQU8sTUFBUCxFQUFlLFNBQVMsY0FBVCxDQUF3QixZQUF4QixDQUFmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICA8L3NlY3Rpb24+XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgcG9zdHM6IFtdLFxuICAgICAgZGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLCBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBvc3RzLCBkYXRlT3B0aW9ucyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgSW50cm9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICBJJ20gTGlvbmVsLCBGcm9udGVuZCBEZXZlbG9wZXIgRXhwZXJ0IGF0IDxhIGhyZWY9XCJodHRwOi8va21zLXRlY2hub2xvZ3kuY29tXCI+S01TIFRlY2hub2xvZ3k8L2E+IGFuZCBhIHRyYWluZXIgaW4gS01TIExhdW5jaCBQcm9ncmFtLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8bGFiZWw+e25ldyBEYXRlKHBvc3QudGltZSkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tdXNcIiwgZGF0ZU9wdGlvbnMpfTwvbGFiZWw+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5jb250ZW50fX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgPGRpdj5Tb2Z0d2FyZSB0ZWNobm9sb2d5IHByb2Zlc3Npb25hbCB3ZWxsIHZlcnNlZCBpbiBtdWx0aXBsZSBwbGF0Zm9ybXMgZm9jdXNlZCBvbiBidWlsZGluZyByb2J1c3Qgd2ViIGFwcGxpY2F0aW9ucyB3aGlsZSBsZXZlcmFnaW5nIHByb3ZlbiBpbmR1c3RyeSBiZXN0IHByYWN0aWNlcy4gQWx3YXlzIG9wZW4gdG8gbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcywgbGFuZ3VhZ2VzLCBwbGF0Zm9ybXMsIHByaW1hcmlseSBpbnRlcmVzdGVkIGluIHdvcmtpbmcgd2l0aCBhIHN0cm9uZyB0ZWFtIGZvY3VzZWQgb24gZGVsaXZlcmluZyB3b3JraW5nIHNvZnR3YXJlIHRvIGNsaWVudHMuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+SSdtIGludGVyZXN0ZWQgaW4gZnVsbC1zdGFjayBvcGVuIHNvdXJjZSBkZXZlbG9wbWVudCBvcHBvcnR1bml0aWVzLCBwcmVmZXJhYmx5IHdpdGggYSBmcm9udC1lbmQsIGVzcGVjaWFsbHkgRGF0YSBWaXN1YWxpemF0aW9uICYgQW5hbHlzZXMgaW4gdGhlIGJyb3dzZXIuPC9kaXY+XG4gICAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgICA8ZHQ+RnJvbnQtRW5kIFNwZWNpYWx0aWVzOjwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPlNQQSwgSFRNTDUsIENTUzMsIFNBU1MsIEphdmFTY3JpcHQsIGpRdWVyeSwgQW5ndWxhckpTLCBSZWFjdEpTLCBCb3dlciwgR3VscCwgTm9kZUpTLCBOUE0sIEV4cHJlc3NKUywgVHdpdHRlciBCb290c3RyYXAsIGV0Yy4uLjwvZGQ+XG4gICAgICAgICAgICAgICAgPGR0PkphdmEvT3BlbiBTb3VyY2UgU3BlY2lhbHRpZXM6PC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+SmF2YSA4LCBKMkVFLCBTcHJpbmcgQm9vdCwgSGliZXJuYXRlLCBNeVNRTCwgTWF2ZW4sIEpVbml0LCBNb2NraXRvLCBUb21jYXQsIERyb3B3aXphcmQsIEVsYXN0aWNzZWFyY2gsIENhc3NhbmRyYSwgZXRjLi4uPC9kZD5cbiAgICAgICAgICAgICAgICA8ZHQ+TWljcm9zb2Z0Ly5ORVQgU3BlY2lhbHRpZXM6PC9kdD5cbiAgICAgICAgICAgICAgICA8ZGQ+QyMsIEFTUC5ORVQgQ29yZSwgTElOUSwgRUYsIFNRTCBTZXJ2ZXIsIGV0Yy4uLjwvZGQ+XG4gICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCAkLmFqYXgoJ3Bvc3RzL2luZGV4Lmpzb24nKVxuICAgIGZvciAodmFyIHBvc3Qgb2YgcG9zdHMpIHtcbiAgICAgIHBvc3QuY29udGVudCA9IGF3YWl0ICQuYWpheCgncG9zdHMvJyArIHBvc3QuY29udGVudCArICcuaHRtbCcpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBwb3N0cyB9KVxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgSW5kZXhMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgPGltZyBzcmM9XCJpbWcvY292ZXIuanBnXCIgYWx0PVwiQ292ZXIgSW1hZ2VcIiAvPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtc20tM1wiIC8+XG4gICAgICAgICAgPEluZGV4TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGluayBjb2wtc20tMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZSBmb250LXdlaWdodC1ib2xkXCI+UG9zdDwvSW5kZXhMaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sLXNtLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmUgZm9udC13ZWlnaHQtYm9sZFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUGljXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFyLmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGhvdG9cIiBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3A+XG4gICAgICA8bWFpbj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0J1xuXG5nbG9iYWwualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jylcbmdsb2JhbC5UZXRoZXIgPSByZXF1aXJlKCd0ZXRoZXInKVxuXG5jb25zdCByb3V0ZXMgPSA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD1cImFib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gIDwvUm91dGU+XG48L1JvdXRlcj5cblxucmVuZGVyKHJvdXRlcywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKSkiXX0=
