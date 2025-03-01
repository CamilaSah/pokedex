import Banner from './componentes/Banner/Banner';
import Pokedex from './services/Pokedex';
import { Container} from "@mui/material";
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <h2 className='App_title'>Saiba mais sobre o seu personagem favorito</h2>
      <Container maxWidth="false">
        <Pokedex />
      </Container>
      <Footer />
    </div>
  );
}

export default App;