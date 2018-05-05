import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          EcoMapss \o/
        </Text>

        <Button
          onPress={() => {
            this.props.navigator.push({
              screen: 'Sub',
              title: 'Sub',
            })
          }}
          title="Próxima"
          color="#841584"
          accessibilityLabel="Learn  more about this purple button"
        />
        <Button
          onPress={() => {
            this.props.navigator.push({
              screen: 'Login',
              title: 'Login',
            })
          }}
          title="Login Screen"
          color="#841584"
          accessibilityLabel="Learn  more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
