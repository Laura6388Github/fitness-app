import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState, useContext } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Colors } from "../../theme/color";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContex";
import style from "../../theme/style";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateAccount = () => {
    if (values.firstname === "" || values.lastname === "") {
      setError(true);
      setErrorMessage("Firstname and lastname is required.");
    } else if (values.password.length < 6) {
      setError(true);
      setErrorMessage("Password should be 6 length at least.");
    } else if (values.password !== values.confirmPassword) {
      setError(true);
      setErrorMessage("Confirm password is incorrect.");
    } else {
      setError(false);
      setErrorMessage("");
    }
    if (
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.password.length > 5 &&
      values.password === values.confirmPassword
    )
      navigation.navigate("CreateAccount", values);
  };

  return (
    <SafeAreaView
      style={[
        style.area,
        {
          backgroundColor: theme.bg,
          paddingTop: 40,
          fontFamily: "Plus Jakarta Sans",
        },
      ]}
    >
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}

      <AppBar
        color={theme.bg}
        title="Sign Up"
        titleStyle={{ color: theme.txt }}
        centerTitle={true}
        elevation={0}
        leading={
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Avatar.Icon
              icon="arrow-left"
              style={{ backgroundColor: Colors.secondary }}
              color="black"
              size={40}
            />
          </TouchableOpacity>
        }
      />

      <View
        style={[
          style.main,
          {
            backgroundColor: theme.bg,
            // paddingTop: 0,
          },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 0, marginBottom: 0 }}>
            <Text
              style={[
                style.logintitle,
                { color: theme.txt, fontFamily: "Plus Jakarta Sans" },
              ]}
            >
              Create account
            </Text>
            <Text
              style={[
                style.txt1,
                {
                  textAlign: "center",
                  fontFamily: "Plus Jakarta Sans",
                  paddingTop: 10,
                },
              ]}
            >
              Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={{ flex: 1, paddingTop: 30 }}>
            <Text
              style={{
                color: theme.txt,
                fontWeight: "500",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              First Name
            </Text>
            <View style={{ paddingTop: 8 }}>
              <TextInput
                placeholder="Enter Your First name"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.txtinput, { backgroundColor: theme.bg }]}
                onChangeText={(e) => setValues({ ...values, firstname: e })}
              />
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: "500",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Last Name
              </Text>
              <View style={{ paddingTop: 8 }}>
                <TextInput
                  placeholder="Enter Your last name"
                  selectionColor={Colors.primary}
                  placeholderTextColor={Colors.disable}
                  style={[style.txtinput, { backgroundColor: theme.bg }]}
                  onChangeText={(e) => setValues({ ...values, lastname: e })}
                />
              </View>
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: "500",
                  paddingVertical: 10,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                PassWord
              </Text>
              <View
                style={[
                  style.txtinput,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <TextInput
                  placeholder="Enter Your Password"
                  selectionColor={Colors.primary}
                  secureTextEntry={!isPasswordVisible}
                  placeholderTextColor={Colors.disable}
                  onChangeText={(e) => setValues({ ...values, password: e })}
                  style={{
                    backgroundColor: theme.bg,
                    color: Colors.disable,
                    fontFamily: "Plus Jakarta Sans",
                  }}
                ></TextInput>
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Icon
                    name={isPasswordVisible ? "eye-off" : "eye"}
                    color={theme.txt}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: "500",
                  paddingVertical: 10,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Confirm PassWord
              </Text>
              <View
                style={[
                  style.txtinput,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry={!isPassword}
                  placeholderTextColor={Colors.disable}
                  onChangeText={(e) =>
                    setValues({ ...values, confirmPassword: e })
                  }
                  style={{
                    color: Colors.disable,
                    fontFamily: "Plus Jakarta Sans",
                  }}
                />
                <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                  <Icon
                    name={isPassword ? "eye-off" : "eye"}
                    color={theme.txt}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {error && (
              <View>
                <Text style={{ color: Colors.warn, paddingTop: 10, paddingLeft: 10 }}>
                  {errorMessage}
                </Text>
              </View>
            )}
            <View style={{ paddingVertical: 30 }}>
              <TouchableOpacity onPress={handleCreateAccount} style={style.btn}>
                <Text style={style.btntxt}>Continue with Email</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 10,
                bottom: 25,
              }}
            >
              <Text style={style.txt1}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={[style.txt, { color: Colors.btn, fontWeight: "500" }]}
                >
                  {" "}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
