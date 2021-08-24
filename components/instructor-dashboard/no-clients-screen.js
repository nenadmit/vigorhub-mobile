import { Layout } from "@ui-kitten/components";
import React from "react";
import { Text, Image } from "react-native";
import { translate } from "../../localization/translator";
import {StyleSheet} from 'react-native'

function NoClients() {
  return (
    <Layout style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/illustration/dumbell-guy.jpg")}
        style={styles.mainImage}
      ></Image>
      <Text style={styles.title}>{translate("you_have_no_clients")}</Text>
      <Text style={styles.subtext}>
        {translate("why_dont_you_invite_clients")}
      </Text>
    </Layout>
  );
}

export default NoClients;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  mainImage: {
    width: 340,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtext: {
    marginTop: 5,
  },
  btn: {
    width: 150,
    marginTop: 10,
  },
});
