function ArticleListModel() {
  this.articles = []
}

ArticleListModel.prototype.getArticles(data) {
  data.response.results.forEach(item => { 
    this.articles.push(new Article(item))
  })
}