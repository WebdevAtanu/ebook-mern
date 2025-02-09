import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Card(props){
	return(
	<div className="p-4">
		<div className="h-full flex flex-col items-center text-center">
			<img alt="team" className="rounded-lg w-full aspect-square object-cover object-center mb-2" src={props.image}/>
			<div className="w-full">
				<h2 className="title-font font-medium text-lg text-gray-900">{props.name}</h2>
				<span className="inline-flex gap-2">
					<a className="text-gray-500 cursor-pointer hover:text-blue-500"><p><FaTwitter/></p></a>
					<a className="text-gray-500 cursor-pointer hover:text-blue-500"><p><FaFacebookF/></p></a>
					<a className="text-gray-500 cursor-pointer hover:text-blue-500"><p><FaInstagram/></p></a>
				</span>
			</div>
		</div>
	</div>
	)
}

function Contact() {
	return (
	<section className="text-gray-600 body-font">
		<div className="container p-5 mx-auto">
			<div className="flex flex-col text-center w-full mb-6">
				<h1 className="text-2xl font-medium title-font mb-3 text-gray-900">OUR TEAM</h1>
				<p className="mx-auto leading-relaxed text-base">Feel free to contact our team.</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4">
				<Card image="team/t1.jpg" name="Barry Allen"/>
				<Card image="team/t2.jpg" name="Sysko Ramon"/>
				<Card image="team/t3.jpg" name="Edward Thawne"/>
				<Card image="team/t4.jpg" name="Harrison Wells"/>
			</div>
		</div>
	</section>
	)
}

export default Contact