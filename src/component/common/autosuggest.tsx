import React from "react";
import {Dropdown, DropdownItemProps} from "semantic-ui-react";

export type SuggestProps = {
    names: String[]
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

