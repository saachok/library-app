import Link from 'next/link';

import styles from '../styles/Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/profile">
        Profile
      </Link>
    </nav>
  );
};

export default Nav;
