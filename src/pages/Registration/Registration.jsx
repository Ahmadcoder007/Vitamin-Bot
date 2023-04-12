import { useNavigate } from "react-router-dom"
import images from "../../constants/images"
import { useDispatch, useSelector } from "react-redux"
import { Credential } from "../../redux/general/general"

const Registration = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    return(
        <>
            <section className="register_wrapper">
                <div className="container">
                    <div className="row card_row">
                        <div className="col-md-6 shadow offset_md-3 col-lg-4 offset-lg-4 col-sm-12 m-sm-auto bg-white">
                            <div className="login_card text-center">
                                <img src={images.logo.default} alt="Logo" className="logo_img"/>
                                <h1 className="registration_title">Quickbot AI</h1>
                                <h2 className="registration_subtitle">Create Account</h2>
                                <div className="registration-form">
                                    <div className="row g-3">
                                        <div className="col-sm-10 offset-sm-1 text-start">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email" placeholder="" value=""/>

                                        </div>
                                        <div className="col-sm-10 offset-sm-1 text-start">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="password" placeholder="" value=""/>
                                        </div>
                                        <div className="col-sm-10 offset-sm-1 text-start">
                                            <label for="confirm_password" class="form-label">Confirm Password</label>
                                            <input type="password" class="form-control" id="confirm_password" placeholder="" value=""/>
                                        </div>
                                        <div className="col-sm-10 offset-sm-1 text-start">
                                            <button className="btn login_btn text-white" onClick={() => history("/confirm")}>Create Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Registration