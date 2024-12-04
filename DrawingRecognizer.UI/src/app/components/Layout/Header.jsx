import styles from './Header.module.css';  // Importing styles

const Header = ({ title, subtitle }) => (
  <header className={styles.header}>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </header>
);

export default Header;
