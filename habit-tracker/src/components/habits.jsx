import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
import HabitFilter from './habitFilter';

class Habits extends Component {


    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }


    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }

    handleAdd = (name) => {
        this.props.onAdd(name);
    }

    handleSetKeyword = (keyword) => {
        this.props.onSetKeyword(keyword);
    }
    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
                <HabitFilter onSetKeyword={this.handleSetKeyword}
                    keyword={this.props.keyword} />
                <ul>
                    {this.props.keyword.length > 0 ?
                        this.props.filteredHabits.map((habit, index) => {
                            return (
                                <Habit
                                    key={habit.id}
                                    habit={habit}
                                    onIncrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}
                                    onDelete={this.handleDelete}
                                />
                            )
                        })
                        :
                        this.props.habits.map((habit, index) => {
                            return (
                                <Habit
                                    key={habit.id}
                                    habit={habit}
                                    onIncrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}
                                    onDelete={this.handleDelete}
                                />
                            )
                        })
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}


export default Habits