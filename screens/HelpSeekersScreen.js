import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const HelpSeekersScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.helpSeekersScreen, styles.parentFlexBox]}>
      <View style={styles.frameGroupPosition}>
        <View style={styles.statusBar}>
          <View style={[styles.topStatusBar, styles.batteryIconPosition]}>
            <Image
              style={styles.notchIcon}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.batteryIconPosition]}
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
              <Text style={[styles.title1, styles.title1Typo]}>
                Select transport
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={styles.rightTitle}>Right Title</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <View style={[styles.helpSeekersParent, styles.parentFlexBox]}>
            <Text style={styles.helpSeekers}>Help Seekers</Text>
            <View style={[styles.carCard02, styles.carCardSpaceBlock]}>
              <View style={styles.carCard02Child} />
              <Image
                style={[styles.carIcon, styles.carIconPosition]}
                contentFit="cover"
                source={require("../assets/car.png")}
              />
              <Text style={[styles.bmwCabrio, styles.mapIconPosition]}>
                XYZ Help Seeker
              </Text>
              <Text style={[styles.automatic3, styles.automaticTypo]}>
                Information about helper in one lin
              </Text>
              <Text style={[styles.m5minsAway, styles.m5minsTypo]}>
                800m (5mins away)
              </Text>
              <Image
                style={[styles.mapIcon, styles.mapIconLayout]}
                contentFit="cover"
                source={require("../assets/map31.png")}
              />
              <View style={styles.ctasecondary}>
                <Text style={[styles.createAnAccount, styles.title1Typo]}>
                  View More
                </Text>
              </View>
              <View style={styles.ctaprimary}>
                <Text style={[styles.createAnAccount1, styles.createTypo]}>
                  Ready to help
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.carCard3, styles.carCardSpaceBlock]}>
            <View style={styles.carCard02Child} />
            <Image
              style={[styles.carIcon1, styles.carIconPosition]}
              contentFit="cover"
              source={require("../assets/car1.png")}
            />
            <Text style={[styles.bmwCabrio1, styles.mapIcon1Position]}>
              XYZ Help Seeker
            </Text>
            <Text style={[styles.automatic31, styles.mapIcon1Position]}>
              Information about helper in one lin
            </Text>
            <Text style={[styles.m5minsAway1, styles.m5minsTypo]}>
              800m (5mins away)
            </Text>
            <Image
              style={[styles.mapIcon1, styles.mapIcon1Position]}
              contentFit="cover"
              source={require("../assets/map4.png")}
            />
            <View style={styles.ctasecondary}>
              <Text style={[styles.createAnAccount, styles.title1Typo]}>
                View More
              </Text>
            </View>
            <View style={styles.ctaprimary}>
              <Text style={[styles.createAnAccount1, styles.createTypo]}>
                Ready to help
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
        <TouchableHighlight
          style={[styles.ctasecondary2, styles.ctasecondary2Position]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HelpDetail")}
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            View More
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.ctaprimary2, styles.ctaprimaryFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <TouchableHighlight
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ChatScreen")}
          >
            <Text style={styles.createTypo}>Acknowledge</Text>
          </TouchableHighlight>
        </TouchableHighlight>
        <View style={[styles.ctasecondary3, styles.ctasecondaryBorder]}>
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            View More
          </Text>
        </View>
        <View style={[styles.ctaprimary3, styles.ctaprimaryFlexBox]}>
          <Text style={styles.createTypo}>Acknowledge</Text>
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.ctasecondary2Position]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  batteryIconPosition: {
    right: 0,
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
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  frameGroupPosition: {
    zIndex: 0,
    alignItems: "center",
  },
  carCardSpaceBlock: {
    marginTop: 32,
    height: 170,
  },
  carIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "65.01%",
    bottom: "57.65%",
    top: "7.65%",
    height: "34.71%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  mapIconPosition: {
    left: "2.76%",
    position: "absolute",
  },
  automaticTypo: {
    color: Color.baseColorInfoColor,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    top: "23.53%",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  m5minsTypo: {
    lineHeight: 16,
    top: "37.06%",
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.textColorContentSecondary,
    display: "none",
    position: "absolute",
  },
  mapIconLayout: {
    bottom: "53.53%",
    height: "9.41%",
    top: "37.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    overflow: "hidden",
  },
  createTypo: {
    color: Color.shadesWhite,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  mapIcon1Position: {
    left: "2.75%",
    position: "absolute",
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  ctasecondary2Position: {
    zIndex: 2,
    position: "absolute",
  },
  ctaprimaryFlexBox: {
    paddingHorizontal: Padding.p_74xl_5,
    height: 54,
    backgroundColor: Color.primary700,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  ctasecondaryBorder: {
    height: "7.8%",
    paddingVertical: Padding.p_base_5,
    paddingHorizontal: Padding.p_26xl,
    borderColor: Color.primary700,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.shadesWhite,
  },
  notchIcon: {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 24,
    height: 11,
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
    left: 0,
    overflow: "hidden",
  },
  angleLeftIcon: {
    height: 24,
    width: 24,
  },
  leftTitle: {
    marginLeft: 5,
    textAlign: "left",
    color: Color.textColorContentSecondary,
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
    color: Color.textColorContentPrimary,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
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
  helpSeekers: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.titleMdTMdSemibold,
    color: Color.textAndIconContentTertiary,
    textAlign: "left",
  },
  carCard02Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.primary50,
    borderColor: Color.baseColorPrimaryColor,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  carIcon: {
    width: "27.83%",
    right: "7.15%",
  },
  bmwCabrio: {
    top: "9.41%",
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  automatic3: {
    left: "2.76%",
    position: "absolute",
  },
  m5minsAway: {
    left: "8%",
  },
  mapIcon: {
    width: "4.39%",
    right: "92.85%",
    left: "2.76%",
    position: "absolute",
  },
  createAnAccount: {
    color: Color.primary700,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctasecondary: {
    marginLeft: -171.5,
    paddingVertical: Padding.p_base_5,
    paddingHorizontal: Padding.p_26xl,
    borderColor: Color.primary700,
    bottom: "7.65%",
    top: "60.59%",
    height: "31.76%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    left: "50%",
    display: "none",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  createAnAccount1: {
    display: "none",
  },
  ctaprimary: {
    marginLeft: 6.5,
    backgroundColor: Color.primary700,
    paddingVertical: Padding.p_base_5,
    paddingHorizontal: Padding.p_26xl,
    bottom: "7.65%",
    top: "60.59%",
    height: "31.76%",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    left: "50%",
    display: "none",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  carCard02: {
    width: 355,
  },
  helpSeekersParent: {
    justifyContent: "center",
  },
  carIcon1: {
    width: "27.82%",
    right: "7.16%",
  },
  bmwCabrio1: {
    top: "9.41%",
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  automatic31: {
    color: Color.baseColorInfoColor,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    top: "23.53%",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  m5minsAway1: {
    left: "7.99%",
  },
  mapIcon1: {
    width: "4.41%",
    right: "92.84%",
    bottom: "53.53%",
    height: "9.41%",
    top: "37.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    overflow: "hidden",
  },
  carCard3: {
    width: 363,
  },
  frameGroup: {
    justifyContent: "center",
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
    marginTop: 235,
    zIndex: 1,
  },
  ctasecondary2: {
    marginLeft: -163.5,
    top: "20.91%",
    bottom: "71.29%",
    width: 164,
    height: "7.8%",
    paddingVertical: Padding.p_base_5,
    paddingHorizontal: Padding.p_26xl,
    borderColor: Color.primary700,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.shadesWhite,
  },
  ctaprimary2: {
    top: 147,
    left: 210,
    width: 158,
    zIndex: 3,
  },
  ctasecondary3: {
    marginLeft: -165.5,
    top: "50.73%",
    bottom: "41.48%",
    width: 163,
    zIndex: 4,
    position: "absolute",
  },
  ctaprimary3: {
    top: 357,
    left: 209,
    width: 169,
    zIndex: 5,
  },
  frameParent: {
    marginTop: 55,
    zIndex: 1,
    justifyContent: "center",
  },
  homeIndicator2: {
    top: 818,
    height: 34,
    width: 393,
    display: "none",
    left: 0,
  },
  helpSeekersScreen: {
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite,
    alignItems: "center",
    flex: 1,
  },
});

export default HelpSeekersScreen;
