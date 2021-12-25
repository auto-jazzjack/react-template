import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Sub Components */
import SideBarNavItem from './SideBarNavItem';

/* Styled Components */
const List = styled.ul`
  height: 100%;
`;

type Item = {
  label: string,
  href: string,
};

type Props = {
  className :string,
  items: Item[]
} ;


/* Main Compoent */
const SideBarNav = ({
  className,
  items
} :Props) => {
  
  return (
    <List className={ className }>
      {
        items && items.map((opt, idx)=>(
          <SideBarNavItem key={ idx } className='navItem' href={opt.href} label={opt.label}/>
        ))
      }
    </List>
  );
}

/* Exports */
export default SideBarNav;