import React from 'react';
import { ImageBackground,StyleSheet } from 'react-native';
import TopNavigation from '../common/TopNavigation';

function DashboardContainer(props) {
    return (
        <ImageBackground style={styles.container} source={require('../../assets/bg-shapes/shape-1.png')}>
            <TopNavigation></TopNavigation>
            {props.children}
        </ImageBackground>
    );
}

export default DashboardContainer;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: "100%",
        resizeMode:"cover",
        position:'absolute',
        top: 25,
        justifyContent:'flex-start',
    }
})