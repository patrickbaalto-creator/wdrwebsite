import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { Play, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const videos = [
  { title: 'Full Roof Replacement — Cedar Park TX', cat: 'Roof Installation', time: '2:34' },
  { title: 'Hail Damage Inspection Walkthrough', cat: 'Storm Damage', time: '4:15' },
  { title: 'Metal Roof Installation Time-lapse', cat: 'Time-lapse', time: '1:50' },
  { title: 'Water Damage Restoration Before & After', cat: 'Water Damage', time: '3:20' },
  { title: 'GAF Shingle Installation Process', cat: 'Roof Installation', time: '5:45' },
  { title: 'Storm Damage Assessment — Round Rock', cat: 'Storm Damage', time: '3:05' },
  { title: 'Commercial Flat Roof Install', cat: 'Commercial', time: '4:40' },
  { title: 'WDR Team in Action — Austin', cat: 'Our Team', time: '2:15' },
  { title: 'Reroof Project — Georgetown TX', cat: 'Roof Replacement', time: '3:55' }
];

export default function VideoGallery() {
  useEffect(() => { document.title = "Video Gallery | WDR"; }, []);

  const [activeVid, setActiveVid] = useState(false);

  return (
    <div className="bg-[#09090a]">
      <PageHero height="40vh" eyebrow="Portfolio" title={<>See WDR <em>In Action</em>.</>} />
      
      {activeVid && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm">
           <button onClick={() => setActiveVid(false)} className="absolute top-6 right-6 text-white hover:text-[#c9a96e] transition-colors"><X className="w-10 h-10"/></button>
           <div className="w-full max-w-5xl aspect-video bg-[#111113] rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
              <Play className="w-16 h-16 text-[#c9a96e] mb-4 opacity-50" />
              <h3 className="font-display text-3xl text-white mb-2">Video playback</h3>
              <p className="text-white/50 font-light">Actual video embed goes here.</p>
           </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Video Gallery' }]} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28 mt-8">
           {videos.map((v, i) => (
             <div key={i} className="glass p-4 rounded-2xl group border-[#c9a96e]/10">
               <div onClick={() => setActiveVid(true)} className="aspect-video bg-[#111113] rounded-xl mb-6 relative overflow-hidden cursor-pointer border border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.1)_0%,transparent_60%)] group-hover:opacity-100 opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-[#c9a96e] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(201,169,110,0.6)]">
                      <Play className="w-6 h-6 text-[#09090a] ml-1" />
                    </div>
                  </div>
                  {/* Subtle placeholder pattern */}
                  <div className="absolute inset-0 opacity-10 flex flex-wrap"><div className="w-full h-1/4 border-b border-white"></div><div className="w-full h-1/4 border-b border-white"></div></div>
               </div>
               <div className="px-2">
                 <div className="flex justify-between items-center mb-3">
                    <span className="text-[0.65rem] uppercase tracking-widest text-[#c9a96e] font-semibold">{v.cat}</span>
                    <span className="text-[0.65rem] text-[#7a756e] border border-white/10 px-2 py-0.5 rounded-sm">{v.time}</span>
                 </div>
                 <h3 className="font-display text-[1.35rem] text-[#f3ede0] leading-snug group-hover:text-[#c9a96e] transition-colors">{v.title}</h3>
               </div>
             </div>
           ))}
        </div>

        <CtaBanner headline="Ready to start your own project?" />
      </div>
    </div>
  )
}
