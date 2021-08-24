import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation as UiBottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { useHistory } from "react-router-native";
import { translate } from "../../../localization/translator";

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const FileIcon = (props) => <Icon {...props} name="file-text-outline" />;

const HomeIcon = (props) => <Icon {...props} name="file-text-outline" />;

const useBottomNavigationState = (initialState, history) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  const select = (index) => {
    setSelectedIndex(index);
    if (selectedIndex === 0) {
      history.push("/dashboard/clients");
    } else if (selectedIndex === 1) {
      history.push("/dashboard/workouts");
    }
  };
  return { selectedIndex, onSelect: select };
};

function BottomNavigation(props) {
  const history = useHistory();
  const bottomState = useBottomNavigationState(null, history);
  const go = (url) => {
    console.log("pushnig to ", url);
    history.push(url);
  };
  const test = () => {
    console.log("pressed nav");
  };

  return (
    <React.Fragment>
      <UiBottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <BottomNavigationTab title={translate("home")} icon={HomeIcon} />
        <BottomNavigationTab
          onPress={() => go("/dashboard/workouts")}
          title={translate("clients")}
          icon={PersonIcon}
        />
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
