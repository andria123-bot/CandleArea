import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";
import C1 from '../assets/CandlePhotos/1.jpg'
import C2 from '../assets/CandlePhotos/2.jpg'
import C3 from '../assets/CandlePhotos/3.jpg'
import C4 from '../assets/CandlePhotos/4.jpg'
import C5 from '../assets/CandlePhotos/5.jpg'
import C6 from '../assets/CandlePhotos/6.jpg'
import C7 from '../assets/CandlePhotos/7.jpg'
import { div } from "framer-motion/client";

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotTopics.length)
    setTimeout(() => {
      setIsAnimating(false)
    }, 300);
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hotTopics.length) % hotTopics.length)
      setTimeout(() => {
      setIsAnimating(false)
    }, 300);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-amber-50 via-white to-rose-50 py-12 px-4 relative overflow-hidden">
      <div className="mb-auto"> {/* Top Text */ }
        <div className="text-center">
          <h1 className="font-extrabold text-gray-800 text-4xl">Handcrated <span className="font-extrabold text-orange-600">Candles</span></h1>
          <p className="text-gray-800 max-w-2xl mx-auto text-lg flex items-center justify-center">Discover our collection of handcrafted candles made with premium ingredients and many different aromas.</p>
        </div>

        <div className="flex items-center justify-center gap-8 text-center mt-6">
          <div className="flex items-center gap-2 ">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-md text-gray-800">Long Lasting</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-md text-gray-800">Natural Wax</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-md text-gray-800">Good Smelling</span>
          </div>
        </div>
      </div>

      <div> {/* Carousel(Cardsz) */ }
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">=</button>
        <div className="flex items-center justify-center gap-6">
          {[0, 1, 2].map((offset) => {
            const candleIndex = (currentIndex + offset) % hotTopics.length;
            console.log(candleIndex)
            const candle = hotTopics[candleIndex];

            return (
              <div key={candle.id} className={`bg-white rounded-2xl shadow-xl p-6 w-80 transition-all duration-500
                  ${offset === 0 ? '-rotate-6 -translate-y-4 scale-95 hover:-rotate-3' : ''}
                  ${offset === 1 ? 'scale-105 z-10 hover:scale-110' : 'z-0'}
                  ${offset === 2 ? 'rotate-6 -translate-y-4 scale-95 hover:rotate-3' : ''}
                  hover:shadow-2xl hover:z-20
                `}>
                
              </div>
            )
          })}
        </div>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">=</button>
      </div>
    </div>
  );
}

export default Card;