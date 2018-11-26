import React, { Component } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('​HomeScreen -> render -> this.props', this.props);
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <SafeAreaView>
        <Text>HomeScreen</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', { name: 'Jane' })}
        />
      </SafeAreaView>
    );
    // return (
    //   <SafeAreaView>
    //     <Text>asdfasdf</Text>
    //     <Text>Page_1</Text>
    //   </SafeAreaView>
    // );
  }
}
export default HomeScreen;
