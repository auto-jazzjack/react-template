import React from "react";
import {Header} from "semantic-ui-react";
import {Schema} from "../common/model";
import {Parser} from "../common/parser";
import {getSchema} from "../../apis/schema";
import {fetcher, initStatus} from "../../apis/apicaller";
import {ApiStatus} from "../../apis/type";

type EditorProps = {
    schemaURL: string
    schema: Schema
    content: string
}
let schema = {} as Schema
export const Editor = ({schemaURL}: EditorProps) => {
    /* Renderer */
    const [_, setSchemaURL] = React.useState<ApiStatus<string>>(initStatus);

    React.useEffect(() => {
        fetcher(getSchema(), setSchemaURL)
        schema = Parser(schemaURL)
        schema.currentField
    })


    return (

        <div className="Editor">
            <Header as='h1'>asdasdasd</Header>
        </div>
    )
}