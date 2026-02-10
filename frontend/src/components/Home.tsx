import { useState } from "react";

import Card from './Card'

  const hotTopics = [
    { id: 1, title: "Vanilla Glow", description: "A warm and comforting vanilla-scented candle that fills the room with a soft, sweet aroma.", price: 14.99 },
    { id: 2, title: "Lavender Calm", description: "Relaxing lavender notes designed to reduce stress and create a peaceful atmosphere.", price: 16.5 },
    { id: 3, title: "Citrus Sunrise", description: "A fresh blend of orange and lemon scents for an energizing and uplifting mood.", price: 13.75 },
    { id: 4, title: "Forest Pine", description: "Earthy pine and cedarwood aromas inspired by a walk through a quiet forest.", price: 17.99 },
    { id: 5, title: "Amber Night", description: "A rich amber fragrance with subtle hints of spice, perfect for cozy evenings.", price: 18.25 },
    { id: 6, title: "Ocean Breeze", description: "Clean and refreshing marine notes that bring the feeling of fresh sea air indoors.", price: 15.5 },
    { id: 7, title: "Rose Petal Bloom", description: "A delicate floral scent made from soft rose petals for a romantic, calming vibe.", price: 16.99 },
  ];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
  <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white py-8 md:py-16">
      <div className="relative w-full max-w-6xl h-125 flex items-center justify-center">
        <Card currentTopic={hotTopics[currentIndex]} nextTopic={hotTopics[(currentIndex + 1) % hotTopics.length]} previousTopic={hotTopics[(currentIndex - 1 + hotTopics.length) % hotTopics.length]} />
        <button onClick={() => {
          if (currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
          } else {
            setCurrentIndex(hotTopics.length - 1)
          }
        }} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <span className="text-lg">←</span>
        </button>
        <button onClick={() => {
          if (currentIndex < hotTopics.length - 1){
            setCurrentIndex(currentIndex + 1)
          } else {
            setCurrentIndex(0)
          }
        }} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default Home;