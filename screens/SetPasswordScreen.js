import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";

const SetPasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.parentFlexBox}
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
          <Text style={styles.title}>Reset your password</Text>
        </View>
        <CustomInput
          placeholder="Enter Your old password"
          value={oldPassword}
          setValue={setOldPassword}
        />
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomInput
          placeholder="Enter your password"
          value={confirmNewPassword}
          setValue={setConfirmNewPassword}
        />
        <CustomButton text="SignIn" onPress={() => navigation.navigate("")} />
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
    fontFamily: "Poppins-Regular",
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
});

export default SetPasswordScreen;
