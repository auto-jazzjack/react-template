import React from "react";
import {Dropdown, DropdownItemProps} from "semantic-ui-react";
import {TextAreaProps} from "semantic-ui-react/dist/commonjs/addons/TextArea/TextArea";

export type SuggestProps = {
    names: String[]
    onClick?: (event: React.ChangeEvent<HTMLTextAreaElement>, data: TextAreaProps) => void
}
export const AutoSuggest = ({names}: SuggestProps) => {


    return (<div>
        <Dropdown options={
            names.map((value) => ({
                key: value,
                content: value
            } as DropdownItemProps))
        }>
        </Dropdown>
    </div>)
}

