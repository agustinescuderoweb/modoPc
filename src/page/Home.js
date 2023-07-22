import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagenes from '../assest/imagenes.js';





const Home = () => {
  return (
    <Homme>

  {/*Primera parte*/}

   <div className='imagenhome'>
  
    <img data-aos="zoom-in" className='imag1' src={imagenes.img1}></img>
    
    </div> 

 {/*Segunda Parte*/}

 <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='Servicios'>
   <p className='servicios'>
    SERVICIOS
    </p></div> 
    

  {/*Tercera Parte*/}

  <div className="seccionesSistema">
    <div data-aos="fade-right" className="seccionSistema">
    <img className='sistemas' src={imagenes.img3}></img>
     <div>
      <h1 className='tituloSistemas'>Sistemas Operativos</h1>
      <ul className='subtituloSistemas'>
      <li className='subtituloSistema'>Análisis de Estado</li>
      <li className='subtituloSistema'>Instalación de Sistemas</li>
      <li className='subtituloSistema'>Antivirus</li>
      </ul>
      </div> 
    </div>
    </div>

  <div className="seccionesComponentes">
    <div data-aos="fade-left" className='seccionComponentes'>
    <div className="componentesTextos">
    <h1 className='tituloComponentes'>Instalación de Componentes</h1>
      <ul className='subtituloComponentes'>
      <li className='subtituloComponente'>Chequeo de Componentes</li>
      <li className='subtituloComponente'>Análisis de Componentes</li>
      <li className='subtituloComponente'>Instalación</li>
      </ul>
      </div>
      <img className='Componentes' width='600px' src={imagenes.img4}></img>
     </div>
    </div>
    
    <div className="seccionesSistema">
    <div data-aos="fade-right" className="seccionSistema">
    <img className='sistemas' src={imagenes.img5}></img>
     <div>
      <h1 className='tituloSistemas'>Limpieza de Hardware</h1>
      <ul className='subtituloSistemas'>
      <li className='subtituloSistema'>Limpieza de Componentes</li>
      <li className='subtituloSistema'>Limpieza Interna</li>
      <li className='subtituloSistema'>Limpieza Externa</li>
      </ul>
      </div> 
    </div>
    </div>

    

  
  {/*Cuarta Parte*/}

  <div className="ModoPc">
    <h1 data-aos="zoom-in"  className='modoPc'>
    MODO PC
    </h1>
    <p className='textoModoPc'>Modo Pc, tiene como objetivo mejorar las condiciones de tu computadora de forma global.
        Analizando y mejorando tanto los componentes de hardware como los sistemas de software. Su misión es ofrecer servicios de calidad y cumplir con las necesidades de los clientes.

    </p>
    </div>

  <div className='ariadnaescudero'>
    <img className='ariadna' src={imagenes.img12}></img>
    <p></p>
    
  </div>

  {/*Novena Parte*/}


  <div class="container">
      <div class="logo-left">
      <img className='imagz' src={imagenes.img0}></img>
      </div>
    <div class="text-center">
    <h1>Enviame un mensaje, <br></br>seguí mis redes sociales!</h1>
      </div>
    <div class="header-right">
      <h1>Contactos</h1>
      <a href='#'><i class="bi bi-instagram"></i><i>ariadna.eventmakeupp</i></a>
      <a href='#'><i class="bi bi-whatsapp"></i><i>+54(9)261639734</i></a>
      </div>
  </div>

  
    </Homme>

  
  )

}

   

export default Home;

const Homme = styled.div`


.imagenhome {

  text-align: center;
  justify-content: center;


  .imag1 {
    margin-top: 30px;
    width: 85%;
    position: relative;
    box-shadow: 0px -5px 10px black;

  }

}


.frase {
    width:  100%;
    padding: 5rem;
    text-align: center;
    background-color: white;
}

p {
  font-size: 4rem;
}

.imagenes {
  text-align: center;
  .imag1{
    width: 300px;
    margin: 4rem;
    box-shadow: -10px -10px 3px #DDB7AB;
  }
  .imag2{
    width: 300px;
    margin: 4rem;
    box-shadow: 10px 10px 3px #999b84;
  }
  .imag3{
    width: 300px;
    margin: 4rem;
    box-shadow: 10px -10px 5px black;
  }
}

.Servicios {
  color: white;
  margin: 20px;
  background: #6c757d;
  display: flex;
  justify-content: center;
  text-aling: center;
  .servicios{
    padding: 30px;
    font-size: 100px;
  }
}


.seccionSistema{
  width: 100%;
  display: flex;
  justify-content: center;
  .sistemas {
    width: 450px;
    height: 400px;
    margin: 20px;
  }
  .tituloSistemas{
    font-size: 30px;
    text-align: center;
    margin: 100px 100px;
  }
  .subtituloSistemas{
    font-size: 20px;
    text-aling: center;
    margin: 100px 100px;

  }
}

.seccionComponentes{
  background: #6c757d;
  width: 100%;
  display: flex;
  justify-content: center;
  .Componentes {
    width: 600px;
  }
  .tituloComponentes{
    font-size: 30px;
    color: white;
    text-align: center;
    margin: 100px 100px;

  }
  .subtituloComponentes{
    font-size: 20px;
    color: white;
    text-aling: center;
    margin: 100px 100px;
  
  }
}

.seccionLimpieza{
  
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 60px;
  .limpieza {
      width: 600px;
    }
    .tituloLimpieza{
      font-size: 30px;
      text-align: center;
    }
  }
}

.modoPc {
  margin-top: 60px;
  font-size: 100px;
  text-align: center;
  color: white; 
  background:  #6c757d;
}

.ModoPc {
  color: black; 
  padding: 40px;
}

.textoModoPc{
  font-size: 40px;
  padding: 60px;
  text-align: center;
  }




.galeria {
  width:  100%;
  padding: 5rem;
  text-align: center;
  background-color: #999b84;
}

.carousel-inner{
  width: 400px;
  text-align: center;
}

section {
  display: flex;
  width: 1400px;
  height: 450px;
}

section img {
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: .8;
  transition: .5s ease;
}

section img:hover {
  cursor: crosshair;
  width: 300px;
  opacity: 1;
  filter: constrast(120%);
}

.ariadnaescudero{
  margin: 5rem;
  display: inline-block;
  .ariadna {
    float: left;
    box-shadow: 3px 2px 2px black;
  }

  p{
    float: left;
    position: relative;
    right: 50px;
    top: 50px;
    width: 700px;
    height: 150px;
    font-size: 3rem;
    text-align: center;
    background-color: #DDB7AB;
    box-shadow: 3px 2px 2px black;
  }

}

.SobreAriadna {
  width:  100%;
  padding: 5rem;
  text-align: center;
  background-color: #999b84;
}

.container {
  width: 100%;
  display: flex;
  text-align: center;
  background-color: #999b84;
  padding: 5rem;
 
}

.logo-left,
.text-center,
.header-right {
  flex: 1;
}

.logo-left .imagz {
  width: 150px;
  box-shadow: 1px 2px 2px black;
  margin-right: 50px;

}

.text-center {
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-top: 20px;
  }
}

.header-right {
  text-align: right;
  a {
    display: block;
    i{
      padding: 5px;
    }
  }

  

`