import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  MdOutlineShoppingCart,
  MdOutlineHome,
  MdOutlineFavoriteBorder,
  MdOutlineChat,
} from 'react-icons/md';
import {
    CiShop,
    CiHeart,
  CiUser,
  CiShoppingCart,
} from 'react-icons/ci';

const Nav = () => {
  return (
    <div className="nav fixed -bottom-0 w-[97%] mx-1.5 my-1.5 h-[4rem] rounded-2xl bg-slate-300  md:hidden ">
      <ul className="a-center h-[4rem] flex j-center justify-around items-center">
        <li className='navLi'>
          <CiShop className='text-3xl' />
          <p className='text-xs'>Home</p>
        </li>
        <li className='navLi'>
          <CiHeart className='text-3xl'/>
          <p className='text-xs'>Favorite</p>
        </li>
        <li className='navLi'>
          <CiUser className='text-3xl'/>
          <p className='text-xs'>Chat</p>
        </li>
        <li className='navLi'>
          <CiShoppingCart className='text-3xl' />
          <p className='text-xs'>Cart</p>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
