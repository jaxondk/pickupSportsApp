import React, { Component } from 'react';
import { View, Text, Linking, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import gstyles from '../../styles';

const styles = {
  map: {
    flex: 1
  },
  detailItemsContainer: {
    flex: 1
  }
}

class GameDetailsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('game').name,
    }
  };

  navigateInNativeMaps (coord, label) {
    if (label.includes('&')) { // Replace ampersands with 'and'. Google doesn't like &
      label = label.replace(/&/g, 'and');
    }
    const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const latLng = `${coord.latitude},${coord.longitude}`;
    const url = Platform.OS === 'ios' ? `${scheme}${label}@${latLng}` : `${scheme}${latLng}(${label})`;

    Linking.openURL(url);
  }

  render() {
    const game = this.props.navigation.getParam('game');
    return (
      <View style={gstyles.pageContainer}>
        <MapView
          style={styles.map}
          region={{
            ...game.location,
            latitudeDelta: 0.025, 
            longitudeDelta: 0.025,
          }}
          showsUserLocation
        >
          <MapView.Marker 
            coordinate={{...game.location}} 
            title='Get Directions'
            onCalloutPress={() => this.navigateInNativeMaps(game.location, game.name)} />
        </MapView>
        <View style={styles.detailItemsContainer}>
          <Text>{game.name}</Text>
        </View>
      </View>
    )
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, {})(GameDetailsPage);