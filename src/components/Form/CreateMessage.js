export function CreateMessage ({setUserName, setEmail, setMessage, confirmData}) {
    console.log(typeof(setUserName));
    return (
            <>
                <input onChange={(e) => setUserName(e.target.value)} />
                <input onChange={(e) => setEmail(e.target.value) } />
                <textarea onChange={(e) => setMessage(e.target.value) } />
                <button onClick={confirmData}>Submit</button>
            </>
    )
};