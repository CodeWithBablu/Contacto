import { StatusBar, StyleSheet } from 'react-native';


import { Provider } from 'react-redux';
import { store } from './store';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import colors from './app/config/colors';


import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import Home from './app/screens/Home';

export default function App() {


  const toastConfig = {

    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "lightgreen", borderLeftWidth: 20 }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '900'
        }}
        text2Style={{
          fontSize: 12
        }}
      />
    ),

    error: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: "red", borderLeftWidth: 20 }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '900'
        }}
        text2Style={{
          fontSize: 12
        }}
      />
    ),
  };


  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.dark} style="light" />
        <Home />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </Provider>
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
