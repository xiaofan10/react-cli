import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import routers from './router/index';
import Layout from './components/layout';
import Error from './pages/error/index';
import Index from './pages/index/index';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  renderRoute() {
    return routers.navs.map((item, index) => {
      return (
        <Route
          key={index}
          exact={!!item.exact}
          path={item.path} 
          Component={item.component} 
        >
        </Route>
      )
    })
  }
  render() {
    return(
      <Layout menu={routers.navs}>
        <Switch>
          <Route path='/' component={Index} exact></Route>
          <Route path='/error' component={Error}></Route>
        </Switch>
      </Layout>
    )
  }
}

export default App;