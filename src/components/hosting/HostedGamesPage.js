import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, List, Button } from 'react-native-elements';
import { colors } from '../../constants';
import { removeGame } from '../../actions';
import GameListItem from '../common/GameListItem';

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

  // TODO - make this generic so you can use it to render all similar lists in the app -
  //        hosted games, games to checkout, my sports, etc.
  renderHostedGamesList (user) {
    if (user.hostedGamesIds.length == 0) {
      return (<Text>No Hosted Games</Text>);
    } else {
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
                  onPressRightIcon={() => this.props.removeGame(game)}
                // editable
                />
              );
          })
          }
        </List>
      );
    }
  }

  render () {
    return (
      <View style={styles.pageContainer}>
        <ScrollView>
          {this.renderHostedGamesList(this.props.user)}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            raised
            icon={{ type: 'material-community', name: 'plus' }}
            title='Host New Game'
            borderRadius={20}
            containerViewStyle={styles.btnContainer}
            backgroundColor={colors.ACCENT}
            onPress={() => this.props.navigation.navigate('ChooseSport')}
          />
        </View>
      </View>
    );
  }
}

let mapStoreToProps = ({ user, allGames }) => ({ user, allGames });

export default connect(mapStoreToProps, { removeGame })(HostedGamesPage);