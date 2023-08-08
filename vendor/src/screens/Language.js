import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";

export const langList = [
  {
    value: "EN",
    label: "English",
  },
  {
    value: "CN",
    label: "Chinese",
  },
  {
    value: "RU",
    label: "Russian",
  },
  {
    value: "FN",
    label: "French",
  },
];

export default function Language({ route, navigation }) {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(langList[0].value);

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, paddingTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[style.title1, { color: theme.txt }]}>Fitnest</Text>
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
            Select your Language
          </Text>
          <Text style={style.subtxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <ScrollView>
            {langList.map((lang, index) => (
              <TouchableOpacity
                onPress={() => setLanguage(lang.value)}
                key={lang.label}
              >
                <View
                  style={[
                    style.radio,
                    {
                      paddingVertical: 7,
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 20,
                    },
                  ]}
                >
                  <RadioButton
                    value={lang.value}
                    status={language === lang.value ? "checked" : "unchecked"}
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
                    {lang.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Aboutyourself", {language});
              }}
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
