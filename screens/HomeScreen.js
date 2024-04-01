// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
// import DualButtons from "../components/DualButtons";
// import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const HomeScreen = ({ navigation }) => {
//   const handleButton1Press = () => {
//     navigation.navigate("SelectHelpType");
//   };

//   const handleButton2Press = () => {
//     navigation.navigate("HelpSeekersScreen");
//   };

//   const handleMenuPress = () => {
//     // Implement your menu logic here
//     // For example, you can open a modal or navigate to a menu screen
//   };

//   const handleNotificationPress = () => {
//     // Implement your notification logic here
//     // For example, you can open a modal or navigate to a notification screen
//   };

//   const [isMenuPressed, setIsMenuPressed] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Menu Icon at the top left */}
//       <TouchableHighlight
//         style={styles.menuIcon}
//         onPress={() => {
//           handleMenuPress();
//           setIsMenuPressed(!isMenuPressed);
//         }}
//         activeOpacity={0.7}
//         underlayColor="transparent"
//       >
//         <Ionicons
//           name="menu"
//           size={30}
//           color={isMenuPressed ? "green" : "#333"}
//         />
//       </TouchableHighlight>

//       {/* Notification Icon at the top right */}
//       <TouchableHighlight
//         style={styles.notificationIcon}
//         onPress={handleNotificationPress}
//         activeOpacity={0.7}
//         underlayColor="transparent"
//       >
//         <Ionicons name="notifications" size={25} color="#333" />
//       </TouchableHighlight>

//       <View style={styles.contentContainer}>
//         {/* Your other content goes here */}
//       </View>

//       {/* DualButtons and text placed at the bottom with margin */}
//       <View style={styles.bottomContainer}>
//         <Text style={styles.helperText}>
//           You need help or You want to help?
//         </Text>
//         <DualButtons
//           onPressButton1={handleButton1Press}
//           onPressButton2={handleButton2Press}
//           textButton1="Shout For Help"
//           textButton2="Ready To Help"
//           backgroundColorButton1="green"
//           backgroundColorButton2="gray"
//           textColorButton1="white"
//           textColorButton2="white"
//           borderStyleButton1="#006400" // Customize the border color for Button 1
//           borderStyleButton2="black" // Customize the border color for Button 2
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f0", // Set your desired background color
//   },
//   contentContainer: {
//     flex: 1,
//     // Other styles for your content container
//   },
//   bottomContainer: {
//     margin: 5,
//     justifyContent: "flex-end",
//     marginBottom: 20,
//     backgroundColor: "#90EE90",
//     borderWidth: 2,
//     borderColor: "#006400",
//     borderRadius: 8,
//     // padding: 16,
//     paddingBottom: 16,
//   },
//   helperText: {
//     fontSize: 18,
//     fontFamily: FontFamily.subheadLgSHLgMedium,
//     fontWeight: "bold",
//     marginTop: 15,
//     color: "#333",
//     textAlign: "center",
//   },
//   menuIcon: {
//     position: "absolute",
//     top: 5,
//     left: 5,
//     padding: 10,
//     opacity: 0.7,
//   },
//   notificationIcon: {
//     position: "absolute",
//     top: 5,
//     right: 5,
//     padding: 10,
//     opacity: 0.7,
//   },
// });

// export default HomeScreen;
//22222222222222222222222222222222222222222222222 success
// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import SettingsScreen from "./SettingsScreen";
// import { View, Text } from "react-native";

// const Drawer = createDrawerNavigator();

// const HomeScreen = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen
//         name="HomeDrawer"
//         component={HomeContent}
//         // options={{ headerShown: false }}
//       />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//     </Drawer.Navigator>
//   );
// };

// const HomeContent = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       {/* Your Home Screen content goes here */}
//     </View>
//   );
// };

// export default HomeScreen;

//333333333333333333333333333333
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "./SettingsScreen";
import { View, Text,StyleSheet,Image } from "react-native";
import CustomeButton from "./../components/CustomButton"
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="HomeDrawer" component={HomeContent} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const HomeContent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Image
        source={require("../assets/logo.jpg")} // Provide the path to your logo image
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
      <View style={{marginRight:5, width:"60%" , backgroundColor:"#007bff", borderRadius:5}}>
        <CustomeButton
          text="Button 1"
          backgroundColor="#007bff"
          onPress={() => {
            // Handle button 1 press
          }}
        />
        </View>
        <View style={{marginLeft:5,width:"60%", backgroundColor:"#28a745", borderRadius:5 }}>
        <CustomeButton
          text="Button 2"
          backgroundColor="#28a745"                  
          onPress={() => {
            // Handle button 2 press
          }}
        />
        </View>
      </View>
      {/* Your Home Screen content goes here */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    marginBottom: 100,
    padding:0,
   
  },
  logo: {
    width: 400, // Adjust the width of the logo as needed
    height: 700, // Adjust the height of the logo as needed
    marginBottom: -100, // Adjust the margin bottom as needed
  },
});
export default HomeScreen;
