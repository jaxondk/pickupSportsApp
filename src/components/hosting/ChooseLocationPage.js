import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { MapView } from 'expo';
import uuidv4 from 'uuid/v4';
import { updateLocation, selectRegion, addHostedGame, clearHostAGameForm } from '../../actions';
import { colors } from '../../constants';
import locationPin from '../../../assets/locationPin.png';
import FooterBlockBtn from '../common/FooterBlockBtn';
import gstyles from '../../styles';

const styles = {
  map: {
    flex: 1,
  },
  markerFixed: {
    height: 48,
    width: 48,
    left: '50%',
    marginLeft: -24,
    marginTop: -320,
    position: 'absolute',
    top: '50%'
  },
}

class ChooseLocationPage extends Component {
  static navigationOptions = {
    title: "Choose a Location",
  };

  finishUpHostingFlow () {
    var game = this.props.hostAGame.game;
    game.location = { latitude: this.props.hostAGame.region.latitude, longitude: this.props.hostAGame.region.longitude }
    game.id = uuidv4();
    game.hostId = this.props.user.id;

    this.props.addHostedGame(this.props.user.hostedGames, game);
    this.props.clearHostAGameForm();
  }

  onPressSaveBtn () {
    this.props.updateLocation(this.props.hostAGame.region);
    // this.props.navigation.navigate('ChooseSize');
    // TODO - still need to implement choose size and skill level. 
    // These f(x)s below should go in last screen of hostAGame flow
    this.finishUpHostingFlow();
    this.props.navigation.navigate('HostedGames');
  }

  render () {
    console.log(this.props.hostAGame.region);
    return (
      <View style={gstyles.pageContainer}>
        <View style={gstyles.content}>
          <MapView
            style={styles.map}
            region={this.props.hostAGame.region}
            showsUserLocation
            onRegionChangeComplete={(reg) => this.props.selectRegion(reg)}
          />
          <View pointerEvents='none'>
            <Image style={styles.markerFixed} source={locationPin} />
          </View>
        </View>
        <FooterBlockBtn
          onPress={() => this.onPressSaveBtn()}
          disabled={this.props.hostAGame.region === null}
        />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { updateLocation, selectRegion, addHostedGame, clearHostAGameForm })(ChooseLocationPage);