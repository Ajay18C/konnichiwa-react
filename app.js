import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object =>
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - is not html in JS
//    - HTML like syntax

const Title = () => (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX
  </h1>
);



// React Component
// Class based Components - OLD way
// Functional Compnents - New Way


// Component Composition
const HeadingComponent = () =>  (
    <div id="container">
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


root.render(<HeadingComponent/>);
