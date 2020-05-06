function Article() {
  this.articles = getHttp.makeRequest("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football");
  console.log(this.articles)
};

Article.prototype.fetchArticle() {
  
}