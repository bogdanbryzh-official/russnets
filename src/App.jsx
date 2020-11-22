import { Component, Fragment } from 'react'
import Cookies from 'universal-cookie'

import Login from './pages/Login'
import Meet from './pages/Meet'

const cookies = new Cookies()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUserLogged: cookies.get('isUserLogged') || false,
    }
  }

  render() {
    return <Fragment>
      {this.state.isUserLogged ? <Meet /> : <Login />}
    </Fragment>
  }
}

export default App
