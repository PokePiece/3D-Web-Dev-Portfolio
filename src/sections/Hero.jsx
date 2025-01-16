import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { xor } from 'three/tsl'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from './constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import FutureKeyboard from '../components/FutureKeyboard'
import Apple from '../components/Apple'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const Hero = () => {

    /*
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10
        }
    }) */


    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isSmall = useMediaQuery({ maxWidth: 440 })


    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const currentX = gsap.getProperty('#hero_tag', "x");

        useGSAP(() => {
            gsap.to("#hero_tag", {
                x: 100, 
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
            });
        })
        
 

    return (
        <section className="min-h-screen border-2 border-lightRed w-full flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-30 mt-24 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">I <span className="">am</span> PokePiece </p>
                <p className="hero_tag text-gray_gradient relative"><span className='text-purple-600 opacity-0' id="hero_tag">Architect</span> of <span className='text-purple-600'>Technologies</span></p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>


                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        <HeroCamera isMobile={isMobile}>
                            <FutureKeyboard
                                //scale={0.07}
                                //position={[0, -5, 0]}
                                //rotation={[0, 60, 0]}
                                position={sizes.deskPosition}
                                rotation={[.65, 0, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Apple position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's collaborate" isBeam containerClass="sm:w-fit w-full sm: min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero