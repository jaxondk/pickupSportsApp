import React, { Component } from 'react';
import { View, Alert, Linking, Platform } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import Toast, { DURATION } from 'react-native-easy-toast';
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

  footerBtnOnPress(game, attending, hosting) {
    if (hosting) {
      Alert.alert(
        'Remove Hosted Game?',
        'Are you sure you want to stop hosting this game? This will permanently remove the game and cannot be undone',
        [
          { text: "Yes, Remove It", onPress: () => { this.props.removeGame(game); this.props.navigation.goBack();} },
          { text: "No, Keep It"}
        ]
      );
    }
    else if (attending) {
      this.props.leaveGame(game);
      this.refs.toast.show('Success! You\'re no longer attending '+game.name, DURATION.LENGTH_LONG)
    }
    else {
      this.props.attendGame(game);
      this.refs.toast.show('Success! You\'re now attending '+game.name, DURATION.LENGTH_LONG);
    }
  }

  render () {
    const game = this.props.navigation.getParam('game');
    const hosting = game.hostId === this.props.user.id;
    const sport = this.props.user.subscribedSports.find((sport) => (sport.name === game.sportName));
    const attendingGamesIds = sport.attendingGamesIds;
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
          onPress={() => this.footerBtnOnPress(game, attending, hosting)}
        />
        <Toast 
          ref="toast" 
          style={{backgroundColor: colors.SELECTED}} 
          position='top'
          positionValue={50}
          fadeInDuration={750}
          fadeOutDuration={1250}
        />
      </View>
    )
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, { leaveGame, attendGame, removeGame, removeGameOfInterest, addGameOfInterest })(GameDetailsPage);