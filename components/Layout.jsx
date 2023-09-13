import React from 'react';

const Layout = ({children, className=""}) => {
	return (
		<div
			className={`inline-block w-full h-full z-0 bg-light p-32 ${className}`}
		>
			{children}
		</div>
	);
};

export default Layout;
