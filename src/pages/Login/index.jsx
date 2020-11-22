import { Component, Fragment } from 'react'
import Cookies from 'universal-cookie'

import styles from './Login.module.sass'

import QRCodeScanner from './QRCodeScanner'

const cookies = new Cookies()

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUserLogged: cookies.get('isUserLogged') || false,
      showQRScanner: false,
    }
  }

  render() {
    return (
      <Fragment>
        <div className={styles.loginpage}>
          <button
            onClick={() =>
              this.setState({ showQRScanner: !this.state.showQRScanner })
            }
          >
            login
          </button>
          {this.state.showQRScanner ? <QRCodeScanner /> : null}
        </div>
      </Fragment>
    )
  }
}

export default Login
