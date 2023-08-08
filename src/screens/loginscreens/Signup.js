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

  return (
    <SafeAreaView
      style={[style.area, { 
        backgroundColor: theme.bg, 
        paddingTop: 40, 
        fontFamily:"Plus Jakarta Sans",
      }]}
    >
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}

      <AppBar
        color={theme.bg}
        title="Sign Up"
        titleStyle={{ color: theme.txt}}
        centerTitle={true}
        elevation={0}
        leading={
          <TouchableOpacity onPress={() => navigation.navigate("loginemail")}>
            <Avatar.Icon
              icon="arrow-left"
              style={{ backgroundColor: Colors.secondary }}
              color="black"
              size={40}
            />
          </TouchableOpacity>
        }
      />

      <View style={[style.main, { 
              backgroundColor: theme.bg,
              // paddingTop: 0,
              }]}
      >

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 0, marginBottom: 0 }}>
            <Text style={[style.logintitle, { color: theme.txt, fontFamily:"Plus Jakarta Sans"}]}>
              Create account
            </Text>
            <Text style={[style.txt1, { textAlign: "center", 
                                        fontFamily:"Plus Jakarta Sans",
                                        paddingTop: 10
                                      }]}
            >
              Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={{ flex: 1, paddingTop: 30 }}>
            <Text
              style={{
                color: theme.txt,
                fontWeight: "500",
                fontFamily:"Plus Jakarta Sans",
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
              />
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: "500",
                  fontFamily:"Plus Jakarta Sans",
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
                />
              </View>
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: "500",
                  paddingVertical: 10,
                  fontFamily:"Plus Jakarta Sans",
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
                  style={{
                    backgroundColor: theme.bg,
                    color: Colors.disable,
                    fontFamily:"Plus Jakarta Sans",
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
                  fontFamily:"Plus Jakarta Sans",
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
                  style={{ color: Colors.disable, fontFamily:"Plus Jakarta Sans" }}
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
            <View style={{ paddingVertical: 30 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateAccount")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Continue with Email</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 10,
                bottom: 25
              }}
            >
              <Text style={style.txt1}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("loginemail")}
              >
                <Text
                  style={[
                    style.txt,
                    { color: Colors.btn, fontWeight: "500" },
                  ]}
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
