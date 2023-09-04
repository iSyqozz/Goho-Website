import React from 'react'
import { ContactForm } from '@components'
import Link from 'next/link'
const page = () => {
  return (
    <div className='grow p-10 mt-10 w-full h-[calc(100vh-160px)] flex
     justify-center items-start gap-10 max-md:flex-col max-md:gap-4 max-md:h-[1000px]'>
      <div className=' max-sm:w-[80vw] grow p-6 text-left text-light1 w-[40vw] max-w-md text-xl'>
        <div className='text-primary text-4xl mb-10 font-semibold'>Ready to connect?</div>
        <div>
          We're here to help. <br />
          Whether you have a question,<br />
          feedback, or just want to say hello, <br />
          we're excited to hear from you. <br />
          Fill out the form below, <br />
          and we'll be in touch soon! <br /> <br /> <br />

          Our Privacy Policy outlines how <br /> we use
          and safeguard your data. Learn more <Link className=' transition-all  hover:text-darkest hover:bg-primary  text-primary px-2 py-1 rounded-md bg-darkest cursor-pointer' href={'/privacy-policy'}>
            here
          </Link> .

        </div>
      </div>
      <ContactForm />

    </div>
  )
}

export default page