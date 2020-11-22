import { Component } from 'react'
import { Link } from 'react-router-dom'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Menu extends Component {
  render() {
    return (
      <nav>
        <Link to="/vote">Голосовать</Link>
        <Link to="/meet">Расписание</Link>

        <button
          onClick={() => {
            cookies.remove('userID')
            cookies.remove('isUserLogged')
            window.location.href = '/'
          }}
        >
          logout
        </button>
      </nav>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
    }
  }

  render() {
    return (
      <header>
        <div>logo</div>
        <div>
          <button onClick={() => this.setState({ openMenu: !this.state.openMenu })}>menu</button>
          {this.state.openMenu && <Menu />}
        </div>
      </header>
    )
  }
}

export default Header
