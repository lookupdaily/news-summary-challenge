'use strict';

const element = React.createElement;
class Header extends React.Component {
  constructor(props) {
    super(props);
  } 
  render () {
    return (
      <div>
        <h1>Newsreader</h1>
      </div>
    );
  } 
};

const domContainer = document.querySelector('#header');
ReactDOM.render(element(Header), domContainer);


