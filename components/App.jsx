import React from 'react';
class App extends React.Component{
    constructor(){
        super();
this.state = {
    data: []
}
this.setStateHandler = this.setStateHandler.bind(this);
    };
    setSateHandler(){
        var item = "setState..."
        var myArray = this.state.data;
        myArray.push(item)
        this.setState({data: myArray})
    };
    render(){
        return(
            <div>
                <button onClick={this.setStateHandler}>Set State</button>
                <h4>Sate Array: {this.state.data}</h4>
            </div>
        );
    }
}
export default App;
