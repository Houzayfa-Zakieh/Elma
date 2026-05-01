import { faFacebook, faInstagram, faTelegram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Form = () => {
    return (
        <div className="flex items-center justify-center p-4 w-full h-screen">
            <form action="" className="p-10 pt-8 rounded-2xl border-2 border-[#03693c] w-150 flex items-center justify-evenly gap-4 flex-col">
                <h1 className="text-4xl text-[#03693c] font-bold">ارسال رسالة</h1>
                <div className="flex items-center justify-between w-full">
                    <input type="text" name="name" id="name" placeholder="ادخل اسمك" required tabIndex={1} className="p-1.5 w-[45%] border-2 border-[#03693c] rounded-lg" />
                    <input type="tel" dir="rtl" name="tel" id="tel" placeholder="ادخل رقم هاتفك" required tabIndex={2} className="p-1.5 w-[45%] border-2 border-[#03693c] rounded-lg" />
                </div>
                <div className="flex items-center justify-between w-full">
                    <input type="email" name="email" id="email" placeholder="ادخل بريدك الالكتروني" required tabIndex={3} className="p-1.5 w-[45%] border-2 border-[#03693c] rounded-lg" />
                    <input type="text" placeholder="الصفة" required tabIndex={4} className="p-1.5 w-[45%] border-2 border-[#03693c] rounded-lg" />
                </div>
                <textarea name="massage" id="massage" placeholder="اكتب رسالتك هنا..." required tabIndex={5} className="w-full p-1.5 border-2 border-[#03693c] rounded-lg" rows={7}></textarea>
                <div className="flex items-center justify-between w-full">
                    <button type="submit" className="text-[#03693c] py-2 px-1.25 border-customize cursor-pointer bg-white text-[18px] hover:bg-[#03693c] hover:text-white hover:border-white border-customize border-2 border-[#03693c]">إرسال الرسالة <FontAwesomeIcon icon={faEnvelope} className="mr-1.25" /> </button>
                    <div className="text-[#03693c] flex items-center justify-evenly gap-5">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTelegram} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
