import React from "/web_modules/react.js";
import styled from "/web_modules/@emotion/styled.js";
import { Card, H4, FormGroup, InputGroup, Divider, Classes, FileInput } from "/web_modules/@blueprintjs/core.js";
const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  > div {
    max-width: 640px;
    min-height: 480px;
  }
  .${Classes.DIVIDER} {
    margin-top: 1em;
    margin-bottom: 1.5em;
  }
`;
export default function () {
    return (React.createElement(Container, null,
        React.createElement(Card, { title: "New Import" },
            React.createElement(H4, null,
                React.createElement("a", { href: "#" }, "New Import")),
            React.createElement("p", null, "Nisi do veniam esse et irure reprehenderit cillum quis laboris. Cupidatat officia commodo eu anim velit occaecat ut."),
            React.createElement(Divider, null),
            React.createElement(FormGroup, { helperText: "Type an helpful name for this import session", label: "Name" },
                React.createElement(InputGroup, { id: "import-name", placeholder: "Some name..." })),
            React.createElement(FormGroup, { helperText: "Select the CSV file you want to import", label: "File" },
                React.createElement(FileInput, { id: "import-file", fill: true })))));
}
