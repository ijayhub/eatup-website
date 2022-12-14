import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 5000);
	}, [router]);
	return (
		<>
			<Head>
				<title>EatUp | Error  </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='not-found text-3xl'>
				<h2 className='notFound pl-3'>Sorry page not found</h2>
			</div>
		</>
	);
};

export default NotFound;
