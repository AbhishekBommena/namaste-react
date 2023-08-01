Hi 👋,
This repo is all about React course that I am doing.

# Namaste-React web series by AKSHAY SAINI.
check out: https://namastedev.com/namaste-react/ for this course.


# Assignment - 3
-----------------------------

1. What is JSX?
➡ JSX is not HTML in Javascript.
➡ JSX is a syntax. It is HTML-like syntax OR XML-like syntax.
➡ JSX is different, and React is different.
➡ For ex : const heading = React.createElement("h1",{},"Core React");
    Basically, this is the core react way of creating react elements.
    whereas , const heading = <h1>JSX way</h1>;
    This is JSX's way of creating react elements.


➡ JS engine doesn't understand JSX.
➡ JSX is transpiled before it reaches the JS Engine by parcel(Not itself but Babel will do that). 
➡ So what happens is, JSX => React.createElement() => React element which is JS Object => Html element.
➡ Babel does all this conversion.

2. Super Power of JSX 
➡ Inside JSX Javascript can also be used with curly braces.
➡ JSX prevents cross-site scripting attacks(when data comes from an API and it is malicious then JSX won't allow it).

3. Composition of Component
➡ Basically it means component inside another component.

4. {TitleComponent()} and {<TitleComponent/>} and {<TitleComponent><TitleComponent/>} => everything is same.
