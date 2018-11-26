/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
import {
  createStackNavigator,
  // createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';

// const App = createAppContainer(createBottomTabNavigator({
//   Page1: { screen: HomeScreen, navigationOptions: { tabBarLabel: '第一頁' } },
//   Page2: { screen: ProfileScreen, navigationOptions: { tabBarLabel: '第二頁' } },
// }, {
//   tabBarOptions: {
//     activeTintColor: 'blue',
//     labelStyle: {
//       fontSize: 14,
//     },
//   },
// }));

const App = createAppContainer(createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}));

// export default App;

AppRegistry.registerComponent('rtmp', () => App);
