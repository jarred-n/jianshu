import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
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
        </Provider>
    </Fragment>
  );
}

export default App;
