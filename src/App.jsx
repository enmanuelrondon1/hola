import { Router } from './Router'
import './App.css'
import { Home } from './Home'
import { Provider } from './context/Provider'

function App() {

  return (
    <>
    <Provider>
    <Router/>

    </Provider>

    </>
  )
}

export default App