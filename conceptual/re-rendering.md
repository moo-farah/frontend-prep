# How does re-rendering work in React?
A re-render happends when React calls your component function again to get the latest JSX.
It is triggered by state changes, prop changes, or a parent re-rendering. React then compares the new output with the previous output (using the virtual DOM)

**What triggers a re-render**
There are three things that cause a component to re-render:
  **1.** State change - When you call a state setter like **setState or dispatch**:
  **2.** Prop change - When a parent passes new props to a child:
  **3.** Parent re-renders - When a parent component re-renders, all its children re-render too, even if their props have not changed:

### Re-render does not mean DOM update
A re-render means React calls your component function and generates new JSX. But it does not mean the actual DOM changes.
React compares the new JSX with the previous JSX. If nothing is different, React does not touch the DOM at all.
Re-render are usually cheap - the expensive part is updating the real DOM.

### How to prevent unnecessary re-renders
**React.memo:** Wraps a component so it only re-renders when its props actually change
**useMemo:** Is a React Hook that lets you cache the result of a calculation between re-renders
Memoizes expensive calculations
**useCallback:** Is a React Hook that lets you cache a function definition between re-renders
Memoizes function so they keep the same reference

### Common re-rendering mistakes
``` 
 // Bad - new object on every render
 <Child style={{color: 'red' }} />;

  // Better
  const style = useMemo(() => ({color: 'red' }), []);
  <Child style={style} />;
```
