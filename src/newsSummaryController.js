const ArticleListModel = require('./articleListModel')
const ArticleListView = require('./articleListView')

var xhr = new XMLHttpRequest();
var articles = document.getElementById("articles")
var articleListModel = new ArticleListModel
var articleListView = new ArticleListView(articleListModel)

xhr.onload = function () {
  // if (xhr.status <= 200 && xhr.status < 300) {
  if (xhr.status < 300) {
    var data = JSON.parse(this.response)
    articleListModel.createArticles(data)
    articles.innerHTML = articleListView.showArticles()
  } else {
    console.log('The request failed!')
  }
};

xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football');
xhr.send();

