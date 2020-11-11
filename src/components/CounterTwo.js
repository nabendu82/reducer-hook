import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 15
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }        
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>Second Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({type: 'decrement', value: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment2', value: 1 })}>Increment Count 2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1 })}>Decrement Count 2</button>
        </div>
    )
}

export default CounterTwo
