import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <header className='container bg-warning p-2'>
            <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery/banana">Banana</Link>
          <Link to="/gallery/apple">Apple</Link>
          <Link to="/gallery/bike">Bike</Link>
        </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='container  text-center'>All rights reserved to Shimon Dariham</footer>
        </div >
    )
}

export default Layout