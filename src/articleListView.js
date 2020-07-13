function ArticleListView(articleList) {
  this.articleList = articleList
}

ArticleListView.prototype.showArticles = function(){
  var string = "<ul>"
  this.articleList.getArticles().forEach(article => { 
    string += `<li><a href="${article.getWebUrl()}">` + article.getTitle() + "</a></li>"
  });
  return string += "</ul>"
}


