import { styles } from "./style";
import { Image, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import Post from "../../components/Post/Posts";
import Ticket from "../../components/Ticket/Ticket";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const navScreens: {
    img: any;
    text: string;
  }[] = [
    {
      img: require("../../assets/images/header-nav/image_55.png"),
      text: "Билеты",
    },
    {
      img: require("../../assets/images/header-nav/image_59.png"),
      text: "Туры",
    },
    {
      img: require("../../assets/images/header-nav/image_56.png"),
      text: "Гостиницы",
    },
    {
      img: require("../../assets/images/header-nav/image_72.png"),
      text: "Хадж",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContain}>
          <View style={styles.logoContain}>
            <Image
              width={100}
              height={100}
              source={require("../../assets/images/header-nav/logo.png")}
            />
          </View>
          <View style={styles.routScreens}>
            {navScreens.map((item, index) => (
              <View style={styles.routScreen} key={index}>
                <View style={styles.containerImageRouteScreen}>
                  <Image width={44} height={44} source={item.img} />
                </View>
                <Text style={styles.textScreen}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View>
        <Post
          header="Популярные направления"
          viewAll={false}
          Component={Ticket}
        />
      </View>
    </View>
  );
}
