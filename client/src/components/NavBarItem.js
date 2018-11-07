import React from 'react';

const NavBarItem = (props) => {
  let element;
  const containsAuth = props.link.includes('login') || props.link.includes('logout');

  console.log('NavBarItem props :', props);
  if (props.link && !containsAuth) {
    element = (
      <li>
        <a href={props.link}>{props.title}</a>
      </li>
    );
  } else {
    element = (
      <li>
        <a href={props.link}>{props.title}</a>
      </li>
    );
  }

  return element;
};

export default NavBarItem;
