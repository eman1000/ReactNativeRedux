import React from "react";

import createStore from "./store/createStore";
import AppContainer from "./AppContainer";


export default class Root extends React.Component{
  renderApp(){
    const store = createStore();
    return (
      <AppContainer store={store} />
    );
  }
  render(){
    return this.renderApp();
  }
}