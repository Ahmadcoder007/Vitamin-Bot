import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CurrentTab } from "../../../redux/general/general"
import { useNavigate } from "react-router-dom"
import { Chat } from "../../Components"
const CreateNewFileText = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(CurrentTab("bot_list"))
    }, [])
    return(
        <>
            <div className="create_text_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <span className="vitamin_title">Bot Ava / Configuration</span>
                                <button className="btn vitamin_btn">Train Now</button>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <label className="label">
                                                        Bot Name
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <label className="label">
                                Bot Name
                            </label>
                            <textarea rows={15} cols={5} className="form-control vitamin_input" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 functional_btn">
                            <button className="btn vitamin_btn update_btn" >Update</button>
                            <button className="btn vitamin_btn deploy_btn"onClick={() => navigate("/dashboard/deploy")}>Deploy</button>
                        </div>
                    </div>
                </div>
                <Chat />

            </div>
        </>
    )
}

export default CreateNewFileText