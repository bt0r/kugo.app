import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo/logo_full.png';
import './App.scss';
import {Message} from "../../components/message/Message";
import {Button} from "../../components/button/Button";
import {t} from '../../translations/fr';

const App = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => setCurrentScrollHeight(document.body.scrollHeight))

        return () => {
            window.removeEventListener('scroll', () => {
            })
        }
    }, [])

    useEffect(() => console.log(currentScrollHeight), [currentScrollHeight])
    return (
        <div>
            <img src={require('../../components/left-vector.svg')} className={'left-vector'} alt={''} />
            <img src={require('../../components/right-vector.svg')} className={'right-vector'} alt={''} />
            <nav className={'Navbar'}>
                <ol className={'menu'}>
                    <li>
                        <a href={'mailto:contact@kugo.app'}>
                            <span role={"img"} aria-label={'emoji-contact'}>📨 </span>Contact
                        </a>
                    </li>
                </ol>
            </nav>
            <header className="App-header">
                <img src={logo} alt="logo" className={'logo'} />
                <br />
                <Button
                    link={'https://docs.google.com/forms/d/e/1FAIpQLSen7iA-YRqSJS-UnHuWmD9fLSMr8SX3P1F_Glrb7JITmfCqxg/viewform'}
                    content={'Rejoindre la beta'} />
                <p>
                    {t.app.description.short}
                    <br/>
                    {t.app.description.full}
                </p>
                <div className={"Stores"}>
                    <div>
                        <b>{t.stores.description}</b>
                    </div>
                    <div className={"images"}>
                        <img
                            src={require('../../assets/images/store/android.png')}
                            alt={"Play store"}
                            height={70}
                        />
                        <img
                            src={require('../../assets/images/store/ios.svg')}
                            alt={"App store"}
                            height={50}
                        />
                    </div>
                </div>
            </header>

            <div className={'Messages'}>
                {t.messages.map(message => {
                    return (
                        <div className={'Line'}>
                            <Message
                                title={message.title}
                                content={message.content}
                                isReversed={message.reversed}
                                image={message.image}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
