// useReducer: simple Counter
import * as React from 'react'

// 1.
// const countReducer = (count, step) => count + step;

// 2. simulate setState with an object
// const countReducer = (state, newState) => ({...state, ...newState})

// 3. simulate setState with an object OR function
const countReducer = (state, action) => ({
  ...state, 
  ...(typeof action === 'function' ? action(state) : action)
})

function Counter({initialCount = 0, step = 2}) {
  // 1.
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)

  // 2. Simulate setState with an object OR function
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  // 3. 
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
