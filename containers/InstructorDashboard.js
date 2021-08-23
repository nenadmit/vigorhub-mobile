import { Layout} from "@ui-kitten/components";
import React from "react";
import DashboardContainer from "../components/client-dashboard/DashboardContainer";
import BottomNavigation from "../components/common/BottomNavigation";
import {
  NativeRouter,
  Route,
} from "react-router-native";
import DashboardClients from "./dashboard-clients";
import DashboardWorkouts from "./DashboardWorkouts";
import { View } from "react-native";

const routes = [
  {
    path: "/dashboard/workouts",
    component: DashboardClients,
  },
  {
    path: "/dashboard/clients",
    component: DashboardWorkouts,
  },
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
