import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import LoginForm from '../../components/LoginForm'
import {HOME_PATH} from '../../constants/RouteConstants'
import {setCookie} from '../../utils/StorageUtils'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    setCookie('jwt_token', jwtToken)
    history.replace(HOME_PATH)
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }


  render() {
    const {username,
        password,
        showSubmitError,
        error,
        errorMsg
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to={HOME_PATH} />
    }
    return (
        <>
        <LoginForm
            username = {username}
            password = {password}
            showSubmitError = {showSubmitError}
            error = {error}
            errorMsg = {errorMsg}
            onChangeUsername = {this.onChangeUsername}
            onChangePassword = {this.onChangePassword}
            submitForm = {this.submitForm}
            onSubmitSuccess = {this.onSubmitSuccess}
            onSubmitFailure = {this.onSubmitFailure}/>
        </>
    )
  }
}

export default LoginRoute