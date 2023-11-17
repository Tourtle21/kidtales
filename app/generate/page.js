import Image from 'next/image'
import Link from 'next/link'

export default function Generate() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <input className="text-slate-400" placeholder='What story do you want?'/>
      <button className="text-black bg-slate-400 rounded p-0.5">Generate</button>
    </main>
  )
}
