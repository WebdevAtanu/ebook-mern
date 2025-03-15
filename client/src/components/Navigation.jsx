import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import Auth from "./Auth";
import Cart from "./Cart";
import axios from "axios";

function Navigation() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [tip, setTip] = useState("recents");
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/book/allbooks`)
        .then((res) => {
          setData(res.data.books);
          console.log(res.data.books);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let blob = data.map((item) => item.title);
    setOptions(blob);
  }, [data]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event, newValue) => {
    setTip(newValue);
  };

  return (
    <>
      <div className="bg-green-700 text-white flex p-2 justify-between">
        <div className="md:hidden">
          <img src="logo.png" alt="" className="w-1/4" />
        </div>
        <nav className="md:mx-auto text-sm flex gap-5 items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border px-1 rounded bg-white text-green-900" : null
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border px-1 rounded bg-white text-green-900" : null
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "border px-1 rounded bg-white text-green-900" : null
            }
          >
            BLOG
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "border px-1 rounded bg-white text-green-900" : null
            }
          >
            ADMIN
          </NavLink>
        </nav>
      </div>
      {location.pathname == "/admin" ? null : (
        <>
          <div className="bg-white z-20 flex gap-5 px-5 py-3 flex-row items-center justify-between sticky top-0 shadow">
            <div className="order-1 hidden md:block">
              <img src="logo.png" alt="" className="w-1/4" />
            </div>

            {location.pathname == "/" ? (
              <Autocomplete
                className="w-full md:w-1/3 order-2"
                disablePortal
                options={options}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Books" />
                )}
              />
            ) : null}
            <div className="order-1 md:order-3 flex gap-2 items-center">
              <div className="gap-5 p-3 text-xl hidden md:flex">
                <Tooltip title="Favorites" arrow>
                  <span className="cursor-pointer hover:text-blue-500 transition">
                    <FaHeart />
                  </span>
                </Tooltip>
                <Tooltip title="Coupons" arrow>
                  <span className="cursor-pointer hover:text-blue-500 transition">
                    <FaGift />
                  </span>
                </Tooltip>
                <Tooltip title="Cart" arrow>
                  <span
                    className="cursor-pointer hover:text-blue-500 transition"
                    onClick={toggleDrawer(true)}
                  >
                    <FaShoppingCart />
                  </span>
                </Tooltip>
              </div>
              <div className="cursor-pointer hover:text-blue-500 transition w-full">
                <Auth />
              </div>
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

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <div className="w-52">
              <Cart />
            </div>
          </Drawer>
        </>
      )}
    </>
  );
}

export default Navigation;
