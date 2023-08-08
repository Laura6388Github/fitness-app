import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import Icon from "react-native-vector-icons/Ionicons";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
// import { Avatar } from 'react-native-paper';
import QuestionHeight from "./QuestionHeight";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { getProfile, getUser } from "../redux/actions/auth";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Home() {
  const categories = [
    require("../../assets/image/list1.png"),
    require("../../assets/image/list2.png"),
    require("../../assets/image/list3.png"),
    require("../../assets/image/list4.png"),
  ];
  const [categoryIndex, setcategoryIndex] = useState(0);

  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const { profile, user } = useSelector((state) => state.auth);

  useEffect(() => {
    store.dispatch(getUser(user._id));
    store.dispatch(getProfile(user.profile));
  }, []);


  const Categorylist = () => {
    return (
      <View style={style.categorycontainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setcategoryIndex(index)}
          >
            <Image
              source={item}
              key={index}
              resizeMode="stretch"
              style={[
                categoryIndex == index && style.categoryTextSelected,
                { width: width / 5, height: height / 8.5 },
              ]}
            ></Image>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"transparent"} translucent={true} />

      <ImageBackground
        source={require("../../assets/image/Homebg.png")}
        style={{ flex: 1 }}
      >
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Avatar
                source={require("../../assets/image/user.png")}
                size={40}
              ></Avatar>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Messagedelete")}
              >
                <Avatar
                  size={25}
                  source={require("../../assets/image/Message.png")}
                  overlayContainerStyle={{ backgroundColor: "transparent" }}
                  // containerStyle={{ marginTop: 10}}
                />
              </TouchableOpacity>

              <View style={{ margin: 10 }}></View>
              <TouchableOpacity onPress={() => navigation.navigate("MessageN")}>
                <Avatar
                  size={25}
                  source={require("../../assets/image/Notification.png")}
                  overlayContainerStyle={{ backgroundColor: "transparent" }}
                  // containerStyle={{ marginTop: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 16,
                color: Colors.secondary,
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Hi, {user.firstname}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 22,
                fontWeight: "600",
                width: "60%",
                color: Colors.secondary,
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Have you exercised today?
            </Text>
          </View>

          <View
            style={{
              marginVertical: 10,
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: 20,
              borderRadius: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <View>
              <Text style={{ color: Colors.secondary, fontSize: 10 }}>
                Weight
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    color: Colors.secondary,
                    fontWeight: "700",
                    fontSize: 24,
                  }}
                >
                  {profile && profile.weight ? profile.weight : "00"}
                </Text>
                <Text
                  style={{
                    color: Colors.secondary,
                    lineHeight: 30,
                    fontSize: 10,
                  }}
                >
                  {" "}
                  kg
                </Text>
              </View>
            </View>
            <View
              style={{ heigh: 200, width: 1, backgroundColor: Colors.border }}
            />
            <View>
              <Text style={{ color: Colors.secondary, fontSize: 10 }}>
                Height
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    color: Colors.secondary,
                    fontWeight: "700",
                    fontSize: 24,
                  }}
                >
                  {profile && profile.height ? profile.height : "000"}
                </Text>
                <Text
                  style={{
                    color: Colors.secondary,
                    lineHeight: 30,
                    fontSize: 10,
                  }}
                >
                  {" "}
                  cm
                </Text>
              </View>
            </View>
            <View
              style={{ heigh: 200, width: 1, backgroundColor: Colors.border }}
            />
            <View>
              <Text style={{ color: Colors.secondary, fontSize: 10 }}>
                Todo Today
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    color: Colors.secondary,
                    fontWeight: "700",
                    fontSize: 24,
                  }}
                >
                  45
                </Text>
                <Text
                  style={{
                    color: Colors.secondary,
                    lineHeight: 30,
                    fontSize: 10,
                  }}
                >
                  {" "}
                  %
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: theme.bg,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
          }}
        >
          <ScrollView
            contentContainerStyle={{ height: height / 1.15 }}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <Image
              source={theme.banner}
              resizeMode="stretch"
              style={{
                alignSelf: "center",
                height: height / 4.5,
                width: width - 40,
                marginBottom: 5,
              }}
            ></Image>

            <Text
              style={{
                fontSize: 20,
                color: theme.txt,
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Category
            </Text>
            <Categorylist></Categorylist>

            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text
                style={[
                  style.subtitle,
                  { color: theme.txt, fontFamily: "Plus Jakarta Sans" },
                ]}
              >
                Populer Workout
              </Text>
              <Text
                style={{ color: "#1C44AA", fontFamily: "Plus Jakarta Sans" }}
              >
                See All
              </Text>
            </View>

            <ScrollView
              nestedScrollEnabled={true}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                <View>
                  <View>
                    <ImageBackground
                      source={require("../../assets/image/workout1.png")}
                      resizeMode="stretch"
                      style={{
                        width: width / 1.7,
                        height: height / 5,
                        alignSelf: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row", margin: 10 }}>
                        <View>
                          <Text
                            style={{
                              paddingVertical: 7,
                              paddingHorizontal: 10,
                              color: Colors.secondary,
                              fontSize: 18,
                              fontWeight: "600",
                              borderRadius: 10,
                              fontFamily: "Plus Jakarta Sans",
                              backgroundColor: "rgba(00, 00, 00, 0.4)",
                            }}
                          >
                            Things
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              paddingVertical: 7,
                              paddingHorizontal: 10,
                              marginHorizontal: 5,
                              color: Colors.secondary,
                              fontSize: 18,
                              fontWeight: "600",
                              fontFamily: "Plus Jakarta Sans",
                              borderRadius: 10,
                              backgroundColor: "rgba(10, 00, 00, 0.4)",
                            }}
                          >
                            Legs
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: theme.txt,
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    Up and Down Stairs
                  </Text>
                  <Text style={style.subtxt}>Train your thighs and legs</Text>
                </View>
                <View style={{ padding: 10 }}></View>
                <View>
                  <View>
                    <ImageBackground
                      source={require("../../assets/image/workout2.png")}
                      resizeMode="stretch"
                      style={{ width: width / 1.7, height: height / 5 }}
                    >
                      <View style={{ flexDirection: "row", margin: 10 }}>
                        <View>
                          <Text
                            style={{
                              paddingVertical: 7,
                              paddingHorizontal: 10,
                              color: Colors.secondary,
                              fontSize: 18,
                              fontWeight: "600",
                              fontFamily: "Plus Jakarta Sans",
                              borderRadius: 10,
                              backgroundColor: "rgba(00, 00, 00, 0.4)",
                            }}
                          >
                            Stomach
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              paddingVertical: 7,
                              paddingHorizontal: 10,
                              marginHorizontal: 5,
                              color: Colors.secondary,
                              fontSize: 18,
                              fontWeight: "600",
                              fontFamily: "Plus Jakarta Sans",
                              borderRadius: 10,
                              backgroundColor: "rgba(10, 00, 00, 0.4)",
                            }}
                          >
                            Hand
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: theme.txt,
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    Lifting Belly
                  </Text>
                  <Text style={style.subtxt}>Shape the stomach to loo...</Text>
                </View>
              </View>
            </ScrollView>
          </ScrollView>

          <View
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              bottom: 30,
              right: 0,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("TodayPlane")}>
              <Avatar
                source={require("../../assets/image/plus.png")}
                size={130}
              ></Avatar>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
