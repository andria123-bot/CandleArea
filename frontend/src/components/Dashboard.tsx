const Dashboard = () => {
  return (
    <div className="flex justify-center p-4 pt-5">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl border border-gray-300 flex flex-col p-4 md:p-6 rounded-lg shadow-lg bg-white">
        <label htmlFor="CandleType" className="font-semibold text-xl md:text-2xl pb-2 md:pb-3">Candle Type: </label>
        <select name="Candle Type" id="CandleType" className="border border-gray-300 rounded-lg p-2 md:p-3 h-12 text-base md:text-lg cursor-pointer hover:border-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-200">
          <option value="All">Select Type</option>
          <option value="Decorative">Decorative</option>
          <option value="Silhouette">Silhouette</option>
          <option value="Bouquet">Bouquet</option>
          <option value="TableCandles">Table Candles</option>
          <option value="ChristmasCandles">Christmas Candles</option>
        </select>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-5 md:pt-6">
          <div>
            <label htmlFor="CandleWidth" className="font-semibold text-base md:text-lg pb-1 md:pb-2 block">Candle Width:</label>
            <input type="number" step={.1} placeholder="0.0 cm" id="CandleWidth" className="border border-gray-300 rounded-lg p-2 md:p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-colors placeholder-gray-400"/>
          </div>
          <div>
            <label htmlFor="CandleHeight" className="font-semibold text-base md:text-lg pb-1 md:pb-2 block">Candle Height:</label>
            <input type="number" step={.1} placeholder="0.0 cm" id="CandleHeight" className="border border-gray-300 rounded-lg p-2 md:p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-colors placeholder-gray-400"/>
          </div>
        </div>
        
        <label htmlFor="CandlePrice" className="font-semibold text-base md:text-lg pb-1 md:pb-2 pt-5 md:pt-6">Candle Price:</label>
        <input type="number" step={.5} placeholder="0.00 ₾" id="CandlePrice" className="border border-gray-300 rounded-lg p-2 md:p-3 h-12 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-colors placeholder-gray-400"/>
        
        <label htmlFor="fileInput" className="font-semibold text-base md:text-lg pt-5 md:pt-6 block pb-2 md:pb-3">Candle Image:</label>
        <div onClick={() => document.getElementById("fileInput")?.click()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 cursor-pointer active:scale-[0.99]">
          <p className="text-gray-600 font-medium text-base md:text-lg">Click To Upload Candle Image</p>
          <p className="text-sm text-gray-500 mt-1 md:mt-2">PNG, JPG, JPEG</p>
          <input type="file" className="hidden" accept=".png, .jpg, .jpeg" id="fileInput"/>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
          <button className="px-6 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all duration-200 text-base md:text-lg">Clear All</button>
          <button className="px-6 py-3 rounded-xl border-2 border-amber-500 bg-amber-500 text-white font-medium hover:bg-amber-600 hover:border-amber-600 active:scale-95 transition-all duration-200 shadow-sm hover:shadow text-base md:text-lg">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard