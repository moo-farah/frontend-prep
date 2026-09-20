import { useState } from "react";

// State change
function counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>{count}</button>
    );
}


// Prop change
function Parent() {
    const [name, setName] = useState('John');
    return <Child name ={name} />;
}

function Child({ name }) {
    return <p>{name}</p>;
}