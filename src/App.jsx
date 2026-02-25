import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="outline-primary" onClick={() => setCount(count + 1)} >increment</Button>
        <Button variant="outline-primary" onClick={() => setCount(count - 1)} >decrement</Button>
        <Button variant="outline-primary" onClick={() => setCount(0)} >reset</Button>      
      </div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <h1>{count}</h1>      
      </div>
    </div>
  )
}

export default App
