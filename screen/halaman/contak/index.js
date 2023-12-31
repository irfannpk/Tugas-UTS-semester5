import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ContactScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Contact Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default ContactScreen;