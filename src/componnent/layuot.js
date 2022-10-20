import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <header className='container bg-warning p-2'>
                <nav className='d-flex justify-content-between'>
                    <div >
                        <Link to="/">Home</Link>
                        <Link to="/about" >About</Link>
                    </div>
                    <div >
                        <Link to="/gallery/banana" >Banana</Link>
                        <Link to="/gallery/apple">Apple</Link>
                        <Link to="/gallery/orange">orange</Link>
                    </div>

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