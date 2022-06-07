import './Button.css';
import { BsFileEarmarkText } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Button() {
    return(
        <div className="container button-container">
            <a href='https://www.canva.com/design/DAE2IfDexFY/BkpEca87OCt59_8sIgEoJA/view?utm_content=DAE2IfDexFY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' className="btn pri container" target={'blank'}>
                Ver CV
                <BsFileEarmarkText className='icon'/>
            </a>
            <a href='https://github.com/santiago1525' className="btn sec container" target={'blank'}>
                Ver GitHub
                <BsGithub className='icon'/>
            </a>
        </div>
    );
}

export default Button;