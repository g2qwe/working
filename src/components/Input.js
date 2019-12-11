import React from 'react';
import './Input.css';



class Input extends React.Component {
  state = {}
  
  onBtnClickHandler = e => {
    e.preventDefault()
    const { id, text } = this.state
    this.props.onAddNews({
        id: +new Date(),
        text,

    })
}

  render() {
    return (
      <div className="form">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autofocus="" />
        <button className='add'>Add</button>
        
      </div>
    )
  }
}



export default Input
