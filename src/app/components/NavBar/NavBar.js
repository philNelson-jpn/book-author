import Link from 'next/link'
import style from './NavBar.module.css'

export default function NavBar() {
	return (
		<nav className={style.navbar}>
			<ol className={style.navlist}>
				<li className={style.navlistItem}>
					<Link href='/'>Home</Link>
				</li>
				<li className={style.navlistItem}>
					<Link href='/books'>Books</Link>
				</li>
			</ol>
		</nav>
	)
}
