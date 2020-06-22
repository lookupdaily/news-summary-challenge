function ArticleListModel(articleModel = ArticleModel) {
  this.articles = []
  this.articleModel = articleModel
};

ArticleListModel.prototype.createArticles = function(data) {
  data.response.results.forEach(item => { 
    this.articles.push(new this.articleModel(item.webTitle, item.webUrl))
  });
};