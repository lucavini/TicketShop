import { Title } from './styles';

type Props = {
  children: string;
};

function SectionTitle({ children }: Props) {
  return <Title>{children}</Title>;
}

export default SectionTitle;
