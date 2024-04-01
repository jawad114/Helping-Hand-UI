import * as React from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const ReviewScreen1 = () => {
  return (
    <View style={[styles.reviewScreen1, styles.titleParentFlexBox]}>
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.homeIndicator1Position]} />
      </View>
      <View style={[styles.statusBarParent, styles.titleParentFlexBox]}>
        <View style={styles.statusBar}>
          <StatusBar barStyle="default" />
          <View style={[styles.leftTitleRight, styles.homeIndicator1Position]}>
            <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={[styles.leftTitle, styles.leftTitleTypo]}>Back</Text>
            </View>
            <View style={[styles.title, styles.titleParentFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>
                Request for rent
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={styles.rightTitle}>Right Title</Text>
            </View>
          </View>
        </View>
        <View style={[styles.homeIndicator2, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
      </View>
      <View style={styles.reviewScreen1Child} />
      <View style={[styles.ctaprimaryParent, styles.titleParentFlexBox]}>
        <View style={[styles.ctaprimary, styles.titleParentFlexBox]}>
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Submit
          </Text>
        </View>
        <View style={[styles.homeIndicator4, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
      </View>
      <View style={[styles.starParent, styles.titleParentFlexBox]}>
        <Image
          style={styles.starIcon}
          contentFit="cover"
          source={require("../assets/star1.png")}
        />
        <Text
          style={[styles.excellent, styles.title1Typo]}
        >{`Excellent    `}</Text>
        <Text style={[styles.youRatedSergio, styles.title1Typo]}>
          You rated Sergio Ramasis 4 star
        </Text>
        <View style={styles.input}>
          <View style={styles.inputChild} />
          <Text style={[styles.writeYourText, styles.leftTitleTypo]}>
            Write your text
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  homeIndicator1Position: {
    left: "50%",
    position: "absolute",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  leftTitleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
    zIndex: 0,
    display: "none",
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    marginLeft: 5,
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
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
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
    width: 393,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    zIndex: 1,
    marginLeft: -181,
  },
  reviewScreen1Child: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    width: 365,
    height: 411,
    zIndex: 2,
    marginLeft: -181,
    backgroundColor: Color.shadesWhite,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  homeIndicator4: {
    marginTop: 60,
  },
  ctaprimaryParent: {
    zIndex: 3,
    marginLeft: -181,
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
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 18,
    color: Color.baseColorInfoColor,
    marginTop: 19,
  },
  inputChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.baseColorInfoColor,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  writeYourText: {
    width: "94.48%",
    top: "16.1%",
    left: "2.77%",
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.neutralGray200,
    position: "absolute",
  },
  input: {
    width: 364,
    height: 118,
    marginTop: 19,
  },
  starParent: {
    top: 336,
    left: 15,
    zIndex: 4,
    position: "absolute",
  },
  reviewScreen1: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
});

export default ReviewScreen1;
