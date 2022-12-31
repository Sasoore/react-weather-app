import logo from './logo.svg'
import './App.css'
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          Coded by Sara and is{' '}
          <a
            href="https://github.com/Sasoore/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
