import React, { PureComponent } from 'react'
import { Text, View, Modal, StyleSheet, TouchableOpacity, Picker} from 'react-native'

export default class SortList extends PureComponent {
  state = {
    modalVisible: false
  }
  onPress = () => {
    this.setState({
      modalVisible: true
    })
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        transparent={true}
        >
        <View style={{height: 300, backgroundColor: 'red'}}>
        <Picker
      selectedValue={this.state.language}
      style={{height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
        </View>
        </Modal>
        <TouchableOpacity onPress={this.onPress}>
          <Text>按钮</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})