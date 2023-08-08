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
const height = Dimensions.get("screen").height;

export default function QuestionAge({ route, navigation }) {
  const theme = useContext(themeContext);
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [age, setAge] = useState();

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
        <View style={{ flex: 2.7, }}>
          <Text
            style={[style.subtitle, { color: theme.txt, marginBottom: 10 }]}
          >
            How old are you ?
          </Text>
          <Text style={style.subtxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <ScrollView style={{minHeight: 70}}>
            <TextInput
              placeholder="ex:26"
              selectionColor={Colors.primary}
              placeholderTextColor={style.subtxt.color}
              onChangeText={(e) => setAge(e)}
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
            ></TextInput>
            {/* <TouchableOpacity onPress={() => setVisible(true)}>
                <Icon name="chevron-down" color={theme.txt} size={20} />
              </TouchableOpacity> */}
          </ScrollView>
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              onPress={() => {
                const data = route.params;
                data.age = age;
                navigation.navigate("QuestionWeight", data);
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
