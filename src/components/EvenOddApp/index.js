import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  onChangeCount = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)

      let numType
      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }
      return {isEven: numType, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state

    const content = isEven ? 'Even' : 'Odd'

    return (
      <div className="container-bg">
        <div className="card-container">
          <h1>Count {count}</h1>
          <p className="description">Count is {content}</p>
          <button type="button" className="button" onClick={this.onChangeCount}>
            Increment
          </button>
          <p className="random-num">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
