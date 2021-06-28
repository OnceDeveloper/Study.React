import React, { useState, useRef, useCallback, useEffect } from 'react';

//클래스형 컴포넌트는 멤버변수는 클래스가 만들어질때 한번만 할당이 되어지고 변경되는 경우 render함수만 반복적으로 호출됨
//함수형 컴포넌트는 props나 state가 변경이 되면 코드블락 안 전체 코드가 반복되어짐
const SimpleHabit = (props) => {

    const [count, setCount] = useState(0);
    //useState를 쓰면 따로 그 값을 저장해놔서 반복 실행 되어도 문제X

    //const spanRef = React.createRef();
    //creatRef를 쓰면 반복적으로 만들어지기 때문에 useRef를 사용
    //useRef는 한 번만 만들고 메모리에 저장해놓고 그 값을 재사용하는 함수
    const spanRef = useRef();

    //위와 같은 의미로 useCallback를 사용[주의사항이 있는데 나중에 추가로 알려준다함]
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(() => {//처음에 로딩될 때 호출 && 인자값이 업데이트 될 때 호출 => 'componentDidMount()' + 'componentDidUpdate()'
        //두번째 인자를 빈 값으로[] 호출을하면 처음에만 호출하고 두번째 인자에 값을 넣으면 그 값이 변경될때마다 호출됨
        console.log(`mounted & update! : ${count}`);
    }, [count])

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );

}

export default SimpleHabit;


