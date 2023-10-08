import React from "react";
import { StyleSheet, Text, View, Button, Image, Linking } from "react-native";

export default function ProfileDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>流浪地球</Text>
      <Image
        source={{
          uri: "https://cdn.hk01.com/di/media/images/2485040/org/8ba5672e21c5a5651a9770df45b8fe3c.jpg/kh7ntA9AKKFJTtj94aaL7dAyOuPSPgewzblgDc25YA0?v=w1920r16_9",
        }}
        style={{ width: 300, height: 300, marginBottom: 10 }}
      />
      <Text style={{ lineHeight: 20, margin: 10 }}>
        改編自中國科幻小說家劉慈欣的同名作品。在不久的未來，太陽內部極速老化，地球也面臨遭吞噬的危機。人們為了生存，世界各國不計代價聯手建造一萬座的「行星發動機」與兩千座的「轉向發動機」，將耗時
        2,500 年的歲月前往另一個星系，稱之為「流浪地球」計畫。
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="wiki"
          onPress={() =>
            Linking.openURL(
              "https://zh.wikipedia.org/zh-tw/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%83_(%E7%94%B5%E5%BD%B1)"
            )
          }
        />
        <View style={{ marginRight: 100 }} />
        <Button title="go back" onPress={() => props.navigation.pop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
