import './App.css'
import PremierFilms from './pages/PremierFilms'
import HighBudget from './pages/HighBudget'
import LastNews from './pages/LastNews.jsx'
import PopularPersons from './pages/PopularPersons'
import PopularFilms from './pages/PopularFilms.jsx'
import Header from './pages/Header'

function App() {

  return (
    <>      
      <PremierFilms />
      
      <HighBudget/>
      
       
    <>

      <LastNews/>

      <PopularPersons/>
    <Header/>
      <PopularFilms />
     
    </>
  )
}

export default App
