import React from "react";
import {Dropdown, DropdownItemProps} from "semantic-ui-react";
import {DropdownProps} from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";

export type SuggestProps = {
    names: String[]
    onClick?: (event: React.KeyboardEvent<HTMLElement>, data: DropdownProps) => void
}
export const AutoSuggest = ({names, onClick}: SuggestProps) => {


    return (<div>
        <Dropdown options={names.map((value) => ({
            key: value,
            content: value
        } as DropdownItemProps))}
                  onClick={(event: React.KeyboardEvent<HTMLElement>, data: DropdownProps) => {
                      if (onClick !== null && onClick !== undefined) {
                          onClick.call(this, event, data)
                      }

                  }
                  }>
        </Dropdown>
    </div>)
}

