import Head from 'next/head';

//css
import '@/styles/globals.css';

//components
import Header from '../components/Header';

//fonts
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				className={`${montserrat.variable} font-sans bg-light w-full min-h-screen`}
			>
				<Header />
				<Component {...pageProps} />
			</main>
		</>
	);
}
