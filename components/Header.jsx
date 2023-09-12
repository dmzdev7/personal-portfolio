import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="w-full px-32 py-6 font-medium flex justify-between items-center">
			<Link href={'/'}>
				<Image
					src={'/imgs/svg/logo.svg'}
					width={220}
					height={48}
					alt="Dmzdev"
					priority={true}
				/>
			</Link>
			<NavBar />
		</header>
	);
};

export default Header;
