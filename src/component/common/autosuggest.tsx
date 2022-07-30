import React from "react";
import {Dropdown, DropdownItemProps} from "semantic-ui-react";
import {DropdownProps} from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";

export type SuggestProps = {
    names: String[]
    onClick: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void
}
export const AutoSuggest = ({names, onClick}: SuggestProps) => {

    return (<div>
        <Dropdown
            search
            searchInput={{autoFocus: true}}
            selection
            options={names.map((value) => ({
                key: value,
                value: value as string,
                content: value
            } as DropdownItemProps))}
            onChange={(event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
                onClick.call(this, event, data)
            }}>
        </Dropdown>
    </div>)
}

