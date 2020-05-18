(function(exports) {
  function ArticleModel(webTitle, webUrl) {
    this.webTitle = webTitle
    this.webUrl = webUrl
  }

  ArticleModel.prototype.getTitle = function(){
    return this.webTitle
  };

  ArticleModel.prototype.getWebUrl = function(){
    return this.webUrl
  };
  exports.ArticleModel = ArticleModel

})(this)