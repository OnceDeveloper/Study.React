import React, { Component, Fragment } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';



class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ],
    filteredHabits: [],
    keyword: ''
  }
  componentDidMount() {
    this.setState({
      ...this.state, filteredHabits: this.state.habits
    })
  }
  componentDidUpdate(prevProps, prevState) {
    const lowKeyword = this.state.keyword.toLowerCase()

    if (prevState.keyword !== this.state.keyword) {
      const filteredHabits = this.state.habits.filter((habit) => habit.name.toLowerCase().includes(lowKeyword));
      this.setState({
        ...this.state,
        filteredHabits: filteredHabits,
      })
    }
    if (prevState.habits !== this.state.habits) {
      // const modifiedHabit = this.state.habits.filter(habit => !prevState.habits.includes(habit));
      this.setState({
        ...this.state,
        filteredHabits: this.state.habits
      });
    }
  }
  handleIncrement = (habit) => {

    const copyHabits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      }
      return item;
    })
    this.setState({
      habits: copyHabits,
    })
  }

  handleDecrement = (habit) => {
    const copyHabits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    })
    this.setState({
      habits: copyHabits
    })
  }

  handleDelete = (habit) => {
    const leftHabits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({
      habits: leftHabits
    })
  }

  handleAdd = (name) => {
    const habitsCopy = [...this.state.habits, { id: Date.now(), name: name, count: 0 }]
    this.setState({ habits: habitsCopy });
  }

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({
      habits
    })
  }


  handleSetKeyword = (keyword) => {
    this.setState({ keyword: keyword })
  }

  render() {
    return (
      <Fragment>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          filteredHabits={this.state.filteredHabits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          onSetKeyword={this.handleSetKeyword}
          onFilter={this.handleFilter}
          keyword={this.state.keyword}
        />
      </Fragment>
    )
  }
}

export default App;
