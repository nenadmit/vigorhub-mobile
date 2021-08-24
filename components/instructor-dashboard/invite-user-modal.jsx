import React from "react";
import {Button,Icon,Text} from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native';
import { Input } from "../common/controls";
import * as actions from '../../store/actions/clients'
import { useDispatch, useSelector } from "react-redux";
import Modal from "../common/popup-modal";
import { textStyles, Colors } from '../../constants/styles';
import {translate} from '../../localization/translator'

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
        console.log('closing')
        onClose()
    }
    
  return (
    <Modal isVisible={isVisible} onClose={closeModal}>
      {!invitedClient && <View style={{padding:15,marginTop:15,alignItems:"center"}}>
          <Text style={textStyles.h1}>{translate('invite_client_via_email')}</Text>
          <Input value={user.email} name="email" label={translate('email')} onChange={handleChange}></Input>
          <Input value={user.firstName} name="firstName" label={translate('first_name')} onChange={handleChange}></Input>
          <Input value={user.lastName} name="lastName" label={translate('last_name')} onChange={handleChange}></Input>
          <Button style={{backgroundColor:"#000"}} onPress={inviteUser}>{translate('invite_client')}</Button>
          <Text>Error message</Text>
      </View>}
      {
        invitedClient && <InvitedClientt onOk={closeModal} email={invitedClient.email} tempPass={invitedClient.temp_password}></InvitedClientt>
      }
      
    </Modal>
  );
}
export default InviteUserModal;


function InvitedClientt({email,tempPass,onOk}){
    return <View style={{alignItems:"center", padding:15,alignItems:'center',textAlign:'center'}}>
        <Icon name="checkmark-circle-2-outline" fill={Colors.success} width={130} height={130}></Icon>
        <Text style={textStyles.h1}>{translate('client_created_successfully')}</Text>
        <Text>{email}</Text>
        <Text>{translate('temp_password')}:</Text>
        <Text style={{marginTop:5,fontSize:35,color:'#000',fontWeight:'bold',padding:15,borderWidth:2,borderRadius:5,borderColor:'lightgrey'}}>{tempPass}</Text>
        <Text style={{textAlign:'center',fontSize:12,color:"grey",alignSelf:'center',marginTop:15}}>{translate('your_client_has_been_added_share_credentials')}</Text>
        <Button style={{width:'100%',marginTop:15}} onPress={onOk}>Ok</Button>
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