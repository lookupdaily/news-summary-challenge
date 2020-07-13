'use strict';

const element = React.createElement;
class Articles extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles() {
    xhr.onload = function () {
      // if (xhr.status <= 200 && xhr.status < 300) {
      if (xhr.status < 300) {
        var data = JSON.parse(this.response)
        this.props.articleList.createArticles(data)
      } else {
        console.log('The request failed!')
      }
    };
    
    xhr.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football');
    xhr.send();
  }

  render () {
    console.log(this.props)
    if(this.props.articleList.articles) {
      
      return (
        <div>
            { this.props.articleList.articles.map(article => { 
                <div><a href={article.getWebUrl()} target="blank">{article.getTitle()}</a></div>
              }) }
        </div>
      )
    } else {
      return <div>No Articles</div>
    }
  } 
};

const domContainer = document.querySelector('#articles');
ReactDOM.render(<Articles articleList={new ArticleListModel()}/>, domContainer);
