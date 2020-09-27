import './Button.scss'
import React from "react";

type ButtonProps = {
    content: string,
    link: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <a href={props.link} target={'_blank'}>
            <button className={'Button'}>
                🚀 {props.content}
            </button>
        </a>
    )
}
