import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          console.log("Popup: sending FILL_FORM");
          chrome.runtime.sendMessage({ type: "FILL_FORM" });
        }}
      >
        Send Nudes
      </button>

    </>
  )
}

export default App
