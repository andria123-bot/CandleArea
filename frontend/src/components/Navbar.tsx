import Logo from "../../icons/Logo.png"
import UserIcon from "../../icons/DefaultPfp.png"
import { FiChevronDown, FiShoppingCart } from "react-icons/fi"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [ open, setOpen ] = useState(false);

    const quantity = 0;
    const total = 0;

    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            const target = e.target as HTMLElement;
            if (open && !target.closest('.relative.group')){
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside as EventListener)
        return () => document.removeEventListener('click', handleClickOutside as EventListener)
    }, [open]) 

    return (
        <nav className="w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm sticky top-0 z-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2 group">
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-400/30 to-orange-400/30 rounded-xl blur-sm group-hover:blur transition-all duration-300"></div>
                        <NavLink to="/">
                            <img src={Logo} alt="CandleArea" onClick={() => {}} className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg border border-amber-200 shadow-sm hover:scale-105 hover:rotate-3 transition-all duration-300 cursor-pointer"/>
                        </NavLink>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <h1 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl tracking-tight">
                            CandleArea
                        </h1>
                        <p className="text-xs sm:text-[14px] text-amber-600 font-medium tracking-wide">
                            Illuminate your area
                        </p>
                    </div>
                </div>

                <NavLink to="/" className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 relative group">
                    Home
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink to="/about" className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 relative group">
                    About
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="relative group">
                        <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-7 px-2 py-2 text-md font-medium text-gray-700 bg-gray-50 rounded-lg border border-gray-200 hover:text-amber-700 hover:bg-amber-50 hover:border-amber-300 transition-all duration-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-1 sm:ml-2" />
                            Categories
                            <div className={`w-4 h-4 mr-1 sm:mr-2 transition-transform duration-200 md:group-hover:rotate-180 md:group-hover:text-amber-500 ${open ? "rotate-180 text-amber-500 duration-200" : ""}`}>
                                <FiChevronDown size={16} />
                            </div>
                        </button>

                        <div className={`absolute top-full left-0 mt-2 w-48 sm:w-56 md:w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${open ? "opacity-100 visible" : ""}`}>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                            Decorative
                            </a>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                            Silhouette
                            </a>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                            Bouquet
                            </a>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                            Table Candles
                            </a>
                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                            Christmas Candles
                            </a>
                        </div>
                    </div>
                </div>
                <NavLink to="/services" className="text-gray-700 font-medium transition-colors duration-200 hover:text-amber-500 group relative">
                    Services
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <NavLink to="/contact" className="text-gray-700 hover:text-amber-500 font-medium transition-colors duration-200 group relative">
                    Contact Us
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                    <div className="relative group">
                        <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-3 text-sm font-medium text-gray-700 hover:text-amber-700 bg-gray-50 hover:bg-amber-50 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200 cursor-pointer">
                            <div className="relative">
                                <div className="w-4 h-4">
                                    <FiShoppingCart size={16} />
                                </div>
                                {quantity > 0 && (
                                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-linear-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                        {quantity}
                                    </span>
                                )}
                            </div>
                            <span className="hidden xs:inline font-semibold text-amber-900">
                                {total.toFixed(2)} Gel
                            </span>
                        </button>
                        
                        <div className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-3 sm:p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="text-sm font-medium text-gray-900 mb-2">Cart Preview</div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">{quantity} items</span>
                                    <span className="font-semibold text-amber-900">{total.toFixed(2)} Gel</span>
                                </div>
                                <button className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                                    View Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-6 bg-gray-200"></div>

                    <div className="relative group">
                        <button className="p-1 sm:p-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 cursor-pointer">
                            <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                <img src={UserIcon} alt="Profile" className="w-full h-full rounded-md object-cover"/>
                                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 border-2 border-white rounded-full"></div>
                            </div>
                        </button>
                        
                        <div className="absolute top-full right-0 mt-2 w-44 sm:w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="px-4 py-2 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900">Welcome!</p>
                            </div>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Orders</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar