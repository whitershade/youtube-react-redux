/* eslint-disable react/no-render-return-value */
import React            from 'react';
import ReactDOM         from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App              from './Components/App';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('.app'),
  );

render(App);

if (module.hot) module.hot.accept('./Components/App', () => render(App));
