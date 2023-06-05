import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Open up App.js to start working on your app!</Text>
      <Button>
        </Button>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FFFFFF'
  },
});