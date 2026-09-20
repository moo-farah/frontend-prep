# What is the Key Prop in React?

## <u>Key Prop in React</u>
The key prop is a special string attribute you need to include when rendering lists of elements
It helps React identify which items have changed, been added, or been removed.

**Using array indices as key can lead to:**
 - Performance issues when the list order changes
 - Bugs with component state when items are inserted or deleted
 - Problems with list item animations

**When to use the index as key is when all of these conditions are met:**
 - The list is static (not computed and doesn't change)
 - The items of the list have no IDs
 - The list will never be reordered or filtered