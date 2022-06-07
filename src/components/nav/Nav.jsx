import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { BsCode } from 'react-icons/bs';
import { BsArrowDownCircle } from 'react-icons/bs';

function Navbar() {
    return (
        <nav className='navigation'>
            <a href='#home'>
                <AiOutlineHome className='icon' />
            </a>
            <a href='#about'>
                <AiOutlineUser className='icon' />
            </a>
            <a href='#work'>
                <BsCode className='icon' />
            </a>
            <a href='#contact'>
                <BsPhone className='icon' />
            </a>
            <a href='#footer'>
                <BsArrowDownCircle className='icon' />
            </a>
        </nav>
    );
}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach(icon=> {
    icon.addEventListener('click', () => {
        changeactive();
        icon.classList.add('active-nav');
    });
});

function changeactive() {
    Icons.forEach(icon => {
        icon.classList.remove('active-nav')
    });
}

export default Navbar;
