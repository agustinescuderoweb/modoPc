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

 <div data-aos="zoom-in" className='Servicios'>
   <div className='servicios'>
    <p>SERVICIOS
    </p>
    </div>
    </div> 
    

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

  {/*Quinta Parte*/}

  <div className="Galeria">
    <div className='gale'>
    <h1 data-aos="zoom-in"  className='galeria'>
    GALERIA
    </h1>
    </div>
    <section className='galeriaFotos'>
      <a href="#imagen1">
      <img src={imagenes.pc1}></img>
      </a>
      <a href="#imagen2">
      <img src={imagenes.pc2}></img>
      </a>
      <a href="#imagen3">
      <img src={imagenes.pc3}></img>
      </a>
      <a href="#imagen4">
      <img src={imagenes.pc4}></img>
      </a>
      <a href="#imagen5">
      <img src={imagenes.pc5}></img>
      </a>
      <a href="#imagen6">
      <img src={imagenes.pc6}></img>
      </a>
      <a href="#imagen7">
      <img src={imagenes.pc7}></img>
      </a>
      <a href="#imagen8">
      <img src={imagenes.pc8}></img>
      </a>
      <a href="#imagen9">
      <img src={imagenes.pc9}></img>
      </a>
      <a href="#imagen10">
      <img src={imagenes.pc10}></img>
      </a>
      <a href="#imagen11">
      <img src={imagenes.pc11}></img>
      </a>
      <a href="#imagen12">
      <img src={imagenes.pc12}></img>
      </a> 
      <a href="#imagen13">
      <img src={imagenes.pc13}></img>
      </a>
      <a href="#imagen14">
      <img src={imagenes.pc14}></img>
      </a>
      <a href="#imagen15">
      <img src={imagenes.pc15}></img>
      </a>
      <a href="#imagen16">
      <img src={imagenes.pc16}></img>
      </a>
      <a href="#imagen17">
      <img src={imagenes.pc17}></img>
      </a>
      <a href="#imagen18">
      <img src={imagenes.pc18}></img>
      </a>

    </section>
    <article className='light-box'  id="imagen1">
     <a href="#imagen18" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc1}></img>
     <a href="#imagen2" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article>
    <article className='light-box'  id="imagen2">
     <a href="#imagen1" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc2}></img>
     <a href="#imagen3" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article>
    <article className='light-box'  id="imagen3">
     <a href="#imagen2" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc3}></img>
     <a href="#imagen4" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen4">
     <a href='#imagen3' className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc4}></img>
     <a href="#imagen5" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen5">
     <a href="#imagen4" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc5}></img>
     <a href="#imagen6" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen6">
     <a href="#imagen5" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc6}></img>
     <a href="#imagen7" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen7">
     <a href="#imagen6" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc7}></img>
     <a href="#imagen8" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen8">
     <a href="#imagen7" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc8}></img>
     <a href="#imagen9" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen9">
     <a href="#imagen8" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc9}></img>
     <a href="#imagen10" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen10">
     <a href="#imagen9" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc10}></img>
     <a href="#imagen11" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen11">
     <a href="#imagen10" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc11}></img>
     <a href="#imagen12" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen12">
     <a href="#imagen11" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc12}></img>
     <a href="#imagen13" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen13">
     <a href="#imagen12" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc13}></img>
     <a href="#imagen14" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen14">
     <a href="imagen13" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc14}></img>
     <a href="#imagen15" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen15">
     <a href="#imagen14" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc15}></img>
     <a href="#imagen16" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen16">
     <a href="#imagen15" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc16}></img>
     <a href="#imagen17" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen17">
     <a href="#imagen16" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc17}></img>
     <a href="#imagen18" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article> <article className='light-box'  id="imagen18">
     <a href="#imagen17" className='next'><i class="bi bi-arrow-left"></i></a>
     <img src={imagenes.pc18}></img>
     <a href="#imagen1" className='next'><i class="bi bi-arrow-right"></i></a>
     <a href='#galeria' className='close'>X</a>
    </article>
    </div>


  <div class="container">
      <div class="logo-left">
      <img className='imagz' src={imagenes.img0}></img>
      </div>
    <div class="text-center">
    <h1>Enviame un mensaje, <br></br>seguí mis redes sociales!</h1>
      </div>
    <div class="header-right">
      <h1>Contactos</h1>
      <a href='https://www.instagram.com/modo_pc/'><i class="bi bi-instagram"></i><i>modo_pc</i></a>
      <a href='https://wa.link/hmhg51'><i class="bi bi-whatsapp"></i><i>+54(9)2612388045</i></a>
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 60px;
  background: #6c757d;
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


.ModoPc {
  color: black; 
  padding: 40px;
}

.modoPc {
  margin-top: 60px;
  font-size: 100px;
  text-align: center;
  color: white; 
  background:  #6c757d;
}


.textoModoPc{
  font-size: 40px;
  padding: 60px;
  text-align: center;
  }



.gale {
  display: flex;
  justify-content: center;
  align-items: center;
}

.galeria {
  width: 90%;
  margin-top: 30px;
  font-size: 100px;
  text-align: center;
  color: white; 
  background:  #6c757d;
  margin-bottom: 100px;
}

.galeriaFotos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 5px;
  grid-gap: 20px;
  padding: 40px 0px;
  overflow: hidden;

}


.galeriaFotos img {
  width: 200px;
  height: 200px;
  vertical-aling: top;
  object-fit: cover;
  box-shadow: 1px 0px 6px black;
  transition: transform 0.5s;
}

.galeriaFotos a:hover  img{
 filter: blur (2px);
 transform: rotate(0) scale(1.3);
}

.light-box{
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,.5);
  transition: transform .3s ease-in-out;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);

}


.light-box  img{
  width: 75vh;
  max-height: 70vh;
}

.light-box:target{
  transform:scale(1);
}

.close{
  display: block;
  position: absolute;
  top: 40px;
  right: 40px;
  background: #851919;
  color: #fff;
  text-decoration: none;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
}

.next {
  display: block;
  background: #851919;
  color: white;
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-decoration: none;
  text-align: center;
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
  margin-top: 200px;
  display: flex;
  text-align: center;
  background-color: #6c757d;
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
    color: black;
    margin-top: 20px;
    display: block;
    i{
      padding: 5px;
    }
  }

  

`