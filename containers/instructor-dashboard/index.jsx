import { Layout} from "@ui-kitten/components";
import React from "react";
import DashboardContainer from "../../components/instructor-dashboard/dashboard-container";
import BottomNavigation from "../../components/common/botton-navigation";
import {
  NativeRouter,
  Route,
} from "react-router-native";
import DashboardClients from "./dashboard-clients";
import DashboardWorkouts from "./dashboard-plans";
import { View,Text } from "react-native";
import DashboardHome from "./dashboard-home";

const routes = [
  {
    path: "/dashboard/workouts",
    component: DashboardWorkouts,
  },
  {
    path: "/dashboard/clients",
    component: DashboardClients,
  },
  {
    path: "/dashboard/home",
    component: DashboardHome
  }
]

function InstructorDashboard(props) {
  
  return (
    <Layout style={{ position: "relative", height: "100%" }}>
      <NativeRouter>
        <DashboardContainer>
          <View style={{ marginTop: 50 }}>
            {routes.map((route) => (
              <Route {...route} key={route.path}></Route>
            ))}
          </View>
          <BottomNavigation></BottomNavigation>
        </DashboardContainer>
      </NativeRouter>
    </Layout>
  );
}

export default InstructorDashboard;
