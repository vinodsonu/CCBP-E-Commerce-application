const InputField = (props) => {
    return  ( <>
        <label className={props.labelClassname} htmlFor={props.htmlFor}>
        {props.labelDisplayText}
        </label>
        <input
        type={props.type}
        id={props.id}
        className={props.inputFieldClassname}
        value={props.value}
        onChange={props.onChange}
        />
  </>)
}

export default InputField   