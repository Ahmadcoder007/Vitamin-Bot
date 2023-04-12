import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CurrentTab } from "../../../redux/general/general"
import { useNavigate } from "react-router-dom"
import { Chat } from "../../Components"
const Deploy = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        // dispatch(CurrentTab("deploy"))
    }, [])
    return(
        <>
            <div className="deploy_wrapper">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <span className="vitamin_title">Bot Ava / Deploy</span>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 vitamin_heading">
                                            <span className="vitamin_section">
                                                Whatsapp Deploy
                                            </span>
                                            <div class="form-check form-switch vitamin_switches">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="row"> 
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <label className="label">
                                                    VARIFICATION_TOKEN
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <label className="label">
                                                    ACCESS_TOKEN
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>

                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <label className="label">
                                                    Phone_Number_ID
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <label className="label">
                                                    Web Hook url
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 vitamin_heading">
                                            <span className="vitamin_section">
                                                Web Deploy
                                            </span>
                                            <div class="form-check form-switch vitamin_switches">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="row"> 
                                                <div className="col-md-12 col-sm-12">
                                                    <label className="label">
                                                    Put this code in header
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>

                                                <div className="col-md-12 col-sm-12">
                                                    <label className="label">
                                                    Logo
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 vitamin_heading">
                                            <span className="vitamin_section">
                                                API Deployment
                                            </span>
                                            <div class="form-check form-switch vitamin_switches">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="row"> 
                                                <div className="col-md-12 col-sm-12">
                                                    <label className="label">
                                                    Put this code in header
                                                    </label>
                                                    <input className="form-control vitamin_input"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 functional_btn">
                            <button className="btn vitamin_btn update_btn" >Update</button>
                        </div>
                    </div>
                </div>
                <Chat />

            </div>
        </>
    )
}

export default Deploy