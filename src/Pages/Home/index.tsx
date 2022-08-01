import React from 'react';

// Components
import NavBar from '../../Components/NavBar';
import SectionTitle from '../../Components/SectionTitle';
import Categorie from './Components/Categorie';
import Slider from './Components/Slider';
import InfoBar from './Components/InfoBar';
import EventCard from '../../Components/EventCard';
import Loader from '../../Components/Loader';

// Styles
import { Categories, Container, Section, EventResults } from './styles';

import { categories } from '../../Service/ApiData';
import { Api } from '../../Service/api';
import { WeekEvent } from '../../Interfaces';

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [weekEvents, setWeekEvents] = React.useState<WeekEvent[]>([]);

  React.useEffect(() => {
    async function getEventsData() {
      setIsLoading(true);

      try {
        const weekEventsResponse = await Api('WeekEvents/', null);
        setWeekEvents(weekEventsResponse.data);
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getEventsData();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} text="Buscando eventos" />

      <NavBar />

      <Section>
        <SectionTitle>Destaques da semana</SectionTitle>
        <Slider events={weekEvents} />
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
