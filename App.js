import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Chart } from "./Chart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* All code for the chart is under Chart.js  */}
      <Chart />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
