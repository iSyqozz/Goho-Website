'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {

  const [sideMenuActive, setSideMenuActive] = useState(false);
  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)
  const [option3, setOption3] = useState(false)
  const [option4, setOption4] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const displaySideOptions = useCallback(() => {
    setTimeout(() => {
      setOption1((prev) => {
        return !prev
      })
    }, 75);

    setTimeout(() => {
      setOption2((prev) => {
        return !prev
      })

    }, 150);

    setTimeout(() => {
      setOption3((prev) => {
        return !prev
      })

    }, 225);

    setTimeout(() => {
      setOption4((prev) => {
        return !prev
      })
    }, 300);

  }, [])

  return (
    <>
      <div className='w-full h-[60px] flex items-center justify-center'>
        <div className='flex items-center justify-between w-[90%] h-full max-w-[1440px]'>
          <Link href={'/'}>
            <Image
              width={48}
              height={48}
              src={'/presale_token.png'}
              alt='logo'
            />
          </Link>
          {
            !sideMenuActive &&
            <div className='max-sm:hidden text-[18px] flex gap-4 items-center justify-center'>
              <Link href={'/'}>
                <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>Home</div>
              </Link>
              <Link href={'/about'}>
                <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>About</div>
              </Link>
              <Link href={'/faq'}>
                <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>FAQ</div>
              </Link>
              <Link href={'/contact'}>
                <div className=' transition-all rounded-md px-2 py-1  hover:bg-primary hover:text-darkest cursor-pointer text-primary'>Contact us</div>
              </Link>
              <Link href={'/products'}>
                <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>Products</div>
              </Link>
            </div>}

          {
            !sideMenuActive &&
            <Image className='max-sm:flex hidden cursor-pointer'
              width={48}
              height={48}
              src={'/menu.png'}
              alt='logo'
              onClick={() => {
                setSideMenuActive(true);
                displaySideOptions()
              }}
            >
            </Image>}


        </div>
      </div>

      {false &&
        <div className=' opac  bg-darkest bg-opacity-50 fixed z-10 top-0 w-full h-[60px] flex items-center justify-center'>
          <div className='flex items-center justify-between w-[90%] h-full max-w-[1440px]'>
            <Link href={'/'}>
              <Image
                width={48}
                height={48}
                src={'/presale_token.png'}
                alt='logo'
              />
            </Link>
            {
              !sideMenuActive &&
              <div className='max-sm:hidden text-[18px] flex gap-4 items-center justify-center'>
                <Link href={'/'}>
                  <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>Home</div>
                </Link>
                <Link href={'/about'}>
                  <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>About</div>
                </Link>
                <Link href={'/faq'}>
                  <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>FAQ</div>
                </Link>
                <Link href={'/contact'}>
                  <div className=' transition-all rounded-md px-2 py-1  hover:bg-primary hover:text-darkest cursor-pointer text-primary'>Contact us</div>
                </Link>
                <Link href={'/products'}>
                  <div className=' transition-all rounded-md px-2 py-1 hover:bg-primary hover:text-darkest  cursor-pointer text-primary'>Products</div>
                </Link>
              </div>}

            {
              !sideMenuActive &&
              <Image className='max-sm:flex hidden cursor-pointer'
                width={48}
                height={48}
                src={'/menu.png'}
                alt='logo'
                onClick={() => {
                  setSideMenuActive(true);
                  displaySideOptions()
                }}
              >
              </Image>}


          </div>
        </div>
      }

      {
        sideMenuActive && (
          <div className=' text-3xl flex-col fixed top-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-70 gap-8'>
            <Image
              width={50}
              height={50}
              src={'/exit.png'}
              alt='exit'
              className=' transition-all absolute top-[10px] right-[20px] bg-transparent w-[50px] h-[50px] cursor-pointer hover:scale-105'
              onClick={() => {
                setSideMenuActive(false)
                displaySideOptions()
              }}
            />

            <Link href={'/'} onClick={() => { setSideMenuActive(false) }}>
              <div className={(option1 ? 'opacity-100 -translate-y-4 ' : 'opacity-0 ') + 'transition-all translate-y-0  hover:scale-110 cursor-pointer text-primary'}>Home</div>
            </Link>
            <Link href={'/about'} onClick={() => { setSideMenuActive(false) }}>
              <div className={(option2 ? 'opacity-100 -translate-y-4 ' : 'opacity-0 ') + 'transition-all translate-y-0  hover:scale-110 cursor-pointer text-primary'}>About</div>
            </Link>
            <Link href={'/faq'} onClick={() => { setSideMenuActive(false) }}>
              <div className={(option2 ? 'opacity-100 -translate-y-4 ' : 'opacity-0 ') + 'transition-all translate-y-0  hover:scale-110 cursor-pointer text-primary'}>FAQ</div>
            </Link>
            <Link href={'/contact'} onClick={() => { setSideMenuActive(false) }}>
              <div className={(option3 ? 'opacity-100 -translate-y-4 ' : 'opacity-0 ') + 'transition-all translate-y-0  hover:scale-110 cursor-pointer text-primary'}>Contact us</div>
            </Link>
            <Link href={'/products'} onClick={() => { setSideMenuActive(false) }}>
              <div className={(option4 ? 'opacity-100 -translate-y-4 ' : 'opacity-0 ') + 'transition-all translate-y-0  hover:scale-110 cursor-pointer text-primary'}>Products</div>
            </Link>
          </div>
        )
      }
    </>
  )
}

export default NavBar