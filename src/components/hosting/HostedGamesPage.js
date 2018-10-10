import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, Icon, List, ListItem, Button } from 'react-native-elements';
import { colors } from '../../constants';
import { removeHostedGame } from '../../actions';
import { getIconFor } from '../../utilities';

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

  buildGameSubtitle(game) {
    return (
      <Text>
        <Icon type='font-awesome' name='calendar' size={12} /> {' ' + game.moment.format('MM/DD')} {/*TODO - inline icons*/}
        <Icon type='font-awesome' name='clock-o' size={12} /> {'    ' + game.moment.format('h:mm A')}
      </Text>
    )
  }
  
  // TODO - make this generic so you can use it to render all similar lists in the app -
  //        hosted games, games to checkout, my sports, etc.
  renderHostedGamesList(user) {
    if (user.hostedGames.length == 0) {
      return (<Text>No Hosted Games</Text>);  
    } else {
      return ( 
        <List>
          {
            user.hostedGames.map((game) => (
              <ListItem
                key={game.id}
                title={game.name}
                subtitle={this.buildGameSubtitle(game)}
                leftIcon={getIconFor(game.sportName, 50)}
                rightIcon={{name: 'cancel', color: 'red'}}
                onPressRightIcon={() => this.props.removeHostedGame(user.hostedGames, game)}
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
          {this.renderHostedGamesList(this.props.user)}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            raised
            icon={{type: 'material-community', name: 'plus'}}
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

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, { removeHostedGame })(HostedGamesPage);