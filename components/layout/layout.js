import Head from "next/head";
import Footer from "../crumbs/Footer";
import Header from "../crumbs/Header";

const Layout = ({children}) => {

    return (
        <div>
            <Head>
                <title>Ремонт цифровой и бытовой техники в Астрахани</title>
                <meta name="description" content="Ремонт цифровой и бытовой техники в Астрахани" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <Header />
                { children }
                <Footer />
            </main>
            
        </div>
    );
}

export default Layout;