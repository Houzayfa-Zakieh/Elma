import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.png';
import { faBars, faHome, faPeopleGroup, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTelegram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className="flex items-center justify-around border-t-2 border-[#03693c] bg-[#03693c] relative overflow-hidden py-6 px-4">
            <div className='flex items-center justify-center flex-col'>
                <div className='w-[50%] bg-white h-1.25'></div>
                <img src={logo} alt="logo" className='w-50 rounded-lg' />
                <div className='w-[50%] bg-white h-1.25'></div>
            </div>
            <div className="flex items-start justify-start flex-wrap flex-col gap-2">
                <Link to='/' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faHome}/>الصفحة الرئيسية</Link>
                <Link to='/products' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faBars}/>المنتجات</Link>
                <Link to='/clients' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faUserPlus}/>كن عميلاً معنا</Link>
                <Link to='/contact' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faPhone}/>تواصل معنا</Link>
                <Link to='/about' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faPeopleGroup}/>من نحن؟</Link>
            </div>
            <div className="flex items-start justify-start flex-wrap flex-col gap-2">
                <Link to='#' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faFacebook}/>Facebook</Link>
                <Link to='#' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faTelegram}/>Telegram</Link>
                <Link to='#' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faWhatsapp}/>Whatsapp</Link>
                <Link to='#' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faInstagram}/>Instagram</Link>
                <Link to='#' className="hover:bg-white hover:text-[#03693c] p-1.5 border-customize text-white text-4.5"><FontAwesomeIcon icon={faYoutube}/>Youtube</Link>
            </div>
            <div className="absolute w-50 h-50 bg-white rounded-[50%] -left-26 -top-35"></div>
            <div className="absolute w-50 h-50 bg-white rounded-[50%] -bottom-35 -right-26"></div>
        </footer>
    )
}

export default Footer
