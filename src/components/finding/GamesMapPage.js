import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import gstyles from '../../styles';
import { getPinColor } from '../../utilities';
import FAB from '../common/FAB';

const styles = {
  map: {
    flex: 1,
  },
}

class GamesMapPage extends Component {
  static navigationOptions = {
    title: "Find New Games",
  };

  renderGameMarkers() {
    const allGamesArray = Object.values(this.props.allGames)
    const filteredGames = allGamesArray.filter((game) => {
      const sportVisible = this.props.savedFilter[game.sportName];
      const attending = this.props.user.attendingGamesIds.indexOf(game.id) > -1;
      const hosting = this.props.user.hostedGamesIds.indexOf(game.id) > -1;
      return sportVisible && (
        (this.props.savedFilter.attendingGames && attending) ||
        (this.props.savedFilter.hostedGames && hosting) ||
        (this.props.savedFilter.gamesOfInterest && !hosting && !attending)
      );
    });
    return filteredGames.map((game) => (
      <MapView.Marker
        key={game.id}
        identifier={game.id+''}
        coordinate={game.location}
        title={game.name}
        description={game.moment.format('MM/DD ddd')}
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
        <FAB onPress={() => this.props.navigation.navigate('Filter')} />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, allGames, filter }) => ({ user, allGames, savedFilter: filter.savedFilter });

export default connect(mapStoreToProps, {})(GamesMapPage);