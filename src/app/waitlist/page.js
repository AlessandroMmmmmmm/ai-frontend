import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function Waitlist() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-start ml-12">
        <h1 className="text-6xl mt-12 mb-12 w-4/12 leading-normal font-bold tracking-tighter">
          Made to maximize your website&apos;s potential
        </h1>
        <p className="text-2xl text-gray-300 w-4/12">
					Be among the first to elevate your site's visibility with AI-driven SEO tools. Join our waitlist for early access and exclusive insights.
        </p>
        <div className="mt-12 mb-36">
          <form className="flex flex-row gap-4 w-4/12">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-lg w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              className="px-6 py-3 w-48 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-800 transition duration-250"
            >
              Join Waitlist 
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
