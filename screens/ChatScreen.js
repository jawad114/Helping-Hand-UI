import * as React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Text,
  TouchableHighlight,
  ImageBackground,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatScreen}>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.homeIndicator1Position]} />
      </View>
      <View style={styles.statusBar}>
        <StatusBar barStyle="default" />
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <Pressable
            style={[styles.leftAccessory, styles.accessoryFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/angleleft.png")}
            />
            <Text style={styles.leftTitle}>Back</Text>
          </Pressable>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.title1Typo]}>Chat</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={styles.rightTitle}>Right Title</Text>
          </View>
        </View>
      </View>
      <View style={[styles.chat, styles.chatPosition]}>
        <Text style={styles.iNeedHelpTypo}>Good Evening!</Text>
      </View>
      <View style={[styles.chat1, styles.chatPosition]}>
        <Text style={[styles.iNeedHelp, styles.iNeedHelpTypo]}>
          i need help its emergecy
        </Text>
      </View>
      <View style={[styles.chat2, styles.chatPosition]}>
        <Text style={styles.iNeedHelpTypo}>
          how much time will it take to reach here
        </Text>
      </View>
      <View style={[styles.chat3, styles.chatBorder]}>
        <Text
          style={styles.iNeedHelpTypo}
        >{`I am on the way do not worry  about to `}</Text>
      </View>
      <View style={[styles.chat4, styles.chatBorder]}>
        <Text
          style={styles.iNeedHelpTypo}
        >{`ji crossed bazzar and within 3 mins i will 
be there `}</Text>
      </View>
      <Text style={[styles.pm, styles.pmTypo]}>8:29 pm</Text>
      <Text style={[styles.pm1, styles.pmTypo]}>8:29 pm</Text>
      <Text style={[styles.pm2, styles.pmTypo]}>8:29 pm</Text>
      <Text style={[styles.justNow, styles.pmTypo]}>Just now</Text>
      <View style={[styles.ellipseParent, styles.chatPosition1]}>
        <TouchableHighlight
          style={styles.wrapperLayout}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HelperProfile")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ellipse-479.png")}
          />
        </TouchableHighlight>
        <ImageBackground
          style={[styles.frameChild, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-479.png")}
        />
      </View>
      <Image
        style={styles.sendIcon}
        contentFit="cover"
        source={require("../assets/send.png")}
      />
      <Image
        style={[styles.plusIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/plus.png")}
      />
      <View style={styles.inputFillParent}>
        <TextInput
          style={[styles.inputFill, styles.title1Typo]}
          placeholder="Type your message"
          placeholderTextColor="#d0d0d0"
        />
        <View style={styles.homeIndicator2}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator1Position: {
    left: "50%",
    position: "absolute",
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  chatPosition: {
    padding: Padding.p_base,
    backgroundColor: Color.borderDividerDivider,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    left: 63,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iNeedHelpTypo: {
    color: Color.textAndIconContentTertiary,
    lineHeight: 22,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  chatBorder: {
    borderWidth: 1,
    borderColor: Color.baseColorPrimaryColor,
    borderStyle: "solid",
    backgroundColor: Color.primary50,
    borderTopLeftRadius: Border.br_base,
    left: 78,
    padding: Padding.p_base,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  pmTypo: {
    color: Color.neutralGray600,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    position: "absolute",
  },
  chatPosition1: {
    top: 124,
    justifyContent: "center",
  },
  wrapperLayout: {
    height: 44,
    width: 44,
  },
  iconLayout: {
    height: 24,
    width: 24,
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
    height: 34,
    width: 393,
    left: 0,
    position: "absolute",
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
    justifyContent: "center",
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
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    width: 393,
    flexDirection: "row",
  },
  statusBar: {
    height: 94,
    top: 0,
    width: 393,
    left: 0,
    position: "absolute",
  },
  chat: {
    top: 124,
    justifyContent: "center",
  },
  iNeedHelp: {
    display: "flex",
    width: 217,
    alignItems: "center",
  },
  chat1: {
    top: 186,
    justifyContent: "center",
  },
  chat2: {
    top: 428,
    width: 311,
    justifyContent: "space-between",
  },
  chat3: {
    top: 318,
    width: 303,
    justifyContent: "space-between",
  },
  chat4: {
    top: 560,
    width: 301,
    height: 62,
    justifyContent: "center",
  },
  pm: {
    top: 270,
    left: 63,
    color: Color.neutralGray600,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    textAlign: "left",
  },
  pm1: {
    top: 380,
    left: 329,
    textAlign: "right",
  },
  pm2: {
    top: 512,
    left: 62,
    textAlign: "right",
  },
  justNow: {
    top: 622,
    left: 324,
    textAlign: "right",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  frameChild: {
    marginTop: 260,
  },
  ellipseParent: {
    left: 18,
    height: 348,
    alignItems: "center",
    position: "absolute",
  },
  sendIcon: {
    top: 795,
    left: 346,
    width: 33,
    height: 33,
    position: "absolute",
  },
  plusIcon: {
    top: 800,
    left: 15,
    position: "absolute",
  },
  inputFill: {
    width: 292,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    height: 52,
  },
  homeIndicator2: {
    height: 34,
    width: 393,
  },
  inputFillParent: {
    top: 796,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  chatScreen: {
    backgroundColor: Color.shadesWhite,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ChatScreen;
