import Link from 'next/link'

const page = () => {
  return (
    <div className=' from-dark2 to-darkest w-full my-20 flex flex-col items-center justify-center gap-8'>

      <div className='flex flex-col items-start justify-center gap-5 max-w-[1440px] w-[91%]'>
        <h2 className=' w-full text-left p-4 text-6xl max-sm:text-4xl font-semibold text-primary'>Frequently Asked Questions</h2>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          What is Goho?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          Goho is a cutting-edge app built on the Solana Blockchain, <br />
          designed for exclusive social clubs. It blends the worlds of Web2 <br />
          and Web3, offering revolutionary membership authentication and <br />
          loyalty rewards through NFT/SBT membership cards. <br />
          Learn more about us in the <Link href={'/contact'}>
            <span className=' transition-all cursor-pointer text-primary px-2 py-1 rounded-lg bg-dark1 hover:bg-primary hover:text-darkest'>about us</span>
          </Link> page
        </p>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          How does the NFT membership work?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          With Goho, clubs can mint NFT Membership Cards in real-time. <br />
          This digital card is not only a proof of membership <br />
          but can also be integrated with loyalty rewards <br />
          such as special discounts and freebies.
        </p>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          Why start with Spain's cannabis social clubs?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          While Goho's application is wide-ranging, <br />
          our first venture is into Spain's cannabis social clubs. <br />
          This decision is strategic, tapping into a growing <br />
          market and leveraging the network advantages of our partner club, <br />
          El Noviciado in Madrid.
        </p>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          What's the business model?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          Goho operates on a SAAS monthly subscription model for clubs. <br />
          From 2024, we'll also introduce a modest transaction <br />
          fee on in-app payments.
        </p>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          What are the future plans for Goho?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          Our vision extends beyond the current market. <br />
          We foresee Goho being utilized in gyms, spas, <br />
          premium clubs, DAOs, and more. <br /> <br />
          Moreover, we're planning to set up a Goho Club in Barcelona soon.
        </p>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          Who's behind Goho?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          Goho is powered by a passionate team, each with their <br />
          distinct role. From around the world, we're a mix <br />
          of expertise and enthusiasm.
        </p>

        <h3 className=' w-full text-left p-4 text-2xl text-primary font-semibold'>
          How can I get involved or support?</h3>
        <p className=' max-sm:text-sm w-full text-left pl-4 text-lg text-light2'>
          Join our community on Discord, participate in our upcoming <br />
          presales, or simply spread the word! From time to time we <br />
          will giveaway some server invites for your frens. <br />
          For any other inquiry, contact us <Link href={'/contact'}>
            <span className=' transition-all cursor-pointer text-primary px-2 py-1 rounded-lg bg-dark1 hover:bg-primary hover:text-darkest'>here</span>
          </Link>

        </p>

      </div>



    </div>
  )
}

export default page