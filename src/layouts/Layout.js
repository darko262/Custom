import { Footer } from "../components/Nav/Footer";
import Navbar from "../components/Nav/Navbar";


export function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}





