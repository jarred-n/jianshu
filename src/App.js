import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import { GlobalStyle } from './style';
import { Iconfront } from './statics/iconfont/iconfont';
import store from './store';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Iconfront />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
    </Fragment>
  );
}

export default App;
