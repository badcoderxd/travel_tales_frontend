import TrTlTextInput from "../../../lib/UI/inputs/TextInput/TrTlTextInput";
import TrTlTextInputPassWord from "../../../lib/UI/inputs/TextInputPassword/TrTlTextInputPassWord";
import LoginStyles from "./Login.module.css";
import TTLogo from "../../../Assets/Common/Logo/TTlogo.jpeg";
import { useState } from "react";
import axiosInstance from "../../../Config/axios/AxiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [loginDetails, setLoginDetails] = useState({
        email:"",
        password:""
    })

    const history = useNavigate();

    const onEmailChange = (e) => {
        setLoginDetails({email:e.target.value,password:loginDetails.password})
    }

    const onPasswordChange = (e) => {
        setLoginDetails({email:loginDetails.email,password:e.target.value})
    }


    const OnLogin = async (e) => {
        try{
             const loginUser = await axiosInstance.post("/login",{eMail:loginDetails.email,passWord:loginDetails.password});
             if(loginUser){
                 localStorage.setItem("user",JSON.stringify(loginUser.data.user));
                 localStorage.setItem("token",loginUser.data.token);
                 history('/home')
             }
        }
        catch(err){
            console.log(err)
        }
    }

    return(<>
            <div className={LoginStyles.LogInPageHolder}>
                <div>
                    <div className={LoginStyles.LogInHolder}>

                            <div className={LoginStyles.logoHolder} style={{display:"none"}}>
                                <img src={TTLogo}
                                width="35px"
                                height="35px"
                                alt="travel-tales-logo"/>
                            </div>

                           <div className={LoginStyles.LogInText}>
                               LogIn
                           </div>

                           <div className={LoginStyles.nameInputBlock}>
                                <TrTlTextInput placeholder="Email" onChange={onEmailChange} value={loginDetails.email}/>
                           </div>

                           <div className={LoginStyles.nameInputBlock}>
                                <TrTlTextInputPassWord placeholder="Password" onChange={onPasswordChange} value={loginDetails.password}/>
                           </div>

                           <div onClick={(e) => {OnLogin(e)}}>
                               <button
                               style={{
                                background: "linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%)",
                                borderRadius: "8px",
                                color:"white",
                                padding:"10px 50px",
                                outline:"none",
                                border:"none",
                                marginTop:20,
                                cursor:"pointer"
                               }}
                               >LogIn</button>
                           </div>

                    </div>
                </div>
            </div>
            </>)
        } 

export default Login;