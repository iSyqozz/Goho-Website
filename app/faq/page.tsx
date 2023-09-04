import Link from 'next/link'

const page = () => {

  return (
    <div className=' my-20 flex items-center justify-center w-full'>
      <div className=' shadow-lg rounded-lg p-5 bg-dark1 w-[90%] max-w-[1000px] flex flex-col items-start justify-center gap-5'>
        <h1 className='my-4 text-6xl max-sm:text-4xl text-primary'>Frequently Asked Questions</h1>


        <h2 className='text-4xl max-sm:text-2xl text-primary'> What is Goho?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          Goho is a cutting-edge app built on the Solana Blockchain, designed for exclusive social clubs. It blends the worlds of Web2 and Web3, offering revolutionary membership authentication and loyalty rewards through NFT/SBT membership cards.
          Learn more about us in the <Link href={'/about'}>
            <span className=' transition-all cursor-pointer text-primary px-2 py-1 rounded-lg bg-darkest hover:bg-primary hover:text-darkest'>about us</span>
          </Link> page
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>How does the NFT membership work?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          With Goho, clubs can mint NFT Membership Cards in real-time. This digital card is not only a proof of membership but can also be integrated with loyalty rewards such as special discounts and freebies.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>Why start with Spain's cannabis social clubs?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          While Goho's application is wide-ranging, our first venture is into Spain's cannabis social clubs. This decision is strategic, tapping into a growing market and leveraging the network advantages of our partner club, El Noviciado in Madrid.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>What's the business model?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          Goho operates on a SAAS monthly subscription model for clubs. From 2024, we'll also introduce a modest transaction fee on in-app payments.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>What are the future plans for Goho?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          Our vision extends beyond the current market. We foresee Goho being utilized in gyms, spas, premium clubs, DAOs, and more. Moreover, we're planning to set up a Goho Club in Barcelona soon.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>Who's behind Goho?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          Goho is powered by a passionate team, each with their distinct role. From around the world, we're a mix of expertise and enthusiasm.
        </p>

        <h2 className='text-4xl max-sm:text-2xl text-primary'>How can I get involved or support?</h2>

        <p className=' text-lg max-sm:text-sm text-light2'>
          Join our community on Discord, participate in our upcoming
          presales, or simply spread the word! From time to time we
          will giveaway some server invites for your frens.
          For any other inquiry, contact us<Link href={'/contact'}>
            <span className=' transition-all cursor-pointer text-primary px-2 py-1 rounded-lg bg-darkest hover:bg-primary hover:text-darkest'>here</span>
          </Link>
        </p>

      </div>
    </div>
  )
 
}

export default page