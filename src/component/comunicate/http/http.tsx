import React from "react";
import {Header} from "semantic-ui-react";
import {Editor} from "../../editor";
import {Schema} from "../../common/model";

/*type Http1Request = {
    method: string;
    body: string;
}*/
let schema = {} as Schema;

export const Http = () => {
    /* Renderer */
    return (
        <div className="Http">
            <Editor content="" schema={schema}/>
            <Header as='h1'>asdasdasd</Header>
        </div>
    )
}
export default Http;