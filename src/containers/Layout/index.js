import Navbar from '../../conponents/Navbar'
import Footer from '../../conponents/Footer'

const Layout = ({children}) => {
    return (
        <div>
            <div className="wrapper">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout