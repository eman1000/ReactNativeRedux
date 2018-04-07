//LIBRARIES
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Router, Scene, Drawer } from "react-native-router-flux";
import { Provider } from "react-redux";
import { View } from "react-native";

//COMPONENTS
import HomeContainer from "../routes/Home/container/HomeContainer";
export default class AppContainer extends Component {
  render(){
    return (
      <Provider store={this.props.store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={HomeContainer} hideNavBar/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});