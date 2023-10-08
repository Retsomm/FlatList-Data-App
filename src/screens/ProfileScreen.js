import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-ssl.funkidslive.com/wp-content/uploads/2022/10/vhsz50aafas-1.jpg",
        }}
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />

      <Button
        title="go to Earth detail screen"
        onPress={() => props.navigation.push("EarthDetail")}
      />
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
});
