/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, clickedEmojis: [], isGameEnd: false}

  onEmojiClick = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state

    const isContain = clickedEmojis.includes(id)

    if (isContain) {
      this.finishGame(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGame = newScore => {
    const {topScore} = this.state

    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }

    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderWinLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state

    const isWon = emojisList.length === clickedEmojis.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  renderEmojisList = () => {
    const shuffledEmojiList = this.shuffledEmojisList()

    return (
      <ul className="emoji-con">
        {shuffledEmojiList.map(eachItem => (
          <EmojiCard
            details={eachItem}
            key={eachItem.id}
            onEmojiClick={this.onEmojiClick}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameEnd, topScore, clickedEmojis} = this.state
    const currentScore = clickedEmojis.length

    return (
      <div className="bg-container">
        <NavBar
          score={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        <div className="emoji-body-container">
          {isGameEnd ? this.renderWinLoseCard() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
