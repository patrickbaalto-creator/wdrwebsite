import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { useState } from 'react';
import { useSEO } from '../utils/seo';

export default function Blog() {
  useSEO({
    title: 'Roofing Blog & Guides | WDR Austin',
    description: 'Expert roofing tips, storm damage guides, maintenance advice, and Austin weather insights from WDR — Austin\'s top-rated roofing company.',
    canonical: '/blog',
  });

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Maintenance', 'Storm Damage', 'Installation', 'Water Damage', 'Tips'];
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);
  
  const featured = posts.find(p => p.slug === 'true-cost-of-delaying-roof-repairs') || posts[0];
  const gridPosts = filtered.filter(p => p.slug !== featured.slug);

  return (
    <div className="bg-[#09090a]">
      <PageHero height="40vh" eyebrow="Insights" title={<>Roofing <em>Tips & Insights</em>.</>} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Blog' }]} />
        
        {/* Featured inside All */}
        {filter === 'All' && (
          <div className="mb-20">
            <Link to={`/blog/${featured.slug}`} className="block relative rounded-3xl overflow-hidden group">
              <div className="aspect-[16/9] lg:aspect-[21/9] relative">
                <img src={featured.coverImage} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt={featured.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090a] via-[#09090a]/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                   <span className="bg-[#c9a96e] text-[#09090a] px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider mb-4 inline-block">{featured.category}</span>
                   <h2 className="font-display text-3xl lg:text-5xl text-[#f3ede0] leading-tight mb-4 max-w-4xl">{featured.title}</h2>
                   <p className="text-[#f3ede0]/70 font-light mb-6 max-w-2xl hidden md:block">{featured.excerpt}</p>
                   <div className="flex items-center gap-6">
                     <span className="text-sm font-light text-[#f3ede0]/50">{featured.date} · {featured.readTime}</span>
                     <span className="text-[#c9a96e] text-sm uppercase tracking-wider font-semibold border-b border-[#c9a96e] pb-0.5">Read Article &rarr;</span>
                   </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map(c => (
            <button 
              key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${filter === c ? 'bg-[#c9a96e] text-[#09090a]' : 'glass text-[#f3ede0] hover:bg-white/10'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {gridPosts.map(p => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="glass overflow-hidden rounded-2xl group flex flex-col hover:border-[#c9a96e]/30">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={p.coverImage} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt={p.title} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#c9a96e] text-xs font-semibold uppercase tracking-wider mb-3 block">{p.category}</span>
                <h3 className="font-display text-2xl text-[#f3ede0] leading-snug mb-3 hover:text-[#c9a96e] transition-colors">{p.title}</h3>
                <p className="text-[#f3ede0]/60 font-light text-sm line-clamp-2 mb-6 flex-1">{p.excerpt}</p>
                <div className="flex justify-between items-center pt-5 border-t border-white/10">
                   <span className="text-xs text-[#7a756e] font-light">{p.date} · {p.readTime}</span>
                   <span className="text-xs text-[#c9a96e] font-semibold uppercase tracking-wider">Read &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
          {gridPosts.length === 0 && <p className="text-[#f3ede0]/50 font-light lg:col-span-3 text-center py-20">No posts in this category yet.</p>}
        </div>
      </div>
    </div>
  )
}
