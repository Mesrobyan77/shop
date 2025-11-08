import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"



const Layout = () => {
    return (
        <section>
            <Navigation/>
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout