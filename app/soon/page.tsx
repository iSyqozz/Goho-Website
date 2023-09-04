import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className=' flex-col text-primary h-[calc(100vh-160px)] gap-10 flex items-center justify-center'>
      <div className=' text-7xl max-sm:text-3xl'>Hold Tight!</div>
      <div className=' text-center text-light1 text-2xl'>resource coming  <br />
        your way shortly!</div>
      <Link href={'/'}>
        <div className=' transition-all px-2 py-1 rounded-lg bg-darkest text-2xl cursor-pointer hover:bg-primary hover:text-darkest'>Home</div>
      </Link>

    </div>
  )
}

export default page