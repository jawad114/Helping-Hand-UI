import * as React from "react";
import { ScrollView, StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.notificationScreen}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.notificationScreenScrollViewContent}
    >
      <View style={styles.statusBar}>
        <View style={[styles.topStatusBar, styles.minAgoPosition]}>
          <Image
            style={[styles.notchIcon, styles.minAgoPosition]}
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
            <Text style={styles.title1}>Notification</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={styles.rightTitle}>Right Title</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.today, styles.helpTypo]}>{`Today `}</Text>
      <View
        style={[styles.notificationScreenChild, styles.notificationLayout1]}
      />
      <View style={[styles.notification02, styles.notificationLayout]}>
        <Text style={[styles.recognizeHelp, styles.helpTypo]}>
          Recognize Help
        </Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Your support has been acknowledged. Thank you for making a difference!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>25 min ago.</Text>
      </View>
      <Text style={[styles.yesterday, styles.helpTypo]}>Yesterday</Text>
      <View
        style={[styles.notificationScreenItem, styles.notificationLayout1]}
      />
      <View style={[styles.notification4, styles.notificationLayout]}>
        <Text style={[styles.recognizeHelp, styles.helpTypo]}>
          Receive Help
        </Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Help is on the way! Your request has been noticed by a nearby helper
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>25 min ago.</Text>
      </View>
      <View style={[styles.notification5, styles.notificationLayout]}>
        <Text style={[styles.recognizeHelp, styles.helpTypo]}>
          Receive Help
        </Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Help is on the way! Your request has been noticed by a nearby helper
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>25 min ago.</Text>
      </View>
      <View
        style={[styles.notificationScreenInner, styles.notificationLayout1]}
      />
      <Text style={[styles.provideHelp, styles.helpTypo]}>Provide Help</Text>
      <Text style={[styles.someoneNearbyNeeds, styles.yourSupportHasTypo]}>
        Someone nearby needs your assistance. Be a Helping Hand!
      </Text>
      <Text style={[styles.minAgo3, styles.minTypo]}>15 min ago.</Text>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <View style={styles.homeIndicator2}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <View style={[styles.notification01, styles.notificationPosition]}>
        <Text style={[styles.recognizeHelp, styles.helpTypo]}>
          Provide Help
        </Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>15 min ago.</Text>
      </View>
      <View style={[styles.notification7, styles.notificationPosition]}>
        <Text style={[styles.recognizeHelp, styles.helpTypo]}>
          Provide Help
        </Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>15 min ago.</Text>
      </View>
      <View style={[styles.notification6, styles.notificationPosition]}>
        <Text style={[styles.recognizeHelp, styles.helpTypo]}>
          Provide Help
        </Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>15 min ago.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationScreenScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  minAgoPosition: {
    left: 0,
    position: "absolute",
  },
  batteryIconPosition: {
    right: 0,
    top: 0,
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  helpTypo: {
    color: Color.textAndIconContentOnInverse,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  notificationLayout1: {
    height: 97,
    width: 362,
    backgroundColor: Color.primary50,
    borderRadius: Border.br_9xs,
    marginTop: 17,
  },
  notificationLayout: {
    height: 81,
    width: 325,
    marginTop: 17,
  },
  yourSupportHasTypo: {
    color: Color.neutralGray500,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    width: 325,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  minTypo: {
    opacity: 0.8,
    color: Color.neutralGray500,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  notificationPosition: {
    left: 33,
    height: 81,
    width: 325,
    position: "absolute",
  },
  notchIcon: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
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
    top: 0,
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
    color: Color.textColorContentPrimary,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
    zIndex: 0,
    width: 393,
  },
  today: {
    zIndex: 1,
    marginTop: 17,
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentOnInverse,
  },
  notificationScreenChild: {
    zIndex: 2,
  },
  recognizeHelp: {
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    color: Color.textAndIconContentOnInverse,
    left: 0,
    position: "absolute",
    top: 0,
  },
  yourSupportHas: {
    top: 25,
    left: 0,
    position: "absolute",
  },
  minAgo: {
    top: 63,
    width: 78,
    left: 0,
    position: "absolute",
  },
  notification02: {
    zIndex: 3,
  },
  yesterday: {
    zIndex: 4,
    marginTop: 17,
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentOnInverse,
  },
  notificationScreenItem: {
    zIndex: 5,
  },
  notification4: {
    zIndex: 6,
  },
  notification5: {
    zIndex: 7,
  },
  notificationScreenInner: {
    zIndex: 8,
  },
  provideHelp: {
    width: 308,
    zIndex: 9,
    marginTop: 17,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    color: Color.textAndIconContentOnInverse,
  },
  someoneNearbyNeeds: {
    zIndex: 10,
    marginTop: 17,
  },
  minAgo3: {
    width: 315,
    height: 1,
    zIndex: 11,
    marginTop: 17,
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
    height: 31,
    zIndex: 12,
    marginTop: 17,
    width: 393,
  },
  homeIndicator2: {
    height: 34,
    zIndex: 13,
    marginTop: 17,
    display: "none",
    width: 393,
  },
  notification01: {
    top: 166,
    zIndex: 14,
  },
  notification7: {
    top: 407,
    zIndex: 15,
  },
  notification6: {
    top: 717,
    zIndex: 16,
  },
  notificationScreen: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default NotificationScreen;
