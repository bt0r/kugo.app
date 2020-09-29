import './Button.scss'
import React from "react";

type ButtonProps = {
    content: string,
    link: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <a href={props.link} target={'_blank'} rel={'noopener noreferrer'}>
            <button className={'Button'}>
                <span role={'img'} aria-label={'emoji-rocket'}>🚀</span> {props.content}
            </button>
        </a>
    )
}
