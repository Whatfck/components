const StepperLateral = () => (
  <div className="w-72 bg-white rounded-[32px] p-8 shadow-sm h-[700px] relative overflow-hidden">
    <div className="w-10 h-10 bg-indigo-600 rounded-xl mb-12 flex items-center justify-center text-white font-bold">●</div>
    <div className="space-y-12 relative">
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100 -z-0"></div>
      {[
        { step: 1, title: 'Basic Details', status: 'completed' },
        { step: 2, title: 'Company Details', status: 'completed' },
        { step: 3, title: 'Subscription plan', status: 'active' },
        { step: 4, title: 'Payment details', status: 'pending' },
      ].map((s, i) => (
        <div key={i} className="flex items-center gap-4 relative z-10">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
            s.status === 'completed' ? 'bg-green-500 text-white' : 
            s.status === 'active' ? 'border-2 border-indigo-600 bg-white text-indigo-600' : 'bg-gray-100 text-gray-400'
          }`}>
            {s.status === 'completed' ? '✓' : s.step}
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">Step {s.step}</p>
            <p className={`text-sm font-bold ${s.status === 'pending' ? 'text-gray-300' : 'text-gray-800'}`}>{s.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StepperLateral;