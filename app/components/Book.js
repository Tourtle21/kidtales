import Link from 'next/link'

export default function Book(props) {
  return (
    <div style={styles.book}>
      <div style={styles.title}>
        <h1>{props.title}</h1>
      </div>
      <div>
        <Link href={"/book"}>
          <img
            src="/images/dragons.png"
            alt="Dragons"
          />
        </Link>
      </div>
    </div>
  )
}

const styles = {
  book: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '25%',
    height: '25%',
  },
  title: {
    height: '10%'
  }
}
