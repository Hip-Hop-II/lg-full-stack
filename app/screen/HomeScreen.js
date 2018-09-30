import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Input from '../components/Input'
import { colors } from '../utils/colors'
import { images } from '../utils/images'

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-home-outline" size={26} color={tintColor} />
    )
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.carouselWrapper}>
            <Input
              style={styles.inputWrapper}
              placeholder="趣头条"
            >
              <Input.Icon>
                <Ionicons name="ios-search-outline" size={20} color={colors.grey1} />
              </Input.Icon>
            </Input>
          </View>
          <View style={styles.maqueeWrapper}>
            <Image source={images.tou_logo} style={styles.maqueeImage} />
            <View style={styles.maqueeContent}>

            </View>
          </View>
          <Text> textInComponent </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  carouselWrapper: {
    height: 314,
    backgroundColor: 'red',
    position: 'relative',
    alignItems: 'center'
  },
  inputWrapper: {
    position: 'absolute',
    width: '90%',
    top: 45,
    height: 36
  },
  maqueeWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  maqueeImage: {
    width: 117 / 2,
    height: 117 / 2,
    marginRight: 20,
  },
  maqueeContent: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
