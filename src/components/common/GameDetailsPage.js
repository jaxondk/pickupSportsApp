import React, { Component } from 'react';
import { View, Text, Linking, Platform } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { getIconFor, displayDistance } from '../../utilities';
import { icons, colors } from '../../constants';
import gstyles from '../../styles';
import FooterBlockBtn from '../common/FooterBlockBtn';
import { leaveGame, attendGame, removeGame, removeGameOfInterest, addGameOfInterest } from '../../actions';

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

  renderDetails (game, hosting) {
    return (
      <List>
        <ListItem
          title={' ' + game.moment.format('MM/DD') + ' at ' + game.moment.format('h:mm A')}
          leftIcon={getIconFor(icons.CLOCK.name, 24)}
          rightIcon={getIconFor(icons.PENCIL.name, 24)}
          hideChevron={!hosting}
        // onPressRightIcon={navigate to edit} TODO
        />
        <ListItem
          title={' ' + displayDistance(this.props.user.location, game.location) + ' from you'}
          leftIcon={getIconFor(icons.LOCATION.name, 24)}
          rightIcon={getIconFor(icons.PENCIL.name, 24)}
          hideChevron={!hosting}
          onPress={() => this.navigateInNativeMaps(game.location, game.name)}
        // onPressRightIcon={navigate to edit} TODO
        />
      </List>
    )
  }

  cancelGame(game) {
    this.props.removeGame(game);
    this.props.navigation.goBack();
  }

  render () {
    const game = this.props.navigation.getParam('game');
    const hosting = game.hostId === this.props.user.id
    const attendingGamesIds = this.props.user.attendingGamesIds;
    const attending = attendingGamesIds.indexOf(game.id) > -1
    return (
      <View style={gstyles.pageContainer}>
        <View style={gstyles.content} >
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
              coordinate={{ ...game.location }}
              title='Get Directions'
              onCalloutPress={() => this.navigateInNativeMaps(game.location, game.name)} />
          </MapView>
          <View style={styles.detailItemsContainer}>
            {this.renderDetails(game, hosting)}
          </View>
        </View>
        {/* TODO: remove game from games of interest on attend, add game to games of interest on leave. This should be handled automatically by filters */}
        <FooterBlockBtn
          bgColor={!attending ? colors.SELECTED : colors.CANCEL}
          text={hosting ? 'Cancel Game' : !attending ? 'Join Game' : 'Leave Game'}
          onPress={hosting ? () => this.cancelGame(game) : !attending ? () => this.props.attendGame(game) : () => this.props.leaveGame(game)}
        />
      </View>
    )
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, { leaveGame, attendGame, removeGame, removeGameOfInterest, addGameOfInterest })(GameDetailsPage);