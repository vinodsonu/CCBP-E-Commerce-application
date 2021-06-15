const Button = (props) => {
    return (
        <button
        type = {props.type}
        className = {props.className}
        onClick = {props.onClick}
        >{props.buttonText}</button>
    )
}

export default Button