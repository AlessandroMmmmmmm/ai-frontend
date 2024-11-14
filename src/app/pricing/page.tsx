
"use client"
import {Header} from "@/sections/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import starsBg from "@/assets/stars.png";
import { Footer } from "@/sections/Footer";

export default function Pricing() {
	
	const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300]);

	let checkIcon = <svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
	
	return(
      <>
			<Header />
			<motion.section className="w-full -mb-14 min-h-screen [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
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
    }}>
			<div className="bg-[radial-gradient(100%_100%_at_center_center,rgba(140,69,255,0.4)_15%,rgba(14,0,36,0.3)_60%,black_70%,transparent)]">
					<div className="container mx-auto py-16">
						<div className="flex items-center justify-center p-6 mb-8">
							<div className="mt-0 p-6 mx-auto mb-4">
								<h1 className="mx-auto mb-6 mt-0 text-6xl flex justify-center">Pricing</h1>
								<p className="mx-auto mb-6 mt-0 text-2xl text-gray-400 text-wrap w-[400px] text-center flex justify-center tracking-tight">Unlock your website&apos;s full SEO potential with the plan that&apos;s right for you.</p>
							</div>
						</div>
						<div className="scale-[1.15]">
						<div className="flex flex-row justify-center gap-12">
							{/* Prototype Card */}
							<motion.div 
								whileHover={{
									boxShadow: '0px 7px 25px rgba(140, 69, 255, 0.6)',
								}}
								className="flex flex-col transition-transform hover:scale-105 duration-300 transform items-start h-[425px] w-80 rounded-[35px] p-8 pt-6 bg-white/10 shadow-lg blackdrop-blur-xl border-[1px] border-r-0 border-l-0 border-white/15"
							>
								<h2 className="text-4xl mt-0 mb-8 font-semibold">Prototype</h2>
									<div className="flex flex-row gap-2">
											<h3 className="text-2xl mb-4">$0</h3>
											<p className="mt-2 text-slate-400">per month</p>
									</div>
									<ul className="space-y-2">
										<hr className="border-gray-500 border-opacity-50 w-[260px]" />
										<div className="flex flex-row gap-2">
											{checkIcon}
											<li className="text-gray-300 font-extralight">Limited Keyword Searches</li>
										</div>
										<hr className="border-gray-500 border-opacity-50" />
										<div className="flex flex-row gap-2">
											{checkIcon}
											<li className="text-gray-300 font-extralight">Basic Site Auditing</li>
										</div>
										<hr className="border-gray-500 border-opacity-50" />
										<div className="flex flex-row gap-2">
										{checkIcon}
											<li className="text-gray-300 font-extralight">Basic SEO Suggestions</li>
										</div>
										<hr className="border-gray-500 border-opacity-50" />
									</ul> 
									<div className="mt-24 rounded-3xl w-28 text-center bg-white hover:bg-gray-300 ease-linear duration-200">
										<button className="text-center text-black h-[40px]" >
											Get Started
										</button>
									</div>
							</motion.div>

									{/* Enhanced Card */}
									<motion.div 									
									whileHover={{
										boxShadow: '0px 7px 25px rgba(140, 69, 255, 0.6)',
									}}
									className="flex flex-col transition-transform duration-300 transform hover:scale-105 items-start h-[425px] w-80 rounded-[35px] p-8 pt-6 bg-white/10 shadow-lg blackdrop-blur-xl border-[1px] border-r-0 border-l-0 border-white/15">
										<div className=" flex flex-row p-0 gap-2">
											<h2 className="text-4xl mt-0 mb-8 font-semibold">Enhanced</h2>
											<div className="rounded-full border-[1px] text-gray-200 h-fit w-16 text-xs text-center">Popular</div>
										</div>
										<div className="flex flex-row gap-2">
												<h3 className="text-2xl mb-4">$40</h3>
												<p className="mt-2 text-slate-400">per month</p>
											</div>
											<ul className="space-y-2 ">
											<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Advanced Keyword Searches</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Expanded Site Auditing</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Basic Backlink Analysis</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">SERP Tracking</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
											</ul>
											<div className="mt-14 rounded-3xl w-32 text-center bg-white hover:bg-gray-300 ease-linear duration-200">
												<button className="text-center text-black font h-[40px]" >
													Start Free Trial
												</button>
											</div>
									</motion.div>

									{/* Enterprise Card */}
									<motion.div 									
									whileHover={{
										boxShadow: '0px 7px 25px rgba(140, 69, 255, 0.6)',
									}}
									className="flex flex-col transition-transform duration-300 transform hover:scale-105 items-start h-[425px] w-80 rounded-[35px] p-8 pt-6 bg-white/10 shadow-lg blackdrop-blur-xl border-[1px] border-r-0 border-l-0 border-white/15">
											<h2 className="text-4xl mt-0 mb-8 font-semibold">Enterprise</h2>
											<p className="mt-2 text-slate-400 mb-4">Custom pricing</p>
											<ul className="space-y-2 ">
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Personalized Solutions</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Full Site Auditing</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Advanced Backlink Analysis</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
												{checkIcon}
													<li className="text-gray-300 font-extralight">Special SEO Suggestions</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
											</ul>
											<div className="mt-14 rounded-3xl w-32 text-center bg-white hover:bg-gray-300 ease-linear duration-200">
												<button className="text-center text-black h-[40px]" >
													Contact Sales
												</button>
											</div>
									</motion.div>
							</div>
							</div>
					</div>
					</div>
				</motion.section>
				<Footer />
      </>
  	);
}