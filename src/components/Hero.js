import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => (
    <section
        id="hero"
        className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
        style={{
            backgroundImage: 'url(/images/back.png)', // Path to your PNG image in the public folder
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
        <div className="relative z-10 text-center px-6 sm:px-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hi, I'm Michael Jhon</h1>
            <div className="flex justify-center">
                <p className="text-lg sm:text-2xl mb-16 animate-typing border-r-2 border-white whitespace-nowrap overflow-hidden">
                    Senior Full-Stack Developer | Blockchain Developer
                </p>
            </div>
            <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="cursor-pointer bg-blue-600 font-roboto text-white py-3 px-8 rounded-full text-lg animate-jump hover:bg-blue-500 hover:animate-[jump_0.9s_infinite] transition-colors duration-300 inline-block"
            >
                Let's Connect
            </Link>
        </div>
        <span className='text-center font-roboto font-bold absolute text-[18px] max-md:text-[14px] bottom-7 right-6'>"Losing your credit is like losing your lifeline—Once it's gone, everything starts to crumble!" <br />- Michael Jhon</span>
    </section>
);

export default Hero;
