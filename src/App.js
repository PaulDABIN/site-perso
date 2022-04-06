import { Router } from "@reach/router"
import Accueil from "./components/pages/Accueil"
import Home from "./components/pages/Home";


import Header from "./components/molecules/Header";
import Languages from "./components/molecules/Languages";
import Presentation from "./components/molecules/Presentation";

/*

import Presensation from './components/molecules/Presentation'


import Header from "./components/molecules/Header";*/

function App() {

  //state 
  


  //compoennt
  /* 
   */

  //render
  return (
    <Router>
        <Accueil path="/"/>
        <Home path="en"/>
    </Router>
  )
}

export default App


