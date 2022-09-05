import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import SignUp from "../Pages/common/signup/SignUp";

const MainRoutes = () => {
    return(<>
            <div>
                <BrowserRouter>
                        <Routes>
                              <Route path="/login" element={<div>main</div>}/>
                              <Route path="/signup" element={<SignUp/>}/>
                        </Routes>
             </BrowserRouter>
            </div>
           </>)
}
export default MainRoutes;