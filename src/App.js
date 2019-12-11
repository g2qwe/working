import React from "react"

import Input from "./components/Input"
import List from "./components/List"
import Footer from "./components/Footer"
import Item from "./components/Item"

// input 
// list
//  --items 
// footer

class App extends React.Component {
    state = {
        list: [
            // change on objects {title:'some text'}
            { id: 1, text: 'text', agree: false },
            { id: 2, text: 'text2', agree: false },
            { id: 3, text: 'text3', agree: false },
        ]
    }

    
    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    }
    handleCheckboxChange = e => {
        this.setState({ agree: e.currentTarget.checked })
    }
    validate = () => {
        const { id, text, agree } = this.state
        if (id.trim() && text.trim() && agree) {
            return true
        }
        return false
    }
    render() {
        const { list, text, } = this.state

        return (
            <div>
                <Input onAddNews={this.handleAddInput} />
                <List />
                {Array.isArray(list) && <List data={list} text={"123"} />}
                <Footer />
            </div>
        )
    }
}







export default App