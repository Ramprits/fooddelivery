import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Login from "./screens/Login";
import AppLoading from "expo-app-loading";
import Register from "./screens/Register";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./screens";
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    primary: "#33907C",
    white: "#FFFFFF",
    secondary: "#13B58C",
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar style='auto' />
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}
