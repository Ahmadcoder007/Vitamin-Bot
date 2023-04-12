import { useDispatch, useSelector } from "react-redux"
import images from "../../../constants/images"
import { useEffect } from "react"
import { Sidebar } from "../../../redux/general/general"
const Header = () =>{
    const sidebar = useSelector((state) => state.general.sidebar)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("Sidebar", sidebar)
    }, [sidebar])
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-white vitamen_header">
                <div class="container-fluid">
                    <a class="navbar-brand d-flex header_brand" href="#">
                        <img src={images.logo.default} className="logo"/>
                        <h2 className="title text-black align-self-center">QuickBot AI</h2>
                    </a>
                        <img src={images.menu.default} className="menu-btn navbar-show-btn" onClick={() => dispatch(Sidebar(!sidebar))}/>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item user_img">
                                <img src={images.user.default} className="user_img" alt="user-img"/>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    )
}

export default Header