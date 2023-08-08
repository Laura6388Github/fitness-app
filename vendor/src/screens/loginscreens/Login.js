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
import React, { useState, useContext, useEffect } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Colors } from "../../theme/color";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContex";
import style from "../../theme/style";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../redux/store";

export default function Loginemail() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isLoading, error, message } = useSelector((state) => state.common);
  const { user } = useSelector((state) => state.auth);
  const handleLogin = async () => {
    try {
      if (isLoading) return;
      await store.dispatch(login({ email, password }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, paddingTop: 40 }]}
    >
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}

      <AppBar
        color={theme.bg}
        title="Login"
        titleStyle={{ color: theme.txt, fontFamily: "Plus Jakarta Sans" }}
        centerTitle={true}
        elevation={0}
        leading={
          <TouchableOpacity
            onPress={() => navigation.navigate("FinalOnBoarding")}
          >
            <Avatar.Icon
              icon="arrow-left"
              style={{ backgroundColor: Colors.secondary }}
              color="black"
              size={40}
            />
          </TouchableOpacity>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text
            style={{
              color: theme.txt,
              fontWeight: "500",
              paddingTop: 30,
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Email
          </Text>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Enter Your Email Address"
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              onChangeText={(e) => setEmail(e)}
              require
              style={[
                style.txtinput,
                { backgroundColor: theme.bg, fontFamily: "Plus Jakarta Sans" },
              ]}
            />
          </View>
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
              onChangeText={(e) => setPassword(e)}
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
                color={Colors.active}
                size={20}
              />
            </TouchableOpacity>
          </View>
          {error && (
            <View style={{ marginTop: 5 }}>
              <Text style={{ color: "red" }}>{message}</Text>
            </View>
          )}
          <View style={{ alignItems: "flex-end", paddingTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Forgotpass")}>
              <Text
                style={{
                  color: Colors.primary,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity onPress={handleLogin} style={style.btn}>
              <Text style={style.btntxt}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <View style={style.divider}></View>
            <Text
              style={{ color: Colors.disable, fontFamily: "Plus Jakarta Sans" }}
            >
              Or continue with
            </Text>
            <View style={style.divider}></View>
          </View>
          <View style={{ paddingTop: 30 }}>
            <TouchableOpacity
              style={[
                style.btn1,
                {
                  borderColor: theme.txt,
                  borderWidth: 1,
                  backgroundColor: theme.bg,
                },
              ]}
            >
              <Image
                source={require("../../../assets/image/Google.png")}
              ></Image>
              <Text style={[style.btntxt1, { color: theme.txt }]}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 15 }}>
            <TouchableOpacity
              style={[
                style.btn1,
                {
                  borderColor: theme.txt,
                  borderWidth: 1,
                  backgroundColor: theme.bg,
                },
              ]}
            >
              <Image source={theme.apple}></Image>
              <Text style={[style.btntxt1, { color: theme.txt }]}>
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 20,
            }}
          >
            <Text style={style.txt1}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text
                style={[
                  style.txt,
                  { color: Colors.btn, fontWeight: "500", marginBottom: 20 },
                ]}
              >
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
