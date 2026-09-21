import { useCallback, useMemo, useState } from "react";

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

// Parent re-renders
function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                count: {count}
            </button>
            <Child /> {' '}
            {/* re-renders even though it has no props */}
        </div>
    );
}

function Child() {
    console.log('Child rendered');
    return <p>I am a child</p>;
} // This is the one that surprises most people. Child has no props at all, but it still re-renders every time Parent re-renders

// React.memo - Wraps a component so it only re-renders when its props actually change
const Child = React.memo(function Child({ name }) {
    console.log('Child rendered');
    return <p>{name}</p>
}) // Now Child only re-renders when name changes, not when the parent re-renders

// useMemo - Memoizes expensive calculations
const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.price - b.price);
}, [items]);

// useCallback to handle function re-renders
const handleClick = useCallback(() => {
    console.log('Clicked');
}, []);