import * as styles from '../css/404.module.css';

import Header from '../components/Header';

const Custom404 = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>404 | Page Not Found :(</div>
    </>
  );
};

export default Custom404;
