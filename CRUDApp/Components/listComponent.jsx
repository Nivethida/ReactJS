import React from 'react';
import _ from 'lodash';
import ListHeaderComponent from "./listHeaderComponent.jsx";
import TodoListItem from "./todosListItem.jsx";
class ListComponent extends  React.Component{
    renderItems(){
        //console.log(this.props)
        const props = _.omit(this.props,'todos');
          return _.map(this.props.todos, (todo,index) => <TodoListItem key={index} {...todo}
                                                                      {...this.props} />);
    }
    render(){

        return(
            <table>

                <ListHeaderComponent/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );

    }
}
export default ListComponent;