//LIBRARIES
import React from "react";
import { Text, View, Button } from "react-native";

//STYLES
import styles from "./HomeStyles";

class Home extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Hello {this.props.name}</Text>
        <Button
          onPress={()=>this.props.changeName("Eman")}
          title="Change Name"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
export default Home;