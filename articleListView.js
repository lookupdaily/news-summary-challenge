function ArticleListView(articleList) {
  this.articleList = articleList;
}

ArticleListView.prototype.showArticles = function () {
  var string = "<ul>";
  this.articleList.getArticles().forEach(function (article) {
    string += "<li><a href=\"" + article.getWebUrl() + "\">" + article.getTitle() + "</a></li>";
  });
  return string += "</ul>";
};