const TimeRemainingCard = () => (
  <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">📄</div>
      <div>
        <p className="text-[10px] text-gray-400 font-bold uppercase">Step 2</p>
        <p className="text-sm font-bold text-gray-800">Application Review</p>
      </div>
    </div>
    <div className="bg-indigo-600 rounded-2xl p-4 text-white">
      <p className="text-[10px] uppercase opacity-80">Time Remaining</p>
      <p className="text-xl font-bold">48 hours</p>
      <div className="w-full bg-white/20 h-1.5 rounded-full mt-3 overflow-hidden">
        <div className="bg-white h-full w-2/3"></div>
      </div>
    </div>
  </div>
);

export default TimeRemainingCard;