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
                <img className={'phone-reversed'} src={require('../../assets/images/app/'+props.image)} alt={''} />
            )}
            <div className={'Message'} style={props.isReversed ? {textAlign: 'right'} : {textAlign: 'left'}}>
                <div className={'Message-title'}>
                    {props.title}
                </div>
                <div className={'Message-content'}>
                    {props.content}
                </div>
            </div>
            {!props.isReversed && (
                <img className={'phone'} src={require('../../assets/images/app/'+props.image)} alt={''} />
            )}
        </>

    )
}
MessageComponent.defaultProps = {
    isReversed: false
}

export const Message = MessageComponent
