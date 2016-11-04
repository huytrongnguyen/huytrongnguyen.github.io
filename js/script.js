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
            _react2.default.createElement('img', { src: 'img/avatar.jpg', alt: 'Profile Photo', className: 'img-thumbnail', width: '168', height: '168' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9jb21wb25lbnRzL2Fib3V0LmpzeCIsIl9zY3JpcHRzL2NvbXBvbmVudHMvaG9tZS5qc3giLCJfc2NyaXB0cy9jb21wb25lbnRzL2xheW91dC5qc3giLCJfc2NyaXB0cy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ25CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWCxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFBTywyQ0FBUyxXQUFVLEtBQW5CLEdBQVA7QUFFRDs7Ozs7O2tCQVJrQixLOzs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFDbkIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTyxFQURJO0FBRVgsbUJBQWE7QUFDWCxpQkFBUyxNQURFLEVBQ00sTUFBTSxTQURaLEVBQ3VCLE9BQU8sT0FEOUI7QUFFWCxhQUFLLFNBRk0sRUFFSyxNQUFNLFNBRlgsRUFFc0IsUUFBUTtBQUY5QjtBQUZGLEtBQWI7QUFGaUI7QUFTbEI7Ozs7NkJBRVE7QUFBQSxtQkFDd0IsS0FBSyxLQUQ3QjtBQUFBLFVBQ0MsS0FERCxVQUNDLEtBREQ7QUFBQSxVQUNRLFdBRFIsVUFDUSxXQURSOztBQUVQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxLQUFuQjtBQUNMO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFBQTtBQUFBLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFB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QUFBQSxJQUFRLGlDQUFSO0FBQ2I7QUFBQTtBQUFBLE1BQU8sTUFBSyxHQUFaLEVBQWdCLDJCQUFoQjtBQUNFLDZEQUFZLHlCQUFaLEdBREY7QUFFRSx3REFBTyxNQUFLLE9BQVosRUFBb0IsMEJBQXBCLEdBRkY7QUFHRSx3REFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCO0FBSEY7QUFEYSxDQUFmOztBQVFBLHNCQUFPLE1BQVAsRUFBZSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHBvc3RzOiBbXSxcbiAgICAgIGRhdGVPcHRpb25zOiB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLCB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIiwgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwb3N0cywgZGF0ZU9wdGlvbnMgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIEludHJvXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgSSdtIExpb25lbCwgRnJvbnRlbmQgRGV2ZWxvcGVyIEV4cGVydCBhdCA8YSBocmVmPVwiaHR0cDovL2ttcy10ZWNobm9sb2d5LmNvbVwiPktNUyBUZWNobm9sb2d5PC9hPiBhbmQgYSB0cmFpbmVyIGluIEtNUyBMYXVuY2ggUHJvZ3JhbS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLThcIj5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgPGxhYmVsPntuZXcgRGF0ZShwb3N0LnRpbWUpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLXVzXCIsIGRhdGVPcHRpb25zKX08L2xhYmVsPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxkaXY+U29mdHdhcmUgdGVjaG5vbG9neSBwcm9mZXNzaW9uYWwgd2VsbCB2ZXJzZWQgaW4gbXVsdGlwbGUgcGxhdGZvcm1zIGZvY3VzZWQgb24gYnVpbGRpbmcgcm9idXN0IHdlYiBhcHBsaWNhdGlvbnMgd2hpbGUgbGV2ZXJhZ2luZyBwcm92ZW4gaW5kdXN0cnkgYmVzdCBwcmFjdGljZXMuIEFsd2F5cyBvcGVuIHRvIGxlYXJuaW5nIG5ldyB0ZWNobm9sb2dpZXMsIGxhbmd1YWdlcywgcGxhdGZvcm1zLCBwcmltYXJpbHkgaW50ZXJlc3RlZCBpbiB3b3JraW5nIHdpdGggYSBzdHJvbmcgdGVhbSBmb2N1c2VkIG9uIGRlbGl2ZXJpbmcgd29ya2luZyBzb2Z0d2FyZSB0byBjbGllbnRzLjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PkknbSBpbnRlcmVzdGVkIGluIGZ1bGwtc3RhY2sgb3BlbiBzb3VyY2UgZGV2ZWxvcG1lbnQgb3Bwb3J0dW5pdGllcywgcHJlZmVyYWJseSB3aXRoIGEgZnJvbnQtZW5kLCBlc3BlY2lhbGx5IERhdGEgVmlzdWFsaXphdGlvbiAmIEFuYWx5c2VzIGluIHRoZSBicm93c2VyLjwvZGl2PlxuICAgICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgICAgPGR0PkZyb250LUVuZCBTcGVjaWFsdGllczo8L2R0PlxuICAgICAgICAgICAgICAgIDxkZD5TUEEsIEhUTUw1LCBDU1MzLCBTQVNTLCBKYXZhU2NyaXB0LCBqUXVlcnksIEFuZ3VsYXJKUywgUmVhY3RKUywgQm93ZXIsIEd1bHAsIE5vZGVKUywgTlBNLCBFeHByZXNzSlMsIFR3aXR0ZXIgQm9vdHN0cmFwLCBldGMuLi48L2RkPlxuICAgICAgICAgICAgICAgIDxkdD5KYXZhL09wZW4gU291cmNlIFNwZWNpYWx0aWVzOjwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPkphdmEgOCwgSjJFRSwgU3ByaW5nIEJvb3QsIEhpYmVybmF0ZSwgTXlTUUwsIE1hdmVuLCBKVW5pdCwgTW9ja2l0bywgVG9tY2F0LCBEcm9wd2l6YXJkLCBFbGFzdGljc2VhcmNoLCBDYXNzYW5kcmEsIGV0Yy4uLjwvZGQ+XG4gICAgICAgICAgICAgICAgPGR0Pk1pY3Jvc29mdC8uTkVUIFNwZWNpYWx0aWVzOjwvZHQ+XG4gICAgICAgICAgICAgICAgPGRkPkMjLCBBU1AuTkVUIENvcmUsIExJTlEsIEVGLCBTUUwgU2VydmVyLCBldGMuLi48L2RkPlxuICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgJC5hamF4KCdwb3N0cy9pbmRleC5qc29uJylcbiAgICBmb3IgKHZhciBwb3N0IG9mIHBvc3RzKSB7XG4gICAgICBwb3N0LmNvbnRlbnQgPSBhd2FpdCAkLmFqYXgoJ3Bvc3RzLycgKyBwb3N0LmNvbnRlbnQgKyAnLmh0bWwnKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgcG9zdHMgfSlcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIEluZGV4TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgPHA+XG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2NvdmVyLmpwZ1wiIGFsdD1cIkNvdmVyIEltYWdlXCIgLz5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNtLTNcIiAvPlxuICAgICAgICAgIDxJbmRleExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sLXNtLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmUgZm9udC13ZWlnaHQtYm9sZFwiPlBvc3Q8L0luZGV4TGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGNvbC1zbS0yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlIGZvbnQtd2VpZ2h0LWJvbGRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVBpY1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2F2YXRhci5qcGdcIiBhbHQ9XCJQcm9maWxlIFBob3RvXCIgY2xhc3NOYW1lPVwiaW1nLXRodW1ibmFpbFwiIHdpZHRoPVwiMTY4XCIgaGVpZ2h0PVwiMTY4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3A+XG4gICAgICA8bWFpbj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgPC9zZWN0aW9uPlxuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0J1xuXG5nbG9iYWwualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jylcbmdsb2JhbC5UZXRoZXIgPSByZXF1aXJlKCd0ZXRoZXInKVxuXG5jb25zdCByb3V0ZXMgPSA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD1cImFib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gIDwvUm91dGU+XG48L1JvdXRlcj5cblxucmVuZGVyKHJvdXRlcywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKSkiXX0=
