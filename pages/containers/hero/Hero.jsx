import React from "react"
import styled from "@emotion/styled"
import CTA from "./CTA/CTA"

const Hero = () => {

    return (
        <>
            <Box> 

                <video autoplay="" loop="" type="video/mp4">
                    <source src="https://ik.imagekit.io/bayc/assets/club-landing.mp4" type="video/mp4" />
                </video>
            </Box>

        </>
    )
}

const Box = styled.div`
    width: 100%;
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;


    
    video {
        max-width: 1140px;

    }
    source {
        background-color: black;
    }
    


 


  }
`
export default Hero;