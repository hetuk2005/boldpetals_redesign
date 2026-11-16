import React from 'react';
import { Heart, Instagram } from 'lucide-react';

export default function InstagramGrid() {
  const posts = [
    { image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80', caption: 'Fairy Unboxing in Jaipur' },
    { image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80', caption: 'Midnight Sangeet Glow' },
    { image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=400&q=80', caption: 'Angelic Lovebox Reveal' },
    { image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80', caption: 'Korean Butterfly Clips' },
    { image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80', caption: '16 Jhumka Collector Tray' },
    { image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=400&q=80', caption: 'Shinchan Box Nostalgia' }
  ];

  return (
    <section className="py-20 bg-atelier-obsidian border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center space-y-2 mb-12">
          <span className="font-syne text-[10px] uppercase tracking-[0.4em] text-atelier-gold font-bold">
            Live From The Atelier
          </span>
          <h2 className="font-italiana text-3xl sm:text-5xl text-atelier-pearl">
            The Visual Journal
          </h2>
          <a
            href="https://www.instagram.com/boldpetals.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-syne uppercase tracking-widest text-atelier-rose hover:text-white mt-1 border-b border-atelier-rose/40 pb-0.5"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@boldpetals.in on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-2xl overflow-hidden group relative border border-white/10"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-atelier-obsidian/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                <Heart className="w-4 h-4 text-atelier-rose fill-atelier-rose mb-1" />
                <span className="font-syne text-[9px] uppercase tracking-wider text-atelier-pearl">
                  {post.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
