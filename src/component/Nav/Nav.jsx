import { NavLink } from 'react-router-dom';

const navStyle = ({ isActive }) => {
  return {
    color: isActive ? 'var(--primary-color)' : 'var(--inactive-color)',
  };
};

const Nav = () => {
  return (
    <nav className={'nav'}>
      <NavLink style={navStyle} className={'nav_link'} to={'/'}>
        Nouvelle tâche
      </NavLink>
      <NavLink style={navStyle} className={'nav_link'} to={'/list'}>
        Liste des tâches
      </NavLink>
    </nav>
  );
};

export default Nav;
