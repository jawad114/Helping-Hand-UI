import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Button as RNEButton } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const MessageScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.messageScreen}>
      <View style={styles.statusBarParent}>
        <View style={styles.statusBar}>
          <View style={[styles.topStatusBar, styles.notchIconPosition]}>
            <Image
              style={[styles.notchIcon, styles.notchIconPosition]}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={styles.batteryIcon}
                contentFit="cover"
                source={require("../assets/battery2.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi2.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                contentFit="cover"
                source={require("../assets/mobile-signal2.png")}
              />
              <Image
                style={styles.recordingIndicatorIcon}
                contentFit="cover"
                source={require("../assets/recording-indicator2.png")}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              contentFit="cover"
              source={require("../assets/left-side2.png")}
            />
          </View>
          <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
            <Pressable
              style={[styles.leftAccessory, styles.accessoryFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={styles.leftTitle}>Back</Text>
            </Pressable>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={styles.title1}>Chat</Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={styles.rightTitle}>Right Title</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View style={styles.frameParent}>
        <RNEButton
          style={styles.frameItemFlexBox}
          title="Pranav Ray"
          radius="5"
          iconPosition="left"
          type="outline"
          titleStyle={styles.frameButtonBtn}
          onPress={() => navigation.navigate("ChatScreen")}
        />
        <View style={[styles.ellipseParent, styles.frameItemFlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <View style={styles.ayeshaTanwarParent}>
            <Text style={styles.ayeshaTanwar}>Ayesha Tanwar</Text>
            <Text style={styles.am}>10:15 AM</Text>
            <Image
              style={[styles.phchecksFillIcon, styles.phchecksIconPosition]}
              contentFit="cover"
              source={require("../assets/phchecksfill.png")}
            />
            <Text style={styles.doneTypo}>I’ll send it over an email</Text>
          </View>
        </View>
        <View style={[styles.ellipseParent, styles.frameItemFlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <View style={styles.ayeshaTanwarParent}>
            <Text style={styles.ayeshaTanwar}>Roshni</Text>
            <Text style={styles.am}>09:14 AM</Text>
            <Image
              style={styles.phchecksIconPosition}
              contentFit="cover"
              source={require("../assets/phchecksfill.png")}
            />
            <Text style={[styles.done, styles.doneTypo]}>Done!</Text>
          </View>
        </View>
        <View style={[styles.ellipseParent, styles.frameItemFlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <View style={styles.ayeshaTanwarParent}>
            <Text style={styles.ayeshaTanwar}>Kaushik</Text>
            <Text style={styles.am}>Yesterday</Text>
            <Image
              style={[styles.phchecksFillIcon, styles.phchecksIconPosition]}
              contentFit="cover"
              source={require("../assets/phchecksfill.png")}
            />
            <Text style={styles.doneTypo}>thanks man</Text>
          </View>
        </View>
        <View style={[styles.ellipseParent, styles.frameItemFlexBox]}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <View style={styles.ayeshaTanwarParent}>
            <Text style={styles.ayeshaTanwar}>Dad</Text>
            <Text style={styles.am}>Tuesday</Text>
            <Image
              style={[styles.phchecksFillIcon, styles.phchecksIconPosition]}
              contentFit="cover"
              source={require("../assets/phchecksfill.png")}
            />
            <Text style={styles.doneTypo}>Don’t forget to drink water</Text>
          </View>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
      <Text style={[styles.text1, styles.textTypo]}>{` `}</Text>
      <View style={[styles.messageScreenChild, styles.messageLayout]} />
      <View style={[styles.messageScreenItem, styles.messageLayout]} />
      <View style={[styles.messageScreenInner, styles.messageLayout]} />
      <View style={[styles.lineView, styles.messageLayout]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  notchIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  frameItemFlexBox: {
    justifyContent: "space-between",
    width: 354,
    flexDirection: "row",
    alignItems: "center",
  },
  phchecksIconPosition: {
    height: 17,
    left: 239,
    top: 22,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  doneTypo: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    top: 22,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interMedium,
    letterSpacing: -0.3,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    top: 203,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: -0.3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  messageLayout: {
    height: 1,
    width: 355,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  notchIcon: {
    width: 0,
    height: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 20,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 16,
    left: 3,
    width: 54,
    height: 21,
    position: "absolute",
  },
  topStatusBar: {
    height: 52,
    right: 0,
    overflow: "hidden",
  },
  angleLeftIcon: {
    height: 24,
    width: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentPrimary,
    textAlign: "center",
    fontWeight: "500",
    display: "none",
    flex: 1,
  },
  title: {
    width: 191,
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "none",
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
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  frameChild: {
    width: 370,
    height: 172,
  },
  statusBarParent: {
    height: 61,
    zIndex: 0,
  },
  frameInner: {
    width: 59,
    height: 59,
  },
  ayeshaTanwar: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: -0.3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  am: {
    left: 192,
    fontSize: FontSize.captionCaptionMedium_size,
    letterSpacing: -0.2,
    width: 64,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interMedium,
    textAlign: "right",
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  phchecksFillIcon: {
    display: "none",
  },
  ayeshaTanwarParent: {
    width: 256,
    height: 39,
  },
  ellipseParent: {
    marginTop: 24,
  },
  done: {
    width: 71,
  },
  frameParent: {
    height: 755,
    zIndex: 1,
    marginTop: 31,
    alignItems: "center",
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
    zIndex: 2,
    marginTop: 31,
    display: "none",
    width: 393,
  },
  text: {
    left: 111,
    zIndex: 3,
  },
  text1: {
    left: 200,
    zIndex: 4,
  },
  messageScreenChild: {
    top: 368,
    zIndex: 5,
  },
  messageScreenItem: {
    top: 458,
    zIndex: 6,
  },
  messageScreenInner: {
    top: 548,
    zIndex: 7,
  },
  lineView: {
    top: 638,
    zIndex: 8,
  },
  vectorIcon: {
    height: "3.99%",
    width: "7.12%",
    top: "86.15%",
    right: "46.56%",
    bottom: "9.86%",
    left: "46.31%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 9,
    position: "absolute",
    overflow: "hidden",
  },
  messageScreen: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default MessageScreen;
