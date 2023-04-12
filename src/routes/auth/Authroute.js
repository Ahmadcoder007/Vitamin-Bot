import { Route, Router, Routes } from "react-router-dom"
import { 
    Configuration, 
    CreateNewFile, 
    CreateNewFileText, 
    Deploy, 
    Home,
    Logs
} from "../../pages"
import Layout from "../../pages/Dashboard/Layout/Layout"

const AuthRouter = () =>{
    return(
        <Routes>
            <Route path={"/dashboard"} exact element={<Layout />}>
                <Route path={""} element={<Home />} />
                <Route path={"/dashboard/createbot"} element={<CreateNewFile />} />
                <Route path={"/dashboard/configuration"} element={<Configuration />} />
                <Route path={"/dashboard/deploy"} element={<Deploy />} />
                <Route path={"/dashboard/createtext"} element={<CreateNewFileText />} />
                <Route path={"/dashboard/logs"} element={<Logs />} />
            </Route>
        </Routes>
            

    )
}

export default AuthRouter