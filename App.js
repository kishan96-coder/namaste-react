/*
*<div id="parent">
    <div id="child">
        <h1>This is my h1 tag</h1>
        <h2>This is my h2 tag</h2>
    </div>
</div>
<div id="child">
    <h1>This is my h1 tag</h1>
    <h2>This is my h2 tag</h2>
</div>
*
*
*
*/
const heading = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {id:"child"},
            "This is my h1 tag!"
        ),React.createElement(
            "h2",
            {id:"child"},
            "This is my h2 tag!"
        )]
    ), React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "This is my h1 tag!"
        ),React.createElement(
            "h2",
            {},
            "This is my h2 tag!"
        )]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);