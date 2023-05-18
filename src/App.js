import Home from './page/Home';
import Makeup from './page/Makeup';
import Quiensoy from './page/Quiensoy';
import Contacto from './page/Contacto';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Makeup />
      <Quiensoy />
      <Contacto />
    </div>
  );
}

export default App;
