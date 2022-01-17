import { View, Text, Image } from "react-native";
import styles from "./style.js";

export default function QuotationItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require("../../../img/bitcoinred.png")}
          />
          <Text style={styles.DateCotation}>07/01/2022</Text>
        </View>
        <View style={styles.contextRight}>
          <Text style={styles.Price}>$ 53331.052</Text>
        </View>
      </View>
    </View>
  );
}
