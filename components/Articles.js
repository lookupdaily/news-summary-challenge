'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var element = React.createElement;

var Articles = function (_React$Component) {
  _inherits(Articles, _React$Component);

  function Articles(props) {
    _classCallCheck(this, Articles);

    return _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).call(this, props));
  }

  _createClass(Articles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getArticles();
    }
  }, {
    key: 'getArticles',
    value: function getArticles() {
      xhr.onload = function () {
        // if (xhr.status <= 200 && xhr.status < 300) {
        if (xhr.status < 300) {
          var data = JSON.parse(this.response);
          this.props.articleList.createArticles(data);
        } else {
          console.log('The request failed!');
        }
      };

      xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football');
      xhr.send();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      if (this.props.articleList.articles) {

        return React.createElement(
          'div',
          null,
          this.props.articleList.articles.map(function (article) {
            React.createElement(
              'div',
              null,
              React.createElement(
                'a',
                { href: article.getWebUrl(), target: 'blank' },
                article.getTitle()
              )
            );
          })
        );
      } else {
        return React.createElement(
          'div',
          null,
          'No Articles'
        );
      }
    }
  }]);

  return Articles;
}(React.Component);

;

var domContainer = document.querySelector('#articles');
ReactDOM.render(React.createElement(Articles, { articleList: new ArticleListModel() }), domContainer);