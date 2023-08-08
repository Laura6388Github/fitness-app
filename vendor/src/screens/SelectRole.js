import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { store } from "../redux/store";
import { updateUser } from "../redux/actions/auth";
import { useSelector } from "react-redux";
const roleList = [
  { value: "professional", label: "Professional" },
  { value: "patient", label: "Patient" },
];

export default function SelectRole() {
  const theme = useContext(themeContext);
  const [role, setRole] = useState("professional");
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);

  const handleSave = async () => {
    await store.dispatch(updateUser(user._id, { role }));
    navigation.navigate("Language");
  };

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, paddingTop: 20 }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[style.title1, { color: theme.txt }]}>Fitnest</Text>
          <Text style={style.title2}>Exercise with style</Text>
        </View>
        <View style={{ flex: 2.7 }}>
          <Text
            style={[style.subtitle, { color: theme.txt, marginBottom: 10 }]}
          >
            Select your Role
          </Text>
          <Text style={style.subtxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <ScrollView>
            {roleList.map((e, index) => (
              <TouchableOpacity onPress={() => setRole(e.value)} key={e.label}>
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
                    value={role}
                    status={role === e.value ? "checked" : "unchecked"}
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
            <TouchableOpacity onPress={handleSave} style={style.btn}>
              <Text style={style.btntxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
