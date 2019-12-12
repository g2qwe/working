import React from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from "./components/Footer"

import './App.css'

// Add
// list
//  --items 
// footer

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                { id: 1, text: 'text1', isDone: false },
                { id: 2, text: 'text2', isDone: false },
                { id: 3, text: 'text3', isDone: false },
            ]
        }
        this.delete = this.delete.bind(this);
    }

    delete = (id) => {
        console.log('WORKS')
        this.setState(prevState => ({
            list: prevState.list.filter(el => el.id !==id)
        }));
    }


    handleAddList = (data) => {

        const nextList = [data, ...this.state.list]
        this.setState({ list: nextList })
    }

    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })

    }
    handleCheckboxChange = e => {
        this.setState({ isDone: e.currentTarget.checked })
    }
    validate = () => {
        const { text, isDone } = this.state
        if (text.trim() && isDone) {
            return true
        }
        return false
    }
    handleSubmit = e => {

    }



    render() {
        const { list } = this.state

        return (
            <React.Fragment>
                <Add onAddList={this.handleAddList} text={"123"}/>
                {Array.isArray(list) && <List data={this.state.list} onDeleteItem={this.delete} />}
                <Footer />
            </React.Fragment>
        )
    }
}







export default App