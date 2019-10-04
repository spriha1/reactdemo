import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        const { onDecrement, onDelete, onIncrement, counter } = this.props;
        return (
            <div class="row">
                {this.props.children}
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>

                <div className="col">
                    <button onClick={() => onIncrement(counter)} className="btn btn-secondary btm-sm">+</button>
                    <button onClick={() => onDecrement(counter)} className="btn btn-secondary btm-sm m-2" disabled={counter.value === 0 ? 'disabled' : ''}>-</button>
                    <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        const { counter } = this.props;
        let classes = "badge m-2 badge-";
        classes += counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { counter } = this.props;
        const { value } = counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;