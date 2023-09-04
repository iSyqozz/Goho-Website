'use client'

import { Component } from 'react';
import Image from 'next/image';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class DemoCarousel extends Component {
    slides = [
        {
            content: 'Unified solution integrating credit, membership and loyalty',
            image: '/slider-icons/icon1.png'
        },
        {
            content: 'Blockchain authentication: Efficient, secure, and private',
            image: '/slider-icons/icon2.png'
        },
        {
            content: 'Tailored digial payment system with in-app purchasing and crypto intergration',
            image: '/slider-icons/icon3.png'
        },
        {
            content: 'East & fast membership management all on blockchain',
            image: '/slider-icons/icon4.png'
        },
        {
            content: 'Integrated club locator and direct membership requests',
            image: '/slider-icons/icon5.png'
        },
        {
            content: 'Social connectivity: Blockchain-based messaging and member/clubs profiles',
            image: '/slider-icons/icon6.png'
        },
        {
            content: 'Loyalty and rewards: Earn and redeem points automatically',
            image: '/slider-icons/icon7.png'
        },
    ]

    render() {
        return (
            <Carousel className=' w-full'
                axis='horizontal'
                autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
                interval={7000}
                transitionTime={200}
                showStatus={false}

                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="arrow-custom-prev"
                        >
                            <span className=" rounded-tr-full rounded-br-full transition-all  hover:bg-primary hover:text-light2 bg-opacity-50 text-6xl absolute z-10 top-[50%] left-[0px] py-4 px-4 text-primary">&lt;</span>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            title={label}
                            className="arrow-custom-next"
                        >
                            <span className=" rounded-tl-full rounded-bl-full transition-all  hover:bg-primary hover:text-light2 bg-opacity-50 text-6xl absolute z-10 top-[50%] right-[0px] py-4 px-4 text-primary">&gt;</span>
                        </button>
                    )
                }
            >
                {
                    this.slides.map(({ content, image }, _) => {
                        return (
                            <div key={image} className='flex flex-col gap-8 items-center justify-center w-full py-6'>
                                <div className=" max-w-[80%] text-light1 text-4xl max-sm:text-2xl">{content}</div>
                                <Image className='!w-[75px] !h-[75px] mb-6'
                                    width={75}
                                    height={75}
                                    alt={image}
                                    src={image}
                                ></Image>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
};


const CarouselSlider = () => {
    return (
        <DemoCarousel></DemoCarousel>
    );
};

export default CarouselSlider;