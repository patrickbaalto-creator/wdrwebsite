import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Jeremy Garcia', location: 'Austin, TX', text: 'Had a roof leak, reached out to Austin Roofing Company. Daniel Harvey came out, gave his opinion on how to get the problem fixed with a good quote. Was able to get the repair completed before the issue got worse. Thanks again Daniel Harvey for getting the job done.' },
  { name: 'Kirby Schimmels', location: 'Austin, TX', text: 'Dan is great, excellent service from start to finish. They repaired the damaged shingles quickly, matched everything perfectly, and cleaned up afterward. Professional, honest, and reasonably priced — highly recommend!' },
  { name: 'Susanne', location: 'Austin, TX', text: 'Jon was very professional and arrived on time. He found the source of the leak and shared the photos with me. Other people who came in to look into the issue completely missed the source of the problem. Very happy with Austin Roofing and would use them for any roofing issues.' },
  { name: 'Melissa Moehring', location: 'North Austin, TX', text: 'Brad Farr at Austin Roofing Company did an amazing job on our duplex. He met with me the same day we contacted him and handled the whole process to help us get it covered by insurance from hail damage. I would highly recommend Brad and this company.' },
  { name: 'Tommy N.', location: 'Austin, TX', text: 'I worked with Daniel — he provided a very detailed roof inspection report! He\'s professional, fast to respond — highly recommend!' },
  { name: 'Rachel Oliver', location: 'Austin, TX', text: 'Jon showed up for us when we had a roof leak! He diagnosed the problem and immediately took care of it. No upselling, just a quick explanation and minor repair. So refreshing to encounter that with home services! We will definitely call them again.' },
]

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <div key={idx} className="glass border-[#c9a96e]/10 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />)}
            </div>
            <p className="font-display italic text-[#f3ede0] text-lg leading-relaxed mb-6">"{t.text}"</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
              <span className="text-[#c9a96e] font-bold text-lg">{t.name[0]}</span>
            </div>
            <div>
              <p className="text-[0.8rem] font-medium text-[#c9a96e] uppercase tracking-wider">{t.name}</p>
              <p className="text-[0.8rem] text-[#7a756e]">{t.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
