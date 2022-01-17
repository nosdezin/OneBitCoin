import { View, Text } from "react-native";
import styles from "./style.js";

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.CurrentPrice}>$ 54423.365</Text>
      <Text style={styles.TextPrice}>Ultima cotação</Text>
    </View>
  );
}
