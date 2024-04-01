import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SelectHelpType = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.selectHelpType, styles.ctaprimaryFlexBox]}>
      <View style={styles.statusBarParent}>
        <View style={styles.statusBar}>
          <StatusBar style={styles.car1Position} barStyle="default" />
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
              <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
            </Pressable>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>
                Select Help Type
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleTypo]}>
                Right Title
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.selectHelpType1}>Select help type</Text>
      </View>
      <View style={[styles.carParent, styles.parentFlexBox]}>
        <View style={styles.carLayout}>
          <View style={[styles.car1, styles.carLayout]} />
          <TouchableHighlight
            style={styles.vector}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HelpDescription")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </TouchableHighlight>
          <Text style={[styles.medical, styles.medicalTypo]}>Medical</Text>
        </View>
        <View style={[styles.bike, styles.carLayout]}>
          <View style={[styles.car1, styles.carLayout]} />
          <TouchableHighlight
            style={styles.vector1}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HelpDescription")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </TouchableHighlight>
          <Text style={[styles.roadCrossing, styles.medicalTypo]}>
            road crossing
          </Text>
        </View>
        <View style={[styles.bike, styles.carLayout]}>
          <View style={[styles.car1, styles.carLayout]} />
          <Text style={[styles.ride, styles.rideTypo]}>Ride</Text>
          <TouchableHighlight
            style={styles.cycle2}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HelpDescription")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/cycle.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={[styles.bike, styles.carLayout]}>
          <View style={[styles.car1, styles.carLayout]} />
          <Text style={[styles.taxi2, styles.rideTypo]}>Taxi</Text>
          <TouchableHighlight
            style={styles.cycle2}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HelpDescription")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/taxi.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      <View style={[styles.ctaprimaryParent, styles.parentFlexBox]}>
        <TouchableHighlight
          style={[styles.ctaprimary, styles.carParentLayout]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HelpDescription")}
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Others
          </Text>
        </TouchableHighlight>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaprimaryFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  car1Position: {
    left: 0,
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
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  parentFlexBox: {
    marginTop: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  carLayout: {
    height: 160,
    width: 160,
  },
  medicalTypo: {
    top: 104,
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  rideTypo: {
    top: 110,
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  carParentLayout: {
    width: 340,
    flexDirection: "row",
  },
  homeLayout: {
    height: 34,
    width: 393,
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
    color: Color.textColorContentSecondary,
    marginLeft: 5,
    textAlign: "left",
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
  selectHelpType1: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.titleMdTMdSemibold,
    marginTop: 35,
    color: Color.textAndIconContentTertiary,
    textAlign: "left",
  },
  statusBarParent: {
    zIndex: 0,
    alignItems: "center",
  },
  car1: {
    backgroundColor: Color.primary50,
    borderStyle: "solid",
    borderColor: Color.baseColorPrimaryColor,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  vector: {
    left: 69,
    top: 40,
    width: 31,
    height: 46,
    position: "absolute",
  },
  medical: {
    left: 52,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: "29.69%",
    top: "25%",
    right: "39.69%",
    bottom: "46.25%",
    width: "30.63%",
    height: "28.75%",
    position: "absolute",
  },
  roadCrossing: {
    left: 18,
  },
  bike: {
    marginLeft: 20,
  },
  ride: {
    left: 62,
    textAlign: "center",
  },
  cycle2: {
    left: 43,
    top: 26,
    width: 74,
    height: 74,
    position: "absolute",
  },
  taxi2: {
    left: 64,
    textAlign: "left",
  },
  carParent: {
    flexWrap: "wrap",
    zIndex: 1,
    width: 340,
    flexDirection: "row",
  },
  createAnAccount: {
    color: Color.shadesWhite,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimary: {
    backgroundColor: Color.primary700,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
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
    marginTop: 190,
  },
  ctaprimaryParent: {
    zIndex: 2,
  },
  homeIndicator2: {
    top: 818,
    zIndex: 3,
    display: "none",
    left: 0,
    position: "absolute",
  },
  selectHelpType: {
    backgroundColor: Color.shadesWhite,
    height: 865,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    flex: 1,
  },
});

export default SelectHelpType;
