import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button style={styles.button}
  icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000"
    }
});

export default MyComponent;

