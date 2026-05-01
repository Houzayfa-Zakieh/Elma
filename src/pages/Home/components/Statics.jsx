const Statics = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-9 p-5 w-full">
            <div className="flex items-center justify-center flex-col gap-1.5">
                <h1 className='text-[40px] text-[#03693c] font-extrabold'>إحصاءات الشركة</h1>
                <div className="w-full h-1.5 rounded-sm bg-[#03693c]"></div>
            </div>
            <div className="flex items-center justify-evenly flex-wrap gap-10">
                <div className="w-50 h-50 rounded-[50%] bg-[#03693c] flex items-center justify-center flex-wrap flex-col gap-1.5">
                    <h1 className="text-white text-3xl font-bold text-center">5</h1>
                    <p className="text-white font-bold text-center">عدد المنتجات</p>
                </div>
                <div className="w-50 h-50 rounded-[50%] bg-[#03693c] flex items-center justify-center flex-wrap flex-col gap-1.5">
                    <h1 className="text-white text-3xl font-bold text-center">2</h1>
                    <p className="text-white font-bold text-center">عدد العملاء</p>
                </div>
                <div className="w-50 h-50 rounded-[50%] bg-[#03693c] flex items-center justify-center flex-wrap flex-col gap-1.5">
                    <h1 className="text-white text-3xl font-bold text-center">2</h1>
                    <p className="text-white font-bold text-center">عدد الأصناف</p>
                </div>
            </div>
        </div>
    )
}

export default Statics
