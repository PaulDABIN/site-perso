import { Link } from '@reach/router'
import React from 'react'
import { useState } from "react"
import styled from 'styled-components'


import Languages from '../molecules/Languages'
import Presentation from '../molecules/Presentation'
import Header from '../molecules/Header'


export default function Accueil() {
    //state

    /*
    //component
    const handleSubmit = (event) => {
        event.preventDefault() //permet d'empecher l'évènement par defaut du onSubmit 
        //setUsername(inputValue)
        //setInputValue("")
    }*/

    
    //render
    return(

    <div>
      <Header/>
      <Languages/>
      <Presentation/>
    </div>


    )

}