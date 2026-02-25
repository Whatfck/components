import StepperLateral from '@/components/StepperLateral';
import StepperHorizontal from '@/components/StepperHorizontal';
import StatusCard from '@/components/StatusCard';
import TimeRemainingCard from '@/components/TimeRemainingCard';
import PaymentForm from '@/components/PaymentForm';

export default function RecreacionInterfaz() {
  return (
    <main className="min-h-screen bg-[#F0F2F5] p-10 flex gap-8 justify-center items-start font-sans">
      {/* 1. Componente Lateral (Stepper Vertical) */}
      <StepperLateral />

      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {/* 2. Stepper Horizontal Superior */}
        <StepperHorizontal />

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {/* 3. Card de Estado (Azul) */}
            <StatusCard />
            {/* 4. Card de Tiempo Restante */}
            <TimeRemainingCard />
          </div>

          {/* 5. Formulario de Pago */}
          <PaymentForm />
        </div>
      </div>
    </main>
  );
}