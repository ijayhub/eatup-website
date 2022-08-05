
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<>
			{/* <div className='m-16'>
				<Link href='/'>
					<Image src='/img/top.png' alt='Top' width={20} height={20} />
				</Link>
			</div> */}

			<div className="footer">
				<footer className='grid lg:grid-cols-4'>
					<div className='text-white'>
						<h2 className='text-3xl font-bold'>EatUp</h2>
						<p className='px-8'>lorem ipsum dolor sit amet, consectetur adip</p>
						<p className='px-8'>lorem ipsum dolor sit amet, consectetur adip</p>
						<h4 className='font-bold  px-8'>adip</h4>
					</div>
					<div className='text-white'>
						<h2 className='text-3xl font-bold sm:pt-10'>Explore</h2>
						<ul>
							<li>
								<Link href='/'>
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href='about'>
									<a>About</a>
								</Link>
							</li>
							<li>
								<Link href='contact'>
									<a>contact</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='text-white'>
						<h2 className='text-3xl font-bold sm:pt-10'>Visit</h2>
						<p>lorem ipsum dolor sit amet, consectetur adip</p>
						<h1 className='py-1'>OR</h1>
						<p>
							<Image src='/img/globe2.svg' alt='Globe' width={10} height={10} />{' '}
							: <span> www.eatup.com</span>
						</p>
					</div>
					<div className='text-white'>
						<h2 className='text-3xl font-bold sm:pt-10'>Follow</h2>
						<p>
							<Link href='https://www.instagram.com/ij.ijay/'>
								<a target='_blank'>Instagram</a>
							</Link>
						</p>
						<p>
							<Link href='https://twitter.com/ijaydimples'>
								<a target='_blank'>Twitter</a>
							</Link>
						</p>
						
						<p>
							<Link href='https://www.linkedin.com/in/ijeoma-igboagu/'>
								<a target='_blank'>LinkedIn</a>
							</Link>
						</p>
						<p>
							<Link href='https://wa.me/+2348125089145'>
								<a target='_blank'>Whatsapp</a>
							</Link>
						</p>
					</div>
					<div className='font-bold'>
						<p className='text-white sm:pt-10'>
							&copy; 2022 EatUp all right reserved{' '}
							<Link href='https://github.com/ijayhub'>
								<a target='_blank' className='underline'>
									Ijay
								</a>
							</Link>
						</p>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
