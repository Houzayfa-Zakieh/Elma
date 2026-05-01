import { Link } from 'react-router-dom';
import logo from '../../../assets/images/img-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Company = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 flex-warp w-full p-6'>
            <div className="flex flex-col items-center justify-center gap-1.5 flex-warp">
                <h1 className="text-[#03693c] text-[40px] font-extrabold">شركة إيلما للأغذية</h1>
                <div className="w-full bg-[#03693c] h-1.5 rounded-sm"></div>
            </div>
            <div className=" flex items-center justify-around w-full flex-wrap gap-4">
                <div className='flex items-start justify-start flex-col flex-wrap'>
                    <h2 className='text-[#03693c] text-[25px] font-bold'>إيلما للأغذية</h2>
                    <p className='text-black font-bold'>منذ تأسيسها عام 2016 تطمح الشركو للوصول إلى عالم الطبيعة بالمنتجات  <br />الطبيعية مثل العصائر والحليب والأجبان والشوكولاتة..</p>
                    <div className='flex items-start justify-start gap-1.5 flex-col flex-wrap mt-10'>
                        <p className='text-black font-bold'>حيث حرصت على السلامة والذوق الفريد.</p>
                        <Link to='/contact' className='font-bold text-[#03693c] border-[#03693c] hover:text-[#fff] hover:bg-[#03693c] hover:border-[#fff] border-2 border-customize p-2'>تواصل معنا <FontAwesomeIcon icon={faPhone} /></Link>
                    </div>
                </div>
                <img src={logo} alt="logo" className='w-75' />
            </div>
        </div>
    )
}

export default Company
