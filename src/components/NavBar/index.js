import './index.css'
import {Component} from 'react'

class Navbar extends Component {
  renderScores = () => {
    const {score, topScore, isGameEnd} = this.props

    if (isGameEnd) {
      return null
    }

    return (
      <div className="score-con">
        <p className="score">Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="nav-con">
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-icon"
          />
          <h1 className="game-head">Emoji Game</h1>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default Navbar
