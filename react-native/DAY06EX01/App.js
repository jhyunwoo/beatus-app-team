import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "teal", flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View style={{ flex: 1, backgroundColor: "white" }}></View>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
      </View>
      <View style={{ flex: 2, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});