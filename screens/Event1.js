import * as React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Event1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.event}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.eventScrollViewContent}
    >
      <View style={styles.statusBar}>
        <StatusBar barStyle="default" />
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <Pressable
            style={styles.accessoryFlexBox}
            barStyle="default"
            onPress={() => navigation.goBack()}
          />
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={styles.title1}>Events</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={styles.rightTitle}>Right Title</Text>
          </View>
        </View>
      </View>
      <View style={[styles.eventChild, styles.eventLayout]} />
      <View style={[styles.notification02, styles.notificationLayout]}>
        <Text style={styles.recognizeHelp}>Recognize Help</Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Your support has been acknowledged. Thank you for making a difference!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>25 min ago.</Text>
      </View>
      <View style={[styles.eventItem, styles.eventLayout]} />
      <View style={[styles.notification4, styles.notificationLayout]}>
        <Text style={styles.recognizeHelp}>Event-3</Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Help is on the way! Your request has been noticed by a nearby helper
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>25 min ago.</Text>
      </View>
      <View style={[styles.eventInner, styles.eventLayout]} />
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <View style={styles.homeIndicator2}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <View style={[styles.notification01, styles.notificationLayout]}>
        <Text style={styles.recognizeHelp}>Event-1</Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>15 min ago.</Text>
      </View>
      <View style={[styles.notification7, styles.notificationLayout]}>
        <Text style={styles.recognizeHelp}>Event-2</Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>15 min ago.</Text>
      </View>
      <View style={[styles.notification6, styles.notificationPosition]}>
        <Text style={[styles.someoneNearbyNeeds2, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo4, styles.minTypo]}>15 min ago.</Text>
      </View>
      <View style={[styles.notification8, styles.notificationPosition]}>
        <Text style={styles.recognizeHelp}>Event-4</Text>
        <Text style={[styles.yourSupportHas, styles.yourSupportHasTypo]}>
          Someone nearby needs your assistance. Be a Helping Hand!
        </Text>
        <Text style={[styles.minAgo, styles.minTypo]}>15 min ago.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
  eventLayout: {
    height: 97,
    width: 362,
    backgroundColor: Color.primary50,
    borderRadius: Border.br_9xs,
    marginTop: 17,
  },
  notificationLayout: {
    width: 325,
    height: 81,
  },
  yourSupportHasTypo: {
    color: Color.neutralGray500,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    textAlign: "left",
    width: 325,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    left: 0,
    position: "absolute",
  },
  minTypo: {
    opacity: 0.8,
    width: 78,
    color: Color.neutralGray500,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    left: 0,
    position: "absolute",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  notificationPosition: {
    left: 32,
    width: 325,
    position: "absolute",
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
    display: "none",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
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
  eventChild: {
    zIndex: 1,
    marginTop: 17,
  },
  recognizeHelp: {
    color: Color.textAndIconContentOnInverse,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  yourSupportHas: {
    top: 25,
  },
  minAgo: {
    top: 63,
  },
  notification02: {
    zIndex: 2,
    height: 81,
    marginTop: 17,
  },
  eventItem: {
    zIndex: 3,
    marginTop: 17,
  },
  notification4: {
    zIndex: 4,
    height: 81,
    marginTop: 17,
  },
  eventInner: {
    zIndex: 5,
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
    height: 312,
    zIndex: 6,
    marginTop: 17,
    width: 393,
  },
  homeIndicator2: {
    height: 34,
    zIndex: 7,
    marginTop: 17,
    display: "none",
    width: 393,
  },
  notification01: {
    top: 119,
    left: 35,
    zIndex: 8,
    height: 81,
    position: "absolute",
    width: 325,
  },
  notification7: {
    top: 339,
    left: 31,
    zIndex: 9,
    height: 81,
    position: "absolute",
    width: 325,
  },
  someoneNearbyNeeds2: {
    top: 0,
    color: Color.neutralGray500,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
  },
  minAgo4: {
    top: 38,
  },
  notification6: {
    top: 576,
    height: 56,
    zIndex: 10,
  },
  notification8: {
    top: 551,
    zIndex: 11,
    height: 81,
  },
  event: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default Event1;
