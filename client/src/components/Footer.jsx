import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {NavLink,useLocation} from 'react-router-dom';

function Footer() {
	const location=useLocation();
	return (
	<>
	{
	location.pathname=='/admin'?null:
<footer className="bg-green-700 mb-16 md:mb-0">
	<div className="container p-5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
		<div className="w-full">
			<h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
			<nav className="list-none">
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">About Us</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Contact Us</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Privacy Policy</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Terms & Conditions</a>
				</li>
			</nav>
		</div>
		<div className="w-full">
			<h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
			<nav className="list-none">
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">FAQs</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Blog</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Careers</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Support</a>
				</li>
			</nav>
		</div>
		<div className="w-full">
			<h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
			<nav className="list-none">
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Sitemap</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Refund Policy</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Shipping Information</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Affiliate Program</a>
				</li>
			</nav>
		</div>
		<div className="w-full">
			<h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
			<nav className="list-none">
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Press & Media</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Investor Relations</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Accessibility</a>
				</li>
				<li>
					<a className="text-gray-200 hover:text-blue-200 cursor-pointer">Community Forum</a>
				</li>
			</nav>
		</div>
	</div>
	<div>
		<div className="container text-white mx-auto py-4 px-5 flex flex-wrap flex-row justify-between items-center">
			<p className="text-center sm:text-left">© 2025 || Bookie</p>
			<span className="inline-flex text-xl gap-3 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
				<a className=""><FaFacebookSquare /></a>
				<a className=""><FaInstagram /></a>
			</span>
		</div>
	</div>
</footer>
	}
	</>
	)
}

export default Footer