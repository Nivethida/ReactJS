import React from 'react';
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"34"
                },
                {
                    "id":2,
                    "name":"Boo",
                    "age":"31"
                },
                {
                    "id":3,
                    "name":"hoo",
                    "age":"24"
                }
            ]
        }
    }
    render() {
        return (
<div>
<h1>Hi there</h1>
    <Header/>
    <table>
        <tbody>
        {this.state.data.map((person,i)=><TableRow key={i} data={person}/>)}
        </tbody>
    </table>
    <p>3456789</p>
</div>
        );
    }
}
class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>from header component</h2>
            </div>
        );
    }
}
class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>

            </tr>
        );
    }
}
export default App;
