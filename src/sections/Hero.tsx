"use client";
import {Button} from "@/components/button";
import starsBg from "@/assets/stars.png";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import { Varela_Round } from "next/font/google";


const varela = Varela_Round({
  subsets:["latin"],
  weight: ['400']
})

export const Hero = () => {

  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return(

  <motion.section 
    ref={sectionRef}
    className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
    style={{
      backgroundImage: `url(${starsBg.src})`,
      backgroundPositionY,
    }}
    animate={{
      backgroundPositionX: starsBg.width,
    }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 120,
    }}
  >
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>
    {/*Start Planet */}
    <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] 
    shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"></div>
    {/*End Planet */}
    
    {/*RINGS */}
    <motion.div 
      style={{
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate ={{
        rotate:"1turn",
      }}
      transition={{
        repeat: Infinity,
        duration:60,
        ease: "linear",
      }}
      className="absolute h-[344px] w-[344px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 ">
      {/* Dot Details*/}
      {/* <div className="absoulute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2  -translate-y-1/2"></div>
      <div className="absoulute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2  -translate-y-1/2"></div>
      <div className="absoulute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2  -translate-y-1/2 inline-flex items-center justify-center">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div> */}
    </motion.div>
    {/*2*/}
    <motion.div 
      style={{        
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate ={{
        rotate:"-1turn"
      }}
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      }}
      className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
      </motion.div>
    
    {/*3*/}
    <motion.div 
      style={{        
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate ={{
        rotate:"1turn"
      }}
      transition={{
        repeat: Infinity,
        duration: 90,
        ease: "linear",
      }}    
      className="absolute h-[544px] w-[544px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      </motion.div>
    
    
    <div className="container relative mt-16">
      <div className={varela.className}>
        <h1 className=" text-8xl md:text-[168px] md:leading-nonefont-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
        </div>
      <p className="text-lg text-white/70 mt-5 text-center max-w-xl mx-auto">
        Elevate your site&apos;s visibility tools with AI, where smart 
        technology meets user-friendly SEO
      </p>
      <div className="flex justify-center mt-5">
        <Button>Join Waitlist</Button>
      </div>

    </div>
  </motion.section>

  );
};
