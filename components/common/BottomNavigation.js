import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { BottomNavigation as UiBottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { Link,useLocation,useHistory } from 'react-router-native';
import { Button } from './Controls';

const PersonIcon = (props) => (
    <Icon {...props} name='person-outline'/>
  );
  
  const BellIcon = (props) => (
    <Icon {...props} name='file-text-outline'/>
  );
  
  const EmailIcon = (props) => (
    <Icon {...props} name='email-outline'/>
  );
  
  const useBottomNavigationState = (initialState,history) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    const select = (index) => {
      setSelectedIndex(index)
      if(selectedIndex === 0){
          history.push("/dashboard/clients")
      }else if(selectedIndex === 1){
          history.push("/dashboard/workouts")
      }
    }
    return { selectedIndex, onSelect: select };
  };
  

function BottomNavigation(props) {
    
    const history = useHistory()
    const bottomState = useBottomNavigationState(null,history);
    const go = (url) => {
        console.log("pushnig to ",url)
        history.push(url)
    }
    const test = () =>{
        console.log('pressed nav')
    }

  return (
    <React.Fragment>
      <UiBottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <BottomNavigationTab title='Klijenti' icon={PersonIcon}/>
        <BottomNavigationTab onPress={() => go("/dashboard/workouts")} title='Planovi' icon={BellIcon}/>
        <BottomNavigationTab title='Analitika' icon={EmailIcon}/>
        <BottomNavigationTab title='Profil' icon={EmailIcon}/>
      </UiBottomNavigation>
    </React.Fragment>
  );
};
export default BottomNavigation;

const styles = StyleSheet.create({
    bottomNavigation: {
      marginVertical: 6,
      position:'absolute',
      bottom:20
    },
  });