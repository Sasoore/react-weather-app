import logo from './logo.svg'
import './App.css'
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>Coded by Sara</footer>
      </div>
    </div>
  )
}

export default App
