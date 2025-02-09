import React,{useState,useEffect} from 'react'
import Datatable from './Datatable';
import Addbook from './Addbook';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TiThMenu } from "react-icons/ti";
import {useNavigate} from 'react-router-dom';

function Dashboard() {
    const [option, setOption] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [key,setKey] = useState("atanu1998");
    const navigate=useNavigate();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setOption(e.target.innerText);
        setAnchorEl(null);
    };

    const signin=()=>{
        let pass=prompt('Enter admin passkey');
        if(pass==key){
            return true
        }
        else{
            navigate('/');
            return;
        }
        
    }

    useEffect(()=>{
    	signin();
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
    		option=='Add Book'?<Addbook/>:<Datatable/>
    	}
			
		</div>
	)
}

export default Dashboard
