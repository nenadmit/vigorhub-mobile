import React from "react";
import {Button,Icon,Text} from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native';
import { Input } from "../common/controls";
import * as actions from '../../store/actions/clients'
import { useDispatch, useSelector } from "react-redux";
import Modal from "../common/popup-modal";

function InviteUserModal({isVisible,onClose}) {

    const {invitedClient,error} = useSelector(state => state.clients);
    
    const dispatch = useDispatch()
    const [user,setUser] = React.useState({
        email:"",
        firstName:"",
        lastName:""
    })

    const handleChange = (name,text) =>{
        const u = {...user};
        u[name] = text;
        setUser(u)
    }

    const inviteUser = () => {
        dispatch(actions.inviteClient(user))
    }

    const closeModal = () => {
        dispatch(actions.clearState())
        onClose()
    }
    
  return (
    <Modal isVisible={isVisible} onClose={closeModal}>
      <Icon name="bell-outline" fill="#000" width={12} height={12}></Icon>
      {!invitedClient && <View style={{padding:15}}>
          <Input value={user.email} name="email" label="Email" onChange={handleChange}></Input>
          <Input value={user.firstName} name="firstName" label="First Name" onChange={handleChange}></Input>
          <Input value={user.lastName} name="lastName" label="Last Name" onChange={handleChange}></Input>
          <Button onPress={inviteUser}>Invite user</Button>
      </View>}
      {
        invitedClient && <InvitedClientt onOk={closeModal} email={invitedClient.email} tempPass={invitedClient.temp_password}></InvitedClientt>
      }
    </Modal>
  );
}
export default InviteUserModal;


function InvitedClientt({email,tempPass,onOk}){
    return <View style={{alignItems:"center", padding:15,width:350,height:500,backgroundColor:"#FFF",alignItems:'center',textAlign:'center'}}>
        <Text style={{textAlign:'center',alignSelf:'center',fontSize:28,fontWeight:"bold"}}>Client invited successfully</Text>
        <Text>Client username: {email}</Text>
        <Text>Client temporary password:</Text>
        <Text style={{fontSize:35,color:'lightblue',padding:15,borderWidth:2,borderRadius:5,borderColor:'lightgrey'}}>{tempPass}</Text>
        <Text style={{textAlign:'center',fontSize:12,color:"grey",alignSelf:'center'}}>Your client has been added to your account, share credentials with him so that he can login!</Text>
        <Button onPress={onOk}>Ok</Button>
    </View>
}

const styles = StyleSheet.create({
    container: {
      height: 500,
      width:'100%',
      backgroundColor:'red'
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent:'flex-end'
    }
  });