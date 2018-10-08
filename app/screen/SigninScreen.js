import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Button from '../components/buttons/Button'
import {colors} from '../utils/colors'
import Input from '../components/Input'

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
const Email_reg = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/gi
const Password_reg = /^[a-z].{5,15}$/

export default class SigninScreen extends PureComponent {
  state = {
    email: '',
    password: '',
    showEmailCheckmark: false,
    showPasswordCheckmark: false
  }

  onChangeText = (value, type) => {
    if (type === 'email') {
      this.setState({
        email: value
      })
      if (Email_reg.test(value)) {
        this.setState({
          showEmailCheckmark: true
        })
      } else {
        this.setState({
          showEmailCheckmark: false
        })
      }
    } else if (type === 'password') {
      this.setState({
        password: value
      })
      if (Password_reg.test(value)) {
        this.setState({
          showPasswordCheckmark: true
        })
      } else {
        this.setState({
          showPasswordCheckmark: false
        })
      }
    }
  }

  render() {
    const {email, password, showEmailCheckmark, showPasswordCheckmark} = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>用户登录</Text>
          <View style={styles.avator}>

          </View>
        </View>
        <View style={styles.form}>
          <Input placeholder="请输入邮箱..." 
          onChangeText={value => this.onChangeText(value, 'email')}
          value={email}
          keyboardType="email-address"
          showCheckmark={showEmailCheckmark}
          inputStyle={styles.inputStyle} />
          <Input placeholder="请输入密码..." 
          secureTextEntry={true}
          onChangeText={value => this.onChangeText(value, 'password')}
          value={password}
          showCheckmark={showPasswordCheckmark}
          inputStyle={styles.inputStyle} />
          <Button full style={styles.buttonWrapper}>
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
  }
})
