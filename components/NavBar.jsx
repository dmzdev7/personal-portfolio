import React from 'react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

//icons
import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	// HiEnvelope,
} from 'react-icons/hi2';

//navData
export const navData = [
	{ name: 'Home', path: '/', icon: <HiHome /> },
	{ name: 'About', path: '/about', icon: <HiUser /> },
	{ name: 'Services', path: '/services', icon: <HiRectangleGroup /> },
	{ name: 'Projects', path: '/projects', icon: <HiViewColumns /> },
	// { name: 'Contact', path: '/contact', icon: <HiEnvelope /> },
];

const NavBar = () => {
	const router = useRouter();
	const pathName = router.pathname;

	return (
		<nav className="flex items-center xl:justify-center gap-x-4">
			{navData.map((link, index) => {
				return (
					<Link
						key={index}
						href={link.path}
						className={`${
							link.path === pathName && 'text-tertiary'
						} hover:text-tertiary`}
					>
						<div className="flex items-center justify-center gap-x-1">
							{link.icon} {link.name}
						</div>
					</Link>
				);
			})}
		</nav>
	);
};

export default NavBar;
