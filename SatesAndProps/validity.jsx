import React from 'react';
class Validity extends React.Component{

    render(){
        return(
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Boolean: {this.props.propBool}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.obj1}</h3>
                <h3>Object: {this.props.propObject.obj2}</h3>
                <h3>Object: {this.props.propObject.obj3}</h3>

            </div>
        )
    }
}
Validity.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}
Validity.defaultProps = {
    propArray:[1,2,3,4],

    propFunc: function (e) {
        return e
    },
    propNumber:1,
    propString: "Stringy value....",
    propObject: {
        obj1: "obj1",
        obj2: "obj2",
        obj3: "obj3"
    }
}
export default Validity;