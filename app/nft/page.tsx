import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='my-20 flex items-center justify-center w-full'>
      <div className='p-5 w-[90%] max-w-[1000px] flex flex-col items-start justify-center gap-5'>
        <h1 className='my-4 text-6xl max-sm:text-4xl text-primary text-center w-full'>NFT Utility: Beyond Just Ownership</h1>


        <p className='text-lg max-sm:text-sm text-light2 text-center w-full'>
          Each NFT holder has a significant stake in the upcoming transaction-based revenue model we aim to roll out in 2024 & will receive 10% benefits from app revenues, airdrop and early access to any other future Goho drops. <br /> <br />
          In addition, as an nft holder, you'll enjoy exclusive discounts. Plus, if you choose to become an app user, you'll have the opportunity to access the GOHO+ monthly subscription offer for as long as you hold your NFT. <br /> <br />
          Resource files for businesses and our premium 'magic' prompts will be provided free of charge to NFT holders. Whether you're launching a new venture or scaling your existing business, you'll find a wealth of valuable resources available to you. <br /> <br />
          You will also have exculsive VIP access to our first GOHO powered Club: El Noviciado in Madrid!
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-20 '>
          Revenue Sharing Decisions <br />
          <span className='text-2xl max-sm:text-lg'>Your Voice Counts!</span>

        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Holders will have the unique opportunity to voice their preference in our distribution mode.
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10'>
          <span className='text-2xl max-sm:text-lg'>Equal Revenue Share</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Every NFT holder gets an equal share of the revenue, promoting fairness and equality.
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10'>
          <span className='text-2xl max-sm:text-lg'>Tiered Distribution</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          A system where the top 42 holders receive a higher percentage of the revenue, <br />
          incentivizing greater participation, excitation and engagement in the Goho ecosystem.
        </p>

        <p className=' shadow-lg rounded-2xl bg-dark1 p-4 w-full text-2xl max-sm:text-lg text-light1 text-center mt-20'>
          The Goho collection is not related to the application features. <br /> <br />
          The collection is not for club members but for web3 investors  <br /> who want to support
          a web3 Start up project while having recurrent income from the application benefits. <br /> <br />

          The GOHO DAO will only focus on top notch Alpha or business opportunities.<br /> While it won't be our main focus, <br />
          it's definitely a place were you can network and discuss  business topics. <br /> <br />

          10% net benefits will be shared weekly/monthly with holders.
        </p>

        <h1 className='mt-20 text-6xl max-sm:text-4xl text-primary text-center w-full'>
          Presale</h1>


        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10 '>
          Phase - 0<br />
          <span className='text-2xl max-sm:text-lg'>31th AUG - 50 supply : 300$</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Private sale - FCFS until sell out - No tx Limit <br />
          (+ Token pre-sale collector)
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10 '>
          Phase - 0<br />
          <span className='text-2xl max-sm:text-lg'>SEP - 50 supply: 350 $</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Private sale - FCFS until sell out - Tx Tba <br />
          (+ Token pre-sale collector)
        </p>

        <p className='w-full text-sm max-sm:text-sm text-light1 text-center'>
          Discord Public Openning
        </p>


        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10 '>
          Phase - 1<br />
          <span className='text-2xl max-sm:text-lg'>OCT - 50 supply: 420$</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Pre-sale Top DAO only - tx Tba
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10 '>
          Phase - 1<br />
          <span className='text-2xl max-sm:text-lg'>NOV - 50 supply: 420$</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Pre-sale Top DAO only - tx Tba
        </p>

        <p className='w-full text-sm max-sm:text-sm text-light1 text-center'>
          Airdrop of the Goho NFT & Secondary openning
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10 '>
          Phase - 1<br />
          <span className='text-2xl max-sm:text-lg'>DEC - 50 supply: 420$</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Pre-sale Top DAO only - tx Tba
        </p>

        <h2 className=' w-full text-4xl max-sm:text-2xl text-primary text-center mt-10 '>
          Phase - 2<br />
          <span className='text-2xl max-sm:text-lg'>TBA (2024) - 100 supply</span>
        </h2>

        <p className='w-full text-lg max-sm:text-sm text-light2 text-center'>
          Private sales Auctions, Raffles, etc ...
        </p>

        <p className='w-full text-sm max-sm:text-sm text-light1 text-center'>
          +70 locked for team and partner
        </p>

        <Image className=' transition-all hover:scale-[1.02] shadow-2xl rounded-3xl mt-10 mx-auto aspect-auto w-[50vw] max-w-[800px] max-sm:w-[80vw] '
          width={1000}
          height={1000}
          alt='nft info'
          src={'/goho-nft-info.png'}
        ></Image>

      </div>
    </div>
  )
}

export default page