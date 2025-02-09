import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
function Card(props){
	return(
	<div className="p-12 md:w-1/2 flex flex-col items-start">
		<h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{props.title}</h2>
		<p className="leading-relaxed mb-8">{props.blog}</p>
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
		<div className="container px-5 mx-auto">
			<div className="flex flex-wrap -m-12">
				<Card title="The Rich Heritage of Bengali Literature" blog="Bengali literature boasts a deep and diverse heritage, spanning centuries of storytelling, poetry, and thought-provoking works. From the timeless classics of Rabindranath Tagore and Sarat Chandra Chattopadhyay to the contemporary voices of Sunil Gangopadhyay and Shirshendu Mukhopadhyay, Bengali books offer a perfect blend of tradition and modernity. Whether it's the lyrical poetry of Jibanananda Das or the gripping detective stories of Satyajit Ray's Feluda series, Bengali literature continues to captivate readers across generations."/>
				<Card title="A Treasure Trove for Every Reader" blog="Bengali books cater to all kinds of readers—be it fiction, poetry, history, or thrillers. The works of Bibhutibhushan Bandopadhyay transport readers to the rural heartland of Bengal, while modern authors like Samaresh Majumdar explore urban complexities. For those who love mysteries, Byomkesh Bakshi stories by Sharadindu Bandyopadhyay remain ever-popular. Additionally, the rise of translated works has made Bengali literature accessible to a global audience, allowing more readers to explore its depth and beauty."/>
			</div>
		</div>
	</section>
	)
}

export default Blog