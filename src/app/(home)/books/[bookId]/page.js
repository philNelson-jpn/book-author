import books from '../../../books'
import styles from './bookDetails.module.css'

function bookDetails({ params }) {
	const book = books.find((books) => books.id === params.bookId)

    const descriptionArray = book.description

	return (
		<>
            <div className={styles.divider}/>
            <div className={styles.bookInfoWrapper}>
			<h1>{book.title}</h1>
            <h2>{book.subTitle}</h2>
			{descriptionArray && descriptionArray.map((paragraph, index) => <p className={styles.paragraph} key={index}>{paragraph}</p>)}
            </div>
		</>
	)
}

export default bookDetails
