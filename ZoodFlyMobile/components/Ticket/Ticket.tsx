import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { AirTicketIcon } from "../../assets/svgs/AirTicketIcon";
import { Text, View } from "../Themed";

export default function Ticket() {
  return (
    <View style={style.container}>
      <View style={style.circles}>
        <View style={style.firstCircle}></View>
        <View style={style.secondCircle}></View>
      </View>
      <View style={style.ticketLines}>
        <View>
          <Text style={style.title}>Душанбе</Text>
          <Text>DUY</Text>
        </View>
        <View>
          <AirTicketIcon />
        </View>
        <View>
          <Text style={style.title}>Москва</Text>
          <Text>MOW</Text>
        </View>
      </View>
      <View style={style.ticketLines}>
        <Svg width="255" height="2" viewBox="0 0 255 2" fill="none">
          <Path d="M0.820312 1H254.68" stroke="black" strokeDasharray="2 2" />
        </Svg>
      </View>
      <View style={style.ticketLines}>
        <View>
          <Text style={style.title}>Дата</Text>
          <Text>1 Авг</Text>
        </View>
        <View>
          <Text style={{ ...style.title, textAlign: "center" }}>Время</Text>
          <Text style={style.title}>отправления</Text>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            08:32
          </Text>
        </View>
        <View>
          <Text style={style.title}>Багаж</Text>
          <Text>10 Кг</Text>
        </View>
      </View>
    </View>
  );
}

const gap = 10;

const style = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    borderRadius: 14,
    backgroundColor: "white",
    width: 293,
    height: 146,
    display: "flex",
    position: "relative",
    justifyContent: "center",
  },
  citiesLine: {},
  ticketLines: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: gap / 2,
    marginHorizontal: gap / 2,
  },
  title: {
    color: "#535353",
    fontSize: 10,
  },
  infoCities: {
    color: "#8766FF",
    fontStyle: "normal",
    fontSize: 20,
  },
  infoData: {
    color: "#535353",
    fontStyle: "normal",
    fontSize: 20,
  },
  circles: {
    position: "absolute",
    width: 293,
    height: 146,
    display: "flex",
    justifyContent: "center",
  },
  firstCircle: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 50,
    left: -10,
    backgroundColor: "#F2F2F2",
  },
  secondCircle: {
    position: "absolute",
    backgroundColor: "#F2F2F2",
    width: 20,
    height: 20,
    right: -10,
    borderRadius: 50,
  },
});
