function ArticleListModel() {
  var articleModel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ArticleModel;

  this.articles = [];
  this.articleModel = articleModel;
};

ArticleListModel.prototype.createArticles = function (data) {
  var _this = this;

  data.response.results.forEach(function (item) {
    _this.articles.push(new _this.articleModel(item.webTitle, item.webUrl));
  });

  ArticleListModel.prototype.getArticles = function () {
    return this.articles;
  };
};