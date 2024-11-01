
import {Header} from "@/sections/Header";
import { motion } from "framer-motion";

export default function Pricing() {
    
	return(
      <>
			<main className="w-full min-h-screen bg-[radial-gradient(40%_80%_at_center_center,rgba(140,69,255,0.2)_40%,rgba(14,0,36,0.3)_70%,transparent)]">
				<Header />
					<div className="container mx-auto py-16">
						<h1 className="mx-auto mb-6 mt-0 text-5xl flex justify-center">Pricing</h1>
						<p className="mx-auto mb-24 mt-0 text-xl text-gray-400 text-wrap w-[400px] text-center flex justify-center tracking-wider">Unlock your website&apos;s full SEO potential with the plan that&apos;s right for you.</p>
							<div className="flex flex-row justify-center gap-12">
									{/* Prototype Card */}
									<div className="flex flex-col transition-transform duration-300 transform hover:scale-105 items-start h-[425px] w-80 rounded-[35px] p-8 pt-6 bg-white/5 shadow-lg blackdrop-blur-xl border-[1px] border-r-0 border-l-0 border-white/15">
											<h2 className="text-4xl mt-0 mb-8 font-semibold">Prototype</h2>
											<div className="flex flex-row gap-2">
												<h3 className="text-2xl mb-4">$0</h3>
												<p className="mt-2 text-slate-400">per month</p>
											</div>
											<ul className="space-y-2">
												<hr className="border-gray-500 border-opacity-50 w-[260px]" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Limited Keyword Searches</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Basic Site Auditing</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Basic SEO Suggestions</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
											</ul>
											<div className="mt-24 rounded-3xl w-28 text-center bg-white hover:bg-gray-300 ease-linear duration-200">
												<button className="text-center text-black h-[40px]" >
													Get Started
												</button>
											</div>
									</div>

									{/* Production Card */}
									<div className="flex flex-col transition-transform duration-300 transform hover:scale-105 items-start h-[425px] w-80 rounded-[35px] p-8 pt-6 bg-white/5 shadow-lg blackdrop-blur-xl border-[1px] border-r-0 border-l-0 border-white/15">
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
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Advanced Keyword Searches</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Expanded Site Auditing</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Basic Backlink Analysis</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">SERP Tracking</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
											</ul>
											<div className="mt-14 rounded-3xl w-32 text-center bg-white hover:bg-gray-300 ease-linear duration-200">
												<button className="text-center text-black font h-[40px]" >
													Start Free Trial
												</button>
											</div>
									</div>

									{/* Enterprise Card */}
									<div className="flex flex-col transition-transform duration-300 transform hover:scale-105 items-start h-[425px] w-80 rounded-[35px] p-8 pt-6 bg-white/5 shadow-lg blackdrop-blur-xl border-[1px] border-r-0 border-l-0 border-white/15">
											<h2 className="text-4xl mt-0 mb-8 font-semibold">Enterprise</h2>
											<p className="mt-2 text-slate-400 mb-4">Custom pricing</p>
											<ul className="space-y-2 ">
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Personalized Solutions</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Full Site Auditing</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Advanced Backlink Analysis</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
												<div className="flex flex-row gap-2">
													<svg fill="#ffffff" className="mb-0 mt-[5px]" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path> </g> </g> </g></svg>
													<li className="text-gray-300 font-extralight">Special SEO Suggestions</li>
												</div>
												<hr className="border-gray-500 border-opacity-50" />
											</ul>
											<div className="mt-14 rounded-3xl w-32 text-center bg-white hover:bg-gray-300 ease-linear duration-200">
												<button className="text-center text-black h-[40px]" >
													Contact Sales
												</button>
											</div>
									</div>
							</div>
					</div>
				</main>
      </>
  	);
}