import { View, Text, Image } from "react-native";
import styles from "./style.js";

export default function QuotationItems(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require("../../../img/bitcoinred.png")}
          />
          <Text style={styles.DateCotation}>{props.data}</Text>
        </View>
        <View style={styles.contextRight}>
          <Text style={styles.Price}>{props.valor}</Text>
        </View>
      </View>
    </View>
  );
}
