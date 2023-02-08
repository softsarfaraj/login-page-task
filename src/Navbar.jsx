import React from 'react';
import { Link} from 'react-router-dom';

export const Navbar = (props) => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to='/Home'>Login</Link>
        </li>
       
      </ul>
    </nav>
  );
};


