import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Login from './login';
import ReportsPage from './report_page';
import WidgetPage from './widget_page';

var Routes = React.createClass({
  render: function() {
    return <Router history={ browserHistory }>
      <Route path='/login' component={ Login } />
      <Route path='/' component={ App }>
        <IndexRoute components={ WidgetPage } />
        <Route path='/reports' components={ ReportsPage } />
      </Route>
    </Router>
  }
});

export default Routes;
