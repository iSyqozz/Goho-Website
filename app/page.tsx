import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Home = () => {
  return (
    <>
      <div className=' max-md:gap-4 py-16 bg-gradient-to-b from-dark2 to-darkest w-full mt-6 gap-20 flex items-center justify-center'>
        <div className='m-4 flex flex-col gap-4 items-center max-w-[480px]'>
          <Image
            className='w-[480px] min-w-[320px] aspect-[2.26/1]'
            src={'/logo-goho-trans.png'}
            width={640}
            height={282}
            alt='none'
          ></Image>
          <h2 className=' max-sm:text-center text-2xl mission-statement text-left text-light2 font-semibold'>
            The Ultimate Fusion : Credit Card, Membership, Loyality, Socials ...- All in <span className=' text-primary'>One</span> App
          </h2>
          <div className='max-sm:justify-center w-full flex items-center justify-start gap-3'>
            <div className=' bg-primary text-darkest border-primary text-2xl transition-all border-2 border-solid px-2 py-1 rounded-md cursor-pointer hover:bg-primary hover:text-darkest hover:border-primary hover:-translate-y-[2px]'>
              Sign me up</div>
            <Link href={'/showcase'}>
              <div className=' text-2xl transition-all text-primary border-2 border-primary border-solid px-2 py-1 rounded-md cursor-pointer hover:-translate-y-[2px]'>
                Showcase</div>
            </Link>
          </div>
        </div>

        <Image
          className=' m-4 h-[calc(100vw*0.5)] max-h-[500px] max-sm:hidden rounded-tl-[35%] rounded-br-[35%] shadow-light1 shadow-lg ring-slate-800/10'
          src={'/Noviciado.jpg'}
          width={400}
          height={500}
          alt='none'
        ></Image>
      </div>

      <div className='  flex flex-col justify-center items-center gap-6 bg-gradient-to-t from-dark1 to-darkest w-full py-20'>
        <div className='max-sm:text-4xl text-primary text-6xl text-center px-4'>
          A New Age of Club Membership
        </div>

        <p className=' text-light2 max-w-[75%] text-center text-lg'>
          Goho, an app powered by the <span className=' text-primary'>Solana</span> Blockchain<br />designed
          to seamlessly integrate the modern Web2 and the future <br />
          Web3 world of club memberships.
        </p>

        <p className=' text-light2 max-w-[75%] text-center text-lg'>
          With a revolutionary NFT/SBT Membership card & verification system,<br />
          we&apos;ve transformed club authentication and loyalty rewards,<br />
          introducing perks like web3-based <span className='text-primary'>airdrops</span>  <br />
          (e.g., complimentary drinks, discounts, and more)
        </p>
      </div>
    </>
  )
}

export default Home