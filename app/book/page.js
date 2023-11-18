"use client"
import StoryPage from '../components/StoryPage'
import { useEffect, useState } from 'react'
import { getBulkImages, getImage, realGetBulkImages, realGetImage } from '../api/image'
import { getStory, realGetStory } from '../api/story'
import { useSearchParams } from 'next/navigation'
import Gif from 'next/image'

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
      const regex = /{[^}]*}/g
      setStoryList(sentences.map(s => s.replace(regex, '')))
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
  const changePageNumber = (nextPage) => {
    setStartPage(startPage + nextPage)
    setEndPage(endPage + nextPage)
  }

  console.log(imageUrls, imageUrls == [])

  return (
    <>
    {(imageUrls.length == 0 || storyList.length == 0) ? 
    
    <div className="flex items-center flex-col">
      <h1 className="text-3xl font-bold">Creating Your Story....</h1>
    <Gif
      src="/images/giphy.gif"
      alt="Next.js Logo"
      height="500"
      width="500"
      priority
    />
    </div>

    : 
    
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
    }

    </>
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
    border: "8px solid #8B0000",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    display: "flex",
    marginTop: "30px",
    marginBottom: "30px"
  },
  bookPage: {
    width: "50%",
    height: "100%",
    border: "2px solid #ccc",
    backgroundColor: '#fcf8f2',
    paddingTop: '20px'
  }
}
