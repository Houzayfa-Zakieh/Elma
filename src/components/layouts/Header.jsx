import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faBars,faUserPlus,faPhone, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
const Header = () => {
    return (
        <header className="bg-[#03693c] flex-wrap fixed flex items-center justify-between px-3 py-4 w-full top-0 left-0 z-100 drop-shadow-white drop-shadow-xl">
            <h1 className="text-[30px] font-bold text-white">إلما للأغذية</h1>
            <nav className="flex items-center justify-around gap-3">
                <Link to="/" className="bg-[#03693c] hover:bg-white hover:text-[#03693c] px-3 py-1.25 rounded-[10px] decoration-none text-white"><FontAwesomeIcon icon={faHome} className="ml-1.25"/>الصفحة الرئيسية</Link>                
                <Link to="/products" className="bg-[#03693c] hover:bg-white hover:text-[#03693c] px-3 py-1.25 rounded-[10px] decoration-none text-white"><FontAwesomeIcon icon={faBars} className="ml-1.25"/>المنتجات</Link>                
                <Link to="/clients" className="bg-[#03693c] hover:bg-white hover:text-[#03693c] px-3 py-1.25 rounded-[10px] decoration-none text-white"><FontAwesomeIcon icon={faUserPlus} className="ml-1.25"/>كن عميلا معنا</Link>                
                <Link to="/contact" className="bg-[#03693c] hover:bg-white hover:text-[#03693c] px-3 py-1.25 rounded-[10px] decoration-none text-white"><FontAwesomeIcon icon={faPhone} className="ml-1.25"/>تواصل معنا</Link>                
                <Link to="/about" className="bg-[#03693c] hover:bg-white hover:text-[#03693c] px-3 py-1.25 rounded-[10px] decoration-none text-white"><FontAwesomeIcon icon={faPeopleGroup} className="ml-1.25"/>من نحن؟</Link>                
            </nav>
            <img src={Logo} alt="logo" className="w-15 border-white border-2 rounded-[10px]" />
        </header>
    )
}

export default Header
