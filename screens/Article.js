import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Article extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Article</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
