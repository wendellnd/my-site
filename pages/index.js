import Header from '../components/Header';
import Speech from '../components/Speech';
import { options } from '../utils/constants';
const Home = () => {
  return (
    <>
      <Header options={options} />

      <Speech />
    </>
  );
};

export default Home;
