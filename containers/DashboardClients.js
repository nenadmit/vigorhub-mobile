import React from 'react';
import { View,Text } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import NoClients from '../components/client-dashboard/NoClients';
import { Button } from '../components/common/Controls';


function DashboardClients(props){

    return (
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <NoClients></NoClients>
            <Link to="/">
                <Text>Return</Text>
            </Link>
            <Link to="/">
                <Button></Button>
            </Link>
        </View>
    );
}

export default DashboardClients;