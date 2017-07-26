import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
require("./style.css");

var Note = React.createClass({
    getInitialState(){
        return {
            editing: false
        }
    },
    save(){
        this.props.onChange(this.refs.newText.value, this.props.id)
        this.setState({editing:false})
    },
    componentWillMount()
    {
      this.style ={
          right: this.randomBetween(0,window.innerWidth-150,'px'),
          top: this.randomBetween(0,window.innerHeight-150,'px')
      }
    },
    randomBetween(x,y,s){
      return (x=Math.ceil(Math.random()*(y-x)))+s
    },
    edit(){
        this.setState({editing: true})
    },
    remove(){
        this.props.onRemove(this.props.id)
    },
    renderForm(){
          return(<div className="note" style={this.style}>
                 <textarea ref="newText"></textarea>
                 <button onClick={this.save}>Save</button>
                 </div>
          )
    },
    renderDisplay(){
        return(<div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <span>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.remove}>X</button>
                </span>
            </div>
        )
    },
    render(){
       return (this.state.editing) ? this.renderForm() : this.renderDisplay()
        }

})
var Board = React.createClass({
    propTypes: {
        count: function (props,propName) {
            if(typeof props[propName] !== "number"){
                return new Error("the count must be number")
            }
            if(props[propName]>100){
                return new Error("creating lot of notes" +props[propName])
            }
        }
    },
    getInitialState(){
         return {
             notes: []
         }
    },
    nextId(){
      this.uniqueId=this.uniqueId || 0
        return this.uniqueId++
    },
    add(text){
        var notes = [
            ...this.state.notes,
            {
                id: this.nextId(),
                note: text
            }
        ]
        this.setState({notes})
    },
    update(newText,id){
        var notes = this.state.notes.map(
             note => (note.id !==id) ?
            note :
            {
                ...note,
                note: newText
            }
        )
        this.setState({notes})
    },
    remove(id){
        var notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    },
    eachNote(note){
        return (<Note  key={note.id}
                       id={note.id}
                       onChange={this.update}
                       onRemove={this.remove}>{note.note}</Note>)

    },
    render(){
        return(<div className="board">
            {this.state.notes.map(this.eachNote)}
            <button onClick={()=>this.add('NewNote')}>+</button>
               </div>)
    }
})
ReactDOM.render(<Board count={10} />, document.getElementById('app'));