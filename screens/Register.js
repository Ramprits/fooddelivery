import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar as NativeStatusBar,
  TouchableOpacity,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import fonts from "../assets/theme/fonts";
import colors from "../assets/theme/color";

const Register = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <SafeAreaView
        style={{
          marginTop:
            Platform.OS === "android" ? NativeStatusBar.currentHeight : null,
        }}>
        <View style={{ marginTop: 40, marginLeft: 91 }}>
          <Text
            style={{
              color: colors.primary,
              fontFamily: fonts.Montserrat_500Medium,
              fontSize: 24,
              color: colors.white,
            }}>
            Welcome to tradly
          </Text>
        </View>

        <View style={{ marginTop: 30, marginLeft: 104 }}>
          <Text
            style={{
              color: colors.primary,
              fontFamily: fonts.Montserrat_400Regular,
              fontSize: 16,
              color: colors.white,
            }}>
            Signup to your account
          </Text>
        </View>
        <View
          style={{
            marginLeft: 32,
            marginRight: 32,
            marginTop: 45,
            backgroundColor: "transparent",
          }}>
          <TextInput
            label='First Name'
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48, marginBottom: 14 }}
          />

          <TextInput
            label='Last Name'
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48, marginBottom: 14 }}
          />

          <TextInput
            label='Email ID / Phone Number'
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48, marginBottom: 14 }}
          />

          <TextInput
            label='Password'
            secureTextEntry={true}
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48, marginBottom: 14 }}
          />

          <TextInput
            label='Re-enter Password'
            secureTextEntry={true}
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48, marginBottom: 14 }}
          />

          <Button
            onPress={() => console.log("Pressed")}
            color={colors.black}
            labelStyle={{
              fontFamily: fonts.Montserrat_500Medium,
              fontSize: 14,
              color: colors.black,
            }}
            style={{
              marginTop: 14,
              backgroundColor: "#ffff",
              borderRadius: 24,
            }}>
            Create
          </Button>

          <View style={{ marginLeft: 50, marginTop: 32 }}>
            <Text
              style={{
                fontFamily: fonts.Montserrat_400Regular,
                fontSize: 18,
                color: colors.white,
              }}>
              Forgot your password?
            </Text>
          </View>

          <View style={{ marginLeft: 10, marginTop: 20, flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: fonts.Montserrat_400Regular,
                fontSize: 18,
                color: colors.white,
              }}>
              Don’t you have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginLeft: 5 }}>
              <Text
                style={{
                  fontFamily: fonts.Montserrat_400Regular,
                  fontSize: 18,
                  color: colors.white,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#13B58C",
    flex: 1,
  },
});
