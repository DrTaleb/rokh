import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";

export default function Layout({children}){



    return(
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}