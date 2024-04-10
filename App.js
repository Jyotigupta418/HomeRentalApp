import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RootStack from './src/navigation/RootStack';
import {SafeAreaProvider}  from 'react-native-safe-area-context';
import { colors } from './src/styles/colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar barStyle=" light-content" backgroundColor= {colors.primary}/>
        <RootStack />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    
  },
});
