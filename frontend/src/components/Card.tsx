import { useState } from "react";


const hotTopics = [
  { id: 1, title: "Vanilla Glow", description: "A warm and comforting vanilla-scented candle that fills the room with a soft, sweet aroma.", price: 14.99 },
  { id: 2, title: "Lavender Calm", description: "Relaxing lavender notes designed to reduce stress and create a peaceful atmosphere.", price: 16.5 },
  { id: 3, title: "Citrus Sunrise", description: "A fresh blend of orange and lemon scents for an energizing and uplifting mood.", price: 13.75 },
  { id: 4, title: "Forest Pine", description: "Earthy pine and cedarwood aromas inspired by a walk through a quiet forest.", price: 17.99 },
  { id: 5, title: "Amber Night", description: "A rich amber fragrance with subtle hints of spice, perfect for cozy evenings.", price: 18.25 },
  { id: 6, title: "Ocean Breeze", description: "Clean and refreshing marine notes that bring the feeling of fresh sea air indoors.", price: 15.5 },
  { id: 7, title: "Rose Petal Bloom", description: "A delicate floral scent made from soft rose petals for a romantic, calming vibe.", price: 16.99 },
];

const Card = () => {
  const [start, setStart] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const visible = hotTopics.slice(start, start + 3)

  const nextSlide = () => {
    if(start + 3 < hotTopics.length){
      setStart(start + 1)
    }
  }

  const previousSlide = () => {
    if(start > 0){
      setStart(start - 1)
    }
  }
    
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray to-white py-8 md:py-16">
        <div className="relative w-full max-w-6xl h-125 flex items-center justify-center">
          <button 
            onClick={previousSlide} 
            className="absolute right-full top-1/2 transform h-20 -translate-y-1/2 bg-amber-200 text-amber-800 rounded-full p-3 shadow-lg hover:bg-amber-300 transition-colors duration-200"
          >
            <span className="text-xl font-semibold">←</span>
          </button>


          <button onClick={nextSlide} className="absolute left-full h-20 top-1/2 transform -translate-y-1/2 bg-amber-200 text-amber-800 rounded-full p-3 shadow-lg hover:bg-amber-300 transition-colors duration-200">
            <span className="text-xl font-semibold">→</span>
          </button>

          <div className="flex items-center gap-4">
            {visible.map((item, i) => (
              <div
                key={i}
                className={`
                  w-64 p-4 bg-white shadow rounded
                  transition-all duration-300
                  ${i === 0 ? "-rotate-3 w-80 h-140 border rounded-2xl bg-white shadow-lg mt-auto" : ""}
                  ${i === 1 ? "w-100 h-160 border rounded-2xl bg-white shadow-lg mb-5 z-100" : "scale-95 opacity-80"}
                  ${i === 2 ? "rotate-3 w-80 h-140 border rounded-2xl bg-white shadow-lg mt-auto" : ""}
                `}
              >
                <h2 className="text-lg font-bold">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Card

//Design 

{/* <div className="flex justify-center items-end w-full h-full gap-5 mt-20">
  <div className="w-80 h-140 border rounded-2xl bg-white shadow-lg -rotate-3">
    <h1 className="text-xl font-bold p-4">{}</h1>
  </div>
  
  <div className="w-100 h-160 border rounded-2xl bg-white shadow-lg z-100">
    <h1 className="text-xl font-bold p-4">{}</h1>
  </div>

  <div className="w-80 h-140 border rounded-2xl bg-white shadow-lg rotate-3">
    <h1 className="text-xl font-bold p-4">{}</h1>
  </div>
</div> */}