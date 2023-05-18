import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'



function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Ariadna |<span>EventMakeupp</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Inicio</a>
          <a onClick={handleClick} href="#h">Sobre Ariadna</a>
          <a onClick={handleClick} href="#h">MakeUp</a>
          <a onClick={handleClick} href="#h">Contacto</a>
          </div>
        <div className='redes'>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-whatsapp"></i>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    margin-left: 2rem;
    color:   #999b84;
    font-weight: 400;
    box-shadow: 1px 1px 2px   #999b84;
    span{
      font-weight: bold;
    }

  }
  padding: .4rem;
  background-color: #f4eeed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: black;
    text-decoration: none;
    margin-right: 3rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color:  #999b84;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: black;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }

  i {
    font-size: 20px;
    margin: 10px;
  }
}
`

const BgDiv = styled.div`
  background-color: white;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


`