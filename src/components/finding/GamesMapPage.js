import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import gstyles from '../../styles';
import { getPinColor } from '../../utilities';
import { colors } from '../../constants';

const styles = {
  map: {
    flex: 1,
  },
}

class GamesMapPage extends Component {
  static navigationOptions = {
    title: "Nearby Games",
  };

  renderGameMarkers() {
    return Object.values(this.props.allGames).map((game) => (
      <MapView.Marker
        key={game.id}
        identifier={game.id+''}
        coordinate={game.location}
        title={game.name}
        description='Click for details'
        onCalloutPress={() => this.props.navigation.navigate('GameDetails', { game: game })}
        pinColor={getPinColor(game.sportName)}
      />
    ));
  }

  render () {
    return (
      <View style={gstyles.pageContainer}>
        <MapView
          style={styles.map}
          region={{...this.props.user.location, latitudeDelta: 0.05, longitudeDelta: 0.05}}
          showsUserLocation
        >
          {this.renderGameMarkers()}
        </MapView>
        <Button
          raised
          icon={{ name: 'filter-list' }}
          title='Filter Games'
          borderRadius={20}
          containerViewStyle={gstyles.fabContainer}
          backgroundColor={colors.ACCENT}
          onPress={() => this.props.navigation.navigate('Filter')}
        />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, allGames }) => ({ user, allGames });

export default connect(mapStoreToProps, {})(GamesMapPage);