/* src/layouts/Main/SideBar/SideBar.js */
/* React */
import { List } from '@mui/material';
import React from 'react';
import './sidebar.less'

/* Constant Variables */
/*const items_value = [
  { label: "홈", href: "/home" },
  { label: "게시판", href: "/board" },
  { label: "상품", href: "/product" }
];*/

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
      
      <List>
        <a href='./Board-List'>board</a>

      </List>
      
    </div>
  );
}


/* Exports */
export default Sidebar;