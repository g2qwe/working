import React from 'react';
// import './Item.css';



class Item extends React.Component {
    constructor(props) {
        super();
        this.state = {
            item: props.item
        };

    }



    deleteItem(e) {
        this.parentDeleteCallback(this.state.item.id);
    }

    togleItemsStatus(e) {
        const newItem = {
            ...this.state.item,
            isDone: !this.state.item.isDone
        };

        this.newState({
            task: newItem
        });

    }

    render() {
        return (
            <div class={this.state.isDone ? "item done" : "item"}>
                <input type="checkbox"  />
                {this.state.item.text}
                <span class="delete">х</span>
            </div>
        )
    }
}
export default Item