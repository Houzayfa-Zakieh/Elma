import { Link } from 'react-router-dom';
import AboutLogo from '../../../assets/images/aboutLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const AboutContainer = () => {
    return (
        <div className="flex items-center justify-evenly flex-wrap gap-2.5 py-2.5 w-full h-screen gradient">
            <img src={AboutLogo} alt="Logo" className='w-75 rounded-[20px]' />
            <div className='flex items-start justify-start flex-col flex-wrap gap-2'>
                <h1 className='text-white text-[30px]'>شركة إيلما للأغذية</h1>
                <p className='text-white font-bold'>نحن شركة إيلما للأغذية، متخصصون في صناعة مواد غذائبة عالية الجودة . <br />
                    نقدم مجموعة متنوعة من المنتجات الطازجة والصحية التي تلبي احتياجات <br />
                    عملائنا . نحن نعمل بشغف على توفير وجبات طعام لذيذة ومغذية للأسر <br />
                    والمؤسسات . يتميز إنتاجنا بالجودة والامتثال لاعلى معايير السلامة الغذائية . <br />
                    تفخر شركة إيلما بخبرتها العريقة وفريقنا المتفاني ، مما يضمن لعملائنا تجربة <br />
                    ممتازة وثقة في المنتجات التي نقدمها.</p>
                <Link to='/contact' className='text-[#03693c] border-2 border-white hover:text-white bg-white hover:bg-[#03693c] border-customize px-2 py-1'>تواصل معنا <FontAwesomeIcon icon={faPhone}/></Link>
            </div>
        </div>
    )
}

export default AboutContainer
