// Uncontrolled form inputs

import { useRef } from "react";

// In an uncontrolled input, the DOM handles the value. Instead of tracking every keystroke in state 
// You can use a ref to read the value when you need it

function LoginForm() {
    const emailRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', emailRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} />
            <button type="submit">Log in</button>
        </form>
    );
} // No useState, no onChange, no re-renders on every keystroke. The browser keeps track of what the user typed. 
// When the form is submitted, you reach into the DOM using the ref and grab the value