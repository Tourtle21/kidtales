'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [ages, setAges] = useState("")
  const [lessons, setLessons] = useState("")
  const [style, setStyle] = useState("")
  const [names, setNames] = useState("")
  const [genre, setGenre] = useState("")
  const [slade, setSlade] = useState("")
  return (
    <main className="">
      <div className="hero-image flex justify-center bg-black">
        <Image
            src="/images/hero.png"
            alt="Next.js Logo"
            height="500"
            width="1100"
            priority
          />
          <h1 className="inner-text text-white font-bold" >Write A Story</h1>
          <p className="small-inner-text text-white">Tailor-Made Adventures for Little Readers, by You.</p>
          <button className="inner-button">Get Started</button>
        </div>

        <div className="content-container">
          <h1 className="text-2xl font-bold">Some of Our Favorites!</h1>
        </div>
        <div className="content-container flex justify-around">
          <div className="book-card blue">
            <h1 className="text-2xl font-bold">Slado Muck</h1>
            <p className="text-xs">In the whimsical world of Sladomuck, a curious creature named Sladomuck wiggled through the enchanted forest, its colorful, gooey body leaving a trail of laughter in its wake. Sladomuck was known for its mischievous yet kind-hearted nature, and every encounter with this playful being turned into an unexpected adventure. One day, as Sladomuck discovered a hidden glade filled with sparkling fireflies, it stumbled upon a magical puddle that granted wishes. With a gleeful squish, Sladomuck made a wish for endless joy and endless friends. Little did Sladomuck know, its wish came true, and from that day on, the enchanting forest echoed with the laughter and camaraderie of newfound friends, all thanks to the delightful and gooey wonder that was Sladomuck....</p>
          </div>
          <div className="book-card red">
            <h1 className="text-2xl font-bold">Tado Head</h1>
            <p className="text-xs">In the fantastical land of Sladomuck, a quirky duo known for their whimsical adventures consisted of Sladomuck and their loyal friend, Tado Head. Tado Head, as the name suggests, had a head that could transform into all sorts of shapes and sizes, making it the perfect companion for the duo's escapades. Together, Sladomuck and Tado Head journeyed through the magical meadows, solving puzzles and spreading joy. Tado Head's remarkable ability often proved handy, whether it was becoming a bridge to cross a bubbling brook or morphing into a giant umbrella to shield their friends from unexpected rain showers. Their laughter echoed through the enchanted land as they encountered talking trees, mischievous fairies, and playful creatures. With Sladomuck's gooey antics and Tado Head's ever-changing forms, the dynamic duo brought a burst of color and happiness to the whimsical world they called home.</p>
          </div>
          <div className="book-card green">
            <h1 className="text-2xl font-bold">Muck Nugget</h1>
            <p className="text-xs">In the quirky realm of Sladomuck, where joy and magic intertwined, Sladomuck and Tado Head had a boisterously amusing friend named Muck Nugget. Muck Nugget, a lively little blob of playful energy, brought an extra dose of merriment to their whimsical escapades. With its squishy charm and boundless enthusiasm, Muck Nugget was always ready for a game of hide-and-seek among the giant mushrooms or a friendly race through the sparkly meadows. Its gooey exterior could change colors with its mood, creating a vibrant display of emotions that mirrored the excitement of the day's adventures. Muck Nugget's infectious laughter added a delightful melody to their trio, and together, the friends created a kaleidoscope of happiness that enchanted every corner of Sladomuck, leaving a trail of joyous memories in their wake.</p>
          </div>
        </div>

        <div className="content-container red p-4">
          <h1 className="text-2xl font-bold text-white">Let's Get Started</h1>
          <p className="text-s text-white">We want to make creating your personalized book as easy and fun as possible. You don't have to fill out every section of the form if you're in a hurry or not sure about certain details. Our magical team is here to work wonders, and we can craft an awesome book with the information you provide. The additional options are there for those who want to add a bit more flair or tailor the story even more to your liking. So, feel free to sprinkle in the details you'd like, and leave the rest to us – your fantastic story awaits!</p>
          

          <div className="inputs">
            <input placeholder="Children's Age:" value={ages} onChange={(e) => setAges(e.value)} className="generate-input" />
            <input placeholder="Themes/Lesson’s Taught:" value={lessons} onChange={(e) => setLessons(e.value)} className="generate-input" />
            <input placeholder="Art Style:" value={style} onChange={(e) => setStyle(e.value)} className="generate-input" />
            <input placeholder="Character Name(s):"value={names} onChange={(e) => setNames(e.value)} className="generate-input" />
            <input placeholder="World Setting (Fairies, Animals, Family, Space etc.."value={genre} onChange={(e) => setGenre(e.value)} className="generate-input" />
            <input placeholder="Do You Want Slade in the Story??      Yes  or  Yes" value={slade} onChange={(e) => setSlade(e.value)} className="generate-input" />
          </div>
          <div className="submitContainer">
            <Link href={{
                pathname: "/book",
                state: {
                    ages, lessons, style, names, genre, slade
                }
              }}>
              <button className="submit">Submit</button>
            </Link>
          </div>
        </div>
    </main>
  )
}
