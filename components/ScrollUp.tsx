'use client'
import { useState, useEffect } from "react";


const ScrollUp = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 150) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={(isVisible ? 'block ': 'hidden ')+ ` cursor-pointer flex justify-center items-center text-center
         rounded-full w-8 h-8 bg-dark2 hover:bg-primary
          text-primary hover:text-darkest fixed bottom-6 right-6 z-30 hover:animate-ping
          `}
        onClick={scrollToTop}>
            ▲
        </div>
    )
}

export default ScrollUp