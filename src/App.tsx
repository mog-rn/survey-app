import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './app/store'
import {decrement, increment} from "./features/counter/counterSlice"

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="">
      The value of count is {count}

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
