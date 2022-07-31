// Components
import NavBar from '../../Components/NavBar';
import SectionTitle from '../../Components/SectionTitle';
import Categorie from './Components/Categorie';
import Slider from './Components/Slider';

// Styles
import { Categories, Container, Section } from './styles';

import { categories } from '../../Api';

function Home() {
  return (
    <Container>
      <NavBar />

      <Section>
        <SectionTitle>Destaques da semana</SectionTitle>
        <Slider />
      </Section>

      <Section>
        <SectionTitle>Categorias</SectionTitle>

        <Categories>
          {categories.map((categorie, index) => (
            <Categorie key={index} title={categorie.title} cover={categorie.cover} />
          ))}
        </Categories>
      </Section>
    </Container>
  );
}

export default Home;
