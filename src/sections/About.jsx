import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('pokepiece33@gmail.com');

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/chopin.jpg" alt="grid1" className="w-full sm:h-[276px]
                    h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I'm PokePiece</p>
                            <p className="grid-subtext">A year of experience under my belt, I have fine-tuned my skills in
                                full stack development, specializing in animations and 3D web design.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/designpic.png" alt="grid2" className="w-full 
                    sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I use a wide range of technologies to build
                                websites and applications. Some of the tools I use include React,
                                Next.js, Tailwind CSS, and GSAP.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 40, lng: -123, text: "I'm here",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />
                        </div>

                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.
                            </p>
                            <p className='grid-subtext'>
                                I'm based in San Francisco, with remote work available.
                            </p>
                            <a href="#contact" className="w-fit">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Process</p>
                            <p className="grid-subtext">I see coding as an architectural process, not just linear writing. 
                                It requires understanding the full scope, planning thoroughly, and building a solid 
                                foundation. I focus on three phases: <span className="font-bold">architecting, principled framework building, and 
                                detailed implementation</span>, all while maintaining a clear, big-picture view for 
                                efficiency and quality.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[766px] h-fit object-cover sm:object-top" />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">pokepiece33@gmail.com</p>
                            </div>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">(925) 278-0833</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About