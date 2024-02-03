// useReducer: simple Counter
import * as React from 'react'

// 1. accept the step as the action
// const countReducer = (count, step) => count + step;

// 2. simulate setState with an object
// const countReducer = (state, newState) => ({...state, ...newState})

// 3. simulate setState with an object OR function
// const countReducer = (state, action) => ({
//   ...state, 
//   ...(typeof action === 'function' ? action(state) : action)
// })

// 4. traditional dispatch object with a type and switch statement
const countReducer = (state, action) => {
  const {type, step} = action;
  switch (type) {
    case 'INCREMENT':
        return {
            count: state.count + step
        }
    default:
        return state
}
}

function Counter({initialCount = 0, step = 2}) {
  // 1. accept the step as the action
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)

  // 2. simulate setState with an object
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  // 3. Simulate setState with an object OR function
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState(currentState => ({count: currentState.count + step}))
  // return <button onClick={increment}>{count}</button>

  // 4. traditional dispatch object with a type and switch statement
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
