import React from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar as NativeStatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import fonts from "../assets/theme/fonts";
import colors from "../assets/theme/color";
import { useController, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginRequest } from "../redux/auth.slice";

const LoginButton = styled.TouchableOpacity``;
const TextBox = styled(TextInput).attrs({
  placeholderTextColor: "white",
  autoCapitalize: "none",
})``;

const Input = ({ name, control, ...props }) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextBox value={field.value} onChangeText={field.onChange} {...props} />
  );
};
const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(loginRequest(data))
      .unwrap()
      .then((res) => {
        navigation.navigate("Home");
      })
      .catch((err) => console.error(err));
  };
  return (
    <View style={styles.registerContainer}>
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
            placeholder='Email / Mobile Number'
            outlineColor={colors.white}
            style={{
              height: 48,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 24,
              padding: 14,
              color: "white",
            }}
          />
          <Input
            placeholder='Password'
            name='password'
            control={control}
            secureTextEntry={true}
            outlineColor={colors.white}
            style={{
              height: 48,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 24,
              padding: 14,
              color: "white",
              marginTop: 16,
            }}
          />

          <View
            style={{
              marginTop: 38,
              backgroundColor: "#ffff",
              borderRadius: 24,
            }}>
            <LoginButton
              onPress={handleSubmit(onSubmit)}
              style={{
                height: 48,
              }}>
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: fonts.Montserrat_500Medium,
                  fontSize: 16,
                  alignSelf: "center",
                  marginTop: 13,
                }}>
                Login
              </Text>
            </LoginButton>
          </View>

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

export default RegisterScreen;

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: "#13B58C",
    flex: 1,
  },
});
