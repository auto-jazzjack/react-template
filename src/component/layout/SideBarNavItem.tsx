import React from 'react';
import PropTypes from 'prop-types';

/* Router */
import { NavLink } from 'react-router-dom';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const ListItem = styled.li``;

type Props = {
    className :string,
    label: string,
    href: string,
  } ;

/* Main Component */
const SideBarNavItem = ({
    className,
    href,
    label
} :Props) => {

  /* Renderer */
  return (
    <ListItem className={ className }>
      <NavLink to={ href }>
        { label }
      </NavLink>
    </ListItem>
  );
}

/* Exports */
export default SideBarNavItem;