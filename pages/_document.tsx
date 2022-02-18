import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document
{
	render(): JSX.Element
	{
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico"/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400&display=swap&Inter:wght@300;400&display=swap"
					      rel="stylesheet" />
					{/*<link rel="manifest" href="/manifest.json" />*/}
					{/*<link rel="apple-touch-icon" href="/icon.png" />*/}
					<meta name="theme-color" content="#664EFF" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument