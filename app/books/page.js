import Book from '../components/Book'

export default function BooksPage() {
  const books = [
    {
      title: 'The Portal',
      id: 1,
    },
    {
      title: 'City of Glass',
      id: 2,
    },
    {
      title: 'The Demon',
      id: 3,
    },
    {
      title: 'The Dragon',
      id: 4,
    },
    {
      title: 'The Mystery',
      id: 5,
    },
    {
      title: 'Lost in Time',
      id: 6,
    },
    {
      title: 'Echoes of Silence',
      id: 7,
    },
    {
      title: 'Whispers in the Dark',
      id: 8,
    }
  ]
  return (
    <div style={styles.booksContainer}>
      {books.map((book) => (
        <Book key={book.id} title={book.title} id={book.id} />
      ))}
    </div>
  )
}

const styles = {
  booksContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  }
}
