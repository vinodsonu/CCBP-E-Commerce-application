import './index.css'

import Button from '../common/Button'
import InputField from '../common/InputField'


const LoginForm  = (props) => {

    const renderPasswordField = () => {
      const {password, onChangePassword} = props
      return (
       <InputField 
          labelClassname = "input-label"
          htmlFor = "password"
          labelDisplayText = "PASSWORD"
          type = "password"
          id = "password"
          inputFieldClassname = "password-input-field"
          value = {password}
          onChange = {onChangePassword}
        />
      )
    }

  const renderUsernameField = () => {
    const {username, onChangeUsername} = props
    return (
      <InputField 
      labelClassname = "input-label"
      htmlFor = "username"
      labelDisplayText = "USERNAME"
      type = "username"
      id = "username"
      inputFieldClassname = "username-input-field"
      value = {username}
      onChange = {onChangeUsername}
    />
    )
  }

  return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={props.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <Button className = "login-button" type = "submit" buttonText = "Login"/>
          {props.showSubmitError && <p className="error-message">*{props.errorMsg}</p>}
        </form>
      </div>
  )
}

export default LoginForm
