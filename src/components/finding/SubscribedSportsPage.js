import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { colors } from '../../constants';
import { unfollowSport } from '../../actions';
import { getIconFor } from '../../utilities';
import gstyles from '../../styles';

const styles = {
  footer: {
    marginBottom: 25,
    alignItems: 'center'
  },
  btnContainer: {
    borderRadius: 20,
    width: '50%'
  }
}

class SubscribedSportsPage extends Component {
  static navigationOptions = {
    title: "My Sports",
  };

  buildSportSubtitle (sport) {
    return (
      <Text>
        {sport.gamesOfInterestIds.length + sport.attendingGamesIds.length} game(s) coming up
      </Text>
    )
  }

  // TODO - make this generic so you can use it to render all similar lists in the app -
  //        hosted games, games to checkout, my sports, etc.
  renderSubscribedSportsList (user) {
    if (user.subscribedSports.length === 0) {
      return (<Text>You haven't chosen any sports. To find a game, join a sport</Text>);
    } else {
      return (
        <List>
          {
            user.subscribedSports.map((subscribedSport) => (
              <ListItem
                key={subscribedSport.name}
                title={subscribedSport.name}
                subtitle={this.buildSportSubtitle(subscribedSport)}
                onPress={() => this.props.navigation.navigate('GamesForSport', { currentSport: subscribedSport })}
                leftIcon={getIconFor(subscribedSport.name, 50)}
                rightIcon={{ name: 'cancel', color: colors.CANCEL }}
                onPressRightIcon={() => this.props.unfollowSport(subscribedSport)}
              />
            ))
          }
        </List>
      );
    }
  }

  render () {
    return (
      <View style={gstyles.pageContainer}>
        <ScrollView>
          {this.renderSubscribedSportsList(this.props.user)}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            raised
            icon={{ type: 'material-community', name: 'plus' }}
            title='Follow A Sport'
            borderRadius={20}
            containerViewStyle={styles.btnContainer}
            backgroundColor={colors.ACCENT}
            onPress={() => this.props.navigation.navigate('FollowSport')}
          />
        </View>
      </View>
    );
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, { unfollowSport })(SubscribedSportsPage);