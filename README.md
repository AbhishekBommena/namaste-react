Hi 👋,
This repo is all about React course that I am doing.

# Namaste-React webseries by AKSHAY SAINI.
check out : https://namastedev.com/namaste-react/ for this course.


# Assignment - 3
-----------------------------

1. What is JSX ?
➡ JSX is not HTML in Javascript.
➡ JSX is a syntax. It is HTML like syntax OR XML like syntax.
➡ JSX is different , React is different.
For ex : const heading = React.createElement("h1",{},"Core React");
    Basically this is core react way of creating react element.
    whereas , const heading = <h1>JSX way</h1>;
    This is JSX way of creating react element.


➡ JS engine don't understand JSX.
➡ JSX is transpiled before it reaches the JS Engine by parcel(Not itself but babel will do that). 
➡ So what happens is, JSX => React.createElement() => React element which is JS Object => Html element.
➡ All this conversion is done by Babel.

2. Super Power of JSX 
➡ Inside JSX Javascript can also be used with curly braces.
➡ JSX prevents cross-site scripting attacks(when data coming from a api and it is malicious jsx won't allow).

3. Composition of Component
➡ Basically it means component inside another component.

4. {TitleComponent()} and {<TitleComponent/>} and {<TitleComponent><TitleComponent/>} => everything is same.