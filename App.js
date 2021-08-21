import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import React from 'react';
import * as eva from '@eva-design/eva';
import { Provider} from 'react-redux';
import VigorhubStore from './store/store'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import VigorhubApp from './containers/VigorhubApp';
export default function App() {

  return (
    <>
    <IconRegistry icons={EvaIconsPack} ></IconRegistry>
    <ApplicationProvider theme={eva.light} {...eva}>
      <Provider store={VigorhubStore}>
       <VigorhubApp>
       </VigorhubApp>
      </Provider>
    </ApplicationProvider>
   </> 
  );
}