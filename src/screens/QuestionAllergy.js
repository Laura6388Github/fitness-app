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
import { RadioButton } from "react-native-paper";
  
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  
  export default function QuestionAllergy() {
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);
  
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
          <View style={{ flex: 2.7, marginTop: -30 }}>
            <Text
              style={[style.subtitle, { color: theme.txt, marginBottom: 10 }]}
            >
              Food allergies or intolerances ?
            </Text>
            <Text style={style.subtxt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View style={{flexDirection:'row'}}>
              <View
                style={[
                  style.radioYesNo,
                  {
                    paddingVertical: 7,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                  },
                ]}
              >
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                  color={Colors.btn}
                  uncheckedColor={Colors.bord}
                />
                <Text
                  style={{
                    fontWeight: "600",
                    color: theme.txt,
                    fontFamily: "Plus Jakarta Sans",
                  }}
                >
                  Yes
                </Text>
              </View>
              <View
                style={[
                  style.radioYesNo,
                  {
                    paddingVertical: 7,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                  },
                ]}
              >
                <RadioButton
                  value="sec"
                  status={checked === "sec" ? "checked" : "unchecked"}
                  onPress={() => setChecked("sec")}
                  color={Colors.btn}
                  uncheckedColor={Colors.bord}
                />
                <Text
                  style={{
                    fontWeight: "600",
                    color: theme.txt,
                    fontFamily: "Plus Jakarta Sans",
                  }}
                >
                  No
                </Text>
            </View>
            </View>
            <Text style={style.subtxt}>
               What kind of allergies do you have?
            </Text>
            <View
              style={[
                style.txtinput,
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 20,
                },
              ]}
            >
              <TextInput
                placeholder="ex: Pet Allergy"
                selectionColor={Colors.primary}
                placeholderTextColor={style.subtxt.color}
                style={{
                  backgroundColor: theme.bg,
                  color: Colors.disable,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
              </TextInput>
              {/* <TouchableOpacity onPress={() => setVisible(true)}>
                <Icon name="chevron-down" color={theme.txt} size={20} />
              </TouchableOpacity> */}
            </View>
            <View style={{ paddingVertical: 30 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("QuestionOthers")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  