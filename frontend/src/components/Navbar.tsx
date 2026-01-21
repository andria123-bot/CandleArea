import Logo from "../../icons/Logo.png"
import CartIcon from "../../icons/Cart.png"

const Navbar = () => {

    return (
       <div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" onClick={() => console.log(1)} className="w-12 border rounded-full border-amber-200 hover:scale-110 transition-all duration-200 ease-in-out hover:cursor-pointer" />
                    <h1 className="text-xl font-bold">CandleArea</h1>

                    <div className="border border-gray-400 p-4 rounded-lg shadow-md ml-auto"> {/* Cart */ }
                        <img src={CartIcon} alt="Cart" className="w-4" />
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Navbar