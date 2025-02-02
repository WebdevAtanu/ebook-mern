import React,{useState,useEffect} from 'react'
import {NavLink,useLocation} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import data from '../demo.json';
import Auth from './Auth';
import Cart from './Cart';

function Navigation() {
	const [open, setOpen] = useState(false);
	const [options,setOptions] = useState([]);
	const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [tip, setTip] = useState('recents');
  const location=useLocation();

  useEffect(()=>{
  	let blob=data.map(item=>item.name);
  	setOptions(blob);
  },[])

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

   const handleChange = (event, newValue) => {
    setTip(newValue);
  };

	return (
		<>
		<div className="bg-green-700 text-white flex flex-wrap p-2 flex-col md:flex-row items-center">
			<nav className="md:mx-auto text-sm flex gap-5 flex-wrap items-center text-base justify-center">
				<NavLink to='/' className="">HOME</NavLink>
				<NavLink to='/contact' className="">CONTACT</NavLink>
				<NavLink to='/blog' className="">BLOG</NavLink>
				<NavLink to='/admin' className="">ADMIN</NavLink>
			</nav>
		</div> 
		{
		location.pathname=='/admin'?null:
		<>
		<div className="bg-white z-20 flex gap-5 px-5 py-3 flex-row items-center justify-between sticky top-0 shadow">
			<div className="order-1">
			logoimg
			</div>

			{
				location.pathname=='/'?
				<Autocomplete
				className='w-full md:w-1/3 order-2'
				disablePortal
				options={options}
				value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          console.log(newInputValue)
        }}
				renderInput={(params) => <TextField {...params} label="Books" />}
				/>
				:null
			}
			<div className="order-3 flex gap-2 items-center">
			<div className="gap-5 p-3 text-xl hidden md:flex">
				<Tooltip title="Favorites" arrow>
				<span className='cursor-pointer hover:text-blue-500 transition'><FaHeart /></span>
				</Tooltip>
				<Tooltip title="Coupons" arrow>
				<span className='cursor-pointer hover:text-blue-500 transition'><FaGift /></span>
				</Tooltip>
				<Tooltip title="Cart" arrow>
				<span className='cursor-pointer hover:text-blue-500 transition' onClick={toggleDrawer(true)}><FaShoppingCart /></span>
				</Tooltip>
			</div>
			<span className='cursor-pointer hover:text-blue-500 transition'><Auth/></span>
			</div>
		</div>

		<div className="md:hidden w-full fixed bg-white bottom-0 z-20 border-t">
		 <BottomNavigation value={tip} onChange={handleChange}>
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FaHeart />}
      />
      <BottomNavigationAction
        label="Coupons"
        value="coupons"
        icon={<FaGift />}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<FaShoppingCart />}
        onClick={toggleDrawer(true)}
      />
    </BottomNavigation>	
		</div>

		<Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <div className="w-52">
        	<Cart/>
        </div>
      </Drawer>
		</>
	}
		
		</>
	)
}

export default Navigation