import React from 'react';
import { Heart } from 'lucide-react';

export default function InstagramGrid() {
  const posts = [
    { image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=350&q=80', likes: '1.2k' },
    { image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=350&q=80', likes: '2.8k' },
    { image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=350&q=80', likes: '3.5k' },
    { image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=350&q=80', likes: '940' },
    { image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=350&q=80', likes: '4.1k' },
    { image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=350&q=80', likes: '1.8k' }
  ];

  return (
    <section className="py-12 bg-white border-t border-brand-rose/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-widest font-bold text-brand-rose">
          @boldpetals.in
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-wine mt-1">
          Join the #BoldPetalsClub
        </h2>
        <p className="text-stone-500 text-xs sm:text-sm mt-1">
          Tag us in your unboxing reels to be featured and win ₹1,000 gift vouchers monthly!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8">
          {posts.map((post, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden group relative">
              <img
                src={post.image}
                alt={`Community Post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-wine/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>{post.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
