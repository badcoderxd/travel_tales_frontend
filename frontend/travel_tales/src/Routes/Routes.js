import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Login from "../Pages/common/login/Login";
import SignUp from "../Pages/common/signup/SignUp";
import Home from "../Pages/Main/Home/Home";

const MainRoutes = () => {
    return(<>
            <div>
                <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<Login/>}/>
                              <Route path="/signup" element={<SignUp/>}/>
                              <Route path="/home" element={<Home/>}/>
                        </Routes>
             </BrowserRouter>
            </div>
           </>)
}
export default MainRoutes;