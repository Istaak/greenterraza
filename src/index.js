import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Main} from './app/main';
import './index.scss';
import Events from './app/components/Events';
import {Footer} from './app/components/layout/Footer';
import {Header} from './app/components/layout/Header';
// Third-party dependencies
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
// Hash history constant, no querykey
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.object
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);
