import { Layout } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NativeRouter,Route,Redirect } from 'react-router-native';
import {verifyAuthentication} from '../store/actions/authentication'
import LoginScreen from './LoginScreen';
import InstructorDashboard from './InstructorDashboard'


const routes = [
    {
        path:"/login",
        component: LoginScreen,
        exact: true
    },
    {
        path:"/dashboard",
        exact:true,
        component: InstructorDashboard
    }
]

function VigorhubApp(props) {

    const dispatch = useDispatch()
    useEffect(() => {

    })
    useEffect(() =>{
        dispatch(verifyAuthentication())
    },[])

    const {isAuthenticated,isLoading} = useSelector(state => state.auth) 
    const IndexRouteComponent = isAuthenticated ? InstructorDashboard : LoginScreen
    const indexPath = {
        route:"/",
        component: IndexRouteComponent
    }
    
    if (isLoading){
        return <Text>Loading...</Text>
    }
   
    return (
      <>
       <Layout>
           <NativeRouter>
               <Route {...indexPath}></Route>
               {routes.map(route => <Route {...route} key={route.path}></Route>)}
           </NativeRouter>
       </Layout>
      </>
    );
}

export default VigorhubApp;