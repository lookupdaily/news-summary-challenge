function ArticleListView(articleList) {
  this.articleList = articleList
}

ArticleListView.prototype.showArticles = function(){
  console.log(this.articleList.getArticles())
  console.log(this.articleList)
  var string = ""
  this.articleList.getArticles().forEach(article => { 
    string += `<a href="${article.getWebUrl()}">` + article.getTitle() + "</a>"
  });
  return string
}


