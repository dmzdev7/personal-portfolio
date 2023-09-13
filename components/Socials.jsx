import React from 'react';

//Links
import Link from 'next/link';

//Icons
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '@/utils/variants';

const Socials = () => {
	return (
		<motion.div
			variants={fadeIn('down', 0.6)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className="flex items-center gap-x-5 text-2xl"
		>
			<Link
				href={'https://github.com/dmzdev7'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className="hover:text-tertiary transition-all duration-300"
			>
				<FaGithub />
			</Link>
			<Link
				href={'https://www.linkedin.com/in/david-martinez-bravo/'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className="hover:text-tertiary transition-all duration-300"
			>
				<FaLinkedin />
			</Link>
			<Link
				href={'https://www.instagram.com/dmzdev7/'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className="hover:text-tertiary transition-all duration-300"
			>
				<FaInstagram />
			</Link>
			<Link
				href={'https://twitter.com/dmzdev7'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className="hover:text-tertiary transition-all duration-300"
			>
				<FaXTwitter />
			</Link>
			<Link
				href={'mailto:davidf.martinez.br@gmail.com'}
				target={'_blank'}
				className="hover:text-tertiary transition-all duration-300"
			>
				<MdOutlineMailOutline />
			</Link>
		</motion.div>
	);
};

export default Socials;
