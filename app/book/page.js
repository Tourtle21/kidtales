"use client"
import StoryPage from '../components/StoryPage'
import { useEffect, useState } from 'react'
import { getBulkImages, getImage } from '../api/image'


export default function BookPage() {
  const [imageList, setImageList] = useState([])
  const [image, setImage] = useState(null)
  const [pageNumber, setPageNumber] = useState(0)
  const text = 'This is a test'
  useEffect(() => {
    async function fetchData() {
      const pics = await getBulkImages()
      setImageList(pics.map(pic => pic.url))
    }
    fetchData()
  }, [])
  return (
    <div style={styles.bookContainer}>
      <div style={styles.book}>
        <div style={styles.bookPage}>
          <StoryPage imageUrl={imageList[0]} text={text} />
        </div>
        <div style={styles.bookPage}>
          <StoryPage imageUrl={imageList[1]} text={text}/>
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
    height: "600px",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex"
  },
  bookPage: {
    width: "50%",
    height: "100%",
    border: "1px solid #ccc"
  }
}
