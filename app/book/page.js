import BookPage from '../components/BookPage'

export default function Book() {
  const bookContent = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
  ]
  return (
    <div style={styles.bookContainer}>
      <div style={styles.book}>
        <div style={styles.page}>
          <BookPage content={bookContent} />
        </div>
        <div style={styles.page}>
          <BookPage content={bookContent} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  bookContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  book: {
    width: "100%",
    height: "700px",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex"
  },
  page: {
    width: "50%",
    border: "1px solid #ccc"
  }
}
