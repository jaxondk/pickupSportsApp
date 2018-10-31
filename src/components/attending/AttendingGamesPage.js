import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import Toast, { DURATION } from 'react-native-easy-toast';
import { colors, icons } from '../../constants';
import { leaveGame } from '../../actions';
import GameListItem from '../common/GameListItem';
import FAB from '../common/FAB';
import FullScreenTextView from '../common/FullScreenTextView';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    margin: 25,
    alignItems: 'center'
  },
  btnContainer: {
    borderRadius: 20,
    width: '50%'
  }
}

class AttendingGamesPage extends Component {
  static navigationOptions = {
    title: "Games I'm Attending",
  };

  leaveJoinedGame(game) {
    Alert.alert(
      'Leave Game?',
      'Are you sure you want to leave this game?',
      [
        { text: "Yes, Leave It", onPress: () => { 
          this.props.leaveGame(game);
          this.refs.toast.show('Success! You\'re no longer attending '+game.name, DURATION.LENGTH_LONG);
        }},
        { text: "No, Stay" }
      ]
    );
  }

  renderAttendingGamesList (user) {
    return (
      <List>
        {

          user.attendingGamesIds.map((gameId) => {
            const game = this.props.allGames[gameId];
            return (
              <GameListItem
                key={gameId}
                game={game}
                userLocation={user.location}
                onPress={() => this.props.navigation.navigate('GameDetails', { game: game })}
                rightIcon={{ name: 'cancel', color: colors.CANCEL }}
                onPressRightIcon={() => this.leaveJoinedGame(game)}
              />
            );
        })
        }
      </List>
    );
  }

  renderFAB() {
    return (
      <FAB
        onPress={() => this.props.navigation.navigate('GamesMap')}
        title='Find a Game'
        icon={{ ...icons.SEARCH }} />
    );
  }

  render () {
    if (this.props.user.attendingGamesIds.length === 0) {
      return (
        <FullScreenTextView
          title='No Joined Games'
          description="Looks like you haven't joined any games yet! Find a game by pressing the button below" 
          FAB={this.renderFAB()} />
      );
    } else {
      return (
        <View style={styles.pageContainer}>
          <ScrollView>
            {this.renderAttendingGamesList(this.props.user)}
          </ScrollView>
          {this.renderFAB()}
          <Toast
            ref="toast"
            style={{ backgroundColor: colors.SELECTED }}
            position='top'
            positionValue={50}
            fadeInDuration={750}
            fadeOutDuration={1250}
          />
        </View>
      );
    }
  }
}

let mapStoreToProps = ({ user, allGames }) => ({ user, allGames });

export default connect(mapStoreToProps, { leaveGame })(AttendingGamesPage);