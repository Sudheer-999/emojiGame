import './index.css'

const EmojiCard = props => {
  const {details, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = details

  const onEmoji = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-cont">
      <button type="button" onClick={onEmoji} className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
