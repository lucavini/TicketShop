// Components
import NavBar from '../../Components/NavBar';
import SectionTitle from '../../Components/SectionTitle';
import Categorie from './Components/Categorie';
import Slider from './Components/Slider';
import InfoBar from './Components/InfoBar';
import EventCard from '../../Components/EventCard';

// Styles
import { Categories, Container, Section, EventResults } from './styles';

import { categories } from '../../Service/ApiData';

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

      <Section>
        <InfoBar />

        <EventResults>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </EventResults>
      </Section>
    </Container>
  );
}

export default Home;
