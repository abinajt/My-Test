import React from 'Reac';
import { View, Text, TouchableOpacity }from 'react-native';

export default class ScreenB extends React.Component {
  render() {
    return(
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenB')}>
          <Text>This is Screen B</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
