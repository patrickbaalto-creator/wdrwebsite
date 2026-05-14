import { FadeUp } from './FadeUp';

export function ProcessSteps({ steps }: { steps: { n: string; title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
      {steps.map((step, idx) => (
        <FadeUp key={idx} delay={idx * 0.1} className="relative z-10">
          <div className="w-14 h-14 rounded-xl glass-gold flex items-center justify-center text-[#c9a96e] font-display text-2xl mb-6">
            {step.n}
          </div>
          <h3 className="font-display text-2xl text-[#f3ede0] mb-3">{step.title}</h3>
          <p className="text-[0.96rem] font-light leading-[1.9] text-[#f3ede0]/60">{step.desc}</p>
        </FadeUp>
      ))}
      <div className="hidden lg:block absolute top-[27px] left-[40px] right-[40px] h-[1px] bg-gradient-to-r from-[#c9a96e]/0 via-[#c9a96e]/20 to-[#c9a96e]/0 z-0" />
    </div>
  )
}
