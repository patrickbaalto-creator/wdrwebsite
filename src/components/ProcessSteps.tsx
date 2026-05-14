import { FadeUp } from './FadeUp';

export function ProcessSteps({ steps }: { steps: { n: string; title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
      {steps.map((step, idx) => (
        <FadeUp key={idx} delay={idx * 0.1} className="relative z-10 text-center">
          <div className="w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-300 flex items-center justify-center text-white font-bold text-xl mb-5 mx-auto">
            {step.n}
          </div>
          <h3 className="font-bold text-xl text-white mb-3">{step.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
        </FadeUp>
      ))}
      <div className="hidden lg:block absolute top-[27px] left-[80px] right-[80px] h-[1px] bg-gradient-to-r from-blue-300/0 via-blue-300/40 to-blue-300/0 z-0" />
    </div>
  );
}
