import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = ()=>{
  const links = [
    {
      text: 'Home',
      path: '/',
      id: 0,
    },
    {
      text: 'Greeting',
      path: '/greeting',
      id: 1,
    }
  ];
  return (
    <header className="flex justify-between my-4 mx-12">
      <a href="/" className="text-2xl font-bold text-sky-500">Greetings</a>

      <nav>
        <ul className="flex gap-4">
          {
          links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="bg-sky-500 p-2 rounded text-slate-50">{link.text}</NavLink>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  )
}

export default Header