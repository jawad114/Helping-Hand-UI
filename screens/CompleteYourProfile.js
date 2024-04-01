import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const CompleteYourProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.completeYourProfile, styles.titleFlexBox]}>
      <View style={styles.completeYourProfileInner}>
        <View style={[styles.statusBarParent, styles.statusPosition]}>
          <View style={styles.statusBar}>
            <StatusBar style={styles.statusPosition} barStyle="default" />
            <View
              style={[styles.leftTitleRight, styles.leftTitleRightPosition]}
            >
              <Pressable
                style={[styles.leftAccessory, styles.accessoryFlexBox]}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.angleLeftIcon}
                  contentFit="cover"
                  source={require("../assets/angleleft3.png")}
                />
                <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
              </Pressable>
              <View style={[styles.title, styles.titleFlexBox]}>
                <Text style={[styles.title1, styles.createTypo]}>Profile</Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse35.png")}
          />
        </View>
      </View>
      <View style={[styles.inputParent, styles.parentFlexBox]}>
        <TextInput
          style={styles.inputTypo}
          placeholder="Full Name"
          multiline={true}
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.input1, styles.inputTypo]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.input1, styles.inputTypo]}
          placeholder="Street"
          multiline={true}
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.input1, styles.inputTypo]}
          placeholder="City"
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.input1, styles.inputTypo]}
          placeholder="District"
          placeholderTextColor="#d0d0d0"
        />
      </View>
      <View style={[styles.ctasecondaryParent, styles.parentFlexBox]}>
        <Pressable
          style={[styles.ctasecondary, styles.ctaprimaryFlexBox]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.createAnAccount, styles.createTypo]}>
            Cancel
          </Text>
        </Pressable>
        <TouchableHighlight
          style={[styles.ctaprimary, styles.ctaprimaryFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
          }
        >
          <Text style={[styles.createAnAccount1, styles.createTypo]}>Save</Text>
        </TouchableHighlight>
        <View style={styles.homeIndicator}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
      </View>
      <Image
        style={styles.completeYourProfileChild}
        contentFit="cover"
        source={require("../assets/group-1114.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    color: Color.textColorContentSecondary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  createTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  parentFlexBox: {
    marginTop: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  inputTypo: {
    height: 60,
    width: 362,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimaryFlexBox: {
    paddingVertical: Padding.p_base_5,
    height: 54,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  leftTitle: {
    textAlign: "left",
    marginLeft: 5,
    color: Color.textColorContentSecondary,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.textColorContentSecondary,
    flex: 1,
  },
  title: {
    width: 191,
    flexDirection: "row",
  },
  rightTitle: {
    textAlign: "right",
    display: "none",
    color: Color.textColorContentSecondary,
  },
  rightAccessory: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    height: 42,
    flexDirection: "row",
    width: 393,
    justifyContent: "center",
    alignItems: "center",
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  frameChild: {
    width: 121,
    height: 121,
    marginTop: 30,
  },
  statusBarParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  completeYourProfileInner: {
    height: 245,
    zIndex: 0,
    width: 393,
  },
  input1: {
    marginTop: 20,
  },
  inputParent: {
    zIndex: 1,
  },
  createAnAccount: {
    color: Color.textColorContentSecondary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctasecondary: {
    borderStyle: "solid",
    borderColor: Color.primary700,
    borderWidth: 1,
    paddingHorizontal: 58,
  },
  createAnAccount1: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimary: {
    backgroundColor: Color.primary700,
    paddingHorizontal: 67,
    marginLeft: 15,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightThemeTextHeading,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    height: 34,
    marginLeft: 15,
    width: 393,
  },
  ctasecondaryParent: {
    flexWrap: "wrap",
    zIndex: 2,
    flexDirection: "row",
    width: 393,
  },
  completeYourProfileChild: {
    top: 214,
    left: 223,
    width: 31,
    height: 31,
    zIndex: 3,
    position: "absolute",
  },
  completeYourProfile: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default CompleteYourProfile;
