import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onPlayAgain, score} = props

  const resultImg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const altText = 'win or lose'
  const result = isWon ? 'You Won' : 'You Lose'
  const scoreHead = isWon ? 'Best Score' : 'Score'

  const onPlayAgainBtn = () => {
    onPlayAgain()
  }

  return (
    <div className="card-con">
      <img src={resultImg} alt={altText} className="result-imgs" />
      <h1 className="game-result">{result}</h1>
      <p className="score-desc">{scoreHead}</p>
      <p className="res-score">{score}/12</p>
      <button className="btn" type="button" onClick={onPlayAgainBtn}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
