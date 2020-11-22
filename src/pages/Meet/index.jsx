import { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Vote from './Vote'
import Home from './Home'

import Header from './../../components/Header'


const getTimetable = async () => {
  let data = await fetch('https://secret-dawn-56594.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `query {
      questions {
        name
        answers {
          answer
          votes
        }
      }
    }`,
    }),
  })
  data = await data.json()
  return data
}

class Meet extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Redirect to="/meet" />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/meet">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default Meet
