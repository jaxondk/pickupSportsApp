import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import Toast, { DURATION } from 'react-native-easy-toast';
import { colors } from '../../constants';
import { removeGame } from '../../actions';
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

class HostedGamesPage extends Component {
  static navigationOptions = {
    title: "My Hosted Games",
  };

  removeHostedGame (game) {
    Alert.alert(
      'Remove Hosted Game?',
      'Are you sure you want to stop hosting this game? This will permanently remove the game and cannot be undone',
      [
        {
          text: "Yes, Remove It", onPress: () => {
            this.props.removeGame(game);
            if (this.refs.toast) {
              this.refs.toast.show('Success! You\'re no longer hosting ' + game.name, DURATION.LENGTH_LONG);
            }
          }
        },
        { text: "No, Keep It" }
      ]
    );
  }

  // TODO - make this generic so you can use it to render all similar lists in the app -
  //        hosted games, games to checkout, my sports, etc.
  renderHostedGamesList (user) {
    return (
      <List>
        {

          user.hostedGamesIds.map((gameId) => {
            const game = this.props.allGames[gameId];
            return (
              <GameListItem
                key={gameId}
                game={game}
                userLocation={user.location}
                onPress={() => this.props.navigation.navigate('GameDetails', { game: game })}
                rightIcon={{ name: 'cancel', color: colors.CANCEL }}
                onPressRightIcon={() => this.removeHostedGame(game)}
              // editable
              />
            );
          })
        }
      </List>
    );
  }

  render () {
    if (this.props.user.hostedGamesIds.length == 0) {
      return (
        <FullScreenTextView
          title='No Hosted Games'
          description="Looks like you're not hosting any games yet! Host a game by pressing the button below"
          FAB={(<FAB
            onPress={() => this.props.navigation.navigate('ChooseSport')}
            title='Host New Game'
            icon={{ type: 'material-community', name: 'plus' }} />)} />
      );
    } else {
      return (
        <View style={styles.pageContainer}>
          <ScrollView>
            {this.renderHostedGamesList(this.props.user)}
          </ScrollView>
          <FAB
            onPress={() => this.props.navigation.navigate('ChooseSport')}
            title='Host New Game'
            icon={{ type: 'material-community', name: 'plus' }} />
          <Toast
            ref="toast"
            style={{ backgroundColor: colors.SELECTED }}
            position='bottom'
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1250}
          />
        </View>
      );
    }
  }
}

let mapStoreToProps = ({ user, allGames }) => ({ user, allGames });

export default connect(mapStoreToProps, { removeGame })(HostedGamesPage);