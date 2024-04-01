import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PhoneVerifyOtp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.phoneVerifyOtp, styles.phoneVerifyOtpFlexBox]}>
      <View style={[styles.statusBarParent, styles.phoneVerifyOtpFlexBox]}>
        <View style={styles.statusBar}>
          <StatusBar style={styles.topStatusBarPosition} barStyle="default" />
          <Pressable style={[styles.leftTitleRight, styles.titleFlexBox]}>
            <Pressable
              style={[styles.leftAccessory, styles.accessoryFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={[styles.leftTitle, styles.titleLayout]}>Back</Text>
            </Pressable>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>Title</Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleLayout]}>Skip</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.titleFlexBox}>
          <Text style={[styles.verification, styles.title1Typo]}>
            verification
          </Text>
          <Text style={styles.enterYourOtp}>Enter your OTP code</Text>
        </View>
        <TextInput
          style={styles.inputOtpBox}
          keyboardType="number-pad"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Text style={[styles.didntReceiveCodeContainer, styles.title1Typo]}>
          <Text style={styles.didntReceiveCode}>{`Didn’t receive code? `}</Text>
          <Text style={styles.resendAgain}>Resend again</Text>
        </Text>
      </View>
      <TouchableHighlight
        style={[styles.ctaprimary, styles.titleFlexBox]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("CompleteYourProfile")}
      >
        <Text style={[styles.createAnAccount, styles.title1Typo]}> Verify</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.alphanumberic, styles.titleFlexBox]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <>
          <View style={[styles.suggestions, styles.titleFlexBox]}>
            <Text style={[styles.suggestion, styles.suggestionFlexBox]}>4</Text>
            <View style={styles.divider} />
            <Text style={[styles.suggestion, styles.suggestionFlexBox]}>5</Text>
            <View style={styles.divider} />
            <Text style={[styles.suggestion2, styles.suggestionFlexBox]}>
              2
            </Text>
          </View>
          <Pressable style={styles.numericKeyboardLayout}>
            <View style={styles.rowFlexBox}>
              <View style={styles.keysShadowBox}>
                <Text style={[styles.number, styles.numberTypo]}>1</Text>
                <Text style={[styles.letters, styles.numberTypo]} />
              </View>
              <View style={[styles.keys1, styles.keysShadowBox]}>
                <Text style={[styles.number, styles.numberTypo]}>2</Text>
                <Text style={[styles.letters, styles.numberTypo]}>A b c</Text>
              </View>
              <View style={[styles.keys2, styles.keysShadowBox]}>
                <Text style={[styles.number, styles.numberTypo]}>3</Text>
                <Text style={[styles.letters, styles.numberTypo]}>D E F</Text>
              </View>
            </View>
            <View style={[styles.row2, styles.rowFlexBox]}>
              <View style={styles.keysShadowBox}>
                <Text style={[styles.number, styles.numberTypo]}>4</Text>
                <Text style={[styles.letters, styles.numberTypo]}>G H I</Text>
              </View>
              <View style={[styles.keys4, styles.keysShadowBox]}>
                <Text style={[styles.number, styles.numberTypo]}>5</Text>
                <Text style={[styles.letters, styles.numberTypo]}>J K L</Text>
              </View>
              <View style={[styles.keys5, styles.keysShadowBox]}>
                <Text style={[styles.number, styles.numberTypo]}>6</Text>
                <Text style={[styles.letters, styles.numberTypo]}>M N O</Text>
              </View>
            </View>
            <View style={[styles.row2, styles.rowFlexBox]}>
              <View style={styles.keysShadowBox}>
                <Text style={[styles.number, styles.numberTypo]}>7</Text>
                <Text style={[styles.letters, styles.numberTypo]}>P Q R S</Text>
              </View>
              <View style={[styles.keys7, styles.keysShadowBox]}>
                <Text style={[styles.number, styles.numberTypo]}>8</Text>
                <Text style={[styles.letters, styles.numberTypo]}>T U V</Text>
              </View>
              <View style={[styles.keys8, styles.keysShadowBox]}>
                <Text style={[styles.number, styles.numberTypo]}>9</Text>
                <Text style={[styles.letters, styles.numberTypo]}>W X Y Z</Text>
              </View>
            </View>
            <View style={[styles.row2, styles.rowFlexBox]}>
              <Image
                style={styles.keysIconLayout}
                contentFit="cover"
                source={require("../assets/keys2.png")}
              />
              <View style={[styles.keys9, styles.keysShadowBox]}>
                <Text style={[styles.number9, styles.numberTypo]}>0</Text>
              </View>
              <Image
                style={[styles.keysIcon1, styles.keysIconLayout]}
                contentFit="cover"
                source={require("../assets/keys11.png")}
              />
            </View>
          </Pressable>
        </>
      </TouchableHighlight>
      <View style={[styles.homeIndicator, styles.topStatusBarPosition]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneVerifyOtpFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  topStatusBarPosition: {
    left: 0,
    position: "absolute",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  titleLayout: {
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  suggestionFlexBox: {
    display: "flex",
    color: Color.lightThemeTextHeading,
    textAlign: "center",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  numberTypo: {
    width: 123,
    fontFamily: FontFamily.sFProText,
    textTransform: "uppercase",
    display: "flex",
    color: Color.lightThemeTextHeading,
    textAlign: "center",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  keysShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
  rowFlexBox: {
    height: 47,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  keysIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  leftTitle: {
    textAlign: "left",
    marginLeft: 5,
    color: Color.textColorContentSecondary,
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  title1: {
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    fontWeight: "500",
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
    flexDirection: "row",
  },
  rightTitle: {
    textAlign: "right",
    display: "none",
    color: Color.textColorContentSecondary,
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  rightAccessory: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    height: 42,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  verification: {
    lineHeight: 30,
    fontSize: FontSize.titleMdTMdSemibold_size,
    textAlign: "center",
    color: Color.textColorContentSecondary,
  },
  enterYourOtp: {
    lineHeight: 24,
    color: Color.neutralGray400,
    width: 280,
    marginTop: 12,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  inputOtpBox: {
    width: 290,
    height: 48,
  },
  didntReceiveCode: {
    color: Color.textAndIconContentTertiary,
  },
  resendAgain: {
    color: Color.primary700,
  },
  didntReceiveCodeContainer: {
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  statusBarParent: {
    height: 321,
    zIndex: 0,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    zIndex: 1,
    flexDirection: "row",
  },
  suggestion: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  divider: {
    width: 1,
    height: 25,
    opacity: 0.1,
    backgroundColor: Color.lightThemeTextHeading,
  },
  suggestion2: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  suggestions: {
    height: 48,
    display: "none",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  number: {
    top: -1,
    fontSize: FontSize.titleMdTMdSemibold_size,
  },
  letters: {
    bottom: 3,
    fontSize: FontSize.size_3xs,
    fontWeight: "800",
  },
  keys1: {
    marginLeft: 6,
  },
  keys2: {
    marginLeft: 6,
  },
  keys4: {
    marginLeft: 6,
  },
  keys5: {
    marginLeft: 6,
  },
  row2: {
    marginTop: 8,
  },
  keys7: {
    marginLeft: 6,
  },
  keys8: {
    marginLeft: 6,
  },
  number9: {
    height: 44,
    fontSize: FontSize.titleMdTMdSemibold_size,
    top: 0,
  },
  keys9: {
    marginLeft: 6,
  },
  keysIcon1: {
    marginLeft: 6,
  },
  numericKeyboardLayout: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    display: "none",
    alignSelf: "stretch",
  },
  alphanumberic: {
    backgroundColor: Color.colorSilver_100,
    height: 1,
    zIndex: 2,
    width: 393,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.lightThemeTextHeading,
  },
  homeIndicator: {
    top: 818,
    height: 34,
    zIndex: 3,
    display: "none",
    width: 393,
  },
  phoneVerifyOtp: {
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.shadesWhite,
    justifyContent: "space-between",
  },
});

export default PhoneVerifyOtp;
