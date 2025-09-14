function Alert(props) {
    if(props.alert!==null) {
        return (
            <>
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    {props.alert.msg}
                </div>
            </>
        )
    }
}

export default Alert;