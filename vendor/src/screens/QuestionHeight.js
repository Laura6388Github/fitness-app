import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default function QuestionHeight({ route, navigation }) {
  const theme = useContext(themeContext);
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [height, setHeight] = useState();

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, paddingTop: 30 }]}
    >
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={[
              style.title1,
              { color: theme.txt, fontFamily: "Plus Jakarta Sans" },
            ]}
          >
            Fitnest
          </Text>
          <Text
            style={{
              color: theme.txt,
              fontSize: 16,
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Exercise with style
          </Text>
        </View>
        <View style={{ flex: 2.7 }}>
          <Text
            style={[style.subtitle, { color: theme.txt, marginBottom: 10 }]}
          >
            What is your height ?
          </Text>
          <Text style={style.subtxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <ScrollView>
            <TextInput
              placeholder="ex: 185cm"
              selectionColor={Colors.primary}
              placeholderTextColor={style.subtxt.color}
              onChangeText={(e) => setHeight(e)}
              type="number"
              style={[
                style.txtinput,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 20,
                  flex: 1,
                },
              ]}
            />
          </ScrollView>
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              onPress={() => {
                const data = route.params;
                data.height = height;
                navigation.navigate("QuestionAllergy", data);
              }}
              style={style.btn}
            >
              <Text style={style.btntxt}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <Modal transparent={true} visible={visible}>
          <View
            style={{
              width: width,
              flex: 1,
              backgroundColor: "#000000aa",
              transparent: "true",
            }}
          >
            <View
              style={[
                style.modalcontainer,
                {
                  backgroundColor: theme.bg,
                  width: width - 30,
                  marginTop: 50,
                  marginVertical: 320,
                },
              ]}
            >
              <Icon
                name="close-outline"
                size={20}
                color={theme.txt}
                onPress={() => setVisible(false)}
                style={{ alignSelf: "flex-end", paddingHorizontal: 10 }}
              />

              <View style={{ paddingTop: 10 }}>
                <Text
                  style={[
                    style.title,
                    { color: theme.txt, textAlign: "center" },
                  ]}
                >
                  Select Height
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", fontFamily: "Plus Jakarta Sans" },
                    ]}
                  >
                    5
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", fontFamily: "Plus Jakarta Sans" },
                    ]}
                  >
                    9"
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(false);
                      setIsVisible(true);
                    }}
                  >
                    <Text style={[style.txt1, { textAlign: "center" }]}>
                      Metric
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    6
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    10"
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    Imperial
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <View style={{ width: width / 5, paddingVertical: 15 }}>
                  <Text style={[style.txt1, { textAlign: "center" }]}>7</Text>
                </View>
                <View style={{ width: width / 5, paddingVertical: 15 }}>
                  <Text style={[style.txt1, { textAlign: "center" }]}>11"</Text>
                </View>
                <View style={{ width: width / 5, paddingVertical: 15 }}></View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  width: width / 2,
                  alignSelf: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={[style.btn]}
                  onPress={() => setVisible(false)}
                >
                  <Text style={style.btntxt}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} visible={isVisible}>
          <View
            style={{
              width: width,
              flex: 1,
              backgroundColor: "#000000aa",
              transparent: "true",
            }}
          >
            <View
              style={[
                style.modalcontainer,
                {
                  backgroundColor: theme.bg,
                  width: width - 30,
                  marginTop: 50,
                  marginVertical: 320,
                },
              ]}
            >
              <Icon
                name="close-outline"
                size={20}
                color={theme.txt}
                onPress={() => setIsVisible(false)}
                style={{ alignSelf: "flex-end", paddingHorizontal: 10 }}
              />

              <View style={{ paddingTop: 10 }}>
                <Text
                  style={[
                    style.title,
                    { color: theme.txt, textAlign: "center" },
                  ]}
                >
                  Select Height
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text style={[style.txt1, { textAlign: "center" }]}>169</Text>
                </View>
                <View style={{ width: width / 5, paddingVertical: 15 }}></View>
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                ></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    170
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    CM
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: theme.txt,
                    borderBottomWidth: 1,
                    width: width / 5,
                    paddingVertical: 15,
                  }}
                >
                  <Text
                    style={[
                      style.txt1,
                      { textAlign: "center", color: theme.txt },
                    ]}
                  >
                    Metric
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <View style={{ width: width / 5, paddingVertical: 15 }}>
                  <Text style={[style.txt1, { textAlign: "center" }]}>171</Text>
                </View>
                <View style={{ width: width / 5, paddingVertical: 15 }}></View>
                <View style={{ width: width / 5, paddingVertical: 15 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsVisible(false);
                      setVisible(true);
                    }}
                  >
                    <Text style={[style.txt1, { textAlign: "center" }]}>
                      Imperial
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,
                  width: width / 2,
                  alignSelf: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={[style.btn]}
                  onPress={() => setIsVisible(false)}
                >
                  <Text style={style.btntxt}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
}
