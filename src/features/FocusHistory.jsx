import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSize, spacing } from "../utils/size";
export default function FocusHistory({ history }) {
  if (!history.length)
    return <Text style={styles.title}>Haven't focused on anything yet</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focused on:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.content}>-{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    flex: 0.5,
    color: colors.white,
    fontSize: fontSize.md,
    padding: spacing.md,
    fontWeight: "bold",
  },
  content: {
    color: colors.white,
    paddingLeft: spacing.md,
    fontSize: fontSize.md,
  },
});
