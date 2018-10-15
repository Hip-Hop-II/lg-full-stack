import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import SearchInput from '../components/SearchInput'
import {Ionicons} from '@expo/vector-icons'
import { colors } from '../utils/colors'
import Button from '../components/buttons/Button'
import debounce from 'lodash.debounce'
import {Position} from '../api'
import SearchItem from '../components/SearchItem'
import {SafeAreaView} from 'react-navigation'


export default class SearchScreen extends PureComponent {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
    this.state = {
      searchValue: '',
      city: '上海',
      resultList: []
    }
    this.searchHandle = debounce(this.fetchData, 300)
  }
  onChangeText = (value) => {
    if (value) {
      this.setState({
        searchValue: value
      }, () => {
        this.searchHandle()
      })
    }
  }
  fetchData = async () => {
    try {
      const {searchValue, city} = this.state
      const result = await Position.getListByName({name: searchValue, city})
      if (result.status === 200) {
        this.setState({resultList: result.list})
      }
      
    } catch (error) {
      throw error
    }
    
  }
  renderList = () => {
    return this.state.resultList.map((item, index) => (
      <SearchItem {...item} key={index} />
    ))
  }
  renderDefault = () => {
    return (
      <ScrollView contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 20}}>
        <View>
          <Text>热门公司</Text>
          <View style={styles.itemContent}>
            {Array.from({length: 6}).map((item, index) => (
              <Button key={index} md style={{borderRadius: 15, backgroundColor: colors.white, marginTop: 15, marginRight: 10}}>
                <Text style={{color: colors.greyLight, fontSize: 12}}>江苏亿科达</Text>
              </Button>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
  render() {
    const {resultList, searchValue} = this.state
    return (
      <View style={styles.wrapper}>
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.searchWrapper}>
          <View style={styles.searchCity}>
            <Text style={{marginBottom: 2, marginRight: 4}}>上海</Text>
            <Ionicons name="ios-arrow-down" size={24} color={colors.greyLight} />
          </View>
          <SearchInput style={{flex: 1, marginHorizontal: 10}} 
          inputStyle={{backgroundColor: colors.grey4, textAlign: 'left'}}
          onChangeText={this.onChangeText}
          autoFocus
          />
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Text>取消</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          {searchValue ? <ScrollView>
            {this.renderList()}
          </ScrollView> : this.renderDefault()}
        </View>
      </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  searchWrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchCity: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
