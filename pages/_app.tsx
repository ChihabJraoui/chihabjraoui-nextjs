import "bootstrap/dist/css/bootstrap.min.css"
import "line-awesome/dist/line-awesome/css/line-awesome.min.css"
import "primereact/resources/primereact.min.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
