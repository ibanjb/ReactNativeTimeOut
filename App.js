import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AppLoading } from 'expo';
import { Drawer } from 'native-base';

import Sidebar from './screens/Sidebar';
import Home from './screens/Home';
import Article from './screens/Article';
import ClassicLayout from './screens/ClassicLayout';

const AppStackNavigator = StackNavigator({
  HomeScreen: { screen: Home, navigationOptions: { header: false, }},
  ArticleScreen: { screen: Article, navigationOptions: { header: false, }},
  ClassicLayoutScreen: { screen: ClassicLayout, navigationOptions: { header: false, }},  
});

console.disableYellowBox = true;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  async _cacheResourcesAsync() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    const isLoading = this.state.isLoading;    

    if (isLoading) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isLoading: false })}
          onError={console.warn}
        />
      );
    }
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Sidebar />}
      onClose={() => this.closeDrawer()} >
        <View style={styles.container}>
          <StatusBar backgroundColor='tomato' barStyle='light-content' />
          <AppStackNavigator />
      </View>
    </Drawer>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
