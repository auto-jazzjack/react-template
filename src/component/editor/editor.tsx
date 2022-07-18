import React from "react";
import {Schema} from "../common/model";
import {Parser} from "../common/parser";
import {getSchema} from "../../apis/schema";
import {fetcher, initStatus} from "../../apis/apicaller";
import {ApiStatus} from "../../apis/type";
import {Form, TextArea} from "semantic-ui-react";

type EditorProps = {
    schemaURL: string
    content: string
}

let schema = {} as Schema
export const Editor = ({schemaURL}: EditorProps) => {
    /* Renderer */
    const [_, setSchemaURL] = React.useState<ApiStatus<string>>(initStatus);

    React.useEffect(() => {
        fetcher(getSchema(), setSchemaURL)
        schema = Parser(schemaURL)
        console.log(schema)
    })


    return (

        <div className="Editor">
            <Form>

                <TextArea placeholder='Body' style={{minHeight: 200, maxHeight:200}}/>
                <TextArea autocomplete="on" placeholder='Query' style={{minHeight: 200, maxHeight:200}}/>

            </Form>
        </div>
    )
}