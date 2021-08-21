import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NativeRouter, Redirect, Route } from "react-router-native";
import { verifyAuthentication } from "../store/actions/authentication";
import LoginScreen from "./LoginScreen";
import InstructorDashboard from "./InstructorDashboard";
import {Text} from 'react-native'

const routes = [
  {
    path: "/login",
    component: LoginScreen,
    exact: true,
  },
  {
    path: "/",
    exact:true,
    component: Home,
  },
  {
    path: "/dashboard",
    component: InstructorDashboard,
  }
];

function Home(){

    const { authenticationCompleted,isAuthenticated } = useSelector((state) => state.auth);
    if (authenticationCompleted && isAuthenticated){
        return <Redirect to="/dashboard"></Redirect>
    }

    if (authenticationCompleted && !isAuthenticated){
        return <Redirect to="/login"></Redirect>
    }

    return <Text>Loading...</Text>
}

function VigorhubApp(props) {
  const dispatch = useDispatch();
  useEffect(() => {});
  useEffect(() => {
    dispatch(verifyAuthentication());
  }, []);

  const { isLoading,authenticationCompleted } = useSelector((state) => state.auth);

  if (isLoading || !authenticationCompleted) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <NativeRouter>
        {routes.map((route) => (
          <Route {...route} key={route.path}></Route>
        ))}
      </NativeRouter>
    </>
  );
}

export default VigorhubApp;
