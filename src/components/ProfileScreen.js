import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('​HomeScreen -> render -> this.props', this.props);
    const { navigation } = this.props;
    const name = navigation.getParam('name');

    return (
      <SafeAreaView>
        <Text>Page_2</Text>
        <Text>{name}</Text>
      </SafeAreaView>
    );
  }
}
export default ProfileScreen;
