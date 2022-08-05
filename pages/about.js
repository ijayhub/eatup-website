import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
const about = () => {
	return (
		<>
			<Head>
				<title>EatUp | About </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<section className='container mx-auto p-16'>
				<div className='md:grid grid-cols-2'>
					<div>
						<h2 className='text-3xl text-center font-bold py-8'>ABOUT</h2>
						<p className='leading-8 '>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
							quibusdam ab totam quia consequuntur officia maxime ratione
							tenetur, atque labore voluptatem harum quos voluptatum laudantium.
							Soluta, obcaecati optio. Eaque, amet?
						</p>
						<p className='leading-8'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
							quibusdam ab totam quia consequuntur officia maxime ratione
							tenetur, atque labore voluptatem harum quos voluptatum laudantium.
							Soluta, obcaecati optio. Eaque, amet?
						</p>
						<p className='leading-8'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
							quibusdam ab totam quia consequuntur officia maxime ratione
							tenetur, atque labore voluptatem harum quos voluptatum laudantium.
							Soluta, obcaecati optio. Eaque, amet?
						</p>
						<button
							type='button'
							className='bg-red-600 text-white border-none outline-none rounded-lg p-4 my-2'>
							<Link href='contact'>
								<a>Contact</a>
							</Link>
						</button>
					</div>
					<div>
						<Image
							src='/img/egusi.jpg'
							alt='food'
							width={600}
							height={400}
							className='shadow-lg rounded'
						/>
					</div>
				</div>
			</section>
			<div className='flex items-center justify-end m-10'>
				<Link href='#'>
					<a>
						<Image src='/img/top.png' alt='top' width={50} height={50} />
					</a>
				</Link>
			</div>

			<Footer />
		</>
	);
};

export default about;