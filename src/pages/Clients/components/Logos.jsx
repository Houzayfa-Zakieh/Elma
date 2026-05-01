import Logo from '../../../assets/images/logo_2.jpg';
const Logos = () => {
    return (
        <div className="flex items-center justify-around w-full flex-wrap gap-2 p-1 mt-20">
            <img src={Logo} alt="Logo" className='w-62.5' />
            <img src={Logo} alt="Logo" className='w-62.5' />
        </div>
    )
}

export default Logos
