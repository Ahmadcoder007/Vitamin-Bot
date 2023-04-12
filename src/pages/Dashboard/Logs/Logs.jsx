import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CurrentTab } from "../../../redux/general/general"
import { useNavigate } from "react-router-dom"
import { logs } from "../../../constants/constants"
const Logs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CurrentTab("logs"))
    }, [])
    const navigate = useNavigate
    return(
        <>
            <div className="logs_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <span className="vitamin_title">Bot List</span>
                            <button className="vitamin_btn btn" onClick={() => console.log("Refresh")}>Refresh</button>

                            {logs.map((item, index) => (
                                <>
                                    <div class={`alert alert-${item.action.toLowerCase()}`} role="alert">
                                        <div className="information">
                                            <span className="action">{item.action.toUpperCase()}:  </span>
                                            <span className="alert_content">{item.content}</span>
                                            <span className="datetime">{item.date} {item.time}</span>
                                        </div>
                                    </div>
                                
                                </>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Logs