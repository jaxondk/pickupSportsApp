import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, Icon, List, ListItem } from 'react-native-elements';
import { colors } from '../../constants';
import { getIconFor, displayTime } from '../../utilities';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
}

class HostedGamesPage extends Component {
  buildGameSubtitle(game) {
    return (
      <Text>
        <Icon type='font-awesome' name='calendar' size={12} /> {'  '+game.date}
        <Icon type='font-awesome' name='clock-o' size={12} /> {'     ' +displayTime(game.startTime)}
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
                leftIcon={getIconFor(game.sport)}
              />
            ))
          }
        </List> 
      );
    }
  }

  render () {
    return (
      <ScrollView style={styles.pageContainer}>
        {this.renderHostedGamesList(this.props.user)}
      </ScrollView>
    );
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, null)(HostedGamesPage);