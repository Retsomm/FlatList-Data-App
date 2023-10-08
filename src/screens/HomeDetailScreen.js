import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

export default function HomeDetailScreen(props) {
  const passProps = props.route.params.passProps || "nothing get";
  return (
    <View style={styles.container}>
      <Image source={{ uri: passProps.uri }} style={{ width: 300, height: 400, marginBottom:10 }} />
      <Text style={{margin:20, lineHeight:20}}>{passProps.article}</Text>
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
