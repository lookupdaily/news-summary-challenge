function ArticleListView(articleList) {
  this.articleList = articleList
}

ArticleListView.prototype.showArticles = function(){
  var string = ""
  this.articleList.articles.forEach(article => { 
    string += `<a href="${article.getWebUrl()}">` + article.getTitle() + "</a>"
  });
  return string
}