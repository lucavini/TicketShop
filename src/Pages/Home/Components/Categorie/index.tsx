// Styles
import { Content, Frame, Title } from './styles';

type Props = {
  title: string;
  cover: string;
};

function Categorie({ cover, title }: Props) {
  return (
    <Content>
      <Frame>
        <img src={cover} alt='frame' />
      </Frame>

      <Title>{title}</Title>
    </Content>
  );
}

export default Categorie;
