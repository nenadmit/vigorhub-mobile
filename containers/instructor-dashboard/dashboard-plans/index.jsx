import React from 'react';
import { View,Text } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import { Button } from '../../../components/common/controls';

function DashboardWorkouts(props) {
    return (
        <View style={{width:"100%",height:"100%",backgroundColor:"red"}}>
            <Button>Hello</Button>
            <Link to="/login"><Text>Click here</Text></Link>
        </View>
    );
}

export default DashboardWorkouts;