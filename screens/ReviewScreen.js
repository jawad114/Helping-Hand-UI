import * as React from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const ReviewScreen = () => {
  return (
    <View style={styles.reviewScreen2}>
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.starParentPosition]} />
      </View>
      <View style={[styles.statusBarParent, styles.statusPosition]}>
        <View style={styles.statusBar}>
          <StatusBar style={styles.statusPosition} barStyle="default" />
          <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
            <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
              <Image
                style={[styles.angleLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
            </View>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>
                Request for rent
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleTypo]}>
                Right Title
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.homeIndicator2, styles.homeLayout]}>
          <View style={[styles.homeIndicator1, styles.starParentPosition]} />
        </View>
      </View>
      <View style={[styles.starParent, styles.starParentPosition]}>
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text
          style={[styles.excellent, styles.title1Typo]}
        >{`Excellent    `}</Text>
        <Text style={[styles.youRatedSergio, styles.youTypo]}>
          You rated Sergio Ramasis 4 star
        </Text>
        <View style={[styles.popup, styles.popupLayout]}>
          <View style={[styles.popupChild, styles.popupChildLayout]} />
          <Text style={[styles.thankYou, styles.title1Typo]}>Thank you</Text>
          <Image
            style={styles.popupItem}
            contentFit="cover"
            source={require("../assets/group-6476.png")}
          />
          <Text style={[styles.thankYouFor, styles.youTypo]}>
            Thank you for your valuable feedback and tip
          </Text>
          <Image
            style={[styles.crossIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/cross1.png")}
          />
          <View style={[styles.ctaprimary, styles.popupChildLayout]}>
            <Text style={[styles.createAnAccount, styles.title1Typo]}>
              Back Home
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.homeIndicatorWrapper, styles.leftTitleRightPosition]}
      >
        <View style={styles.homeLayout}>
          <View style={[styles.homeIndicator1, styles.starParentPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 34,
    width: 393,
  },
  starParentPosition: {
    left: "50%",
    position: "absolute",
  },
  statusPosition: {
    top: 0,
    left: 0,
  },
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  youTypo: {
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  popupLayout: {
    height: 355,
    width: 361,
  },
  popupChildLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  leftTitleRightPosition: {
    marginLeft: -196.5,
    left: "50%",
    position: "absolute",
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
    top: 818,
    display: "none",
    left: 0,
    height: 34,
    position: "absolute",
  },
  angleLeftIcon: {
    height: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 5,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.textColorContentPrimary,
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
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
    top: 52,
    height: 42,
    marginLeft: -196.5,
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  homeIndicator2: {
    opacity: 0.4,
    marginTop: 176,
  },
  statusBarParent: {
    alignItems: "center",
    position: "absolute",
  },
  starIcon: {
    width: 189,
    height: 24,
  },
  excellent: {
    fontSize: FontSize.headlineLgHLgMedium_size,
    lineHeight: 26,
    color: Color.primary500,
    marginTop: 19,
  },
  youRatedSergio: {
    color: Color.baseColorInfoColor,
    marginTop: 19,
  },
  popupChild: {
    height: 355,
    width: 361,
    top: 0,
    left: 0,
    backgroundColor: Color.shadesWhite,
  },
  thankYou: {
    top: 192,
    left: 123,
    fontSize: FontSize.titleSmTSmMedium_size,
    lineHeight: 28,
    color: Color.textAndIconContentTertiary,
    position: "absolute",
  },
  popupItem: {
    top: 45,
    left: 119,
    width: 124,
    height: 124,
    position: "absolute",
  },
  thankYouFor: {
    top: "63.94%",
    left: "11.91%",
    color: Color.neutralGray500,
    position: "absolute",
  },
  crossIcon: {
    top: 9,
    left: 327,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    height: 24,
    position: "absolute",
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimary: {
    top: 277,
    left: 11,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  popup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 19,
    elevation: 19,
    shadowOpacity: 1,
    marginTop: 19,
  },
  starParent: {
    marginLeft: -181.5,
    top: 313,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    paddingHorizontal: 1,
    paddingVertical: 14,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.shadesWhite,
  },
  homeIndicatorWrapper: {
    top: 830,
    alignItems: "center",
  },
  reviewScreen2: {
    width: "100%",
    height: 864,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
});

export default ReviewScreen;
