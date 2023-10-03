import React from 'react';
import {MenuList} from "../helpers/Menulist";
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>OUR MENU</h1>
      <div className='menuList'>
      {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Menu
