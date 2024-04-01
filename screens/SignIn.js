import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";
import GmailComponent from "../components/gmail";

const SignIn = ({ navigation }) => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("everything is ok");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot");
  };
  const onSignUpPressed = () => {
    console.warn("Create account");
  };
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.signIn, styles.parentFlexBox]}
    >
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Sign in with your email</Text>
        </View>
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
        />
        <CustomInput
          placeholder="Confirm your password"
          value={confirmpassword}
          setValue={setconfirmPassword}
        />
        <View
          style={[styles.forgetPasswordWrapper, styles.leftTitleRightFlexBox]}
        >
          <Pressable onPress={() => navigation.navigate("SetPasswordScreen")}>
            <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
              Forget password?
            </Text>
          </Pressable>
        </View>
        <CustomButton
          text="SignIn"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MainContainer")}
        />

        <View style={styles.orParent}>
          <Text style={[styles.or, styles.orTypo]}>or</Text>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <GmailComponent />
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.orTypo}>
            <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
            <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </Pressable>

        {/* <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={() => navigation.navigate("Forgot password screen")}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "transparent",
  },
  backButtonText: {
    color: "#414141",
    fontSize: 16,
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    top: 20,
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },
  or: {
    color: Color.baseColorInfoColor,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 157,
    borderTopWidth: 1,
    backgroundColor: Color.baseColorInfoColor,
    borderColor: Color.baseColorInfoColor,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 187,
  },
  orParent: {
    width: 343,
    height: 24,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  orTypo: {
    lineHeight: 24,
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "500",
  },
  orTypo: {
    top: 15,
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  dontHaveAn: {
    color: Color.textAndIconContentTertiary,
  },
  signUp: {
    color: Color.primary700,
  },
  forgetPasswordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  forgetPasswordWrapper: {
    padding: Padding.p_3xs,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  forgetPassword: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.baseColorErrorColor,
  },
});

export default SignIn;
