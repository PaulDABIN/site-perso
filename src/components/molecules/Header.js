import React from "react"
import styled from "styled-components"
import { theme } from "../../theme/index"

import Languages from "./Languages"

export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled>
        <span>Logo</span>
      </LogoStyled>
      <nav>
        <a>Acueil</a>
        <a>A propos</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Contact</a>
        <Languages />
      </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  color: blue;
  display: flex;
  flex-direction: row-reverse;
  max-width: 1200px;
`
const LogoStyled = styled.div`
  text-align: left;
  background-color: red;
`
