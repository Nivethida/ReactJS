import React from 'react';

class CreateTODO extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null
        }
    }
    renderError(){
        if(!this.state.error){retun : null;}
        return <div style={{color: 'red'}}>{this.state.error}</div>;
    }
    render(){
        var buttonStyle ={
            backgroundColor: 'green'
        }
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do i need to do?"
                ref="createInput"/>
                <button style={buttonStyle}>Create</button>
                {this.renderError()}
            </form>
        );

    }
    handleCreate(event){
        event.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);
        if(validateInput){
            this.setState({error:validateInput});
            return;
        }
        this.setState({error:null})

        this.props.createTask(task);
        this.refs.createInput.value = '';
    }
   validateInput(task){
        if(!task){
            return 'please enter a task';
        }else if(_.find(this.props.todos,todo=>todo.task===task)){
            return 'task already exists';
        }
        else{
            return null;
        }
   }
}
export default CreateTODO;