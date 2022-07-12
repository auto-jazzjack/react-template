import React from "react";
import {Header} from "semantic-ui-react";
import {Schema} from "../common/model";

type EditorProps = {
    schema: Schema;
    content: string;
}

export const Editor = ({schema, content}: EditorProps) => {
    /* Renderer */
    return (
        <div className="Http">
            <Header as='h1'>asdasdasd</Header>
        </div>
    )
}