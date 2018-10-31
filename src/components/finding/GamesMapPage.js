import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { setGamesToDisplay } from '../../actions';
import gstyles from '../../styles';
import { getPinColor } from '../../utilities';
import FAB from '../common/FAB';
import FullScreenTextView from '../common/FullScreenTextView';

const styles = {
  map: {
    flex: 1,
  },
}

class GamesMapPage extends Component {
  static navigationOptions = {
    title: "Find New Games",
  };

  componentDidMount() {
    this.applyFilters();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.savedFilter) !== JSON.stringify(this.props.savedFilter)) {
      this.applyFilters();
    }
  }

  applyFilters() {
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
    this.props.setGamesToDisplay(filteredGames);
  }

  renderGameMarkers() {
    return this.props.gamesToDisplay.map((game) => (
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

  renderFAB() {
    return (
      <FAB onPress={() => this.props.navigation.navigate('Filter')} />
    );
  }

  render () {
    if (this.props.gamesToDisplay.length === 0) {
      return (
        <FullScreenTextView
          title='No New Games Available'
          description="Looks like there aren't any games that match your filter criteria! Adjust your filters by pressing the button below, or host your own game!"
          FAB={this.renderFAB()} />
      );
    }
    else {
      return (
        <View style={gstyles.pageContainer}>
          <MapView
            style={styles.map}
            region={{ ...this.props.user.location, latitudeDelta: 0.05, longitudeDelta: 0.05 }}
            showsUserLocation
          >
            {this.renderGameMarkers()}
          </MapView>
          {this.renderFAB()}
        </View>
      );
    }
  }
}

let mapStoreToProps = ({ user, allGames, gamesToDisplay, filter }) => ({ user, allGames, gamesToDisplay, savedFilter: filter.savedFilter });

export default connect(mapStoreToProps, {setGamesToDisplay})(GamesMapPage);