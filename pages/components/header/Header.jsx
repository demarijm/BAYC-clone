import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styled from '@emotion/styled';





const MenuText = ({ className }) => (
    <div className={className}>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3</a></p>
    <p><a href="#possibilities">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </div>
)
const SignIn = () => (
    <>
    <p>Sign in</p>
    <button type="button">Apply</button>
    </>
)

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <Navbar>
            <Navlinks>
                <Logo>
                    <img src="/byac_logo.png" alt="logo"/>
                </Logo>
           
              
               
            </Navlinks>

        </Navbar>
    )
}

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 2rem 6rem;
    background-color: black;


  }
`
const Navlinks = styled.div`
    flex: 1;
    display: flex;

    align-items: center;
    justify-content: center;
  }
`
const Logo = styled.div`

    img {
        margin-bottom: -68px;
        position: relative;
        z-index: 0;
    }
  }
`

const LinksContainer = styled.div`
   
}
`
const Sign = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
`
const NavMenu = styled.div`
    margin-left: 1rem;
    display: none;
    position: relative;
}
`
const NavbarLinksSign = styled.div`
    display: none;
}
`

const Menu = styled(MenuText)`
    display: flex;
    flex-direction: row;
    p {
        font-color: blue;
        font-size: 18px;
        flex-direction: row;
        margin: 0 1rem 0 1rem;
    }
    a {
        cursor: pointer;
    }
}
`
export default Header
