import { useParams, Navigate, Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { posts } from '../data/posts';
import * as LucideIcons from 'lucide-react';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  
  useEffect(() => { 
    if(post) document.title = `${post.title} | WDR Blog`; 
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/404" />;

  const related = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-[#09090a]">
      <PageHero height="50vh" eyebrow={post.category} title={<>{post.title}</>} image={post.coverImage} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
           <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full object-cover" alt="Author" />
                 <div>
                   <p className="text-[#f3ede0] font-medium text-sm">WDR Team <span className="text-[#7a756e] font-normal ml-2">Austin Specialists</span></p>
                   <p className="text-[#7a756e] text-sm mt-0.5">{post.date} · {post.readTime}</p>
                 </div>
              </div>

              {/* MD injection logic: we use innerHTML with global CSS styling */}
              <div 
                className="prose prose-invert prose-p:text-[#f3ede0]/70 prose-p:font-light prose-p:leading-[2.2] prose-h2:text-3xl prose-h2:font-display prose-h2:text-[#c9a96e] prose-h2:mt-12 prose-h2:mb-6 max-w-none"
                dangerouslySetInnerHTML={{__html: post.content}} 
              />
              
              <div className="glass p-8 rounded-2xl mt-16 flex flex-col md:flex-row items-center gap-6 text-center md:text-left border-[#c9a96e]/20">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" className="w-20 h-20 rounded-full object-cover hidden md:block" alt="Author" />
                 <div>
                   <p className="text-[#c9a96e] uppercase tracking-widest text-[0.75rem] font-semibold mb-2">Written By</p>
                   <h4 className="font-display text-2xl text-[#f3ede0] mb-2">The WDR Education Team</h4>
                   <p className="text-[#f3ede0]/60 font-light text-sm line-clamp-2">Bringing over 25 years of combined experience to help Austin homeowners make educated decisions regarding their roofs, storm damage, and preventative maintenance.</p>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-4 relative">
              <div className="sticky top-24 space-y-8">
                 <div className="glass-gold p-8 rounded-3xl text-center shadow-2xl">
                    <LucideIcons.Search className="w-10 h-10 text-[#c9a96e] mx-auto mb-4" />
                    <h3 className="font-display text-2xl text-[#f3ede0] mb-3">Free Inspection</h3>
                    <p className="text-[#f3ede0]/70 font-light text-sm mb-6">Found an issue on your roof? Have WDR inspect it for free.</p>
                    <Link to="/contact" className="btn-gold rounded-full w-full block">Get a Quote</Link>
                    <a href="tel:5128206505" className="block text-[#c9a96e] mt-4 text-sm hover:underline">(512) 820-6505</a>
                 </div>

                 {related.length > 0 && (
                   <div className="glass p-6 rounded-3xl">
                      <h4 className="text-[0.75rem] uppercase tracking-widest font-semibold text-[#f3ede0] mb-6">Related Reads</h4>
                      <div className="space-y-6">
                        {related.map(r => (
                          <Link to={`/blog/${r.slug}`} key={r.slug} className="flex gap-4 group">
                             <img src={r.coverImage} className="w-20 h-20 rounded-xl object-cover" alt={r.title} />
                             <div className="flex flex-col justify-center">
                               <h5 className="font-display text-[#f3ede0] leading-snug group-hover:text-[#c9a96e] transition-colors">{r.title}</h5>
                               <span className="text-xs text-[#7a756e] font-light mt-1">{r.readTime}</span>
                             </div>
                          </Link>
                        ))}
                      </div>
                   </div>
                 )}
              </div>
           </div>
        </div>

        <CtaBanner headline="Dealing with an issue discussed here?" sub="Let WDR handle it — free inspection, no pressure." />
      </div>
    </div>
  )
}
