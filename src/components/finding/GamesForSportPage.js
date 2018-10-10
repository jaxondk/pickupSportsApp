import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, List, ListItem, Button } from 'react-native-elements';
import { colors } from '../../constants';
import { buildGameSubtitle, getIconFor } from '../../utilities';
import { unattendGame } from '../../actions';

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
  static navigationOptions = {
    title: "Games", //TODO - add a parameter so that this says the sport they clicked on too. IE "Soccer Games"
  };

  // TODO - make this generic so you can use it to render all similar lists in the app -
  //        hosted games, games to checkout, my sports, etc.
  renderAttendingGamesList (list) {
    if (list.length == 0) {
      return (<Text>You haven't joined any games yet</Text>);
    } else {
      return (
        <List>
          {
            list.map((game) => (
              <ListItem
                key={game.id}
                title={game.name}
                subtitle={buildGameSubtitle(game)}
                leftIcon={getIconFor(game.sportName, 50)}
                rightIcon={{ name: 'cancel', color: 'red' }}
                onPressRightIcon={() => this.props.unattendGame(list, game.id)}
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
          {this.renderAttendingGamesList(this.props.user.attendingGames)}
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

export default connect(mapStoreToProps, { unattendGame })(GamesForSportPage);