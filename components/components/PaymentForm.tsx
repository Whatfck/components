const PaymentForm = () => (
  <div className="bg-white rounded-[32px] p-8 shadow-sm space-y-6">
    <div className="flex flex-col items-start gap-1 border-b pb-4">
      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">S</div>
      <span className="text-xs font-bold text-gray-500">Step 4 / 5</span>
      <span className="text-sm font-bold text-gray-800">Payment Details</span>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-gray-900 uppercase">Card Details</label>
        <p className="text-sm text-gray-400 bg-gray-50 rounded-xl p-3">Alex Parkinson</p>
        <div className="w-[80%] mx-auto h-px bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <span>💳</span>
          <span className="text-sm text-gray-900">4858 3445</span>
        </div>
        <div className="w-[80%] mx-auto h-px bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4">
        <button className="text-gray-400 font-bold text-sm">← Previous</button>
        <button className="bg-indigo-600 text-white rounded-xl py-3 font-bold text-sm">Next →</button>
      </div>
    </div>
  </div>
);

export default PaymentForm;