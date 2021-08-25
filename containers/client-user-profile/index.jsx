import { Text,Layout } from '@ui-kitten/components';
import React from 'react';

function ClientUserProfile(props) {

    const {search} = props.location;
    console.log(search)

    return (
        <Layout>
            <Text>this is client profile</Text>
        </Layout>
    );
}

export default ClientUserProfile;