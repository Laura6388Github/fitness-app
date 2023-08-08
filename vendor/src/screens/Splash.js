import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import theme from "../theme/theme";
import { useNavigation } from "@react-navigation/native";
import logoimage from "../../assets/image/logo_1.png";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Splash() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={
          darkMode === true
            ? require("../../assets/image/finalonboardingblack.png")
            : require("../../assets/image/splash.png")
        }
        style={{ flex: 1 }}
      >
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
        </ImageBackground> */}

        <View
          style={{ flex: 2.5, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={logoimage}></Image>
          <Text
            style={{
              fontSize: 42,
              fontWeight: 700,
              fontStyle: "italic",
              color: "white",
            }}
          >
            FITNEST
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              fontStyle: "italic",
              color: "white",
            }}
          >
            Exercise with style
          </Text>
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={50} color={Colors.secondary} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
