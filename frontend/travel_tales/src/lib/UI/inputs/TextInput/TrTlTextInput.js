import TrTlTextInputStyles from "./TrTlTextInput.module.css";

const TrTlTextInput = ({value, onChange, placeholder, id, label, error}) => {
    return(<>
            <div className={TrTlTextInputStyles.textInputHolder}>
                    <input
                        className={TrTlTextInputStyles.trTlTextInput}
                        type="text"
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                    <p>{error}</p>
            </div>
          </>)
}

export default TrTlTextInput;