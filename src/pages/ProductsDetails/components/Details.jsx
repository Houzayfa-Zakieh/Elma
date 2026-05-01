import p4 from '../../../assets/images/p4.png';
const Details = () => {
    return (
        <>
            <div className='flex items-center justify-center w-full h-[60vh] p-5'>
                <div className="flex items-center justify-evenly flex-wrap w-full">
                    <div className="flex items-start justify-start flex-col gap-5">
                        <p className="text-[18px]"><strong className="text-[#03693c]">الاسم:</strong> عصير مانجو طبيعي</p>
                        <p className="text-[18px]"><strong className="text-[#03693c]">تاريخ الانتاج:</strong> 2024-02-08</p>
                        <p className="text-[18px]"><strong className="text-[#03693c]">الوزن:</strong> 330 غرام</p>
                        <p className="text-[18px]"><strong className="text-[#03693c]">السعر:</strong> 12000 ل.س</p>
                        <p className="text-[18px]"><strong className="text-[#03693c]"> عصائر:</strong> عصائر</p>
                    </div>
                    <div className='w-75 border-[#03693c] rounded-[18px]'>
                        <img src={p4} className='w-full' alt="mango juice" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
