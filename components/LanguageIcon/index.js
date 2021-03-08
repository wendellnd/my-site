import styles from './styles.module.css';

const LanguageIcon = ({ label, color }) => {
  return (
    <>
      <style jsx>
        {`
          a {
            background-color: ${color};
          }
        `}
      </style>
      <div className={styles.container}>
        <a className={[styles.aStyle]}>{label}</a>
      </div>
    </>
  );
};

export default LanguageIcon;
