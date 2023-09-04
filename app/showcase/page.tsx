import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center my-20 gap-8">

      <h1 className=' text-primary max-sm:text-4xl text-6xl text-center'>App Showcase</h1>

      <iframe className=' w-[70vw] max-w-[800px] shadow-2xl rounded-xl'
        width="560"
        height="400"
        src={`https://www.youtube.com/embed/eRdNDrTH1Xs?si=oSVifpTU2KEDIi__`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>


      <div className='max-sm:justify-center flex items-center justify-start'>
        <Link href={'/soon'}>
          <Image className='p-2 max-md:w-[160px] cursor-pointer hover:scale-105 transition-all'
            src={'/app-ind/google.png'}
            width={225}
            height={225}
            alt='Goho app'
          ></Image>
        </Link>
        <Link href={'/soon'}>
          <Image className='p-2 max-md:w-[160px] cursor-pointer hover:scale-105 transition-all'
            src={'/app-ind/apple.png'}
            width={225}
            height={225}
            alt='Goho app'
          ></Image>
        </Link>
      </div>

      <div className='w-[70vw] max-w-[800px] flex items-start justify-center flex-col my-4 gap-4'>


        <div className=' mt-16 flex items-center gap-2'>
          <Image className=' mb-4'
            src={'/icons/admin.png'}
            width={48}
            height={48}
            alt={'admin'}
          ></Image>
          <h2 className=' text-primary text-5xl max-sm:text-3xl' >Admin Interface</h2>
        </div>

        <p className=' text-light2 text-left text-2xl max-sm:text-sm'>
          Tailored for club management. Create and manage <br /> Membership,
          offer loyalty program, <br /> <br /> offer payment
          solution to customers.
        </p>

        <div className=' mt-16 flex items-center gap-2'>
          <Image className=' mb-2'
            src={'/icons/user.png'}
            width={48}
            height={48}
            alt={'admin'}
          ></Image>
          <h2 className=' text-primary text-5xl max-sm:text-3xl' >User Interface</h2>
        </div>
        <p className=' text-light2 text-left text-2xl max-sm:text-sm'>
          Crafted for club members, Get discounts or free <br />
          drinks/joints airdrop, <br /> <br /> get all the membership
          card in one place, <br />
          save time when you register as <br />
          a new member etc..
        </p>

        <div className=' mt-16 flex items-center gap-2'>
          <Image className=' mb-2'
            src={'/icons/business.png'}
            width={48}
            height={48}
            alt={'admin'}
          ></Image>
          <h2 className=' text-primary text-5xl max-sm:text-3xl' >Business Model</h2>
        </div>
        <p className=' text-light2 text-left text-2xl max-sm:text-sm'>
          SAAS monthly subscription tailored for clubs.<br />
          SAAS monthly subscription (optional for users : Goho+) <br /> <br />
          1.5% transaction fee on in-app payments, starting in 2024.
        </p>
      </div>

      <Image className=' transition-all hover:scale-[1.02] shadow-2xl rounded-3xl mt-10 aspect-auto w-[50vw] max-w-[800px] max-sm:w-[80vw] '
        width={1000}
        height={1000}
        alt='nft info'
        src={'/business-info.png'}
      ></Image>

      <Link target='_blank' href={'https://www.beautiful.ai/player/-NcTZ5JE5VFEs6TuAR16 '}>
        <div className=' bg-primary text-darkest border-primary text-2xl transition-all border-2 border-solid px-2 py-1 rounded-md cursor-pointer hover:bg-darkest hover:text-primary hover:border-primary hover:scale-105'>
          Pitch Deck V0.1</div>
      </Link>

    </div>

  )
}

export default page