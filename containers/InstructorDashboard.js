
import {Button, Layout, Text } from '@ui-kitten/components'
import React from 'react';
import { useDispatch } from 'react-redux';
import {logout} from '../store/actions/authentication'

function InstructorDashboard(props) {

    dispatch = useDispatch()
    const logoutT = () => {
        dispatch(logout())
    }

    return (
        <Layout>
        <Text>Hello There</Text> 
        <Button onPress={logoutT}>Logout</Button>
    </Layout>
    );
}

export default InstructorDashboard;