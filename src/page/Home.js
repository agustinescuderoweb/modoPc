import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagenes from '../assest/imagenes.js'




const Home = () => {
  return (
    <Homme>

  {/*Primera parte*/}

    <div className='imagenhome'>
      
    <img className='imgMaquillaje' src='https://forjandoelfuturo.com.ar/wp-content/uploads/2022/06/Maquillaje.jpg'></img>
    
    </div>

  
  {/*Segunda parte*/}

    <div className="frase">
    <p>
    "El maquillaje es una extensión, que expresa lo que ya eres en el Interior"
    </p>
    </div>

  
  {/*Tercera parte*/}

    <div className='imagenes'>
   <img src={imagenes.img1}></img>
   <img src={imagenes.img2}></img>
   <img src={imagenes.img3}></img>
    </div>


  
    </Homme>

  
  )

}

   

export default Home;

const Homme = styled.div`

.imgMaquillaje {
  width: 100%;
  box-shadow: 0px -5px 10px #ddb7ab;

}


.frase {
    width:  100%;
    padding: 5rem;
    text-align: center;
    background-color: #efd9d1;
}

p {
  font-size: 4rem;
}

.imagenes {
  text-align: center;
  img {
    margin: 2rem;
  }
}

`