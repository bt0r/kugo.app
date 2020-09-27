import React from 'react';
import logo from '../../assets/images/logo/logo_full.png';
import './App.scss';
import {Parallax} from "react-scroll-parallax/cjs";
import {Message} from "../../components/message/Message";
import {Button} from "../../components/button/Button";

const App = () => {
    return (
        <div className="App">
            <nav className={'Navbar'}>
                <ol className={'menu'}>
                    <li onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                        Contact
                    </li>
                </ol>
            </nav>
            <header className="App-header">
                    <img src={logo} alt="logo" className={'logo'} />
                    <br />
                    <Button link={'https://docs.google.com/forms/d/e/1FAIpQLSen7iA-YRqSJS-UnHuWmD9fLSMr8SX3P1F_Glrb7JITmfCqxg/viewform'} content={'Rejoindre la beta'} />
            </header>
            <img src={require('../../components/left-vector.svg')} className={'left-vector'} alt={''}/>
            <img src={require('../../components/right-vector.svg')} className={'right-vector'} alt={''}/>
            <Parallax className={'phone-1'} x={[200, 20]} >
                <img src={require('../../assets/images/app/swipette.png')} alt={''} />
            </Parallax>
            <Parallax className={'phone-2'} x={[-100, 50]} tagOuter="figure">
                <img src={require('../../assets/images/app/conversation.png')} alt={''} />
            </Parallax>
            <Parallax className={'Message-parallax'} x={[-100, 20]} tagOuter="figure">
                <Message title={'Test'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu tellus, tincidunt a bibendum sit amet, imperdiet vehicula ante. Morbi sollicitudin nisi ex, vel gravida lectus blandit at.'} />
            </Parallax>

            {/*<Parallax className="parallax" y={[10,15]} tagOuter="figure">*/}
            {/*    {[1, 2, 3, 5, 6].map(() => {*/}
            {/*        return (*/}
            {/*            <p>*/}
            {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu tellus, tincidunt a*/}
            {/*                bibendum sit*/}
            {/*                amet, imperdiet vehicula ante. Morbi sollicitudin nisi ex, vel gravida lectus blandit at.*/}
            {/*                Curabitur*/}
            {/*                scelerisque justo nibh, nec facilisis ante volutpat nec. Vestibulum ullamcorper, felis quis*/}
            {/*                dapibus*/}
            {/*                sollicitudin, dolor dui blandit nisl, in efficitur justo risus quis tortor. In hac habitasse*/}
            {/*                platea*/}
            {/*                dictumst. Morbi et neque eu mauris fringilla semper sed sed mi. Pellentesque placerat, risus*/}
            {/*                ac*/}
            {/*                consectetur viverra, felis urna semper est, eu sagittis tellus libero vel odio. Vivamus*/}
            {/*                ornare*/}
            {/*                viverra*/}
            {/*                sem quis scelerisque. Ut mollis volutpat dui, a ultricies orci volutpat quis.*/}
            {/*                <br /><br />*/}
            {/*                Donec sodales metus id justo varius, ut euismod lacus vestibulum. In non nulla pretium nisl*/}
            {/*                venenatis*/}
            {/*                ornare sit amet in diam. Ut sit amet ligula luctus, interdum augue at, faucibus lorem.*/}
            {/*                Aliquam erat*/}
            {/*                volutpat. Nunc vitae ultrices erat, vel molestie ex. Mauris feugiat purus purus, a euismod*/}
            {/*                lacus*/}
            {/*                eleifend eu. Donec porttitor metus eget nulla laoreet, sodales efficitur elit maximus. Ut*/}
            {/*                consequat*/}
            {/*                tortor sit amet hendrerit fermentum.*/}
            {/*                <br /><br />*/}
            {/*                Aliquam at ex a sapien suscipit rhoncus. Etiam egestas orci arcu. Donec non magna in quam*/}
            {/*                cursus*/}
            {/*                sollicitudin. Fusce tincidunt mi id elit lacinia, vel cursus urna elementum. Morbi interdum*/}
            {/*                pulvinar*/}
            {/*                nunc, semper hendrerit sem laoreet a. Vestibulum id eros quis ante interdum sodales ac vitae*/}
            {/*                nisi.*/}
            {/*                Mauris id ultricies nisi. Etiam tincidunt ex nec mauris vestibulum rhoncus. Phasellus cursus*/}
            {/*                ultricies*/}
            {/*                risus, at varius odio.*/}
            {/*                <br /><br />*/}
            {/*                Morbi elementum ut lectus eget cursus. Fusce bibendum libero enim, et scelerisque lorem*/}
            {/*                rutrum eget.*/}
            {/*                Morbi condimentum tempor pharetra. Nunc et diam vel ante imperdiet ultrices. Curabitur ut*/}
            {/*                nisi vitae*/}
            {/*                velit sagittis sodales cursus vitae ante. Praesent non libero eu eros aliquet condimentum.*/}
            {/*                Quisque*/}
            {/*                gravida molestie malesuada.*/}
            {/*                <br /><br />*/}
            {/*                Nulla facilisi. Cras eleifend mi sed velit rutrum, nec vulputate diam convallis. Praesent*/}
            {/*                quis*/}
            {/*                sapien*/}
            {/*                porta, vestibulum arcu vel, interdum dui. Aliquam nec lacus ac enim mattis aliquam. Donec*/}
            {/*                risus leo,*/}
            {/*                placerat a aliquam at, hendrerit sit amet magna. Class aptent taciti sociosqu ad litora*/}
            {/*                torquent per*/}
            {/*                conubia nostra, per inceptos himenaeos. Nullam in ex id purus sollicitudin faucibus in sit*/}
            {/*                amet*/}
            {/*                eros.*/}
            {/*                Quisque id nulla in ex ultricies volutpat et sed libero. Vestibulum placerat erat quis*/}
            {/*                molestie*/}
            {/*                tempus.*/}
            {/*                Donec accumsan lacinia elit at tincidunt. Proin elementum ante mi, vitae aliquet elit*/}
            {/*                eleifend eu.*/}
            {/*                Vestibulum imperdiet maximus enim, at eleifend erat aliquet quis. Vestibulum ante ipsum*/}
            {/*                primis in*/}
            {/*                faucibus orci luctus et ultrices posuere cubilia curae; Curabitur in tincidunt urna. Donec*/}
            {/*                ante*/}
            {/*                ipsum,*/}
            {/*                mollis vitae elementum id, tincidunt a risus. Vivamus gravida tortor maximus augue pharetra*/}
            {/*                accumsan.*/}
            {/*            </p>*/}
            {/*        )*/}
            {/*    })*/}
            {/*    }*/}
            {/*</Parallax>*/}
        </div>
    );
}

export default App;
