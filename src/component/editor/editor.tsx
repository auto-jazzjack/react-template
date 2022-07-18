import React from "react";
import {Schema} from "../common/model";
/*import {Parser} from "../common/parser";
import {getSchema} from "../../apis/schema";
import {fetcher, initStatus} from "../../apis/apicaller";
import {ApiStatus} from "../../apis/type";*/
import {Form, TextArea} from "semantic-ui-react";
import {TextAreaProps} from "semantic-ui-react/dist/commonjs/addons/TextArea/TextArea";
import {findContext} from "../common/parser";

type EditorProps = {
    schemaURL: string
    content: string
}

//let schema = {} as Schema | null
let mockSchema = {} as Schema | null

export function init0() {

    mockSchema = {
        currentField: new Set<String>(["aa", "bb", "cc", "dd"]),
        nextField: new Map<String, Schema>([
                ["first", {
                    currentField: new Set<String>(["ff", "ffg", "qwe", "zxc"]),
                } as Schema],
                ["second", {
                    currentField: new Set<String>(["2ff", "22ffg", "2qwe", "2zxc"]),
                } as Schema],
            ]
        )
    } as Schema
}

export const Editor = ({schemaURL}: EditorProps) => {

    init0()
    /* Renderer */
    /*const [_, setSchemaURL] = React.useState<ApiStatus<string>>(initStatus);

    React.useEffect(() => {
        fetcher(getSchema(), setSchemaURL)
        schema = Parser(schemaURL)
        console.log(schema)
    })
    */


    return (

        <div className="Editor">
            <Form>
                <TextArea placeholder='Body' style={{minHeight: 200, maxHeight: 200}}/>
                <TextArea onChange={suggest}
                          placeholder='Query'
                          style={{minHeight: 200, maxHeight: 200}}/>
            </Form>
        </div>
    )
}


function suggest(event: React.ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps) {
    let v = data.value as string
    let contexts = findContext(v);

    let temp = mockSchema
    for (let i = 0; i < contexts.length; i++) {
        if (temp?.nextField.has(contexts[i])) {
            temp = temp.nextField.get(contexts[i]) ?? null
            console.log(temp)
        }
    }

    console.log(temp?.nextField)
}