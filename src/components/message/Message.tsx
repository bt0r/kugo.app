import React from "react";
import './Message.scss';

type MessageProps = {
    title: string,
    content: string,
    isReversed?: boolean,
    image: string
}

const MessageComponent: React.FC<MessageProps> = (props) => {
    return (
        <>
            {props.isReversed && (
                <img className={'phone-reversed'} src={'images/app/'+props.image} alt={''} />
            )}
            <div className={'Message'}>
                <div className={'Message-title'}>
                    {props.title}
                </div>
                <div className={'Message-content'}>
                    {props.content}
                </div>
            </div>
            {!props.isReversed && (
                <img className={'phone'} src={'images/app/'+props.image} alt={''} />
            )}
        </>

    )
}
MessageComponent.defaultProps = {
    isReversed: false
}

export const Message = MessageComponent
