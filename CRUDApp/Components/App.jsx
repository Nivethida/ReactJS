import React from 'react';
import ListComponent from './listComponent.jsx'
import CreateTODO from './creat-todo.jsx';
const todos = [
    {
        task:'study for mock',
        isCompleted: false
    },
    {
        task: 'buy groceries',
        isCompleted: true
    }
];
class App extends  React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos //es5 todos: todos
        };
    }
    render(){
        return(
            <div>
                <h1> React TO Do App</h1>
                <CreateTODO todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                <ListComponent todos={this.state.todos}
                               toggleTask = {this.toggleTask.bind(this)}
                               saveTask = {this.saveTask.bind(this)}
                               deleteTask = {this.deleteTask.bind(this)}
                createTask={this.createTask.bind(this)}/>
            </div>
        );

    }
    toggleTask(task){
     const foundTodo = _.find(this.state.todos, todo=>todo.task === task)
        foundTodo.isCompleted = !foundTodo.isCompleted;
     this.setState({todos: this.state.todos});
    }
    createTask(task){
       this.state.todos.push({
           task:task,
           isCompleted: false
       });
       this.setState({todos: this.state.todos})
    }
    saveTask(oldTask,newTask){
        const foundTodo = _.find(this.state.todos, todo=>todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos})
    }
    deleteTask(taskToDelete){
        _.remove(this.state.todos, toso => toso.task === taskToDelete);
        this.setState({todos:this.state.todos})
    }
}
export default App;