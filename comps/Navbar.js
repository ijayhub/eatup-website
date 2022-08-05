import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import MobileNav from './mobileNav';

const Navbar = () => {
	
	return (
		<>
			<div className='bg-hero'>
				<div className='text-white container mx-auto hero-nav me-3'>
					<div>
						<h1 className='text-3xl link2'>EatUp</h1>
					</div>
					<nav className='flex '>
						<ul className='flex'>
							<Link href='/'>
								<a>
									<li className='link'>Home</li>
								</a>
							</Link>
							<Link href='about'>
								<a>
									<li className='link'>About</li>
								</a>
							</Link>
							<Link href='contact'>
								<a>
									<li className='link'>
										Contact
									</li>
								</a>
							</Link>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
