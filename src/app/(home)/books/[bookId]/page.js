import books from '/Users/user/book-author-site/src/app/books.json'

function bookDetails({ params }) {
	const book = books.find((books) => books.id === params.bookId)

	return (
		<>
			<h1>{book.title}</h1>
			<p>{book.description}</p>
		</>
	)
}

export default bookDetails
