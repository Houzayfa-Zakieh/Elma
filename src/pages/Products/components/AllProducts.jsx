import p4 from '../../../assets/images/p4.png';
import ProductsCard from '../../../components/common/ProductsCard';
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from 'react';
import { ProductsService } from '../../../services/productsService';
const AllProducts = () => {
    const [data, setData] = useState([]);
    const productsData=[
        {id:1,image:p4 ,Title:"عصير اناناس طبيعي"},
        {id:2,image:p4 ,Title:"عصير اناناس طبيعي"},
        {id:3,image:p4 ,Title:"عصير اناناس طبيعي"},
        {id:4,image:p4 ,Title:"عصير اناناس طبيعي"},
        {id:5,image:p4 ,Title:"عصير اناناس طبيعي"},
    ]
    useEffect(() => {
    const fetchPost = async()=>{
        try{
            const res = await ProductsService()
            setData(res);
        }
        catch(error){
            console.log(error);
        }
    }
    fetchPost();
    }, []);
    return (
        <div className="flex items-center justify-center flex-wrap flex-col gap-10 p-2.5">
            <div className="flex items-center justify-between w-full px-2">
                <h1 className="text-3xl font-bold">جميع المنتجات</h1>
                <FontAwesomeIcon icon={faSearch} className="bg-[#03693c] p-1 rounded-lg cursor-pointer text-white text-2xl" />
            </div>
            <div className="flex items-center justify-evenly flex-wrap gap-6 w-full mb-8">
                {productsData.map((item)=>
                <ProductsCard image={item.image} key={item.id} title={item.Title}/>
                )}
            </div>
        </div>
    )
}

export default AllProducts
