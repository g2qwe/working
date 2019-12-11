import React from 'react';
import './List.css';
import Item from './Item'

class List extends React.Component {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     item: ["123", "123"]
  //   };
  // }

  renderItem = () => {
   console.log('this props', this.props)
    const { data } = this.props;
    let list = null

    if (data && data.length) {
      list = data.map(function (item) {
        return <Item item={item} />
      })
    } else {
      list = <p></p>
    }

    return list
  }

  render() {

    console.log('PROPS', this.props)
    return (
      <div>
        {this.renderItem()} 
        {this.props.data && this.props.data.length ? (
          <strong className={'item__count'}>
            Всего: {this.props.data.length}
          </strong>
        ) : null}
      </div>
    )
  }
}


export default List