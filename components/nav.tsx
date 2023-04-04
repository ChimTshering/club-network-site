import Link from 'next/link'
import React from 'react'
import styles from '@/styles/NavBar.module.css'

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user_container}>
        <h4 className={styles.text_center}>USER NAMAE</h4>
        <p className={styles.text_center}>EMAIL</p>
        <p className={styles.text_center}>USER ROLE</p>
      </div>
      <nav className={styles.nav_container}>
        <Link href="/" className={styles.link}>
          Feeds
        </Link>
        <Link href="/group" className={styles.link}>
          Group
        </Link>
      </nav>
    </div>
  );
}

