import { FlatESLint } from 'eslint/use-at-your-own-risk'
import './App.css'
import Subscribe from './pages/Subscribe.jsx'
import Footer from './pages/Footer.jsx'
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
  <Subscribe/>
  <Footer/>

      <LastNews/>

      <PopularPersons/>
    <Header/>
      <PopularFilms />
     
    </>
  )
}

export default App
