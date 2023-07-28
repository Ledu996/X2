export function ThanksMessage ({username, email, message}) {
    return (
        <div className="thank--you-wrapper">
            <h2>Thank you</h2>
            <p>{`${username} ${email} ${message}`}</p>
        </div>
    )
}