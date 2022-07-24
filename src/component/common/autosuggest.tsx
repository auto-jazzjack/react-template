import React from "react";

export type SuggestProps = {
    names: String[]
}
export const AutoSuggest = ({names}: SuggestProps) => {

    return (<div>
        {names.map((week, index) => (
            <span key={index}>{week}</span>
        ))}
    </div>)
}