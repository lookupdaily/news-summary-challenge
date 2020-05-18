// var xhr = new XMLHttpRequest();
// var data 
// var articles = document.getElementById("articles")

// xhr.onload = function () {
//   // if (xhr.status <= 200 && xhr.status < 300) {
//   if (xhr.status < 300) {
//     data = JSON.parse(this.response)
//     articles.innerHTML = getArticles()
//   } else {
//     console.log('The request failed!')
//   }
// };

// xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football');
// xhr.send();

var getArticles = function() {
  var string = ""
  data.response.results.forEach(article => { 
    string += "<p>" + article.webTitle + "</p>"
  });

  return string
};