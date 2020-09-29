import React, {useEffect, useState} from 'react';
import logo from '../../assets/images/logo/logo_full.png';
import logoOnly from '../../assets/images/logo/logo.png';
import './App.scss';
import {Parallax} from "react-scroll-parallax/cjs";
import {Message} from "../../components/message/Message";
import {Button} from "../../components/button/Button";

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
                    Kugo est une application de rencontre légère 🍃.<br />
                    Marre des faux profils ? Besoin de légèreté ? Nous aussi et c'est pour ces raisons que nous avons
                    fait Kugo.
                </p>
                <div className={"Stores"}>
                    <div>
                        <b>Bientôt disponible sur Android et iOS</b>
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
                <div className={'Line'}>
                    <Message
                        title={'Test'}
                        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu tellus, tincidunt a bibendum sit amet, imperdiet vehicula ante. Morbi sollicitudin nisi ex, vel gravida lectus blandit at.'} />
                    <img className={'phone'} src={require('../../assets/images/app/swipette.png')} alt={''} />
                </div>
                <div className={'Line'}>
                    <img className={'phone-reversed'} src={require('../../assets/images/app/conversation.png')} alt={''} />
                    <Message
                        isReversed
                        title={'Test'}
                        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu tellus, tincidunt a bibendum sit amet, imperdiet vehicula ante. Morbi sollicitudin nisi ex, vel gravida lectus blandit at.'} />
                </div>
            </div>
        </div>
    );
}

export default App;
