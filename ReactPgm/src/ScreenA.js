import React from 'Reac';
import { View, Text, TouchableOpacity }from 'react-native';

export default class ScreenA extends React.Component {
  render() {
    return(
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenA')}>
          <Text>This is Screen A</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
