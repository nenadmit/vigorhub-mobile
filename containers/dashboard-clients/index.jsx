import { Avatar, Icon, Text } from "@ui-kitten/components";
import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NoClients from "../../components/client-dashboard/NoClients";
import { Button, Input } from "../../components/common/Controls";
import * as action from '../../store/actions/clients'

function ClientCard(props) {
  const { first_name, last_name, profileImg, createdAt } = props;
  return (
    <View style={styles.clientCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {profileImg ? (
          <Avatar source={{ uri: profileImg }}></Avatar>
        ) : (
          <Avatar
            source={require("../../assets/clients/default-profile-image.jpg")}
          ></Avatar>
        )}
        <Text
          style={{ marginLeft: 5, fontWeight: "bold" }}
        >{`${first_name} ${last_name}`}</Text>
      </View>
      <Icon name="bell-outline" width={15} height={15} fill="#000"></Icon>
    </View>
  );
}

function DashboardClients(props) {
 
  const {clients,error} = useSelector(state => state.clients);
  const {currentUser} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [cclients, setClients] = React.useState(clients);

  useEffect(()=> {
    dispatch(actions.fetchUsers(currentUser.sub))
  },[clients])
  



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "lightgrey",
          marginTop: 10,
          marginBottom: 10,
        }}
      ></View>
      {cclients.length === 0 && <NoClients></NoClients>}
      {cclients.map((client, index) => (
        <ClientCard {...client} key={index}></ClientCard>
      ))}
    </ScrollView>
  );
}

export default DashboardClients;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  clientCard: {
    width: "80%",
    minHeight: 80,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 15,
    margin: 6,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
  },
});
