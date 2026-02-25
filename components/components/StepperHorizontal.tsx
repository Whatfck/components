const StepperHorizontal = () => (
  <div className="bg-white rounded-3xl p-6 shadow-sm flex justify-between items-center">
    {['Card Details', 'Form Review', 'Authenticate OTP', 'Create Code'].map((text, i) => (
      <div key={i} className="flex flex-col items-center gap-2 flex-1">
        <div className="flex items-center w-full">
          <div className="h-0.5 bg-gray-100 flex-1"></div>
          <div className="w-6 h-6 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center">✓</div>
          <div className="h-0.5 bg-gray-100 flex-1"></div>
        </div>
        <span className="text-xs font-bold text-gray-800">{text}</span>
      </div>
    ))}
  </div>
);

export default StepperHorizontal;