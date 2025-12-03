import './App.css'
import Navbar from './components/Navbar'
import InitialDescription from './components/InitialDescription'

function App() {
  const title = "NutriGen AI"

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <h1>{title}</h1>
        <InitialDescription />
      </main>
    </div>
  )
}

export default App
