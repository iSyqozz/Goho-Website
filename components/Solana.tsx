'use client'


import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Solana = () => {

  const [isElementVis, setIsElementVis] = useState(false);
  
  // Function to handle intersection
  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsElementVis(true);
        // Unobserve the element after it's visible (if you only want to animate once)
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/** solana**/}
      < div className=' flex flex-col justify-center items-center gap-6 bg-gradient-to-t from-black to-dark1 w-full py-20 h-[300px]' ></div >
      <div className=' flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-black to-black w-full py-20'>
        <div className={(isElementVis?('opacity-100 '):('opacity-0 ')) +'ease-in-out duration-300 animate-on-scroll max-sm:text-sm text-primary text-4xl text-center px-4'}>
          Powered By
        </div>

        <Link id='solana' target='_blank' href={'https://solana.com/'}>
          <Image className={ (isElementVis?('opacity-100 -translate-y-0 scale-100 '):('scale-75 opacity-0 translate-y-32 '))+
          'animate-on-scroll mr-4 transition-all ease-in-out duration-300 hover:scale-105 max-sm:w-72 aspect-auto'}
            width={500}
            height={500}
            src={'/solana.svg'}
            alt='solana'>
          </Image>
        </Link>
      </div>

    </>

  )
}

export default Solana