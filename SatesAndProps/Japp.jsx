import React from 'react';
class Japp extends React.Component {
    constructor(){
        super();
        this.state = {name: "will"};
    }
    render(){
        setTimeout(()=>{
            this.setState({name:"bob"})
        },1000);
        return(
            <div>
                <h1>{this.state.name}</h1>
                Hello world
                <Happ/>
            </div>
        );
    }
}
class Happ extends React.Component{

    render(){
        var myStyle = {
            color: '#FF0000'
        }
        return(
            <div>
                <p style={myStyle}>dfghjk</p>
            </div>
    );
    }
}
export default Japp;

