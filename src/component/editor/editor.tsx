import React from "react";
import {Schema} from "../common/model";
/*import {Parser} from "../common/parser";
import {getSchema} from "../../apis/schema";
import {fetcher, initStatus} from "../../apis/apicaller";
import {ApiStatus} from "../../apis/type";*/
import {Form, TextArea} from "semantic-ui-react";
import {TextAreaProps} from "semantic-ui-react/dist/commonjs/addons/TextArea/TextArea";
import {findContext} from "../common/parser";
import {AutoSuggest} from "../common/autosuggest";

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

    const [suggests, setSuggests] = React.useState<String[]>([]);

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
                <AutoSuggest names={suggests}/>
                <TextArea onChange={(event, data) => {
                    let suggested = suggest(event, data);
                    setSuggests(suggested)
                }}
                          placeholder='Query'
                          style={{minHeight: 200, maxHeight: 200}}
                />
            </Form>
        </div>
    )
}

function suggest(event: React.ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps): String[] {
    let v = data.value as string
    let contexts = findContext(v, event.target.selectionEnd);

    let pos = mockSchema
    for (let i = 0; i < contexts.length; i++) {
        if (pos?.nextField.has(contexts[i])) {
            pos = pos.nextField.get(contexts[i]) ?? null
        }
    }

    let temp = new Set<String>()

    if (pos?.nextField !== undefined) {
        pos?.nextField.forEach((v, k) => {
            temp.add(k)
        })
    }
    if (pos?.currentField !== undefined) {
        pos?.currentField.forEach((v) => {
            temp.add(v)
        })
    }

    let retv = [] as String[]
    temp.forEach(i => {
        retv.push(i)
    })

    return retv
}