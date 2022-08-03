import React from 'react';

// Components
import EventCard from '../../Components/EventCard';
import Loader from '../../Components/Loader';
import NavBar from '../../Components/NavBar';
import SectionTitle from '../../Components/SectionTitle';
import Categorie from './Components/Categorie';
import InfoBar from './Components/InfoBar';
import Slider from './Components/Slider';

// Styles
import { Categories, Container, EventResults, Section } from './styles';

import { WeekEvent } from '../../Interfaces';
import { Api } from '../../Service/api';
import { categories } from '../../Service/ApiData';

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
      <NavBar />
      {isLoading ? (
        <Loader isLoading={isLoading} text="Buscando eventos" />
      ) : (
        <>

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
              {weekEvents.map((events, index) => (
                <EventCard event={events} key={index} />
              ))}
            </EventResults>
          </Section>
        </>
      )}

    </Container>
  );
}

export default Home;
