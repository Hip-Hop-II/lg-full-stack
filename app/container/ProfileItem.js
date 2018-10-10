/**
 * 用户信息展示
 */

 import React, { PureComponent } from 'react'
 import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
 import {images} from '../utils/images'
 import {Ionicons} from '@expo/vector-icons'
import { colors } from '../utils/colors'
 
 export default class ProfileItem extends PureComponent {
   render() {
     const {style, onPress, ...newProps} = this.props
     return (
       <TouchableOpacity onPress={onPress}>
       <View style={[styles.wrapper, style]}>
         <View style={styles.left}>
            <Text style={styles.username}>{newProps.username}</Text>
            <View style={styles.leftBody}>
              <Ionicons name="ios-create-outline" size={26} color={colors.greyLight} />
              <Text style={{marginLeft: 4, color: colors.greyLight, fontSize: 12}}>编辑在线简历</Text>
            </View>
         </View>
         <View style={styles.right}>
            <Image source={{uri: newProps.avatar}} style={styles.avator} />
            <View style={styles.sex}>
              <Ionicons name="md-male" color={colors.white} size={12} />
            </View>
         </View>
       </View>
       </TouchableOpacity>
     )
   }
 }
 
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  leftBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  username: {
    fontSize: 26,
    color: colors.greyDark,
    fontWeight: 'bold'
  },
  right: {
    position: 'relative'
  },
  avator: {
    width: 60,
    height: 60,
    borderRadius: 20
  },
  sex: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.blueLight,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
