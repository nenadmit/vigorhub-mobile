import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation as UiBottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { useHistory } from "react-router-native";
import { translate } from "../../../localization/translator";
import Routes from "../../../constants/routes";

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const FileIcon = (props) => <Icon {...props} name="file-text-outline" />;

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const useBottomNavigationState = (initialState, history) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  const select = (index) => {
    switch (index) {
      case 0:
        history.push(Routes.dashboardHome);
        break;
      case 1:
        history.push(Routes.dashboardClients);
        break;
      case 2:
        history.push(Routes.dashboardWorkouts);
        break;
    }
    setSelectedIndex(index);
  };
  return { selectedIndex, onSelect: select };
};

function BottomNavigation() {
  const history = useHistory();
  const bottomState = useBottomNavigationState(0, history);
  return (
    <React.Fragment>
      <UiBottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <BottomNavigationTab title={translate("home")} icon={HomeIcon} />
        <BottomNavigationTab title={translate("clients")} icon={PersonIcon} />
        <BottomNavigationTab title={translate("plans")} icon={FileIcon} />
        <BottomNavigationTab
          title={translate("notifications")}
          icon={BellIcon}
        />
      </UiBottomNavigation>
    </React.Fragment>
  );
}
export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 6,
    position: "absolute",
    bottom: 20,
  },
});
