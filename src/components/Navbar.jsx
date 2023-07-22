import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import imagenes from '../assest/imagenes'



function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer data-aos="fade-down">
        <img className='imag0' src={imagenes.img0}></img>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Inicio</a>
          <a onClick={handleClick} href="#h">Servicio</a>
          <a onClick={handleClick} href="#h">Modo-Pc</a>
          <a onClick={handleClick} href="#h">Galeria</a>
          <a onClick={handleClick} href="#h">Contacto</a>
          </div>
        <div className='redes' >
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

margin-top: 20px;

  img {
    width: 100px;
    position: relative;
    left: 100px;
  }

  h2{
    margin-left: 2rem;
    color:   black;
    font-weight: 400;
    box-shadow: 1px 1px 2px black;
    span{
      font-weight: bold;
    }

  }
  padding: .4rem;
  background-color: white;
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
        font-size: 1.2rem;
        color:  black;
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
      font-size: 1.5rem;
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
    position: relative;
    right: 100px;
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