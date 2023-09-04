import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CarouselSlider, Solana} from '@components';

interface teamDataProps {
  role: string,
  name: string,
  caption: string,
  image: string,
}

const Home = () => {

  const teamData: teamDataProps[] = [
    {
      role: "CMO",
      name: "Rex Blvck",
      caption: "The Hype Commander",
      image: "/team/rex.jpeg",
    },
    {
      role: "COO",
      name: "Torlin",
      caption: "The Smooth Operator",
      image: "/team/torlin.jpeg",
    },
    {
      role: "CTO",
      name: "iSy",
      caption: "The Code Whisperer",
      image: "/team/isy.jpeg",
    },
    {
      role: "Cannabis ops compliance Advisor",
      name: "Dante Briger",
      caption: "The Green Guru",
      image: "/team/Dante-Briger.png",
    },
    {
      role: "PR & Partnerships",
      name: "JustMichael",
      caption: "The Handshake Maestro",
      image: "/team/JustMichael.jpeg",
    },
    {
      role: "Pre-sale Guardian",
      name: "Raj",
      caption: "The Sentinel",
      image: "/team/raj.jpeg",
    },
    {
      role: "Fury Mod",
      name: "Perjeki",
      caption: "The Chatroom Sheriff",
      image: "/team/Perjeki.jpeg",
    },
  ];


  return (
    <>
      {/** Hero Section**/}
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

            <Link href={'/soon'}>
              <div className=' bg-primary text-darkest border-primary text-2xl transition-all border-2 border-solid px-2 py-1 rounded-md cursor-pointer hover:bg-primary hover:text-darkest hover:border-primary hover:-translate-y-[2px]'>
                Sign me up</div>
            </Link>

            <Link href={'/showcase'}>
              <div className=' text-2xl transition-all text-primary border-2 border-primary border-solid px-2 py-1 rounded-md cursor-pointer hover:-translate-y-[2px]'>
                Showcase</div>
            </Link>
          </div>
        </div>

        <Image
          className=' m-4 h-[calc(100vw*0.5)] max-h-[500px] max-sm:hidden rounded-tl-[35%] rounded-br-[35%] shadow-light1 shadow-lg ring-slate-800/10'
          src={'/Noviciado/Noviciado.jpg'}
          width={400}
          height={500}
          alt='none'
        ></Image>
      </div>



      {/** missions statement and some data**/}


      <div className='  flex flex-col justify-center items-center gap-6 bg-gradient-to-t from-dark1 to-darkest w-full py-20'>
        <div className='max-sm:text-4xl text-primary text-6xl text-center px-4'>
          A New Age of Club Membership
        </div>

        <p className=' text-light2 max-w-[75%] text-center text-2xl max-sm:text-sm'>
          Goho, an app designed
          to seamlessly integrate the modern Web2 <br /> and the future
          Web3 world of club memberships.
        </p>

        <p className=' text-light2 max-w-[75%] text-center text-2xl max-sm:text-sm'>
          With a revolutionary NFT/SBT Membership card & verification system,<br />
          we&apos;ve transformed club authentication and loyalty rewards,<br />
          introducing perks like web3-based <span className='text-primary'>airdrops</span>  <br />
          (e.g., complimentary drinks, discounts, and more)
        </p>
      </div>


      <Solana />


      {/** carousel**/}
      <div className=' flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-black to-darkest w-full py-20 h-[600px]'>
        <CarouselSlider />
      </div>


      {/** spain and some data**/}
      <div className=' mx-auto flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-darkest to-dark1 w-full py-20'>

        <div className='max-sm:text-3xl text-primary text-6xl text-center px-4 mb'>
          The World of Cannabis Clubs <br /> in Spain
        </div>

        <div className='max-sm:text-sm text-light1 text-2xl text-center px-4 mb-20 w-[75vw] max-w-[1000px]'>
          El Noviciado is officially the HQ of GOHO. <br />
          More than a partner, this is what we can call the first <br /> "Official Goho Club". <br /> <br />
        </div>


        <div className=' mt-16 max-sm:flex-col-reverse md:p-6 flex gap-16 sm:max-w-[1000px] max-sm:items-center max-sm:justify-center'>
          <div className=' max-sm:text-center max-md:text-2xl text-3xl max-sm:text-sm text-light2  '>
            Over 1100 clubs across Spain with a hotspot in Barcelona housing 400+ of these clubs. These clubs are Legals but have strict laws and considered as association.
          </div>
          <Image className='transition-all aspect-auto rounded-xl shadow-lg max-sm:w-[300px] max-w-[500px] w-[40vw]'
            src={'/Noviciado/Noviciado2.jpg'}
            width={500}
            height={500}
            alt='Noviciado'
          ></Image>
        </div>

        <div className=' mt-16 max-sm:flex-col md:p-6 flex gap-16 sm:max-w-[1000px] max-sm:items-center max-sm:justify-center'>
          <Image className='transition-all aspect-auto rounded-xl shadow-lg max-sm:w-[300px] max-w-[500px] w-[40vw]'
            src={'/Noviciado/Noviciado3.jpg'}
            width={500}
            height={500}
            alt='Noviciado'
          ></Image>
          <div className=' max-sm:text-center max-md:text-2xl text-3xl max-sm:text-sm text-light2  '>
            Clubs lack a unified system. Members may have a card ,token, or a member number, Every visit requires ID verification.
          </div>

        </div>

        <div className=' mt-16 max-sm:flex-col-reverse md:p-6 flex gap-16 sm:max-w-[1000px] max-sm:items-center max-sm:justify-center'>
          <div className=' max-sm:text-center max-md:text-2xl text-3xl max-sm:text-sm text-light2  '>
            People can come, play board games, get drinks and buy or smoke weed there. Daily visitors average 150, spending around €600.
          </div>
          <Image className='transition-all aspect-auto rounded-xl shadow-lg max-sm:w-[300px] max-w-[500px] w-[40vw]'
            src={'/Noviciado/Noviciado4.jpg'}
            width={500}
            height={500}
            alt='Noviciado'
          ></Image>
        </div>
      </div>

      {/**roadmap**/}

      <div id='roadmap' className=' bg-gradient-to-b from-dark1 to-dark2 w-full py-20 relative h-[2500px]'>

        <div className='max-sm:text-3xl text-primary text-6xl text-center px-4 mb-20'>
          Roadmap
        </div>

        <div className='max-sm:text-lg text-primary text-3xl text-center px-4 mb'>
          2023
        </div>

        <div className=' mt-[320px] absolute z-10 w-[2px] bg-primary h-[90%] top-0 left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-0 left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[200px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[400px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[600px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[800px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[1000px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[1200px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[1400px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[1600px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[1800px] left-[50%] translate-x-[-50%]'></div>
        <div className=' mt-[320px] ring-slate-700/5 shadow-2xl w-4 h-4 rounded-full bg-primary absolute z-[11] top-[2000px] left-[50%] translate-x-[-50%]'></div>

        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-0 left-[50%] '></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[200px] right-[50%] '></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[400px] left-[50%] '></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[600px] right-[50%] '></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[800px] left-[50%]'></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[1000px] right-[50%] '></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[1200px] left-[50%]'></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[1400px] right-[50%]'></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[1600px] left-[50%]'></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[1800px] right-[50%]'></div>
        <div className=' mt-[326px] ring-slate-700/5 shadow-2xl w-[35vw] h-[4px] bg-primary absolute z-20 top-[2000px] left-[50%]'></div>

        <div className='max-sm:ml-[12vw] max-sm:max-w-[120px] max-md:ml-[15vw] max-md:max-w-[180px]  mt-[250px] max-w-[180px] absolute z-20 left-[0]  ml-[25vw] top-[calc(0px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Goho NFT phase 0 <br />
          <span className='text-primary'>Aug</span>
        </div>

        <div className=' max-md:ml-[60vw]  mt-[250px] max-w-[350px] absolute z-20 left-0   ml-[60vw] top-[calc(200px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Launching GOHO V0.1 MVP in 3 clubs in Madrid Including El Noviciado <br />
          <span className='text-primary'>Sept</span>
        </div>

        <div className='max-sm:ml-[12vw] max-sm:max-w-[120px] max-md:ml-[15vw] max-md:max-w-[180px]  mt-[250px] max-w-[180px] absolute z-20 left-[0]  ml-[25vw] top-[calc(400px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Start Test Phase Beta (10-20 clubs) <br />
          <span className='text-primary'>Q4</span>
        </div>

        <div className=' max-md:ml-[60vw]  mt-[250px] max-w-[350px] absolute z-20 left-0   ml-[60vw] top-[calc(600px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Solana Breakpoint <br />
          <span className='text-primary'>Oct</span>
        </div>

        <div className='max-sm:ml-[12vw] max-sm:max-w-[120px] max-md:ml-[15vw] max-md:max-w-[180px]  mt-[250px] max-w-[180px] absolute z-20 left-[0]  ml-[25vw] top-[calc(800px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Goho NFT - Phase 1 & 2 <br />
          <span className='text-primary'>Q4</span>
        </div>

        <div className=' max-md:ml-[60vw]  mt-[250px] max-w-[350px] absolute z-20 left-0   ml-[60vw] top-[calc(1000px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Goho V1 release <br />
          <span className='text-primary'>Q1 24</span>
        </div>

        <div className='max-sm:ml-[12vw] max-sm:max-w-[120px] max-md:ml-[15vw] max-md:max-w-[180px]  mt-[250px] max-w-[180px] absolute z-20 left-[0]  ml-[25vw] top-[calc(1200px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Starting Revshare <br />
          <span className='text-primary'>Q4 24</span>
        </div>

        <div className=' max-md:ml-[60vw]  mt-[250px] max-w-[350px] absolute z-20 left-0   ml-[60vw] top-[calc(1400px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Fundraising & Scaling <br />
          <span className='text-primary'>Q1/Q2 24</span>
        </div>

        <div className='max-sm:ml-[12vw] max-sm:max-w-[120px] max-md:ml-[15vw] max-md:max-w-[180px]  mt-[250px] max-w-[180px] absolute z-20 left-[0]  ml-[25vw] top-[calc(1600px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          In App Payment + Rev Share <br />
          <span className='text-primary'>Q1/Q2 24</span>
        </div>

        <div className=' max-md:ml-[60vw]  mt-[250px] max-w-[350px] absolute z-20 left-0   ml-[60vw] top-[calc(1800px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Launching Goho in Germany & Thailand <br />
          <span className='text-primary'>TBA</span>
        </div>

        <div className='max-sm:ml-[12vw] max-sm:max-w-[120px] max-md:ml-[15vw] max-md:max-w-[180px]  mt-[250px] max-w-[180px] absolute z-20 left-[0]  ml-[25vw] top-[calc(2000px+3.5%)] text-left text-light2 text-2xl max-sm:text-sm'>
          Launching new niches <br />
          <span className='text-primary'>TBA</span>
        </div>

        <div className='max-sm:text-lg text-primary text-3xl text-center px-4 mt-[2350px]'>
          2026
        </div>

      </div>






      {/**nft section**/}
      <div className=' flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-dark2 to-dark1 w-full py-20 mt-32'>

        <div className='max-sm:text-3xl text-primary text-6xl text-center px-4'>
          Goho NFT Collection
        </div>
        <div className='max-sm:text-sm text-light1 text-3xl text-center px-4 mb-3'>
          A Unique Token of partnership
        </div>

        <div className='max-md:flex-col flex items-center justify-evenly w-full max-w-[1200px]'>

          <div className='flex flex-col items-center justify-center gap-4 md:w-[31vw] max-sm:mb-10'>
            <Image className='aspect-auto'
              src={'/icons/supply.png'}
              width={80}
              height={80}
              alt='Noviciado'
            ></Image>
            <div className='text-center text-light2 font-bold text-xl h-16'>
              Limited Supply
            </div>
            <div className='text-center text-lg text-light1 max-md:mt-2'>
              420 NFTs, mostly for private sales <br /> & major DAOs.
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-4 md:w-[31vw] max-sm:mb-10'>
            <Image className='aspect-auto'
              src={'/icons/benefits.png'}
              width={80}
              height={80}
              alt='Noviciado'
            ></Image>
            <div className='text-center text-light2 font-bold text-xl h-16 '>
              Goho App Benefit share <br /> to holders
            </div>
            <div className='text-center text-lg text-light1 max-md:mt-2'>
              Merging Web3 earnings with Web2 clientele. <br /> Real Utility.
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-4 md:w-[31vw] max-sm:mb-10'>
            <Image className='aspect-auto'
              src={'/icons/party.png'}
              width={80}
              height={80}
              alt='Noviciado'
            ></Image>
            <div className='text-center text-light2 font-bold text-xl h-16 '>
              IRL Perks & Networking
            </div>
            <div className='text-center text-lg text-light1 max-md:mt-2'>
              Exclusive gatherings, airdrops  <br />& VIP treats.
            </div>
          </div>
        </div>

        <Link className=' transition-all hover:text-darkest hover:bg-primary text-primary
         px-3 py-2 rounded-lg bg-darkest cursor-pointer sm:text-2xl' href={'/nft'}>
          Learn More
        </Link>
      </div>


      {/**irl section**/}
      <div className=' flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-dark1 to-darkest w-full py-20'>

        <div className='max-sm:text-3xl text-primary text-6xl text-center px-4 mb-2'>
          Goho Club
        </div>

        <p className=' text-light2 max-w-[75%] text-center text-2xl max-sm:text-sm'>
          At Goho, we're excited about our big plans, including our upcoming <br />
          Barcelona club, the second addition to our Goho family alongside <br />
          El Noviciado in Madrid.
        </p>

        <p className=' text-light2 max-w-[75%] text-center text-2xl max-sm:text-sm'>
          Our partners are an integral part of our Goho family, contributing to our success. <br />
          They've also played a role in inspiring our app, Goho, which is designed <br />
          to meet the needs of club owners and members. <br />
          We're confident you'll love it!
        </p>

      </div>




      {/**team section**/}
      <div className=' flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-darkest to-dark1 w-full py-20'>

        <div className='max-sm:text-3xl text-primary text-6xl text-center px-4 mb-20'>
          The Team
        </div>

        <div className='flex flex-wrap gap-24 justify-center items-start max-w-[1300px] p-6'>
          {teamData.map(({ role, name, caption, image }, _) => {
            return (

              <div key={name} className='max-sm:w-[120px] w-[300px] flex flex-col justify-center items-center'>
                <Image
                  width={300}
                  height={300}
                  src={image}
                  alt='role'
                  className=' aspect-auto max-sm:w-[120px]  shadow-lg rounded-xl hover:scale-105 hover:-translate-y-2 transition-all'
                ></Image>
                <div className='font-bold text-primary text-center text-2xl max-sm:text-sm mt-4'> {name} </div>
                <div className='font-bold text-light2 text-center text-lg max-sm:text-sm'> {role} </div>
                <div className='font-bold text-light1 text-center text-[16px] max-sm:text-sm mt-4'> {caption} </div>
              </div>
            )
          })}
        </div>
      </div>


    </>
  )
}

export default Home