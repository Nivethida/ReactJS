import React from 'react';
class App extends React.Component {
    render(){

        return(
            <div>
                Hello
                <p>{this.props.headerProp}</p>
                <p>{this.props.contentProp}</p>
            </div>
    );
    }
}
App.defaultProps = {
    headerProp :"William",
    contentProp:"Harry"
}
export default App;
