import { Avatar, Icon, Text } from "@ui-kitten/components";
import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import InviteUserModal from "../../../components/instructor-dashboard/invite-user-modal";
import NoClients from "../../../components/instructor-dashboard/no-clients-screen";
import { Button } from "../../../components/common/controls";
import * as actions from "../../../store/actions/clients";

function ClientCard(props) {
  const { first_name, last_name, profileImg, createdAt } = props;
  return (
    <View style={styles.clientCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {profileImg ? (
          <Avatar source={{ uri: profileImg }}></Avatar>
        ) : (
          <Avatar
            source={require("../../../assets/clients/default-profile-image.jpg")}
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
  const { clients, error } = useSelector((state) => state.clients);
  const { currentUser } = useSelector((state) => state.auth);
  const [inviteModalOpen, setInviteModal] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchClients(currentUser.id));
  }, []);

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
      {clients.length === 0 && (
        <>
          <NoClients></NoClients>
          <Button onClick={() => setInviteModal(true)}>Invite client</Button>
        </>
      )}
      {clients.map((client, index) => (
        <ClientCard {...client} key={index}></ClientCard>
      ))}
      <InviteUserModal
        isVisible={inviteModalOpen}
        onClose={() => setInviteModal(false)}
      ></InviteUserModal>
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
