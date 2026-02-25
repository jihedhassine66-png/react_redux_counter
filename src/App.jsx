import './App.css'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './js/Constants/actions-types.jsx'

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="outline-primary" onClick={() => dispatch({type: INCREMENT_COUNTER})} >increment</Button>
        <Button variant="outline-primary" onClick={() => dispatch({type: DECREMENT_COUNTER})} >decrement</Button>
        <Button variant="outline-primary" onClick={() => dispatch({type: RESET_COUNTER})} >reset</Button>      
      </div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <h1>{count}</h1>      
      </div>
    </div>
  )
}

export default App