// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsContainer extends Component {
  state = {
    mangocount: 0,
    bananacount: 0,
  }
  mangoBtnIncrement = () => {
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  bananaBtnIncrement = () => {
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  render() {
    const {mangocount} = this.state
    const {bananacount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="spanEl">{mangocount}</span> mangoes
            <span className="spanEl"> {bananacount}</span> bananas
          </h1>
          <div className="img-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" onClick={this.mangoBtnIncrement}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="btn" onClick={this.bananaBtnIncrement}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsContainer
