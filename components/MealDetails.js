import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <View style={styles.detailItem}>
        <Text style={textStyle}>{duration}m</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={textStyle}>{complexity.toUpperCase()}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={textStyle}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
