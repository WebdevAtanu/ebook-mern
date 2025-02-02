import React from 'react'

function Card(){
	return(
	<div className="p-4">
		<div className="h-full flex flex-col items-center text-center">
			<img alt="team" className="rounded-lg w-full aspect-square object-cover object-center mb-2" src="https://dummyimage.com/200x200"/>
			<div className="w-full">
				<h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
				<h3 className="text-gray-500 mb-2">UI Developer</h3>
				<span className="inline-flex gap-2">
					<a className="text-gray-500"><p>social</p></a>
					<a className="text-gray-500"><p>social</p></a>
					<a className="text-gray-500"><p>social</p></a>
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
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	</section>
	)
}

export default Contact