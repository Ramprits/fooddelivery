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
import { useController, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginRequest } from "../redux/auth.slice";

const Input = ({ name, control, ...props }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextInput value={field.value} onChangeText={field.onChange} {...props} />
  );
};
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "rpsahani@mailinator.com",
      password: "Ramprit@1234",
    },
  });

  const onSubmit = (data) => {
    dispatch(loginRequest(data))
      .unwrap()
      .then((res) => {
        navigation.navigate("Home");
      })
      .catch((err) => console.error(err));
  };
  return (
    <View style={styles.loginContainer}>
      <SafeAreaView
        style={{
          marginTop:
            Platform.OS === "android" ? NativeStatusBar.currentHeight : null,
        }}>
        <View style={{ marginTop: 175, marginLeft: 70 }}>
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

        <View style={{ marginTop: 30, marginLeft: 90 }}>
          <Text
            style={{
              color: colors.primary,
              fontFamily: fonts.Montserrat_400Regular,
              fontSize: 16,
              color: colors.white,
            }}>
            Login to your account
          </Text>
        </View>
        <View
          style={{
            marginLeft: 32,
            marginRight: 32,
            marginTop: 45,
            backgroundColor: "transparent",
          }}>
          <Input
            control={control}
            name='email'
            label='Email / Mobile Number'
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48 }}
          />
          <Input
            label='Password'
            name='password'
            control={control}
            secureTextEntry={true}
            outlineColor={colors.white}
            style={{ backgroundColor: "#ffff", height: 48, marginTop: 16 }}
          />

          <Button
            onPress={handleSubmit(onSubmit)}
            color={colors.black}
            labelStyle={{
              fontFamily: fonts.Montserrat_500Medium,
              fontSize: 14,
              color: colors.black,
            }}
            style={{
              marginTop: 38,
              backgroundColor: "#ffff",
              borderRadius: 24,
            }}>
            Login
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

          <View style={{ marginLeft: 30, marginTop: 20, flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: fonts.Montserrat_400Regular,
                fontSize: 18,
                color: colors.white,
              }}>
              Don’t have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={{ marginLeft: 5 }}>
              <Text
                style={{
                  fontFamily: fonts.Montserrat_400Regular,
                  fontSize: 18,
                  color: colors.white,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#13B58C",
    flex: 1,
  },
});
