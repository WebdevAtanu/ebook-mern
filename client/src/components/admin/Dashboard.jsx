import React,{useState,useEffect} from 'react'
import Datatable from './Datatable';
import Addbook from './Addbook';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TiThMenu } from "react-icons/ti";
import axios from 'axios';

function Dashboard() {
    const [option, setOption] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
	const [data,setData]=useState([]);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setOption(e.target.innerText);
        setAnchorEl(null);
    };

	useEffect(()=>{
		try{
			axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/book/allbooks`)
			.then(res=>{
			setData(res.data.books)
		  });
			}
			catch(error){
			  console.log(error);
			}
	  },[])
	return (
		<div>
		<div className='flex justify-end p-2'>
	      	<Button
	      	color="success"
	      	variant="outlined"
	        id="basic-button"
	        aria-controls={open ? 'basic-menu' : undefined}
	        aria-haspopup="true"
	        aria-expanded={open ? 'true' : undefined}
	        onClick={handleClick}
	      	>
	        <TiThMenu className='text-xl' />
	      	</Button>
	      	<Menu
	        id="basic-menu"
	        anchorEl={anchorEl}
	        open={open}
	        onClose={handleClose}
	        MenuListProps={{
	          'aria-labelledby': 'basic-button',
	        }}
	      	>
	        <MenuItem onClick={handleClose}>Data Table</MenuItem>
	        <MenuItem onClick={handleClose}>Add Book</MenuItem>
	      	</Menu>
    	</div>


    	{
    		option=='Add Book'?<Addbook/>:<Datatable data={data}/>
    	}
			
		</div>
	)
}

export default Dashboard
