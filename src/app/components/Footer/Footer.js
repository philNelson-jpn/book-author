import style from './Footer.module.css'

export default function Footer() {
	return <footer className={style.footer}>Brian Nelson {new Date().getFullYear()}</footer>
}
