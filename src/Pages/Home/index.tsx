// Components
import NavBar from '../../Components/NavBar';
import SectionTitle from '../../Components/SectionTitle';
import Slider from './Components/Slider';

// Styles
import { Container, Section } from './styles';

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
      </Section>
    </Container>
  );
}

export default Home;
