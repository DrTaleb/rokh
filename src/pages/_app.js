import "../styles/SliderSection.css"
// import "../styles/slider.css"
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'swiper/swiper.css'
import {useEffect} from "react";
import AOS from "aos";
import {createTheme, ThemeProvider} from "@mui/material";
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from "@emotion/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {useRouter, Router} from "next/router";
import Nprogress from "nprogress"
import Layout from "@/components/public/Layout";
import PanelLayout from "@/components/panel/PanelLayout";
Router.events.on('routeChangeStart', ()=>{
    Nprogress.start();
})
Router.events.on('routeChangeComplete', ()=>{
    Nprogress.done();
})

export default function App({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle")
    }, [])

    useEffect(() => {
        AOS.init();
    }, []);
    const theme = createTheme({
        direction: 'rtl',
        typography: {
            "fontFamily": `Vazirmatn`
        }
    });
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
      // <Layout>
      //   <Component {...pageProps} />
      // </Layout>
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
                {
                    router.pathname.includes("/admin") ?
                        <PanelLayout>
                            <ToastContainer className={"mt-5"}/>
                            <Component {...pageProps} />
                        </PanelLayout>
                        :
                        <Layout>
                            <ToastContainer className={"mt-5"}/>
                            <Component {...pageProps} />
                        </Layout>
                }
        </ThemeProvider>
    </CacheProvider>
  )
}
