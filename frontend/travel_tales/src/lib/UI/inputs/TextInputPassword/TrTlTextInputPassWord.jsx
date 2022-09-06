import TrTlTextInputPassWordStyles from "./TrTlTextInputPassWord.module.css";

const TrTlTextInputPassWord = ({value, onChange, placeholder, id, label, type, error}) => {
    return(<>
            <div className={TrTlTextInputPassWordStyles.textInputHolder}>
                    <input
                        className={TrTlTextInputPassWordStyles.trTlTextInput}
                        type="password"
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                    <p>{error}</p>
            </div>
          </>)
}

export default TrTlTextInputPassWord;