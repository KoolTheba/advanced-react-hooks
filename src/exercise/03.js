// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function CountProvider (props){
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]}  {...props}/>
}

const useCount = () => {
  const context = React.useContext(CountContext)

  if(!context){
    throw new Error('useContext must be used within CountProvider')
  }

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  return <button onClick={()=>  setCount(c => c + 1)}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
