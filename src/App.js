import Banner from './componentes/Banner/Banner';
import SortSelect from './componentes/SortSelect';
import Pokedex from './services/Pokedex';
import { Container} from "@mui/material";
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Container maxWidth="md">
        <Pokedex />
      </Container>
      <Footer />
    </div>
  );
}

export default App;