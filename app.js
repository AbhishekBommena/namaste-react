// const heading = React.createElement("h1", {id:"heading",className:"headingContent"}, "This is React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// Below is Javascript way of creating react element with children
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am a h1 tag"),
//     React.createElement("h2", {}, "I am a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", {}, "I am a h3 tag"),
//     React.createElement("h4", {}, "I am a h4 tag"),
//   ]),
// ]);
// console.log(parent)

// Below is JSX way of creating react element
// const jsxHeading = (
//   <div className="parent">
//     <div className="child1">
//       <h1>I am a h1 tag</h1>
//       <h2>I am a h2 tag</h2>
//     </div>
//     <div className="child2">
//       <h3>I am a h3 tag</h3>
//       <h4>I am a h4 tag</h4>
//     </div>
//   </div>
// );
// console.log(jsxHeading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// Below is creating React Component using js functions.
const TitleComponent = () => <h1>Namaste React Web Series 🚀</h1>;

const HeadingComponent = () => (
  <div className="container">
    {TitleComponent()}
    <TitleComponent></TitleComponent>
    <TitleComponent />
    <h1>Functional Component</h1>
  </div>
);

const HeaderComponent = () => {
  return (
    <div className="headerContainer">
      <a href="#" className="logo">
        <i class="fa-brands fa-google fa-xl googleIcon"></i>
        <p className="googleText">oogle</p>
      </a>
      <div className="searchFieldContainer">
        <input type="search" className="searchField" />
        <a href="#"><i class="fa-solid fa-magnifying-glass searchIcon"></i></a>
      </div>
      <a href="#" className="userIcon">
        <i class="fa-regular fa-circle-user fa-xl"></i>
      </a>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
