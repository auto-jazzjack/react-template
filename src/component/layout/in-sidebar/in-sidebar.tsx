import React from 'react';
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import './in-sidebar.less'

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
const Insidebar: React.FC = () => {
  /* Props */

  /* Renderer */
  return (
    
      <Sidebar.Pushable>
        <Sidebar>
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>

      
    </Sidebar.Pushable>
  );
}


/* Exports */
export default Insidebar;