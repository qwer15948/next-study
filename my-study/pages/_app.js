import Footer from '@/src/components/Footer'
import Top from '@/src/components/Top';
import '@/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }) {
  return (
    <div style={{width: 1000, margin: "0 auto"}}>
      <Top/>
      <Component {...pageProps} />  
      <Footer></Footer>
    </div>
  );
}

/**
 * 모든 페이지에서 다 쓰는 것들, 글로벌 CSS 선언
 */