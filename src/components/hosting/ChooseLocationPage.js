import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { MapView } from 'expo';
import { updateLocation, selectRegion } from '../../actions';
import { colors } from '../../constants';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
    // bottom: 0,
    // top: 0,
    // right: 0,
    // left: 0,
    // position: 'absolute',
  },
  content: {
    flex: 9,
  },
  footerBtn: {
    flex: 1,
    alignItems: 'center', //horizontal align
    justifyContent: 'center', //vertical align
  },
}

class ChooseLocationPage extends Component {
  static navigationOptions = {
    title: "Choose a Location",
  };

  renderNextBtn (disabled, style) {
    var bgColorStyle = disabled ? { backgroundColor: colors.SILVER } : { backgroundColor: colors.PRIMARY };
    return (
      <TouchableOpacity style={[style, bgColorStyle]} onPress={() => disabled ? null : this.onPressNextBtn()} disabled={disabled}>
        <Text h3 style={{ color: 'white' }}>Next</Text>
      </TouchableOpacity>
    );
  }

  onPressNextBtn () {
    this.props.updateSportChoice(this.props.hostAGame.selectedSport);
    this.props.navigation.navigate('ChooseTime');
  }

  render () {
    console.log(this.props.hostAGame.region);
    return (
      <View style={styles.pageContainer}>
        <View style={styles.content}>
          <MapView
            style={styles.map}
            region={this.props.hostAGame.region}
            showsUserLocation
            // onRegionChangeComplete={(reg) => this.props.selectRegion(reg)}
          />
        </View>
        {this.renderNextBtn(this.props.hostAGame.region === null, styles.footerBtn)}
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { updateLocation, selectRegion })(ChooseLocationPage);