import React, { memo } from 'react';


const Habit = memo((props) => {

    const componentDidMount = () => {
        //컴포넌트가 UI상 등록이 되었을 때 : 사용자에게 보여질 때
        console.log(`habit : ${props.habit.name} mounted`);
    }
    const componentWillUnmount = () => {
        //컴포넌트 지우기 전에 호출
        console.log(`habit : ${props.habit.name} will unmount`);
    }
    const componentWillReceiveProps = () => {
        //컴포넌트리시브받을때
        console.log("컴포 리시브 받을 때");
    }
    function tes() {

    }

    const defaultProps = {
        id: 0,
        name: 'defaultProps',
        count: 0
    }

    const handleIncrement = () => {
        props.onIncrement(props.habit);
    }

    const handleDecrement = () => {
        props.onDecrement(props.habit);
    }

    const handleDelete = () => {
        props.onDelete(props.habit);
    }

    const { name, count } = props.habit;
    return (
        <li className="habit">
            <span className="habiit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement} >
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={handleDecrement} >
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={handleDelete}  >
                <i className="fas fa-trash"></i>
            </button>
        </li>
    )
})

export default Habit;