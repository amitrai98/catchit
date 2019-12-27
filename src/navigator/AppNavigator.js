import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import AuthLoadingScreen from './AuthLoading';
import SheareData from '../screens/sharedata';
import ShowQr from '../screens/showqr';
import {ScanQr} from '../screens/scanqr';
import ConnectionManager from '../screens/connectionmanager';
import Receiver from '../screens/receiver';
let navigationOptions = {
  headerMode: 'none',
  header: null,
};

const AppStack = createStackNavigator(
  {
    home: {screen: home},
    sheareData: {screen: SheareData},
    showQr: {screen: ShowQr},
    scanQr: {screen: ScanQr},
    connectionManager: {screen: ConnectionManager},
    receiver: {screen: Receiver},
  },
  {
    initialRouteName: 'connectionManager',
    headerMode: 'none',
  },
);
const AuthStack = createStackNavigator(
  {
    login: {screen: Login},
    signup: {screen: Signup},
  },
  {
    initialRouteName: 'login',
    headerMode: 'none',
  },
);
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
      headerMode: 'none',
      navigationOptions: navigationOptions,
    },
  ),
);
// export default AppNavigator;
