import { useContext } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AddressInput from './screens/AddressInput';
import Maps from './screens/Maps';
import Profile from './screens/Profile';
import Results from './screens/Results';

import profileIcon from './assets/profile.png';
import searchIcon from './assets/search.png';

import { AuthContext } from './auth/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#212C69', paddingTop: 20, height: 100, borderRadius: 40 },
        tabBarShowLabel: false,
      }}
      initialRouteName="AddressInput"
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
              <Image source={profileIcon} style={styles.tabBarIcon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddressInput"
        component={AddressInput}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
              <Image source={searchIcon} style={styles.tabBarIcon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "TabNavigator" : "SignIn"}>
        {user ? (
          <>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maps"
              component={Maps}
              options={{ headerShown: false, unmountOnBlur: true }}
            />
            <Stack.Screen
              name="Results"
              component={Results}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 24,
  },
  iconWrapper: {
    borderRadius: 50,
    padding: 10,
  },
  iconWrapperActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default AppNavigator;
