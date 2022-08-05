import React from 'react'
import Link from 'next/link';

const MobileNav = () => {
  return (
		<nav>
			<ul>
				<Link href='/'>
					<a>
						<li>Home</li>
					</a>
				</Link>
				<Link href='about'>
					<a>
						<li>About</li>
					</a>
				</Link>
				<Link href='contact'>
					<a>
						<li>Contact</li>
					</a>
				</Link>
			</ul>
		</nav>
	);
}

export default MobileNav
