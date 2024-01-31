import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

const NAV_LINKS = [
  {
    href: '/frontend-challenge/home',
    label: 'Все котики'
  },
  {
    href: '/frontend-challenge/favorites',
    label: 'Любимые котики'
  }
]

const NavItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={href}
        className={({ isActive }) => (isActive ? styles.link_active : styles.link)}
      >
        {children}
      </NavLink>
    </li>
  )
}

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {NAV_LINKS.map(({ href, label }) => (
            <NavItem key={href} href={href}>
              {label}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  )
}
