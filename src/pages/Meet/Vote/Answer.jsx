import { Component } from 'react'

import styles from './Answer.module.sass'

class Answer extends Component {
  render() {
    return (
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" value={this.props.value} name={this.props.value} />
        <span className={styles.span}>{this.props.answer}</span>
      </label>
    )
  }
}

export default Answer
