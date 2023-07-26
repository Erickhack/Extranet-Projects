import { StyleSheet } from "react-native";

const gap = 36;

export const styles = StyleSheet.create({
  container: {},
  header: {
    height: 200,
  },
  headerContain: {
    flex: 1,
    display: "flex",
    padding: 27,
    width: "100%",
    backgroundColor: "#8766FF",
  },
  routScreens: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginHorizontal: -(gap / 2),
    marginVertical: -(gap / 2)
  },
  routScreen: {
    flex: 1,
    display: "flex",
    width: 60,
    alignItems: "center",
    marginVertical: (gap / 2),
    marginHorizontal: (gap / 2)
  },
  containerImageRouteScreen: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 58,
    height: 58,
    borderRadius: 50,
    backgroundColor: "white",
  },
  textScreen: {
    fontWeight: "700",
    color: "white",
  },
  logoContain: {
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
