import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import App from './components/App';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';

/*
 fonts Import here
*/
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Karla', 'Lato', 'Open Sans', 'Roboto', 'sans-serif']
  }
});



/*
STateless Router Components Setup
*/

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
