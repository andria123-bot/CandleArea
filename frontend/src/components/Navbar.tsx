import Logo from "../../icons/Logo.png"
import CartIcon from "../../icons/Cart.png"
import UserIcon from "../../icons/DefaultPfp.png"

const Navbar = () => {

    const quantity = 0;
    const total = 0.00;

    return (
        <div className="w-full max-w-100 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mt-4 mx-auto border border-gray-300 p-3 md:p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-3 md:gap-0">
                <div className="flex items-center shrink-0">
                    <img  src={Logo}   alt="Logo"  onClick={() => console.log(1)}  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border rounded-full border-amber-200 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer"  />
                    <h1 className="text-lg md:text-xl font-bold pl-2 md:pl-4">CandleArea</h1>
                </div>
                    {/* Candle Types Dropdown */}
                <select name="types" id="types" className="w-full md:w-auto px-3 md:px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out hover:cursor-pointer text-sm md:text-base">
                    <option value="All">Select Type</option>
                    <option value="Decorative">Decorative</option>
                    <option value="Silhouette">Silhouette</option>
                    <option value="Bouquet">Bouquet</option>
                    <option value="TableCandles">Table Candles</option>
                    <option value="ChristmasCandles">Christmas Candles</option>
                    <option value="All">All Types</option>
                </select>

                <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-between md:justify-end">
                    <button className="flex items-center gap-2 px-3 md:px-4 py-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-200 ease-in-out hover:cursor-pointer active:scale-95 flex-1 md:flex-none justify-center">
                        <img src={CartIcon} alt="Cart" className="w-4 md:w-5" />
                        <p className="font-semibold text-amber-900 text-sm md:text-base">
                            <span className="hidden sm:inline">QWT:</span> {quantity} / {total} Gel
                        </p> 
                    </button>

                    {/* User Profile */}
                    <button className="hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-300 shrink-0">
                        <img src={UserIcon} alt="User" className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border border-gray-200"/>   
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar