import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";
import C1 from '../assets/CandlePhotos/1.jpg'
import C2 from '../assets/CandlePhotos/2.jpg'
import C3 from '../assets/CandlePhotos/3.jpg'
import C4 from '../assets/CandlePhotos/4.jpg'
import C5 from '../assets/CandlePhotos/5.jpg'
import C6 from '../assets/CandlePhotos/6.jpg'
import C7 from '../assets/CandlePhotos/7.jpg'

const hotTopics = [
  { id: 1, title: "Vanilla Glow", description: "A warm and comforting vanilla-scented candle.", img: C1, price: 14.99},
  { id: 2, title: "Lavender Calm", description: "Relaxing lavender notes for a peaceful atmosphere.", img: C2, price: 16.5},
  { id: 3, title: "Citrus Sunrise", description: "Fresh blend of orange and lemon scents.", img: C3, price: 13.75},
  { id: 4, title: "Forest Pine", description: "Earthy pine and cedarwood aromas.", img: C4, price: 17.99,},
  { id: 5, title: "Amber Night", description: "Rich amber fragrance for cozy evenings.", img: C5, price: 18.25},
  { id: 6, title: "Ocean Breeze", description: "Clean marine notes that refresh.", img: C6, price: 15.5},
  { id: 7, title: "Rose Petal Bloom", description: "Delicate floral scent from rose petals.", img: C7, price: 16.99},
];

const Card = () => {
  const [start, setStart] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const visible = hotTopics.slice(start, start + 3);

  const nextSlide = () => {
    if(start + 3 < hotTopics.length) setStart(start + 1);
  }
  const previousSlide = () => {
    if(start > 0) setStart(start - 1);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-amber-50 via-white to-rose-50 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Handcrafted <span className="text-amber-600">Candles</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our collection of premium scented candles, each designed to transform your space with enchanting aromas
        </p>
        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Natural Wax</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Eco-Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Long Lasting</span>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl h-150 flex items-center justify-center mb-12">
        <button 
          onClick={previousSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-amber-900 rounded-full p-3 shadow-2xl hover:shadow-3xl hover:scale-110 hover:bg-white transition-all duration-300 z-50 border border-amber-200 group"
          disabled={start === 0}
        >
          <ChevronLeft className={`w-6 h-6 ${start === 0 ? 'text-gray-400' : 'text-amber-800 group-hover:text-amber-900'}`} />
        </button>

        <div className="flex items-end justify-center gap-8 md:gap-12 px-4 transition-all duration-500 ease-out">
          {visible.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative transition-all duration-500 ease-out transform perspective-1000
                ${index === 0 ? '-rotate-6 -translate-y-8 scale-95' : ''}
                ${index === 1 ? 'scale-105 z-20' : 'z-10'}
                ${index === 2 ? 'rotate-6 -translate-y-8 scale-95' : ''}
                hover:z-30 hover:scale-110 hover:rotate-0 hover:translate-y-0
              `}
            >
              <div className="relative bg-linear-to-b from-white to-amber-50 rounded-3xl shadow-2xl overflow-hidden border border-amber-200/50 hover:shadow-3xl transition-all duration-500 group w-80 h-125">
                
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <span className="text-sm text-gray-500">Price</span>
                      <p className="text-3xl font-bold text-amber-800">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    
                    <button className="group/btn flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                      <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      <span className="font-semibold">Add to Cart</span>
                    </button>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-3xl bg-linear-to-r from-amber-400/0 via-amber-200/0 to-rose-400/0 transition-all duration-500 pointer-events-none
                  ${hoveredId === item.id ? 'opacity-30' : 'opacity-0'}`}
                ></div>
              </div>

              <div className="absolute -bottom-4 left-4 right-4 h-4 bg-linear-to-t from-amber-900/20 to-transparent blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-amber-900 rounded-full p-3 shadow-2xl hover:shadow-3xl hover:scale-110 hover:bg-white transition-all duration-300 z-50 border border-amber-200 group"
          disabled={start + 3 >= hotTopics.length}
        >
          <ChevronRight className={`w-6 h-6 ${start + 3 >= hotTopics.length ? 'text-gray-400' : 'text-amber-800 group-hover:text-amber-900'}`} />
        </button>
      </div>

      <div className="flex gap-3 mb-8">
        {Array.from({ length: hotTopics.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setStart(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              start === index 
                ? 'w-8 bg-linear-to-r from-amber-500 to-amber-600' 
                : 'bg-amber-200 hover:bg-amber-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;