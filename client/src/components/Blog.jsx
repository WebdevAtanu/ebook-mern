import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
function Card(){
	return(
	<div className="p-12 md:w-1/2 flex flex-col items-start">
		<h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Blog title</h2>
		<p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
		<div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
			<a className="text-green-600 inline-flex items-center">Learn More &nbsp; <FaArrowRight />
			</a>
			<span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
				<FaRegEye /> &nbsp; 1.2K
			</span>
			<span className="text-gray-400 inline-flex items-center leading-none text-sm">
				<LuMessageCircle /> &nbsp; 6
			</span>
		</div>
	</div>
	)
}

function Blog() {
	return (
	<section className="text-gray-600 body-font overflow-hidden">
		<div className="container px-5 py-24 mx-auto">
			<div className="flex flex-wrap -m-12">
				<Card/>
				<Card/>
			</div>
		</div>
	</section>
	)
}

export default Blog