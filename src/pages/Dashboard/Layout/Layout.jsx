import { Outlet, Route } from "react-router-dom"
import { Chat, Header, Sidebar } from "../../Components"
import Home from "../Home/Home"
import { useSelector } from "react-redux"
import CreateNewFile from "../CreateNew/CreateNewFile"

const Layout = () => {
    const sidebar = useSelector(state => state.general.sidebar)
    return(
        <>
            <Header />
            <div className={`content_wrapper ${sidebar ? "show" : ""}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 p-0">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10 col-md-9 content">
                        
                            <Outlet />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Layout