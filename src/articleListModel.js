const ArticleModel = require('./articleModel')
function ArticleListModel() {
  this.articles = []
};

ArticleListModel.prototype.createArticles = function(data) {
  data.response.results.forEach(item => { 
    this.articles.push(new Article(item.webTitle, item.webUrl))
  });
};