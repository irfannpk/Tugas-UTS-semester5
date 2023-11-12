import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BookScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Book Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default BookScreen;