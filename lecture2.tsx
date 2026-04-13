// ⚖️ React Laws (Quick Reference Table)
// 🧩 Law	📖 What It Means	❌ What Breaks It	✅ Correct Way
// use Pure Components functions Same input → same output	Changing variables outside component	Keep logic inside component
// No State Mutation	Don’t modify state directly	state.count++	setCount(count + 1)
// State is Async	Updates don’t happen instantly	Logging state right after set	Use updater: setCount(prev => prev + 1)
// Props are Read-only	Cannot modify props	props.name = "x"	Pass new props from parent
// Hooks Rules	Hooks must be predictable	Using hooks in if or loops	Always call at top level
// One-way Data Flow	Parent → Child only	Child modifying parent data directly	Use callbacks (props.onClick)
// Stable Keys	Keys must not change	Using index as key	Use unique IDs
// 🧠 Hooks Rules Table (Separate but Important)
// ⚙️ Rule	❌ Wrong	✅ Correct
// Top Level Only	Inside if, loops	Always at top
// Only in React Functions	Normal JS function	Component or custom hook
// Must start with use	myHook()	useMyHook()

// A React Hook is just a special function that lets you use React features inside functional components.
