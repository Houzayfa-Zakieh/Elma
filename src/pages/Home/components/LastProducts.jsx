import p4 from '../../../assets/images/p4.png';
import { useState, useEffect } from "react";
import ProductsCard from '../../../components/common/ProductsCard';
// import { productsService } from '../../../services/productsService';
const LastProducts = () => {
    const [data, setData] = useState([]);
    const ProductsData = [
        { id: 1, image: p4, title: "عصير مانجو طبيعي" },
        { id: 2, image: p4, title: "عصير مانجو طبيعي" },
        { id: 3, image: p4, title: "عصير مانجو طبيعي" },
        { id: 4, image: p4, title: "عصير مانجو طبيعي" },
        { id: 5, image: p4, title: "عصير مانجو طبيعي" }
    ]
        // useEffect(() => {
        //     const fetchPost = async () => {
        //         try {
        //             const res = await ProductsService()
        //             setData(res);
        //         }
        //         catch (error) {
        //             console.log(error);
        //         }
        //     }
        //     fetchPost();
        // }, []);
        return (
            <>
                <div className="flex items-center justify-center flex-col gap-9 p-5 w-full">
                    <div className="flex items-center justify-center flex-col gap-1.5">
                        <h1 className='text-[40px] text-[#03693c] font-extrabold'>آخر منتجاتنا</h1>
                        <div className="w-full h-1.5 rounded-sm bg-[#03693c]"></div>
                    </div>
                    <div className="flex items-center justify-evenly gap-4 flex-wrap w-full">
                        {
                            ProductsData.map((item) =>
                                <ProductsCard key={item.id} image={item.image} title={item.title} />
                            )}
                    </div>
                </div>
            </>
        )
    }

export default LastProducts
