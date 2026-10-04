
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h2>Controlled Form</h2>

            <label>Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <label>Email: </label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <h3>Entered Data</h3>

            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default App;