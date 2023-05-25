
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer/Footer";

export default function Layout({children}){



    return(
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}