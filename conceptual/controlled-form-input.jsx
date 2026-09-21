// Controlled form inputs
//  In a controlled input, you store the value in React state and update it on every change 
//  React state is always in sync with what the user sees on screen.

const { useState } = require("react");

function LoginForm() {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email}
                onChange={handleChange}
            />
            <button type="submit">Log in</button>
        </form>
    );
}
// 1. The input's value is set to email state, which starts as an empty string
// 2. When the user types a character, the onChange handler fires
// 3. handleChange calls setEmail with the new value
// 4. React re-rendered the component with the updated state
// 5. The input displays the new value from state