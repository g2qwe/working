import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './Item'


class List extends React.Component {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     item: ["123", "123"]
  //   };
  // }

  renderItem = () => {
   console.log('this props', this.props)
    const { data } = this.props
    let list = null

    if (data && data.length) {
      list = data.map(item => {
        return <Item key={item.id} item={item} onDeleteItem={this.props.onDeleteItem}/>
      })
    } else {
      list = <p></p>
    }

    return list
  }

  render() {
    const {data} = this.props

    console.log('PROPS', this.props)
    return (
      <div className="list">
        {this.renderItem()} 
        {data && this.props.data.length ? (
          <strong className={'item__count'}>
            Всего: {this.props.data.length}
          </strong>
        ) : null}
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
}

export default List