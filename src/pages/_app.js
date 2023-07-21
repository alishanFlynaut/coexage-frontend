import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return   <>
   <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
    <Component {...pageProps} />;
  
  </>
   
}
