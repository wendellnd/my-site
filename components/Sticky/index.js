import styles from './styles.module.css';

const Sticky = ({ content }) => {
  return (
    <>
      <style jsx>
        {`
          div {
            border: 0.2rem solid ${content.color};
          }
          h3 {
            font-size: 1.2rem;
            margin-bottom: 0.1rem;
            color: ${content.color};
          }

          p {
            width: 18rem;
            letter-spacing: 0.1rem;
          }
        `}
      </style>
      <div className={styles.sticky}>
        <h3>{content.title}</h3>
        <p>{content.text}</p>
      </div>
    </>
  );
};

export default Sticky;
