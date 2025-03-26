import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='bg-blue-500 p-4'>
            <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
                 <h1 className='text-white text-4xl font-bold'>Ondřej Beránek</h1>

                 {/*Desktop Menu*/}
                 <ul className='hidden md:flex space-x-6'>
                    <li><Link to="/" className='text-white font-bold'>Domů</Link></li>
                    <li><Link to="/about" className='text-white font-bold'>O mně</Link></li>
                    <li><Link to="/projects" className='text-white font-bold'>Projekty</Link></li>
                    <li><Link to="/contact" className='text-white font-bold'>Kontakt</Link></li>
                 </ul>

                 {/*Mobile menu button*/}
                 <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white'>
                        <i className={`fas fa-bars ${isMobileMenuOpen ? 'open' : ''}`}></i>
                    </button>
                 </div>
            </div>

            {/*Mobile menu*/}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-600 p-4`}>
                <ul className='space-y-4'>
                    <li><Link to='/' className='text-white font-bold' onClick={toggleMenu}>Domů</Link></li>
                    <li><Link to='/about' className='text-white font-bold' onClick={toggleMenu}>O mně</Link></li>
                    <li><Link to='/projects' className='text-white font-bold' onClick={toggleMenu}>Projekty</Link></li>
                    <li><Link to='/contact' className='text-white font-bold' onClick={toggleMenu}>Kontakt</Link></li>
                </ul>    
            </div>
        </nav>
    );
};

export default Navbar;
