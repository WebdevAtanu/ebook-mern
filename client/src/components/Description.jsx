import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { LuIndianRupee } from "react-icons/lu";


function Description() {
	const {id}=useParams();
	const [data,setData]=useState({});
	const fetchdata=async()=>{
		try{
		let response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/book/getbook/${id}`);
		setData(response.data.book[0]);	
		}
		catch(error){
          console.log(error);
        }
	}
	useEffect(()=>{
		fetchdata();
	},[])
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 p-6 gap-6'>
			<div className="flex justify-center items-center">
				<img src={data?.image} alt="image" className='w-1/2'/>
			</div>
			<div className="flex flex-col gap-4">
				<p className='text-2xl'>{data?.title}</p>
				<p>author- {data?.author}</p>
				<p>{data?.description}</p>
				<p>genre- {data?.genre}</p>
				<p>tags- {data?.tags?.map((item,i)=><span key={i} className='bg-green-500 text-white mx-1 px-1 rounded'>{item} </span>)}</p>
				<div className="">
           	 		<Button size="small" variant="contained" color="success" className='w-full'><LuIndianRupee /> {data.price}</Button>
				</div>
			</div>
		</div>
	)
}

export default Description