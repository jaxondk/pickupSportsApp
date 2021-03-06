import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, List, Button } from 'react-native-elements';
import { colors } from '../../constants';
import { leaveGame, attendGame, removeGameOfInterest, addGameOfInterest } from '../../actions';
import GameListItem from '../common/GameListItem';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    marginBottom: 25,
    alignItems: 'center'
  },
  list: {
    margin: 1,
    padding: 1,
  },
  sectionHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  },
  textInfo: { //TODO - make this pretty
    margin: 30,
    backgroundColor: colors.SILVER
  },
  btnContainer: {
    borderRadius: 20,
    width: '50%'
  }
}

class GamesForSportPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('currentSport').name + " Games",
    }
  };

  // TODO - make this generic so you can use it to render all similar lists in the app -
  //        hosted games, games to checkout, my sports, etc.
  renderAttendingGamesList (attendingGamesIds) {
    if (attendingGamesIds.length === 0) {
      return (<Text style={styles.textInfo}>You haven't joined any games yet</Text>);
    } else {
      return (
        <List style={styles.list}>
          {
            attendingGamesIds.map((gameId) => {
              const game = this.props.allGames[gameId]
              return (
                <GameListItem
                  key={gameId}
                  game={game}
                  userLocation={this.props.user.location}
                  onPress={() => this.props.navigation.navigate('GameDetails', { game: game })}
                />
              );
            })
          }
        </List>
      );
    }
  }

  // Probably can't genericize
  renderGamesOfInterestList (gamesOfInterestIds) {
    if (gamesOfInterestIds.length === 0) {
      return (<Text style={styles.textInfo}>No other games of interest in your area</Text>);
    } else {
      return (
        <List>
          {
            gamesOfInterestIds.map((gameId) => {
              const game = this.props.allGames[gameId];
              return (
                <GameListItem
                  key={gameId}
                  game={game}
                  userLocation={this.props.user.location}
                  onPress={() => this.props.navigation.navigate('GameDetails', { game: game })}
                />
              );
            })
          }
        </List>
      );
    }
  }

  //TODO - use a sectionlist instead and combine the two lists into one with section headings. Can probably still use RNE's ListItem, 
  //       just use it inside of a <SectionList>
  render () {
    const currentSport = this.props.navigation.getParam('currentSport');
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.sectionHeading}>Games you're attending</Text>
        <ScrollView>
          {this.renderAttendingGamesList(currentSport.attendingGamesIds) }
        </ScrollView>
        <Text style={styles.sectionHeading}>Games you may be interested in</Text>
        <ScrollView>
          {this.renderGamesOfInterestList(currentSport.gamesOfInterestIds)}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            raised
            icon={{ name: 'filter-list' }}
            title='Adjust filters'
            borderRadius={20}
            containerViewStyle={styles.btnContainer}
            backgroundColor={colors.PURPLE}
            onPress={null}
          />
        </View>
      </View>
    );
  }
}

let mapStoreToProps = ({ user, allGames }) => ({ user, allGames });

export default connect(mapStoreToProps, { leaveGame, attendGame, removeGameOfInterest, addGameOfInterest })(GamesForSportPage);