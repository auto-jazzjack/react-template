/* src/layouts/Main/SideBar/SideBar.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.less'
import List from '@mui/material/List';

/* Constant Variables */
const items_value = [
  { label: "홈", href: "/home" },
  { label: "게시판", href: "/board" },
  { label: "상품", href: "/product" }
];

export type Item = {
  label: string,
  href: string,
};

/* Main Compoent */
const Sidebar: React.FC = () => {
  /* Props */
 
  /* Renderer */
  return (
    <div className='Sidebar' >
      SideBar
      
    </div>
  );
}


/* Exports */
export default Sidebar;