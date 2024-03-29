'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import Logo from '../Logo'
import { Menu } from 'react-feather'
import MobileMenu from '../MobileMenu'
import VisuallyHidden from '../VisuallyHidden'

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false)

	return (
		<header>
			<div className={styles.mainHeader}>
				<div className={styles.logoWrapper}>
					<Logo />
				</div>
				<nav className={styles.desktopNav}>
					<Link className={styles.navLink} href='/books'>
						Books
					</Link>
					<Link className={styles.navLink} href='/alphonso-mayo-project'>
						Alphonso Mayo Project
					</Link>
					<Link className={styles.navLink} href='/tutoring'>
						Tutoring
					</Link>
					<Link className={styles.navLink} href='/about'>
						About
					</Link>
				</nav>
				<div className={styles.mobileActions}>
					<button onClick={() => setShowMobileMenu(true)}>
						<Menu />
						<VisuallyHidden>Open menu</VisuallyHidden>
					</button>
				</div>
				<div className={styles.filler} />
			</div>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	)
}

export default Header
