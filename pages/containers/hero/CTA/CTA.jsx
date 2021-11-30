import React from "react"
import styled from "@emotion/styled"
import { keyframes } from '@emotion/react'


const CTA = () => {

    return (

            <Call> 
                    <div>
                    <h2>Welcome to the bored Ape Yacht Club</h2>
                    <button type="button">ENTER</button>
                    </div>
                    <Sideways>
                        <p>← SCROLL DOWN</p>
                    </Sideways>

            </Call>

    )
}
const blinking = keyframes`
    0%{     color: lightgrey;    }
    20%{    color: grey; }
    60%{    color: lightgrey; }
    80%{    color: grey;  }
    100%{   color: lightgrey;    }
`
const Sideways = styled.div`
    height: 3px;
    line-height: 150px;
    padding-right: 1.25rem;
    




    p {
        color: white;
        margin-left: -70px;
        margin-right: -70px;
        transform: rotate(-90deg);
        font-size: 14px;
        font-style: italic;
        animation: ${blinking} 2s infinite;



        
    }

  }
`

const Call = styled.div`
    max-width: 1140px;
    width: 400px;
    height: 205px;
    margin-top: -260px;
    background-color: black;
    padding-left: 16px;
    display: flex;
    position: relative;


    h2 {
        color: white;
        font-style: italic;
        font-weight: 800;
        font-size: 25.5px;
        line-height: 31px;
        text-transform: uppercase;
    }
    button {
        background: #BFC500;
        border-radius: 8px;
        border-color: transparent;
        width: 285px;
        height: 52px;
    }


  }
`
export default CTA;