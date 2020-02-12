import React from "/web_modules/react.js";
import styled from "/web_modules/@emotion/styled.js";
import {
  Card,
  H4,
  FormGroup,
  InputGroup,
  Divider,
  Classes,
  FileInput
} from "/web_modules/@blueprintjs/core.js";

const Container = styled.div`
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

export default function() {
  return (
    <Container>
      <Card title="New Import">
        <H4>
          <a href="#">New Import</a>
        </H4>
        <p>
          Nisi do veniam esse et irure reprehenderit cillum quis laboris.
          Cupidatat officia commodo eu anim velit occaecat ut.
        </p>
        <Divider />
        <FormGroup
          helperText="Type an helpful name for this import session"
          label="Name"
        >
          <InputGroup id="import-name" placeholder="Some name..." />
        </FormGroup>
        <FormGroup
          helperText="Select the CSV file you want to import"
          label="File"
        >
          <FileInput id="import-file" fill={true} />
        </FormGroup>
      </Card>
    </Container>
  );
}
