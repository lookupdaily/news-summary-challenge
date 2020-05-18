function ArticleListView(articleList) {
  this.articleList = articleList
}

ArticleListView.prototype.showArticles = function(){
  var string = ""
  articleList.articles.forEach(article => { 
    string += "<p>" + article.webTitle + "</p>"
  });
}