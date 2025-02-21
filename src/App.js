import Banner from './componentes/Banner/Banner';
import Pokedex from './services/Pokedex';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className='Section-personagens'>
        <div className='App-container'>
          <h2 className='App_title'>Saiba mais sobre o seu personagem favorito</h2>
          <div className='App_personagens'>
            <Pokedex />
          </div>
        </div> 
      </div>
      <Footer />
    </div>
  );
}

export default App;