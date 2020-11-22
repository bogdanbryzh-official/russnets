import { Component, Fragment } from 'react'

import styles from './Question.module.sass'

import Answer from './Answer'

class Question extends Component {
  constructor(props) {
    super(props)

    this.setState = {
      checked: {},
    }
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  headleAnswerClick = e => {
    console.log(this)
  }

  render() {
    return (
      <Fragment>
        <form className={styles.container}>
          <div>
            <h1 className={styles.question}>{this.props.question.name}</h1>
          </div>
          {this.props.question.answers.map((answer, index) => {
            console.log(answer)
            return (
              <Answer
                answer={answer.answer}
                value={answer._id}
                key={index}
                onClick={this.headleAnswerClick}
              />
            )
          })}
          <input type="submit" value="Отправить" onClick={this.handleSubmit} />
        </form>
      </Fragment>
    )
  }
}

export default Question
