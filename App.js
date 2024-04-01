// const Stack = createNativeStackNavigator();
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import Onboarding from "./screens/Onboarding";
// import SelectHelpType from "./screens/SelectHelpType";
// import Frame from "./screens/Frame";
// import ReviewScreen from "./screens/ReviewScreen";
// import ThankYouScreen from "./screens/ThankYouScreen";
// import ReviewScreen1 from "./screens/ReviewScreen1";
// import Complain from "./screens/Complain";
// import AboutUsScreen from "./screens/AboutUsScreen";
// import SettingsScreen from "./screens/SettingsScreen";
// import SetPasswordScreen from "./screens/SetPasswordScreen";
// import ChangeHelpScreen from "./screens/ChangeHelpScreen";
// import PrivacyPolicy from "./screens/PrivacyPolicy";
// import ContactUS from "./screens/ContactUS";
// import DeleteAccount from "./screens/DeleteAccount";
// import HelpAndSupport from "./screens/HelpAndSupport";
// import HelpDetail from "./screens/HelpDetail";
// import ComplainScuessful from "./screens/ComplainScuessful";
// import Frame1 from "./screens/Frame1";
// import HelpDescription from "./screens/HelpDescription";
// import LocationScreenConfirm from "./screens/LocationScreenConfirm";
// import ChatScreen from "./screens/ChatScreen";
// import HelperProfile from "./screens/HelperProfile";
// import NotificationScreen from "./screens/NotificationScreen";
// import MenuScreen from "./components/MenuScreen";
// import SignUp from "./screens/SignUp";
// import SignIn from "./screens/SignIn";
// import PhoneVerifyOtp from "./screens/PhoneVerifyOtp";
// import CompleteYourProfile from "./screens/CompleteYourProfile";
// import Profile from "./screens/Profile";
// import Event1 from "./screens/Event1";
// import HelpSeekersScreen from "./screens/HelpSeekersScreen";
// import Onboarding2 from "./screens/Onboarding2";
// import Onboarding1 from "./screens/Onboarding1";
// import Onboarding3 from "./screens/Onboarding3";
// import EnableLocation from "./screens/EnableLocation";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import History1 from "./components/History1";
// import Complain1 from "./components/Complain1";
// import Settings from "./components/Settings";
// import HelpAndSupport1 from "./components/HelpAndSupport1";
// import Logout from "./components/Logout";
// import Home from "./components/Home";
// import Home1 from "./components/Home1";
// import VectorIcon from "./components/VectorIcon";
// import VectorIcon1 from "./components/VectorIcon1";
// import MessageScreen from "./screens/MessageScreen";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, Pressable, TouchableOpacity } from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MainContainer from "./screens/MainContainer";
// import HomeScreen from "./screens/HomeScreen";

// const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();
// //*******************************************************************************

// //My APP
// // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from "react-native";
// // import MySignINScreen from "./screens/MySignINScreen";
// // import MySignUpScreen from "./screens/MySignUpScreen";
// // import MyConfirmEmailScreen from "./screens/MyConfirmEmailScreen";
// // import MyForgotPasswordScreen from "./screens/MyForgotPasswordScreen";
// // import MyNewPasswordScreen from "./screens/MyNewPasswordScreen";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import Onboarding from "./screens/Onboarding";

// // const stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     //
// //     //   <NewPasswordScreen />
// //     //   <StatusBar style="auto" />
// //     //
// //     <View style={styles.container}>
// //       <NavigationContainer>
// //         <stack.Navigator>
// //           <stack.Screen
// //             name="Sign in"
// //             component={Onboarding}
// //             options={{ headerShown: false }}
// //           />
// //         </stack.Navigator>
// //       </NavigationContainer>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#CACFD2",
// //     // alignItems: "center",
// //     // justifyContent: "center",
// //   },
// // });
// //********************************************************************************************
// function DrawerRoot({ navigation }) {
//   return (
//     <Drawer.Navigator
//       screenOptions={{ headerShown: false, drawerStyle: { width: 200 } }}
//       drawerContent={(props) => <MenuScreen {...props} />}
//     >
//       <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Drawer.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//         options={{ headerShown: false }}
//       />
//       <Drawer.Screen
//         name="SignIn"
//         component={SignIn}
//         options={{ headerShown: false }}
//       />
//     </Drawer.Navigator>
//   );
// }

// const App = () => {
//   const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

//   const [fontsLoaded, error] = useFonts({
//     "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
//     "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
//     "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
//     "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
//     "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
//   });

//   React.useEffect(() => {
//     setTimeout(() => {
//       setHideSplashScreen(true);
//     }, 3000);
//   }, []);

//   if (!fontsLoaded && !error) {
//     return null;
//   }

//   return (
//     <>
//       <NavigationContainer>
//         {hideSplashScreen ? (
//           <Stack.Navigator
//             // initialRouteName="Onboarding2"
//             initialRouteName="HomeScreen"
//             screenOptions={{ headerShown: false }}
//           >
//             {/* <Stack.Screen name="DrawerRoot" component={DrawerRoot} /> */}
//             <Stack.Screen name="MainContainer" component={MainContainer} />
//             {/* <Stack.Screen name="DrawerRoot" component={DrawerRoot} /> */}

//             <Stack.Screen
//               name="Onboarding"
//               component={Onboarding}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SelectHelpType"
//               component={SelectHelpType}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Frame"
//               component={Frame}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ReviewScreen"
//               component={ReviewScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ThankYouScreen"
//               component={ThankYouScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ReviewScreen1"
//               component={ReviewScreen1}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="AboutUsScreen"
//               component={AboutUsScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SetPasswordScreen"
//               component={SetPasswordScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ChangeHelpScreen"
//               component={ChangeHelpScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="PrivacyPolicy"
//               component={PrivacyPolicy}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ContactUS"
//               component={ContactUS}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="DeleteAccount"
//               component={DeleteAccount}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="HelpAndSupport"
//               component={HelpAndSupport}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="HelpDetail"
//               component={HelpDetail}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ComplainScuessful"
//               component={ComplainScuessful}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="HelpDescription"
//               component={HelpDescription}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="LocationScreenConfirm"
//               component={LocationScreenConfirm}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ChatScreen"
//               component={ChatScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="HelperProfile"
//               component={HelperProfile}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="NotificationScreen"
//               component={NotificationScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SignUp"
//               component={SignUp}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SignIn"
//               component={SignIn}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="PhoneVerifyOtp"
//               component={PhoneVerifyOtp}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="CompleteYourProfile"
//               component={CompleteYourProfile}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Profile"
//               component={Profile}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="HelpSeekersScreen"
//               component={HelpSeekersScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Onboarding2"
//               component={Onboarding2}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Onboarding1"
//               component={Onboarding1}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Onboarding3"
//               component={Onboarding3}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="EnableLocation"
//               component={EnableLocation}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="WelcomeScreen"
//               component={WelcomeScreen}
//               options={{ headerShown: false }}
//             />
//           </Stack.Navigator>
//         ) : (
//           <Onboarding />
//         )}
//       </NavigationContainer>
//     </>
//   );
// };
// export default App;

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainContainer from "./screens/MainContainer";
import SignIn from "./screens/SignIn";
import DrawerNavigation from "./screens/DrawerNavigation";
import Onboarding from "./screens/Onboarding"
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainContainer">
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
