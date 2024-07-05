const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"chil1"},
        [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"heading2")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"heading1"),React.createElement("h2",{},"heading2")]
    )
]
)


const heading = React.createElement("h1",{id:"heading"},"Hello World from React !");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);