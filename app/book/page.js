"use client"
import StoryPage from '../components/StoryPage'
import { useEffect, useState } from 'react'
import { getBulkImages, getImage } from '../api/image'
import { useSearchParams } from 'next/navigation'

export default function BookPage(props) {
  const [imageList, setImageList] = useState([])
  const [storyList, setStoryList] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const text = 'This is a test'
  const searchParams = useSearchParams()
  console.log(searchParams.get("names"))
  useEffect(() => {
    async function fetchData() {
      const pics = await getBulkImages()
      //const story = await getStory()
      setStoryList(["hi", "bye"])
      setImageList(pics.map(pic => pic.url))
    }
    fetchData()
  }, [])
  const startPage = pageNumber % 2
  const endPage = startPage + 1
  const changePageNumber = (nextPage) => {
    setPageNumber(nextPage);
  }
  return (
    <div style={styles.bookContainer}>
      <div style={styles.book}>
        <div style={styles.bookPage}>
          <StoryPage imageUrl={imageList[startPage]} text={storyList[startPage]} changePageNumber={changePageNumber} nextPage={pageNumber - 1}/>
        </div>
        <div style={styles.bookPage}>
          <StoryPage imageUrl={imageList[endPage]} text={storyList[endPage]} changePageNumber={changePageNumber} nextPage={pageNumber + 1}/>
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
