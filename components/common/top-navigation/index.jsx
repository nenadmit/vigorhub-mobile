import { Layout, Icon,Text } from "@ui-kitten/components";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-native";
import { logout } from "../../../store/actions/authentication";
function TopNavigation(props) {

  const history = useHistory()  
  const dispatch = useDispatch();
  const logoutT = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo/logo-horizontal-white.png")}
        style={styles.logo}
      ></Image>
      <View style={{ flexDirection: "row" }}>
        <Layout style={styles.rightNav}>
          <Text onPress={logoutT} style={{ color: "white", fontSize: 10 }}>1</Text>
        </Layout>
        <Icon name="bell-outline" fill="#FFF" width={25} height={25}></Icon>
        <Icon name="menu-2-outline" fill="#FFF" width={25} height={25}></Icon>
      </View>
    </View>
  );
}

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 80,
    width: "100%",
    padding: 15,
  },
  logo: {
    width: 100,
    height: 35,
    resizeMode: "contain",
  },
  rightNav: {
    width: 13,
    height: 13,
    backgroundColor: "red",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
