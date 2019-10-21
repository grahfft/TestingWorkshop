import React from "react";
import "./Square.css"

class Square extends React.Component<any,any> {
    render() {
        return (
        <button className="square">
            {this.props.value}
        </button>
        );
    }
}

export default Square;