import React, { Component } from 'react';

class Counter1 extends Component {
    state = {
        tags: ["tag1", "tag2", "tag3"]
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        
    }

    render() { 
        return (
            <div>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
        );
    }
}
 
export default Counter1;