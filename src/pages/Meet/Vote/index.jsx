import { Component, Fragment } from 'react'

import Question from './Question'

const getQuetions = async () => {
  let data = await fetch('https://secret-dawn-56594.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `query {
      questions {
        _id
        name
        answers {
          _id
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

class Vote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataAvailable: false,
      data: null,
    }
  }

  getData = async () => {
    const data = await getQuetions()
    this.setState({ dataAvailable: true, data: data.data.questions })
  }

  componentDidMount() {
    this.getData()
  }
  
  render() {
    return (
      <Fragment>
        <h1>Vote</h1>
        {this.state.dataAvailable && this.state.data.map((question, index) => {
          return <Question question={question} key={index} />
        })}
      </Fragment>
    )
  }
}

export default Vote
