import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import Button from '../components/buttons/Button'
import {colors} from '../utils/colors'
import Input from '../components/Input'
import HeaderButton from '../components/buttons/HeaderButton'
import {Ionicons} from '@expo/vector-icons'
import {User} from '../api'

/*
  Email的规则: name@domain
  name最长64，domain最长253，总长最长256
  name可以使用任意ASCII字符:
    大小写英文字母 a-z,A-Z
    数字 0-9
    字符 !#$%&'*+-/=?^_`{|}~
    字符 .不能是第一个和最后一个，不能连续出现两次
    但是有些邮件服务器会拒绝包含有特殊字符的邮件地址
    domain仅限于26个英文字母、10个数字、连词号-
    连词号-不能是第一个字符
    顶级域名（com、cn等）长度为2到6个
*/
const Email_reg = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i
const Password_reg = /^[a-zA-Z].{5,15}$/
const Username_reg = /^[a-zA-Z].{5,15}$/

export default class SigninScreen extends PureComponent {
  state = {
    username: '',
    password: '',
    loading: false
  }

  onChangeText = (value, type) => {
    if (type === 'email') {
      this.setState({
        email: value
      })
    } else if (type === 'password') {
      this.setState({
        password: value
      })
    } else if (type === 'username') {
      this.setState({
        username: value
      })
    }
  }

  submitOnPress = async () => {
    try {
      const {username, password} = this.state
      this.setState({
        loading: true
      })
      const data = await User.signin({
        username,
        password
      })
      this.setState({
        loading: false
      })
      alert(JSON.stringify(data))
      if (data.status === 200) {
        await AsyncStorage.setItem('Authorization', data.data)
        this.props.navigation.navigate('Main')
      }
    } catch (error) {
      
    }
  }

  get _disabled () {
    const {username, password} = this.state
    return !username || !password
  }

  render() {
    const {email, password, username, showUsernameCheckmark, showEmailCheckmark, showPasswordCheckmark, loading} = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>用户登录</Text>
          <View style={styles.avator}>
          </View>
        </View>
        <View style={styles.form}>
          <Input placeholder="请输入用户名/邮箱" 
          onChangeText={value => this.onChangeText(value, 'username')}
          value={username}
          keyboardType="email-address"
          inputStyle={styles.inputStyle} />
          <Input placeholder="请输入密码..." 
          secureTextEntry={true}
          onChangeText={value => this.onChangeText(value, 'password')}
          value={password}
          inputStyle={styles.inputStyle} />
          <Button full 
          loading={loading}
          disabled={this._disabled}
          disabledStyle={styles.disabledStyle}
          style={styles.buttonWrapper} onPress={this.submitOnPress}>
            <Text style={styles.buttonText}>登录</Text>
          </Button>
          <View style={styles.footer}>
            <TouchableOpacity style={{flex: 1}}
            onPress={() => this.props.navigation.navigate('Signup')}
            >
              <Text style={{color: colors.greenPrimary, fontSize: 12}}>还未注册？</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: colors.greyLight, fontSize: 12}}>忘记密码</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
    backgroundColor: colors.white
  },
  header: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  avator: {
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey5
  },
  inputStyle: {
    backgroundColor: 'transparent',
    paddingBottom: 20,
    marginBottom: 20,
    paddingRight: 40
  },
  buttonWrapper: {
    backgroundColor: colors.greenPrimary,
    borderWidth: 0,
    height: 40,
    marginTop: 40,
  },
  disabledStyle: {
    backgroundColor: colors.greenLighter
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white
  },
  footer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButtonWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 30
  }
})
