import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { IoMdLogIn } from "react-icons/io";

function Auth() {
	return (
	<header>
		<SignedOut>
		<SignInButton>
	    <button className="bg-black flex gap-1 items-center text-sm text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition">
	      <IoMdLogIn />Login
	    </button>
	  	</SignInButton>
		</SignedOut>
		<SignedIn>
		<UserButton />
		</SignedIn>
	</header>
	)
}

export default Auth