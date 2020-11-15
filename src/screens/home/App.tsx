import React from 'react';
import logo from '../../assets/images/logo/logo_full.jpg';
import './App.scss';
import {Message} from "../../components/message/Message";
import {Button} from "../../components/button/Button";
import {t} from '../../translations/fr';
import leftVector from '../../components/left-vector.svg';
import rightVector from '../../components/right-vector.svg';
import playStore from '../../assets/images/store/android.png';
import appStore from '../../assets/images/store/ios.svg';

const App = (): JSX.Element => {
    return (
        <div>
            <img src={leftVector} className={'left-vector'} alt={''} />
            <img src={rightVector} className={'right-vector'} alt={''} />
            <nav className={'Navbar'}>
                <ol className={'menu'}>
                    <li>
                        <a href={'mailto:contact@kugo.app'}>Contact</a>
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
                            src={playStore}
                            alt={"Play store"}
                            height={70}
                        />
                        <img
                            src={appStore}
                            alt={"App store"}
                            height={50}
                        />
                    </div>
                </div>
            </header>

            <div className={'Messages'}>
                {t.messages.map(message => {
                    return (
                        <div className={'Line'}
                            key={message.title}>
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
