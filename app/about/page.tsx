import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start gap-5 mt-20 mb-16 '>
      
      <div className='font-semibold text-8xl text-primary text-center p-2 ml-[5vw] mt-10 max-sm:text-5xl flex items-center justify-center gap-6'>
        <Image
          src={'/logo-goho-2.png'}
          width={50}
          height={100}
          alt='logo'
        ></Image>
        <h2 className=' mt-4'>Manifesto</h2>
      </div>

      <p className='w-[70vw] text-2xl text-light2 m-2 p-6 text-center shadow-xl bg-dark1 rounded-xl max-sm:text-sm ml-[5vw] '>
        In the pulsating heart of modern society, where tradition melds<br />
        with innovation, Goho rises. We are more than just a brand; we are<br />
        a movement. Rooted in the revolutionary spirit of the Web3 world, <br />
        we elevate the everyday to the exceptional. <br /> <br />
        Every club, every member, every interaction is an invitation to a <br />
        realm of exclusivity. We're here with you, making high-end <br />
        experiences feel close and personal. <br /> <br />
        With the magic of Solana blockchain, <br />
        we transform the common into the magnificent, <br />
        making every member feel seen, cherished, and empowered. <br /><br />
        Goho isn't just about facilitating businesses. It's about crafting <br />
        experiences, blending the grandiose with the everyday. In the world <br />
        of Goho, luxury is for everyone, tech is easy to understand, <br />
        and every user is treated like a VIP. <br /> <br />
        Join us, and step into a world where you're not just another club <br />
        member you're part of the Goho legacy.
      </p>

      <div className='font-semibold text-8xl text-primary text-center p-2 ml-[5vw] mt-10 max-sm:text-5xl flex items-center justify-center gap-6'>
        <Image
          src={'/logo-goho-2.png'}
          width={50}
          height={100}
          alt='logo'
        ></Image>
        <h2 className=' mt-4'>The Vision</h2>
      </div>

      <p className='w-[70vw] text-2xl text-light2 m-2 p-6 text-center shadow-xl bg-dark1 rounded-xl max-sm:text-sm ml-[5vw] '>
        In the evolving landscape of club memberships, <br />
        Goho envisions a world where every experience is premium, <br />
        every member is valued, and every interaction is seamless.
        Driven by the power of the Solana blockchain, our aspiration <br />
        is to be the gold standard for clubs and
        private businesses worldwide. <br /> <br />

        In the next months, we see Goho expanding beyond <br />
        the exclusive alleys of Barcelona or the spirited  <br />
        streets of Madrid, to every corner of the globe, <br />
        championing a harmonious blend of luxury and accessibility <br />
        in many other types of clubs. <br /> <br />
        We're not just aiming for digital transformation; <br />
        we're standing for a cultural shift, a new age where <br />
        clubs aren't just destinations, but distinguished communities <br />
        of comfort, innovation, and class. <br /> <br />

        In the next years, Goho aims to be synonymous with <br />
        unparalleled user experience, where the intricate nuances <br />
        of web3 technology are elegantly simplified for all. <br /> <br />
        We want to be the whispered secret among the elite and <br />
        the celebrated choice of the masses. Our horizon is vast, <br />
        our ambitions lofty, and our journey, truly promising. <br /> <br />
        Join us as we redefine the future of memberships, <br />
        one club at a time.
      </p>

      <div className='font-semibold text-8xl text-primary text-center p-2 ml-[5vw] mt-10 max-sm:text-5xl flex items-center justify-center gap-6'>
        <Image
          src={'/logo-goho-2.png'}
          width={50}
          height={100}
          alt='logo'
        ></Image>
        <h2 className=' mt-4'>Core Values</h2>
      </div>


      <p className='w-[70vw] text-2xl text-light2 m-2 p-6 text-center shadow-xl bg-dark1 rounded-xl  max-sm:text-sm ml-[5vw] '>
        <span className=' font-bold text-[26px] max-sm:text-sm'>Boldness:</span> Goho is brave, challenging the norm. <br />
        We're pioneers in the Web3 world, always ready to take risks for innovation. <br /> <br />

        <span className=' font-bold text-[26px] max-sm:text-sm'>Cooperation & Communtiy:</span> Unity is our strength. Through collaboration with partners, <br />
        members, and the community, we craft exceptional experiences. <br /> <br />

        <span className=' font-bold text-[26px] max-sm:text-sm'>Adaptive Expertise:</span> At Goho, we evolve, adapt, and lead. Our commitment <br />
        to learning and staying updated ensures we offer only the best, <br />
        powered by the latest in Web3. <br /> <br />

        <span className=' font-bold text-[26px] max-sm:text-sm'>Conviviality & Inclusivity:</span> Every Goho experience is welcoming. We respect and value <br />
        everyone, ensuring a space where all feel at home and recognized. <br /> <br />

        <span className=' font-bold text-[26px] max-sm:text-sm'>Transparency & Trust:</span> Honesty drives us. We're open in our actions and dedicated <br />
        to building trust through clear communication and integrity. <br /> <br />

      </p>
      
      <div className='font-semibold text-8xl text-primary text-center p-2 ml-[5vw] mt-10 max-sm:text-5xl flex items-center justify-center gap-6'>
        <Image
          src={'/logo-goho-2.png'}
          width={50}
          height={100}
          alt='logo'
        ></Image>
        <h2 className=' mt-4'>Mission</h2>
      </div>

      <p className='font-bold text-[26px] w-[70vw] text-2xl text-light2 m-2 p-6 text-center shadow-xl bg-dark1 rounded-xl  max-sm:text-sm ml-[5vw] '>
        Empowering club memberships with the innovation of Solana blockchain, <br /> <br />
        Goho bridges the gap between exclusivity and community, ensuring a transparent,<br />
        inclusive, and unparalleled experience for all. <br /> <br />
      </p>
    </div>
  )
}

export default page