/**
 *
 *  함수형 구현
 *
 */
// import React, { useReducer, useState } from 'react';

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({type: 'INCREMENT'});
//     }

//     const onDeecrease = () => {
//         dispatch({type: "DECREMENT"});
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDeecrease}>-1</button>
//         </div>
//     );
// }

// export default Counter;

/**
 *
 *  클래스형 구현
 *
 */

import React, { Component } from 'react';

class Counter extends Component {
    /**
     * 함수 바인딩, state설정의 일반적인 방법
     */
    // constructor(props) {
    //     super(props);
    //
    //     // state는 반드시 객체여야 함
    //     this.state = {
    //         counter: 0,
    //     };
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    /**
     * class-properties문법을 사용할 경우 화살표 함수를 사용하면 자동 바인딩 가능, state객체 바로 설정 가능
     * create-react-app으로 프로젝트를 생성할 경우 자동적용
     * https://babeljs.io/docs/babel-plugin-transform-class-properties
     */
    state = {
        counter: 0,
        fixed: 1,
    };

    handleIncrease = () => {
        this.setState(
            (state) => ({
                counter: state.counter + 1,
            }),
            () => {
                console.log(this.state.counter);
            },
        );
    };

    handleDecrease = () => {
        this.setState((state) => ({
            counter: state.counter - 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <div>고정된 값: {this.state.fixed}</div>
            </div>
        );
    }
}

export default Counter;
