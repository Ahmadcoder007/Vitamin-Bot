import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import { CurrentTab } from "../../../redux/general/general"
import { Chat } from "../../Components"
const CreateNewFile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(CurrentTab("create_new_bot"))
    }, [])
    return(
        <>
            <div className="create_new_file">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <span className="vitamin_title">Bot List</span>
                            <button className="vitamin_btn btn" onClick={() => navigate("/dashboard/createtext")}>Deploy</button>
                            <button className="vitamin_btn btn ms-3 me-3" onClick={() => navigate("/dashboard/createtext")}>Configuration</button>
                            <button className="vitamin_btn btn" onClick={() => navigate("/dashboard/createtext")}>Create New File</button>
                        </div>

                        <div className="col-md-12 bot_image_container">
                            <label for="bot_image">
                                <strong>Drag Files</strong>
                                <span>pdf, text, docs</span>
                            </label>
                            <input id="bot_image" className="bot_image" type="file" />
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
                                        <td data-label="Title">File 01</td>
                                        <td data-label="Files">files</td>
                                        <td data-label="Train">train</td>
                                        <td data-label="Configration">configration</td>
                                        <td data-label="Logs">logs</td>
                                    </tr>
                                    <tr>
                                    <td data-label="Title">File 01</td>
                                        <td data-label="Files">files</td>
                                        <td data-label="Train">train</td>
                                        <td data-label="Configration">configration</td>
                                        <td data-label="Logs">logs</td>                                </tr>
                                    <tr>
                                        <td data-label="Title">File 01</td>
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

export default CreateNewFile