import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    state = {
        visible: false,
    }


    delete(id) {
        this.props.delete(id);
    }

    onBtnClickHandler = e => {
        console.log('ITEM WORKS',this.props)
        e.preventDefault()
        const { id } = this.props.item
        this.props.onDeleteItem(id)
    }



    handleReadMoreClck = e => {
        e.preventDefault()
        this.setState({ visible: true })
    }
    render() {
        const { text } = this.props.item

        return (
            <div className="item">
                <p className="list__text">{text}</p>
                <button className="add__btn"
                    onClick={this.onBtnClickHandler} > delete </button>
            </div>
        )
    }
}

Item.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired, // добавили id, это число, обязательно
        text: PropTypes.string.isRequired,

    }),
}

export { Item }