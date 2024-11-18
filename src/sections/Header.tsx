"use client"
import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import {Button} from "@/components/button";
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';


export const Header = () => {

  return (   

  <motion.header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10"
    
  >
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className ="flex md:backdrop-blur justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
        <div>
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 ">
          <a href="/" className="">
            <LogoIcon className="h-8 w-8"/>
          </a>
          </div>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 text-sm">
            <a href="/" className="text-white/70 hover:text-white transition">
              Features
            </a>
            <a href="" className="text-white/70 hover:text-white transition">
              Developers
            </a>
            <a href="/" className="text-white/70 hover:text-white transition">
              Pricing
            </a>
            <a href="/" className="text-white/70 hover:text-white transition">
              Changelog
            </a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <Button>Join Waitlist</Button>
          <MenuIcon className="md:hidden"/>
        </div>
      </div>
    </div>
  </motion.header>
  );
};
