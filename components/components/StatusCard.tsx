const StatusCard = () => (
  <div className="bg-indigo-600 rounded-3xl p-6 text-white space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-xs">✓</div>
        <span className="font-bold">Card Details</span>
      </div>
      <span className="text-[10px] bg-green-400/20 px-2 py-1 rounded-full text-green-200">Completed</span>
    </div>
    <div className="border-l-2 border-white/20 ml-4 pl-6 py-2">
      <div className="flex justify-between items-center">
        <span className="font-bold">Form Review</span>
        <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">In Progress</span>
      </div>
      <p className="text-[10px] opacity-70 mt-2">Application and forms will go through a step by step review process.</p>
    </div>
  </div>
);

export default StatusCard;