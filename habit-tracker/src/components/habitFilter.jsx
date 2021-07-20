import React, { Component } from 'react';

class HabitFilter extends Component {
    inputRef = React.createRef();

    onFilter = (e) => {
        e.preventDefault();
        const name = e.target.value.toLowerCase();
        name && this.props.onFilter(name);
        // const name = this.inputRef.current.value;
        //name && this.props.onFilter(name);

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
                    onChange={this.onFilter}
                    value={this.props.keyword}
                />
                <button className="add-button">Filter</button>

            </form>
        );
    }
}

export default HabitFilter;