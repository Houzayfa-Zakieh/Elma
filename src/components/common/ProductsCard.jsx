import { Link } from "react-router-dom";
const ProductsCard = ({image,title}) => {
    return (
        <div className="card flex items-center justify-center flex-col gap-1.5 border-customize border-2 w-62 border-[#03693c] px-1.5 py-2">
            <img className="w-full" src={image} alt="" />
            <h2 className="font-bold text-[#03693c] text-center">{title}</h2>
            <Link to='/productsDetails' className="text-center decoration-none border-customize border-2 w-full border-[#03693c] px-4 py-0.5 bg-[#03693c] hover:text-[#03693c] hover:bg-white text-white">عرض التفاصيل</Link>
        </div>
    )
}

export default ProductsCard
