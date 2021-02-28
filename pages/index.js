import Header from '../components/Header/Header';
import Speech from '../components/Speech/Speech';
import * as utils from '../utils/constants';
const Home = () => {
  return (
    <>
      <Header options={utils.options} />

      <Speech />
    </>
  );
};

export default Home;
