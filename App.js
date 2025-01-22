import { StatusBar } from 'expo-status-bar';

import ConversionScreen from './screens/ConversionScreen';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import HistoryScreen from './screens/HistoryScreen';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ConversionOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      })}
    >
      <BottomTabs.Screen
        name="Conversion"
        component={ConversionScreen}
        options={{
          title: 'Currency Converter',
          tabBarLabel: 'Conversion',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sync" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Histroy"
        component={HistoryScreen}
        options={{
          title: 'Histroy',
          tabBarLabel: 'Histroy',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )

}
export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    //createTables();
  }, []);

  // useEffect(() => {
  //   initializeDatabase()
  //     .then(() => {
  //       setDbInitialized(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (!dbInitialized) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name="Conversion"
            component={ConversionOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  toolbar: {
    height: 56,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  toolbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },

});



