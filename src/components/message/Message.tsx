import React from "react";
import './Message.scss';

type MessageProps = {
    title: string,
    content: string,
    isReversed?: boolean
}

const MessageComponent: React.FC<MessageProps> = (props) => {
    return (
        <div className={'Message'} style={props.isReversed ? {textAlign: 'right'} : {textAlign: 'left'}}>
            <div className={'Message-title'}>
                {props.title}
            </div>
            <div className={'Message-content'}>
                {props.content}
            </div>
        </div>
    )
}
MessageComponent.defaultProps = {
    isReversed: false
}

export const Message = MessageComponent
