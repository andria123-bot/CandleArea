import { useState } from "react";
import C1 from '../assets/CandlePhotos/1.jpg'
import C2 from '../assets/CandlePhotos/2.jpg'
import C3 from '../assets/CandlePhotos/3.jpg'
import C4 from '../assets/CandlePhotos/4.jpg'
import C5 from '../assets/CandlePhotos/5.jpg'
import C6 from '../assets/CandlePhotos/6.jpg'
import C7 from '../assets/CandlePhotos/7.jpg'

const hotTopics = [
  { id: 1, title: "Vanilla Glow", description: "A warm and comforting vanilla-scented candle.", img: C1, price: 14.99 },
  { id: 2, title: "Lavender Calm", description: "Relaxing lavender notes for a peaceful atmosphere.", img: C2, price: 16.5 },
  { id: 3, title: "Citrus Sunrise", description: "Fresh blend of orange and lemon scents.", img: C3, price: 13.75 },
  { id: 4, title: "Forest Pine", description: "Earthy pine and cedarwood aromas.", img: C4, price: 17.99 },
  { id: 5, title: "Amber Night", description: "Rich amber fragrance for cozy evenings.", img: C5, price: 18.25 },
  { id: 6, title: "Ocean Breeze", description: "Clean marine notes that refresh.", img: C6, price: 15.5 },
  { id: 7, title: "Rose Petal Bloom", description: "Delicate floral scent from rose petals.", img: C7, price: 16.99 },
];

const Card = () => {
  const [start, setStart] = useState(0);
  const visible = hotTopics.slice(start, start + 3);

  const nextSlide = () => {
    if(start + 3 < hotTopics.length) setStart(start + 1);
  }
  const previousSlide = () => {
    if(start > 0) setStart(start - 1);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-100 to-white py-8 md:py-16">
      <div className="relative w-full max-w-6xl h-125 flex items-center justify-center">
        <button onClick={previousSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-200 text-amber-800 rounded-full p-3 shadow-lg hover:bg-amber-300 transition-colors duration-200 z-50 -ml-4">
          ←
        </button>

        <div className="flex items-end gap-6 transition-transform duration-500 ease-out">
          {visible.map((item, i) => (
            <div key={item.id} className={`relative bg-amber-100  border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform
                ${i === 0 ? "-rotate-3 w-80 h-140 translate-y-6" : ""}
                ${i === 1 ? "w-100 h-160 z-10 scale-105" : "scale-95 opacity-80"}
                ${i === 2 ? "rotate-3 w-80 h-140 translate-y-6" : ""}`}>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-md font-semibold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-200 text-amber-800 rounded-full p-3 shadow-lg hover:bg-amber-300 transition-colors duration-200 z-50 -mr-4">
          →
        </button>
      </div>
    </div>
  );
}

export default Card;