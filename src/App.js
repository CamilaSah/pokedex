import Banner from './componentes/Banner/Banner';
import Personagem from './componentes/Personagem';
import Footer from './componentes/Footer';
import Pokedex from './services/DadosUsuario';

function App() {
  const personagens = [
    { id: 1, nome: "Zoro", recompensa: "1.000.000" },
    { id: 2, nome: "Nami", recompensa: "1.000.000" },
    { id: 3, nome: "Usopp", recompensa: "1.000.000" },
    { id: 4, nome: "Chopper", recompensa: "1.000.000" },
    { id: 5, nome: "Robin", recompensa: "1.000.000" },
    { id: 6, nome: "Jinbei", recompensa: "1.000.000" },
    { id: 7, nome: "Brook", recompensa: "1.000.000" },
    { id: 8, nome: "Luffy", recompensa: "1.000.000" },
    { id: 9, nome: "Sanji", recompensa: "1.000.000" },
    { id: 10, nome: "Frank", recompensa: "1.000.000" },
  ]

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