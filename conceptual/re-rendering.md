# How does re-rendering work in React?
A re-render happends when React calls your component function again to get the latest JSX.
It is triggered by state changes, prop changes, or a parent re-rendering. React then compares the new output with the previous output (using the virtual DOM)

**What triggers a re-render**
There are three things that cause a component to re-render:
  **1.** State change - When you call a state setter like **setState or dispatch**:
  **2.** Prop change - When a parent passes new props to a child: