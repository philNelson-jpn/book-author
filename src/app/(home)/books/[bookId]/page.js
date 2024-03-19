import books from '../../../books'
import styles from './bookDetails.module.css'

function bookDetails({ params }) {
	const book = books.find((books) => books.id === params.bookId)

    const descriptionArray = book.description

	return (
		<>
            
            <div className={styles.bookInfoWrapper}>
				<div className={styles.divider}/>
			<h1 className={styles.bookTitle}>{book.title}</h1>
            <h2 className={styles.bookSubtitle}>{book.subTitle}</h2>
			{book.summary && <p className={styles.bookSummary}>{book.summary}</p>}
			{descriptionArray && descriptionArray.map((paragraph, index) => <p className={styles.paragraph} key={index}>{paragraph}</p>)}
            </div>
		</>
	)
}

export default bookDetails
