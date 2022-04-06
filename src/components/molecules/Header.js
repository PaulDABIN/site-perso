import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme/index';

export default function Header() {
    return (
        <header>
            <nav>
                <li>Acueil</li>
                <li>A propos</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </nav>

        </header>
    )
}

/*const HeaderStyled = styled.header`
    color : blue;


`*/
