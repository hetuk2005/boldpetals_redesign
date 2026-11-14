import React from 'react';
import { ArrowRight, Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Hero() {
  const { addToCart } = useCart();

  const heroFeaturedProduct = {
    id: "fairy-birthday-hamper",
    title: "Fairy Birthday Hamper",
    price: 2699,
    originalPrice: 3099,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blush rounded-full blur-3xl opacity-70 -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-amber-50 rounded-full blur-3xl opacity-80 -z-10 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-brand-rose/25 rounded-full px-4 py-1.5 shadow-sm text-xs text-brand-wine font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-rose opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-deepRose"></span>
              </span>
              <span>Handcrafted in Lucknow • Aesthetic Gifting Atelier</span>
              <span className="text-brand-gold font-bold">★ 4.9/5</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-brand-wine leading-[1.08]">
              Curated moments, <br />
              <span className="italic font-normal font-serif text-brand-rose">wrapped in petals</span> & pure emotion.
            </h1>

            {/* Subtext */}
            <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Bold Petals isn’t just gifts—it’s the feeling of unforgettable surprises. Discover India’s viral fairy hampers, illuminated jhumka boxes, and Korean aesthetic keepsakes tailored to make hearts flutter.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#hampers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-wine hover:bg-brand-deepRose text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-soft hover:shadow-hover transition-all duration-300 group"
              >
                <span>Explore Viral Hampers</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#build-box"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-blush/60 text-brand-wine border border-brand-rose/30 px-7 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              >
                <Plus className="w-4 h-4 text-brand-gold" />
                <span>Build A Custom Box</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-brand-rose/15 grid grid-cols-3 gap-3 text-left">
              <div className="space-y-1">
                <div className="text-xs font-bold text-brand-wine">100% Unboxing Proof</div>
                <div className="text-[11px] text-stone-500">Damage-safe transit packing</div>
              </div>
              <div className="space-y-1 border-l border-brand-rose/20 pl-3">
                <div className="text-xs font-bold text-brand-wine">Personalized Cards</div>
                <div className="text-[11px] text-stone-500">Handwritten messages inside</div>
              </div>
              <div className="space-y-1 border-l border-brand-rose/20 pl-3">
                <div className="text-xs font-bold text-brand-wine">Pan-India Express</div>
                <div className="text-[11px] text-stone-500">Live WhatsApp tracking</div>
              </div>
            </div>

          </div>

          {/* Right Visual Floating Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={heroFeaturedProduct.image}
                  alt={heroFeaturedProduct.title}
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/85 via-brand-wine/15 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-brand-gold text-brand-wine text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2">
                    Most Loved Viral Box
                  </span>
                  <h3 className="font-serif text-2xl font-bold">{heroFeaturedProduct.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">₹{heroFeaturedProduct.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-white/70 line-through">₹{heroFeaturedProduct.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <button
                      onClick={() => addToCart(heroFeaturedProduct)}
                      className="bg-white text-brand-wine text-xs font-bold px-4 py-2 rounded-full hover:bg-brand-blush transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <span>Add to Bag</span>
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge Card 1 */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-brand-rose/20 flex items-center gap-3 animate-float max-w-[220px]">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80"
                  alt="Light Wala Jhumka"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[10px] text-brand-gold font-bold tracking-wider uppercase">Viral Hit</span>
                  <p className="text-xs font-bold text-brand-wine leading-tight">Light Wala Jhumka</p>
                  <p className="text-xs font-semibold text-brand-rose">
                    ₹899 <span className="text-[10px] text-stone-400 line-through">₹1,499</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge Card 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-brand-rose/20 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Customer 1" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" alt="Customer 2" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80" alt="Customer 3" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-brand-wine">50k+ Smiles</div>
                  <div className="text-[10px] text-stone-500">Unboxing video approved</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
