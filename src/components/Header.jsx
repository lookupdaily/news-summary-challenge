'use strict';

const e = React.createElement;

function Header() {
  return e(
      <div>
        <h1>Newsreader</h1>
      </div>
    );
}

const domContainer = document.querySelector('#header');
ReactDOM.render(e(Header), domContainer);