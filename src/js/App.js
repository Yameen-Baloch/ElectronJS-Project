import React from 'react'
const App = () => {
    return (
        <>
        <h1>Hello I'm a React Component built with Electron JS.</h1>
        <button onClick={() =>{
            electron.notificationAPI.sendNotification("Hello");
        }}>Notify Me</button>
        </>
    )
}

export default App

