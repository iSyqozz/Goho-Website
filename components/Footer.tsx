import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <>
      <div className=' h-60 w-full bg-darkest text-primary relative flex items-center justify-center gap-10 max-sm:gap-1 '>

        <div className=' mx-2 pt-5 flex flex-col items-start justify-start h-full w-[25vw] gap-4 max-sm:text-sm'>
          <Image src={'/logo-goho-trans.png'}
            alt='logo'
            width={100}
            height={100} className=''></Image>

          <div className=' w-full flex items-start justify-start gap-[8px]'>
            <Link target='_blank' href={'https://discord.gg/QJnuxQYjrK'}>
              <Image src={'/icons/twitter.png'}
                alt='logo'
                width={25}
                height={25} className=' transition-all hover:scale-110 '></Image>
            </Link>
            <Link target='_blank' href={'https://discord.gg/QJnuxQYjrK'}>
              <Image src={'/icons/discord.png'}
                alt='logo'
                width={25}
                height={25} className=' transition-all hover:scale-110 '></Image>
            </Link>
          </div>


          <div className=' text-primary font-bold text-lg max-sm:text-[12px]'>The future Web3 world of club <br /> memberships.</div>
        </div>

        <div className=' mx-2 mt-3 max-w-[350px]  pt-5 flex flex-col items-start justify-start h-full max-sm:text-sm'>
          <h1 className=' mb-3 text-lg text-light2 font-bold'>Categories</h1>
          <div className=' sm:max-w-[140px] max-sm:w-[100px] flex flex-wrap w-full items-start justify-start gap-2 max-sm:text-[12px]'>
            <Link href={'/'} className='   mt-1 text-light1 hover:text-primary transition-all'>Home </Link>
            <Link href={'/about'} className='   mt-1 text-light1 hover:text-primary transition-all'>About </Link>
            <Link href={'/faq'} className='   mt-1 text-light1 hover:text-primary transition-all'>FAQ </Link>
            <Link href={'/#roadmap'} className='   mt-1 text-light1 hover:text-primary transition-all'>Roadmap</Link>
            <Link href={'/showcase'} className='   mt-1 text-light1 hover:text-primary transition-all'>Preview</Link>
            <Link href={'/nft'} className='   mt-1 text-light1 hover:text-primary transition-all'>NFT</Link>
          </div>
        </div>

        <div className='mx-2 mt-3 max-w-[350px]  pt-5 flex flex-col items-start justify-start h-full'>
          <h1 className=' mb-3 text-lg text-light2 font-bold'>Support</h1>
          <div className=' sm:max-w-[180px] flex flex-wrap w-full items-start justify-start gap-2 max-sm:text-[12px]'>
            <Link href={'/privacy-policy'} className='   mt-1 text-light1 hover:text-primary transition-all'>Privacy Policy</Link>
            <Link href={'/tos'} className='   mt-1 text-light1 hover:text-primary transition-all'>Terms of Service </Link>
            <Link href={'/contact'} className='   mt-1 text-light1 hover:text-primary transition-all'>Contact Us</Link>
          </div>
        </div>


      </div>
      <div
        className=' bg-black bg-opacity-50 flex items-center justify-center py-1 w-full text-light2 text-[12px]'
      > @Goho 2023, All rights reserved.</div>

    </>



  )
}

export default Footer