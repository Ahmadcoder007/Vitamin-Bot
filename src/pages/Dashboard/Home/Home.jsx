import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import { CurrentTab } from "../../../redux/general/general"
import { Chat } from "../../Components"
const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CurrentTab("bot_list"))
    }, [])
    return(
        <>
            <div className="home_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <span className="vitamin_title">Bot List</span>
                            <button className="vitamin_btn btn" onClick={() => navigate("/dashboard/createtext")}>New Bot</button>
                        </div>

                        <div className="col-md-12 table_container">
                            <table className="table">

                                <tbody>
                                    <tr className="thead">
                                        <th>Title</th>
                                        <th>Files</th>
                                        <th>Train</th>
                                        <th>Configration</th>
                                        <th>Logs</th>
                                    </tr>

                                    <tr>
                                        <td data-label="Title">Mark</td>
                                        <td data-label="Files">files</td>
                                        <td data-label="Train">train</td>
                                        <td data-label="Configration">configration</td>
                                        <td data-label="Logs">logs</td>
                                    </tr>
                                    <tr>
                                    <td data-label="Title">Mark</td>
                                        <td data-label="Files">files</td>
                                        <td data-label="Train">train</td>
                                        <td data-label="Configration">configration</td>
                                        <td data-label="Logs">logs</td>                                </tr>
                                    <tr>
                                        <td data-label="Title">Mark</td>
                                        <td data-label="Files">files</td>
                                        <td data-label="Train">train</td>
                                        <td data-label="Configration">configration</td>
                                        <td data-label="Logs">logs</td>        
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Chat />

            </div>
        </>
    )
}

export default Home