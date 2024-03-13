import './styles.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
	title: 'Famous Author',
	description: 'All about insert name here',
}

function HomeLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<header>
					<NavBar />
				</header>
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default HomeLayout
