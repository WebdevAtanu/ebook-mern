import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

function Card(props){
	return(
	<div className="p-4 md:w-1/2 w-full">
		<div className="h-full bg-gray-100 p-6 rounded">
			<FaQuoteLeft />
			<p className="leading-relaxed mb-4">{props.quote}</p>
			<a className="inline-flex items-center">
				<img alt="testimonial" src="user.jpg" className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"/>
				<span className="flex-grow flex flex-col pl-4">
					<span className="title-font font-medium text-gray-900">{props.name}</span>
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
			<h1 className="text-xl font-medium title-font text-gray-900 mb-6 text-center">What readers are saying</h1>
			<div className="flex flex-wrap -m-4">
				<Card name="Ram Das" quote="A fantastic collection of books with helpful team. Highly recommend for book lovers!"/>
				<Card name="Sam Roy" quote="Loved the variety of books. More genre would be great"/>
				<Card name="Jadu Bannerjee" quote="The website is very good, finding books is easy. A perfect place to browse and relax."/>
				<Card name="Madhu Sharma" quote="Affordable books, but the collection could be more diverse. Would love to see more genres!"/>
			</div>
		</div>
	</section>
	)
}

export default Feedback