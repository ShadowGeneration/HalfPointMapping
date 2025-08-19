import { StyleSheet } from 'react-native';

import { AuthProvider } from './auth/AuthContext';

import AppNavigator from './AppNavigator';
import 'react-native-get-random-values';
export default function App() {
  
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
