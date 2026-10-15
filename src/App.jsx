import Greetings from './components/Greetings'
import { Header } from './components/Header'
import './App.css'

const user = window.prompt("Qual o seu nome?") || "Visitante";

function App() {
  return (
    <>
      <Header/>
      <Greetings nome={user}/>
    </>
  )
}

export default App
