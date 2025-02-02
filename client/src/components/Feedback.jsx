import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

function Card(){
	return(
	<div className="p-4 md:w-1/2 w-full">
		<div className="h-full bg-gray-100 p-8 rounded">
			<FaQuoteLeft />
			<p className="leading-relaxed mb-4">A beautifully written tale of self-discovery and following your dreams. The symbolism and life lessons are profound, yet simple enough to resonate with anyone.</p>
			<a className="inline-flex items-center">
				<img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
				<span className="flex-grow flex flex-col pl-4">
					<span className="title-font font-medium text-gray-900">Holden Caulfield</span>
					<span className="text-gray-500 text-sm">Rajasthan</span>
				</span>
			</a>
		</div>
	</div>
	)
}

function Feedback() {
	return (
	<section className="text-gray-600 body-font">
		<div className="container p-5 mx-auto">
			<h1 className="text-xl font-medium title-font text-gray-900 mb-6 text-center">What readers saying</h1>
			<div className="flex flex-wrap -m-4">
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	</section>
	)
}

export default Feedback