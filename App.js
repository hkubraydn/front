import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Bu bir deneme yazısıdır!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: 'blue',
    width: 70,
    height: 80,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
  }
});
