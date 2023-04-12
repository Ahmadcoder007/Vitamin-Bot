import { Route, Routes } from "react-router-dom"
import { Confirmation, Login, Registration } from "../../pages"

const Casual = () => {
    return(
        <>
        <Routes>
                <Route path={"/"} exact element={<Login />}/>
                <Route path={"/signup"} element={<Registration />}/>
                <Route path={"/confirm"} element={<Confirmation />}/>
        </Routes>
        </>
    )
}

export default Casual