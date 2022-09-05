import TrTlTextInput from "../../../lib/UI/inputs/TextInput/TrTlTextInput";
import SignUpStyles from "./SignUp.module.css";

const SignUp = () => {
    return(<>
            <div className={SignUpStyles.signUpPageHolder}>
                <div>
                    <div className={SignUpStyles.signUpHolder}>
                           <div className={SignUpStyles.signUpText}>
                               SignUp
                           </div>

                           <div className={SignUpStyles.nameInputBlock}>
                                <TrTlTextInput placeholder="Please enter your firstname"/>
                           </div>

                           <div className={SignUpStyles.nameInputBlock}>
                                <TrTlTextInput placeholder="Please enter your lastname"/>
                           </div>

                           <div className={SignUpStyles.nameInputBlock}>
                                <TrTlTextInput placeholder="Please enter your email"/>
                           </div>

                           <div className={SignUpStyles.nameInputBlock}>
                                <TrTlTextInput placeholder="Please enter your phoneNumber"/>
                           </div>

                           <div>
                               <button
                               style={{
                                background: "linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%)",
                                borderRadius: "8px",
                                color:"white",
                                padding:"10px 50px",
                                outline:"none",
                                border:"none",
                                marginTop:20
                               }}
                               >SignUp</button>
                           </div>

                    </div>
                </div>
            </div>
          </>)
}

export default SignUp;