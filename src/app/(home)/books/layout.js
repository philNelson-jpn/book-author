import BookShelf from '@/app/components/BookShelf'

export const metadata = {
	title: 'His Books',
	description: 'All about insert name here books',
}

function BookLayout({ children }) {
	return (
		<>
			<BookShelf />
			{children}
		</>
	)
}

export default BookLayout
