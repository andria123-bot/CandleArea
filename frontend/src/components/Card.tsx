interface CardTopic {
  currentTopic: {
      id: number;
      title: string;
      description: string;
      price: number;
  };

  nextTopic: {
      id: number;
      title: string;
      description: string;
      price: number;
  };

  previousTopic: {
      id: number;
      title: string;
      description: string;
      price: number;
  };
}

const Card = (props: CardTopic) => {
    
  return (
    <div className="flex justify-center items-end w-full h-full gap-0.5 mt-20">
      <div className="w-80 h-140 border rounded-2xl bg-white shadow-lg">
        <h1 className="text-xl font-bold p-4">{props.previousTopic.title}</h1>
      </div>
      
      <div className="w-100 h-160 border rounded-2xl bg-white shadow-lg">
        <h1 className="text-xl font-bold p-4">{props.currentTopic.title}</h1>
      </div>

      <div className="w-80 h-140 border rounded-2xl bg-white shadow-lg">
        <h1 className="text-xl font-bold p-4">{props.nextTopic.title}</h1>
        </div>
    </div>
  )
}

export default Card