import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

export default function Post({
  header,
  viewAll,
  Component,
}: {
  header: string;
  viewAll: boolean;
  Component: React.ComponentType<any>;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{header}</Text>
        {viewAll && <Text>Посмотреть все</Text>}
        <Text style={styles.viewTitle}>Посмотреть все</Text>
      </View>
      <View style={styles.post}>
        <Component />
      </View>
    </View>
  );
}

const gap = 20;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: -(gap / 2),
  },
  header: {
    marginVertical: gap / 2,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 25,
  },
  viewTitle: {
    fontSize: 12,
    lineHeight: 15,
    color: "#8E8E8E",
  },
  post: {
    marginVertical: gap / 2,
  },
});
