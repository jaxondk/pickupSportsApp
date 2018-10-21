import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, List, Button } from 'react-native-elements';
import { colors } from '../../constants';
import { unattendGame, attendGame, removeGameOfInterest, addGameOfInterest } from '../../actions';
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
  renderAttendingGamesList (AGList, subscribedSports, currentSport) {
    if (AGList.length == 0) {
      return (<Text style={styles.textInfo}>You haven't joined any games yet</Text>);
    } else {
      return (
        <List style={styles.list}>
          {
            AGList.map((game) => (
              <GameListItem
                key={game.id}
                game={game}
                userLocation={this.props.user.location}
                onPress={() => this.props.navigation.navigate('GameDetails', {game: game})}
                // rightIcon={{ type: 'ionicon', name: 'ios-checkmark-circle', color: colors.SELECTED }}
                // onPressRightIcon={() => {
                //   this.props.unattendGame(AGList, game.id);
                //   this.props.addGameOfInterest(subscribedSports, currentSport.id, game);
                //   //TODO - filters need to be applied somewhere
                // }}
              />
            ))
          }
        </List>
      );
    }
  }

  // Probably can't genericize
  renderGamesOfInterestList (subscribedSports, currentSport) {
    var GOIList = currentSport.gamesOfInterest;
    if (GOIList.length == 0) {
      return (<Text style={styles.textInfo}>No other games of interest in your area</Text>);
    } else {
      return (
        <List>
          {
            GOIList.map((game) => (
              <GameListItem
                key={game.id}
                game={game}
                userLocation={this.props.user.location}
                onPress={() => this.props.navigation.navigate('GameDetails', { game: game })}
                // rightIcon={{ type: 'ionicon', name: 'ios-checkmark-circle-outline', color: colors.SELECTED }}
                // onPressRightIcon={() => {
                //   this.props.attendGame(this.props.user.attendingGames, game);
                //   this.props.removeGameOfInterest(subscribedSports, currentSport.id, game.id);
                // }}
              />
            ))
          }
        </List>
      );
    }
  }

  //TODO - use a sectionlist instead and combine the two lists into one with section headings. Can probably still use RNE's ListItem, 
  //       just use it inside of a <SectionList>
  render () {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.sectionHeading}>Games you're attending</Text>
        <ScrollView>
          {this.renderAttendingGamesList(this.props.user.attendingGames, this.props.user.subscribedSports, this.props.navigation.getParam('currentSport'))}
        </ScrollView>
        <Text style={styles.sectionHeading}>Games you may be interested in</Text>
        <ScrollView>
          {this.renderGamesOfInterestList(this.props.user.subscribedSports, this.props.navigation.getParam('currentSport'))}
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

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, { unattendGame, attendGame, removeGameOfInterest, addGameOfInterest })(GamesForSportPage);