import React from 'react'
import Button from '@mui/material/Button';
import Feedback from './Feedback';
import Products from './Products';
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { PiBooks } from "react-icons/pi";

function Home() {
	return (
	<section className="">
	<div className="container mx-auto flex p-5 md:flex-row flex-col items-center">
		<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
			<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">All you read</h1>
			<p className="mb-8 leading-relaxed">Welcome to Bookie, your one-stop destination for all things books! Whether you’re a fiction enthusiast, a non-fiction explorer, or searching for academic resources, we have something for everyone. Discover a world of stories, knowledge, and inspiration with our diverse collection. Shop your favorites, explore new genres, or find the perfect gift for a fellow book lover-all at the click of a button. Let’s make reading an adventure!</p>
			<div className="flex justify-center">
				<Button variant="contained" color="success">Read now</Button>
			</div>
		</div>
		<div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6">
			<img className="object-cover object-center rounded" alt="hero" src="books.png"/>
		</div>
	</div>

	<div className="px-5 py-2 bg-gray-100">
		<div className="flex flex-wrap text-center">
			<div className="p-4 flex flex-col items-center sm:w-1/4 w-1/2">
				<HiOutlineUsers className='text-3xl text-green-600' />
				<p className="title-font font-medium text-2xl text-gray-900">2.7K</p>
				<p className="leading-relaxed">Users</p>
			</div>
			<div className="p-4 flex flex-col items-center sm:w-1/4 w-1/2">
				<FaRegBell className='text-3xl text-green-600' />
				<h2 className="title-font font-medium text-2xl text-gray-900">1.8K</h2>
				<p className="leading-relaxed">Subscribes</p>
			</div>
			<div className="p-4 flex flex-col items-center sm:w-1/4 w-1/2">
				<BiPurchaseTagAlt className='text-3xl text-green-600' />
				<h2 className="title-font font-medium text-2xl text-gray-900">65</h2>
				<p className="leading-relaxed">Purchases</p>
			</div>
			<div className="p-4 flex flex-col items-center sm:w-1/4 w-1/2">
				<PiBooks className='text-3xl text-green-600' />
				<h2 className="title-font font-medium text-2xl text-gray-900">250</h2>
				<p className="leading-relaxed">Books</p>
			</div>
		</div>
	</div>

	<Products/>
	<Feedback/>
	</section>
	)
}

export default Home