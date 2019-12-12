import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {
  state = {
    id: '',
    text: '',
    isDone: false,
  }
  onBtnClickHandler = e => {
    e.preventDefault()
    const {text} = this.state
    this.props.onAddList({
      id: +new Date(),
      text,
    })
  }
  handleChange = e => {
    const { id } = e.currentTarget
    this.setState({ [id]: e.currentTarget.value })
  }
  handleCheckboxChange = (e) => {
    this.setState({ isDone: e.currentTarget.checked })
  }
  validate = () => {
    const { text, isDone} = this.state
    if (text.trim() && isDone) {
      return true
    }
    return false
  }
  render() {
    const { text } = this.state
    return (
      <form className="add">
        <input
          id="text"
          type="text"
          onChange={this.handleChange}
          className="add__text"
          placeholder="введите текст"
          value={text}
        />
        
        <button
          className="add"
          onClick={this.onBtnClickHandler}
         
          
        >
          add
        </button>
      </form>
    )
  }
}

Add.propTypes = {
  onAddList: PropTypes.func.isRequired,
}

export default Add