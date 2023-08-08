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
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const genderList = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Aboutyourself({ route, navigation }) {
  const theme = useContext(themeContext);
  const [gender, setGender] = useState("male");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, paddingTop: 30 }]}
    >
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
      <View style={[style.main, { backgroundColor: theme.bg }]}>
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
            Tell us about yourself
          </Text>
          <Text style={style.subtxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <ScrollView
            style={{
              marginVertical: 20,
            }}
          >
            {genderList.map((e, index) => (
              <TouchableOpacity
                onPress={() => setGender(e.value)}
                key={e.label}
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
                    key={e.label}
                    value={gender}
                    status={gender === e.value ? "checked" : "unchecked"}
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
                    {e.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              onPress={() => {
                const data = route.params;
                data.gender = gender;
                navigation.navigate("QuestionAge", data);
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
