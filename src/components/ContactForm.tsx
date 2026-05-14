import { Phone, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { FadeUp } from './FadeUp';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', serviceType: 'Not Sure', bestTime: 'Anytime', message: ''
  });

  if (submitted) {
    return (
      <FadeUp className="glass p-8 rounded-2xl text-center space-y-4 border-[#c9a96e]/20">
        <CheckCircle className="w-12 h-12 text-[#c9a96e] mx-auto mb-4" />
        <h3 className="font-display text-2xl text-[#f3ede0]">We'll be in touch within 2 hours.</h3>
        <p className="text-[#f3ede0]/60">A member of our team will call you at {form.phone}.</p>
      </FadeUp>
    );
  }

  const inputClass = "w-full bg-white/[0.04] border border-white/10 text-[#f3ede0] rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/40 transition-all font-light text-[0.95rem]";
  const labelClass = "block text-[0.75rem] uppercase tracking-[0.1em] text-[#7a756e] mb-1.5";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name</label>
          <input required type="text" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} className={inputClass} placeholder="John Doe" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} placeholder="(512) 555-0199" />
        </div>
      </div>
      
      <div>
        <label className={labelClass}>Email Address</label>
        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} placeholder="john@example.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Service Type</label>
          <select value={form.serviceType} onChange={e => setForm({...form, serviceType: e.target.value})} className={inputClass + " opacity-90"}>
            <option className="bg-[#111113]">Not Sure</option>
            <option className="bg-[#111113]">Roof Inspection</option>
            <option className="bg-[#111113]">Roof Estimate</option>
            <option className="bg-[#111113]">Roof Installation</option>
            <option className="bg-[#111113]">Roof Repair</option>
            <option className="bg-[#111113]">Roof Replacement</option>
            <option className="bg-[#111113]">Reroof</option>
            <option className="bg-[#111113]">Hail Damage</option>
            <option className="bg-[#111113]">Water Damage Restoration</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Best Time to Call</label>
          <select value={form.bestTime} onChange={e => setForm({...form, bestTime: e.target.value})} className={inputClass + " opacity-90"}>
            <option className="bg-[#111113]">Anytime</option>
            <option className="bg-[#111113]">Morning 7–10am</option>
            <option className="bg-[#111113]">Midday 10am–2pm</option>
            <option className="bg-[#111113]">Afternoon 2–6pm</option>
            <option className="bg-[#111113]">Evening 6–8pm</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={inputClass + " resize-none"} placeholder="Tell us about your project or damage..." />
      </div>

      <button type="submit" className="w-full btn-gold rounded-lg mt-2 text-center py-4">
        Send Message &rarr;
      </button>
    </form>
  );
}
