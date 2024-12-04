import Link from "next/link";
import styles from './Navbar.module.css'; 

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li><Link href="/" className={styles.navItem}>Home</Link></li>
      <li><Link href="/digit-recognizer" className={styles.navItem}>Digits</Link></li>
      <li><Link href="/redraw" className={styles.navItem}>Redraw</Link></li>
      <li><Link href="/gallery" className={styles.navItem}>Gallery</Link></li>
      <li><Link href="/about" className={styles.navItem}>About</Link></li>
      <li><Link href="/contact" className={styles.navItem}>Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
