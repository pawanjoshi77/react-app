import App from "./App"

function Message() {
    const name = 'Saasha';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;