Hi 👋,
This repo is all about React course that I am doing.

# Namaste-React web series by AKSHAY SAINI.
check out: https://namastedev.com/namaste-react/ for this course.


# Assignment - 3
1. What is JSX?

➡ JSX is not HTML in Javascript.

➡ JSX is a syntax. It is HTML-like syntax OR XML-like syntax.

➡ JSX is different, and React is different.

➡ For ex: "const heading = React.createElement("h1",{}, "Core React")" => 
    Basically, this is the core react way of creating react elements whereas, *const heading = p-tag JSX way p-tag* => This is JSX's way of creating react elements.

➡ JS engine doesn't understand JSX.

➡ JSX is transpiled before it reaches the JS Engine by parcel(Not itself but Babel will do that).

➡ So what happens is, JSX => React.createElement() => React element which is JS Object => Html element.

➡ Babel does all this conversion.

2. Super Power of JSX

➡ Inside JSX Javascript can also be used with curly braces.

➡ JSX prevents cross-site scripting attacks(when data comes from an API and it is malicious then JSX won't allow it).

4. Composition of Component

➡ Basically it means component inside another component.

6. {TitleComponent()} and {<TitleComponent/>} and {<TitleComponent><TitleComponent/>} => everything is same.



# Assignment - 4

It is all about the Food delivery app code.

➡ Config driven UI

➡ "Key" attribute in component. It is good practice to use key attribute when looping through same component rather than not using. Basically warnings can be avoided and the object allocation will be in a order, due to which in each loop only new object will be added to tree( So it renders only new object).

# Episode -5 & Assignment - 5

➡ How to keep files structure in a react project( Checkout : react.org )

➡ Exporting and importing components.

➡ Difference between Named and Default exporting

    ➡ Default Export  Ex : " export default ComponentName " -> There can only be one default export in a file. -> And this is imported like -> Ex : " import ComponentName from "someUrl"; ".

    ➡ Named Export Ex : " export const ComponentName = ..... "; -> When multiple components need to exported from single file this is the way. -> And this is imported like -> Ex : " import { ComponentName } from "someURL" ;".  

➡ Hooks 
    
    ➡ Basically hooks are normal js functions with predefined functionality, given by react(Utility function).

    ➡ UseState hook

    ➡ This hook is used to maintain state of a component. So whenever a state variable changes(updates) , react re-renders the component.  
    
    ➡ Working of UseState

    ➡ Reconciliation algo( React Fiber ) 
    
    ➡Actual and virtual DOM.
    
    ➡ Diff Algo 

