// all link added here see all pages
import '../styles/globals.css'
// add bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/layout.css"

function MyApp({ Component, pageProps }) {
  return  (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
