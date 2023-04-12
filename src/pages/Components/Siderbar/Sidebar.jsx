import { useSelector, useDispatch } from "react-redux"
import { CurrentTab } from "../../../redux/general/general"
import { useNavigate } from "react-router-dom"
import { sidebarItems } from "../../../constants/constants"
import { useEffect } from "react"
const Sidebar = () => {
    const currentTab = useSelector(state => state.general.currentTab)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(currentTab)
    })
    const Navigate = (item) => {
        dispatch(CurrentTab(item.id))
        navigate(item.url)
    }
    return(
        <>
            <div className="sidebar_wrapper position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    {sidebarItems.map((item, index) => (
                        <>
                        <li className={`nav-item ${item.id == currentTab ? "active": ""}`} onClick={() => Navigate(item)}>
                            <span>{item.name}</span>
                        </li>
                        </>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default Sidebar