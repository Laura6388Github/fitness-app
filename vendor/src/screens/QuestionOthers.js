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
import React, { useState, useContext, useEffect } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { createProfile, updateUser } from "../redux/actions/auth";
import { api } from "../api";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { storage } from "../utils/storage";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function QuestionAllergy({ route, navigation }) {
  const theme = useContext(themeContext);
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const { isLoading, error, message } = useSelector((state) => state.common);
  const { user } = useSelector((state) => state.auth);

  const handleSave = async () => {
    try {
      if (isLoading) return;
      await store.dispatch(createProfile(route.params));
      await store.dispatch(updateUser(user._id, { skipOnboarding: true }));
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {console.log(user)}, [isLoading, error])


  useEffect(() => {
    const fetchQuesions = async () => {
      try {
        const res = await api.getQuestions();
        setQuestions(res.data.questions);
      } catch (err) {
        Toast.show({
          type: "error",
          text1: "Server error",
          text2: "Check your internet connrection.",
        });
      }
    };
    fetchQuesions();
  }, []);

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, paddingTop: 30 }]}
    >
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[style.title1, { color: theme.txt }]}>Fitnest</Text>
          <Text style={style.title2}>Exercise with style</Text>
        </View>

        <View style={{ flex: 2.7, marginTop: -30 }}>
          <Text
            style={[style.subtitle, { color: theme.txt, marginBottom: 10 }]}
          >
            Other questions
          </Text>
          <Text style={style.subtxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <ScrollView style={{ paddingHorizontal: 10, marginVertical: 10 }}>
            {questions.map((question, index) => (
              <View
                style={[
                  {
                    paddingVertical: 10,
                  },
                ]}
                key={index}
              >
                <Text style={{ flex: 1 }}>
                  {index + 1}. {question.content}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View
                    style={[
                      style.radioYesNo,
                      {
                        flexDirection: "row",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <RadioButton
                      // value="first"
                      status={
                        selectedQuestions.includes(question)
                          ? "checked"
                          : "unchecked"
                      }
                      // onPress={() => setChecked("first")}
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
                        flexDirection: "row",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <RadioButton
                      // value="sec"
                      // status={checked === "sec" ? "checked" : "unchecked"}
                      // onPress={() => setChecked("sec")}
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
              </View>
            ))}
          </ScrollView>
          <View style={{ paddingTop: 10, paddingBottom: 30 }}>
            <TouchableOpacity onPress={handleSave} style={style.btn}>
              <Text style={style.btntxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
