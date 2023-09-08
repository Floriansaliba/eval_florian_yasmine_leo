import { NavLink } from 'react-router-dom';

const navStyle = ({ isActive }) => {
  return {
    color: isActive ? 'var(--primary-color)' : 'var(--inactive-color)',
  };
};

const Nav = () => {
  return (
    <nav className='w-full bg-white p-4 text-gray-700 gap-6 flex justify-end items-center'>
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
