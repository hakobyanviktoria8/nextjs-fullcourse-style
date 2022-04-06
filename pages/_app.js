// all link added here see all pages
import '../styles/globals.css'
// add bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/layout.css"
import  Head  from 'next/head';
import Navbar from "../components/Navbar"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return  (
    <SessionProvider session={session}>
      <div className='container_next'>
      {/* all place can show this Head, but prifer more specific if it's has */}
        <Head>
          <title>___________MyApp title more important____________</title>
          <meta name='description' content='MyApp description more important'></meta>
        </Head>
        <Navbar/>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
      </SessionProvider>
  )
}

export default MyApp
