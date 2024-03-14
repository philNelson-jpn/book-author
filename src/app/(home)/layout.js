import './styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
	title: 'Famous Author',
	description: 'All about insert name here',
}

function HomeLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />

				{children}
				<Footer />
			</body>
		</html>
	)
}

export default HomeLayout
