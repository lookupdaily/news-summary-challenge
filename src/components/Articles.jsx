'use strict';

const element = React.createElement;
class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    articleList
    };
  } 

  render () {
    return (
      <div>
        <ul>
          {this.state.articleList.getArticles().forEach(article => { 
     <li><a href="{article.getWebUrl()}">{article.getTitle()}</a></li>
  });}
        </ul>
      </div>
    );
  } 
};

const domContainer = document.querySelector('#articles');
ReactDOM.render(element(Articles), domContainer);
