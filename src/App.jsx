import { useState } from 'react'
import './App.css'
import HomePage from './pages/(invitados)/HomePage'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log("Rendering App component");
  console.log(`Selected category: ${selectedCategory}`);

  return (
      <HomePage selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
  )
}

export default App

