function ArticleListModel() {
  this.articles = []
};

ArticleListModel.prototype.createArticles = function(data) {
  data.response.results.forEach(item => { 
    this.articles.push(new ArticleModel(item.webTitle, item.webUrl))
  });
};