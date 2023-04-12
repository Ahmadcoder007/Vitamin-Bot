import images from "../../constants/images"
import { useNavigate } from "react-router-dom"

const Confirmation = () => {
    const navigate = useNavigate()
    return(
        <>
            <section className="varify_wrapper">
                <div className="container">
                    <div className="row card_row">
                        <div className="col-md-10 shadow offset_md-1 col-lg-6 offset-lg-3 col-sm-12 m-auto bg-white">
                            <div className="login_card text-center">
                                <h1 className="registration_title">Quickbot AI</h1>
                                <h3 className="registration_subtitle">Email Varification</h3>
                                <button className="btn varify_btn text-white" onClick={() => navigate("/dashboard")}>Varify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Confirmation