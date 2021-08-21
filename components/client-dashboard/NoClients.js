import { Layout } from "@ui-kitten/components";
import React from "react";
import { Text,Image } from "react-native";
import { Button } from "../common/Controls";
import {translate} from '../../localization/translator'
import { Link } from "react-router-native";

function NoClients(props) {
  return (
    <Layout
      style={{ alignItems: "center" }}
    >
      <Image
        source={require("../../assets/illustration/dumbell-guy.jpg")}
        style={{ width: 340, height: 200, resizeMode: "contain" }}
      ></Image>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        {translate("you_have_no_clients")}
      </Text>
      <Text>{translate("why_dont_you_invite_clients")}</Text>
      <Button onPress={() => open(true)} style={{ width: 150 }}>
        {translate("send_invitation")}
      </Button>
      <Link to="/dashboard/clients"><Text>Clients</Text></Link>
    </Layout>
  );
}

export default NoClients;
