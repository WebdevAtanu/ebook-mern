import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { MdFileUpload } from "react-icons/md";

function Addbook() {
	const [flag,setFlag]=useState(false);
	const [image, setImage] = useState(null);
	const [imageName, setImageName] = useState('');
	
	const handleImageChange = (event) => {
		setImageName(event.target.files[0].name);
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors
        },
    } = useForm()
  	const onSubmit = (data) => {
  		setFlag(true);
  		const formData = new FormData();
        formData.append("title", data.title);
        formData.append("genre", data.genre);
        formData.append("author", data.author);
        formData.append("image", data.image[0]);
        try{
        	axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/book/addbook`,formData,{
  				headers: {
  					"Content-Type": "multipart/form-data",
  				}    
            })
  		.then(res=>{
  			console.log(res);
  			toast.success(res.data.message);
  			setFlag(false)
  		});
        }
        catch(error){
        	console.log(error);
        	toast.error('Error occured!')
        	setFlag(false);
        }
  		
  	}

	return (
		<div className='p-5 grid items-center gap-5 grid-cols-1 md:grid-cols-2'>
			<img src="write.jpg" alt=""/>
		<form onSubmit={handleSubmit(onSubmit)} className='border border-gray-300 flex flex-col w-full bg-gray-100 m-auto p-5 gap-6'>
			<div className="flex flex-col">
			<label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
        	<input type="text" id="title" {...register("title", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
			<p className='text-xs text-red-600'>{errors.title && <span>Title is required</span>}</p>
			</div>
			<div className="flex flex-col">
			<label htmlFor="genre" className="leading-7 text-sm text-gray-600">Genre</label>
        	<input type="text" id="genre" {...register("genre", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
			<p className='text-xs text-red-600'>{errors.genre && <span>Genre is required</span>}</p>
			</div>
			<div className="flex flex-col">
			<label htmlFor="author" className="leading-7 text-sm text-gray-600">Author</label>
        	<input type="text" id="author" {...register("author", { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
			<p className='text-xs text-red-600'>{errors.author && <span>Author is required</span>}</p>
			</div>
			<div className="flex flex-col">
			<label htmlFor="image" className="cursor-pointer flex gap-2 items-center px-4 py-2 bg-blue-600 text-white rounded text-sm"><MdFileUpload className='text-xl' /> Upload image</label>
        	<input type="file" accept="image/*" id="image" {...register("image", { required: true })} className="hidden" onChange={handleImageChange}/>
			<p className='text-xs text-red-600'>{errors.image && <span>Image is required</span>}</p>
			{image && (
	        <div className="mt-4">
	          <img src={image} alt="Preview" className="w-1/3 aspect-square object-cover" />
	        </div>
	      	)}
			</div>
			<Button type="submit" variant="contained" color="success">{flag?'wait...':'Add book'}</Button>
		</form>
		</div>
	)
}

export default Addbook