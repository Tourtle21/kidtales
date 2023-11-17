'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {useEffect} from 'react'

export default function RootLayout({ children }) {
  useEffect(() =>{
    console.log("HI")
  }, [])
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
