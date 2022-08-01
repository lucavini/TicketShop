import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Message } from './style';

type Props = {
  isLoading: boolean;
  text: string;
};

function Loader({ isLoading, text }: Props) {
  return (
    <Backdrop
      open={isLoading}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Message>
        <CircularProgress size={60} />
        <span className='message'>{text}</span>
      </Message>
    </Backdrop>
  );
}

export default Loader;
