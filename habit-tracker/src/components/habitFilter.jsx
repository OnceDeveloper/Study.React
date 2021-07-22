import React, { Component } from 'react';

class HabitFilter extends Component {
    inputRef = React.createRef();

    handleSetKeyword = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        this.props.onSetKeyword(keyword);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.keyword !== this.props.keyword;
    }

    render() {
        return (
            <form className="add-from">
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Filtering"
                    onChange={this.handleSetKeyword}
                    value={this.props.keyword}
                />
                <button onClick={(e) => e.preventDefault()} className="add-button">Filter</button>

            </form >
        );
    }
}

export default HabitFilter;