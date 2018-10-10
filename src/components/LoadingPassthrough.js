import React, { Component } from 'react';
import { Alert, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { colors, mockUser } from '../constants';
import { mockLogUserIn, watchLocation } from '../actions';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
  },
}

//TODO - connect to db, load model objects. This should actually be done after auth
class LoadingPassthrough extends Component {
  componentDidMount() {
      this.props.mockLogUserIn(mockUser);
      this.props.watchLocation(); //TODO - handle syncing these up correctly. watchLocation must follow user log in.
                                  //See https://github.com/reduxjs/redux/issues/1676 for chaining async redux actions
  }
  render() {
    console.log(this.props.user)
    if (this.props.user.location === 'DENIED') {
      Alert.alert(
        'Location Needed', 
        'The app won\'t work without your location. Please provide permission to access your location while using the app',
        [{text: "Try Again", onPress: () => this.props.watchLocation()}]
      );
    } else if (this.props.user.location) {
      console.log('navigate');
      this.props.navigation.navigate('ChooseLocation');
    }
    return (
      <View style={styles.pageContainer} >
        <ActivityIndicator size='large' animating={!this.props.user.location} color={colors.ACCENT} />
      </View>
    )
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, { mockLogUserIn, watchLocation })(LoadingPassthrough)