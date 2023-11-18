"use client"
import StoryPage from '../components/StoryPage'
import { useEffect, useState } from 'react'
import { getBulkImages, getImage, realGetBulkImages } from '../api/image'
import { getStory, realGetStory } from '../api/story'
import { useSearchParams } from 'next/navigation'

export default function BookPage(props) {
  const [imageUrls, setImageUrls] = useState([])
  const [storyList, setStoryList] = useState([])
  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(1)
  const searchParams = useSearchParams()
  const options = {
    names: searchParams.get("names"),
    ages: searchParams.get("ages"),
    lessons: searchParams.get("lessons"),
    style: searchParams.get("style"),
    slade: searchParams.get("slade"),
    genre: searchParams.get("genre")
  }
  useEffect(() => {
    async function fetchData() {
      const story = await realGetStory(options)
      const sentences = story.message.content.slice(1).split("- ")
      const withDetails = sentences.map(s => s + options.style)
      const pics = await realGetBulkImages(withDetails)
      setStoryList(sentences.map(s => s.replace(/\{.*\}/, '')))
      setImageUrls(pics)
    }
    fetchData()
  }, [])
  const preloadImages = () => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image()
      img.src = imageUrl
    })
  }
  useEffect(() => {
    preloadImages();
  }, [imageUrls]);
  console.log(startPage, endPage)
  const changePageNumber = (nextPage) => {
    setStartPage(startPage + nextPage)
    setEndPage(endPage + nextPage)
  }
  return (
    <div style={styles.bookContainer}>
      <div style={styles.book}>
        <div style={styles.bookPage}>
          <StoryPage
            imageUrl={imageUrls[startPage]}
            text={storyList[startPage]}
            changePageNumber={changePageNumber}
            nextPage={-2}
            pageNumber={startPage}
          />
        </div>
        <div style={styles.bookPage}>
          <StoryPage
            imageUrl={imageUrls[endPage]}
            text={storyList[endPage]}
            changePageNumber={changePageNumber}
            nextPage={2}
            pageNumber={endPage}
          />
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
