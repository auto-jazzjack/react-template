import React from 'react';
//import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import './in-sidebar.less'


export type Item = {
  label: string,
  href: string,
};

/* Main Compoent */
const Insidebar: React.FC = () => {
  /* Props */

  /* Renderer */
  return (
    <div></div>
    /*{ <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
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
    </Sidebar> }*/

  );
}


/* Exports */
export default Insidebar;