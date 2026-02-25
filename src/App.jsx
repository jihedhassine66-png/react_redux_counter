import './App.css'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter, resetCounter } from './js/Actions/actions.jsx'

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="outline-primary" onClick={() => dispatch(incrementCounter())} >increment</Button>
        <Button variant="outline-primary" onClick={() => dispatch(decrementCounter())} >decrement</Button>
        <Button variant="outline-primary" onClick={() => dispatch(resetCounter())} >reset</Button>      
      </div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <h1>{count}</h1>      
      </div>
    </div>
  )
}

export default App