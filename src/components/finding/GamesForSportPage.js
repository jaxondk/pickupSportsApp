import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, List, ListItem, Button } from 'react-native-elements';
import { colors } from '../../constants';
import { buildGameSubtitle, getIconFor } from '../../utilities';
import { unattendGame, attendGame, removeGameOfInterest, addGameOfInterest } from '../../actions';

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
      return (<Text>You haven't joined any games yet</Text>);
    } else {
      return (
        <List>
          {
            AGList.map((game) => (
              <ListItem
                key={game.id}
                title={game.name}
                subtitle={buildGameSubtitle(game)}
                leftIcon={getIconFor(game.sportName, 50)}
                rightIcon={{ type: 'ionicon', name: 'ios-checkmark-circle', color: colors.SELECTED }}
                onPressRightIcon={() => {
                  this.props.unattendGame(AGList, game.id);
                  this.props.addGameOfInterest(subscribedSports, currentSport.id, game);
                  //TODO - filters need to be applied somewhere
                }}
              />
            ))
          }
        </List>
      );
    }
  }

  // Probably can't genericize
  renderGamesOfInterestList (subscribedSports, currentSport) {
    console.log('current sport', currentSport)
    var GOIList = currentSport.gamesOfInterest;
    if (GOIList.length == 0) {
      return (<Text>No games that match your filter criteria for this sport. Try adjusting the filters to broaden your search results</Text>);
    } else {
      return (
        <List>
          {
            GOIList.map((game) => (
              <ListItem
                key={game.id}
                title={game.name}
                subtitle={buildGameSubtitle(game)}
                leftIcon={getIconFor(game.sportName, 50)}
                rightIcon={{ type: 'ionicon', name: 'ios-checkmark-circle-outline', color: colors.SELECTED }}
                onPressRightIcon={() => {
                  this.props.attendGame(this.props.user.attendingGames, game);
                  this.props.removeGameOfInterest(subscribedSports, currentSport.id, game.id);
                }}
              />
            ))
          }
        </List>
      );
    }
  }

  render () {
    return (
      <View style={styles.pageContainer}>
        <ScrollView>
          {this.renderAttendingGamesList(this.props.user.attendingGames, this.props.user.subscribedSports, this.props.navigation.getParam('currentSport'))}
        </ScrollView>
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