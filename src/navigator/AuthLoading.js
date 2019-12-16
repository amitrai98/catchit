import React from 'react';
import {View} from 'react-native';
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginData: undefined};
  }
  componentDidMount() {
    // getStoreData(DatabaseConst.LOGIN_DATA)
    //   .then(response => {
    //     if (response != null)
    //       this.props.navigation.navigate('home', {loginData: response});
    //     else this.props.navigation.navigate('login');
    //   })
    //   .catch(error => {
    //     this.props.navigation.navigate('login');
    //   });
  }

  render() {
    return <View style={{flex: 1, justifyContent: 'center'}}></View>;
  }
}
