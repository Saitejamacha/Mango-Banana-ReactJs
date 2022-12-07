import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMangoBtn = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBananaBtn = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="out-con">
        <div className="main-con">
          <h1>
            Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span>{' '}
            bananas
          </h1>
          <div className="bg-con">
            <div className="fruits">
              <img
                alt="mangoImage"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button className="btn" onClick={this.eatMangoBtn}>
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                alt="bananaImage"
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button className="btn" onClick={this.eatBananaBtn}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
