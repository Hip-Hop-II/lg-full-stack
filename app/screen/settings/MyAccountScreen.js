import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../../utils/colors'

import ListColumn from '../../components/ListColumn'

class MyAccountScreen extends PureComponent {
  static navigationOptions = {
    title: '我的账号'
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ListColumn link>
          <ListColumn.Left>
            <Text>邮箱</Text>
          </ListColumn.Left>
          <ListColumn.Right>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 8, color: colors.greyLight}}>{this.props.user.email}</Text>
              <Ionicons name="ios-arrow-forward-outline" size={14} color={colors.greyLight} />
            </View>
          </ListColumn.Right>
        </ListColumn>
      </View>
    )
  }
}

export default connect(state => ({
  user: state.user.user
}))(MyAccountScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

