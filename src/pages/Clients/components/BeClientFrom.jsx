import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BeClientFrom = () => {
    return (
        <div className="flex w-full min-h-[40vh] items-center justify-center p-10 my-10">
            <form action="" className="w-160 flex items-center justify-center flex-col gap-2 p-6 border-2 border-[#03693c] rounded-2xl">
                <h1 className="w-full text-center text-[#03693c] text-[40px] font-bold">كن عميلاً لدينا</h1>
                <div className="flex items-center justify-evenly flex-wrap w-full gap-6">
                    <input type="text" name="name" id="name" placeholder="أدخل اسمك" required tabIndex={1} autoFocus className="border-2 border-[#03693c] p-2 w-[45%] rounded-lg" />
                    <input type="tel" dir="rtl" name="tel" id="tel" placeholder="أدخل رقم هاتفك" required tabIndex={2} className="border-2 border-[#03693c] p-2 w-[45%] rounded-lg" />
                    <input type="email" name="email" id="email" placeholder="أدخل بريدك الالكتروني" required tabIndex={3} className="border-2 border-[#03693c] p-2 w-[45%] rounded-lg" />
                    <input type="file" name="file" id="file" required tabIndex={4} className="border-2 border-[#03693c] p-2 w-[45%] rounded-lg" />
                    <input type="text" name="address" id="address" required tabIndex={5} placeholder="أدخل عنوان الشركة" className="border-2 border-[#03693c] p-2 w-[45%] rounded-lg" />
                    <input type="text" name="companyName" id="CompanyName" placeholder="أدخل اسم الشركة" required tabIndex={6} className="border-2 border-[#03693c] p-2 w-[45%] rounded-lg" />
                    <div className="w-full flex items-center justify-between px-3">
                    <input type="number" name="Tarkes" id="Tarkes" placeholder="أدخل رقم الترخيص" required tabIndex={7} className="border-2 border-[#03693c] p-2 w-[47%] rounded-lg" />
                    <button type="submit" required tabIndex={8} className="border-2 border-[#03693c] border-customize p-1 hover:bg-[#03693c] hover:text-white  text-[#03693c] cursor-pointer">إرسال الرسالة <FontAwesomeIcon icon={faEnvelope}/> </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BeClientFrom
