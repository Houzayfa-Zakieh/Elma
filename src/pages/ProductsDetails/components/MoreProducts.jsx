import ProductsCard from '../../../components/common/ProductsCard';
import p4 from '../../../assets/images/p4.png';
const MoreProducts = () => {
    const productsData = [
        { id: 1, image: p4, title: "عصير مانجو طبيعي" },
        { id: 2, image: p4, title: "عصير مانجو طبيعي" },
        { id: 3, image: p4, title: "عصير مانجو طبيعي" },
        { id: 4, image: p4, title: "عصير مانجو طبيعي" }
    ]
    return (

        <>
            <div className="flex items-center justify-center flex-col gap-10 py-10">
                <h1>المزيد من نفس الصنف</h1>
                <div className='flex items-center justify-evenly gap-2.5 w-full py-10'>
                {productsData.map((item)=>
                <ProductsCard key={item.id} image={item.image} title={item.title} />
                )}
                
                </div>
            </div>
        </>
    )
}

export default MoreProducts
