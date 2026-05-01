import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../../assets/images/logo_2.jpg';
const ClientsSpecials = () => {
    return (
        <div className="flex items-center justify-center flex-wrap flex-col">
            <div className="flex flex-col items-center justify-center gap-1.5 flex-warp">
                <h1 className="text-[#03693c] text-[40px] font-extrabold">مميزات العملاء لدينا</h1>
                <div className="w-full bg-[#03693c] h-1.5 rounded-sm"></div>
            </div>
            <div className="w-full flex items-center justify-around flex-wrap">
                <div className="flex items-start justify-start flex-wrap flex-col gap-2">
                    <h1 className="text-[30px] text-[#03693c] font-bold">أن تصبح عميلاً لدينا:</h1>
                    <ul className="space-y-2">
                        <li className="text-[#03693c] text-2xl"><FontAwesomeIcon icon={faCheck}/>اهتمام كامل في تلبية جميع الطلبات بالسرعة القصوى.</li>
                        <li className="text-[#03693c] text-2xl"><FontAwesomeIcon icon={faCheck}/>تواصل مستمر مع المندوبين ومعرفة الاحتياجات السوقية.</li>
                        <li className="text-[#03693c] text-2xl"><FontAwesomeIcon icon={faCheck}/>دراسة العمل بين الموزعين وأصحاب المتاجر الصغيرة.</li>
                        <li className="text-[#03693c] text-2xl"><FontAwesomeIcon icon={faCheck}/>وصول أكبر للموردين في جميع المحافظات السورية واللبنانية.</li>
                        <li className="text-[#03693c] text-2xl"><FontAwesomeIcon icon={faCheck}/>إشهار العلامة التجارية على منصا التواصل الاجتماعي خاصتنا.</li>
                    </ul>
                </div>
                <img src={Logo} alt="logo" className="w-100 border-2 border-[#03693c] rounded-lg" />
            </div>
        </div>
    )
}

export default ClientsSpecials
