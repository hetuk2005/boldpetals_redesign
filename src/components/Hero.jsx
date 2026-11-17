import React from 'react';
import { ArrowRight, Plus, Sparkles, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Hero() {
  const { addToCart } = useCart();

  const featuredProduct = {
    id: "fairy-birthday-hamper",
    title: "Fairy Birthday Hamper",
    price: 2699,
    originalPrice: 3099,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <section className="relative overflow-hidden py-10 lg:py-16 bg-gradient-to-b from-white via-theme-light to-theme-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-theme-tint border border-theme-border rounded-full px-4 py-1.5 text-xs text-theme-primary font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-theme-primary" />
              <span>Pan-India Online Gifting • Delivering Across India</span>
              <span className="text-theme-accent font-bold">★ 4.9/5</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-theme-dark leading-[1.12]">
              Surprise your favorites with <br className="hidden sm:inline" />
              <span className="text-theme-primary italic">gifting that feels like pure magic.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-theme-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover India's favorite aesthetic gift hampers, trending illuminated jhumkas, and Korean hair accessories. Every box arrives wrapped with satin ribbons, fairy lights, and your personalized handwritten message.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#hampers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-theme-primary hover:bg-theme-primaryHover text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                <span>Shop Viral Hampers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#build-box"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-theme-tint text-theme-primary border border-theme-border px-7 py-4 rounded-full font-bold text-sm transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Build A Custom Box</span>
              </a>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-6 border-t border-theme-border grid grid-cols-3 gap-3 text-left">
              <div className="space-y-1">
                <div className="text-xs font-bold text-theme-dark">100% Unboxing Guarantee</div>
                <div className="text-[11px] text-theme-muted">Continuous video replacement</div>
              </div>
              <div className="space-y-1 border-l border-theme-border pl-3">
                <div className="text-xs font-bold text-theme-dark">Free Calligraphy Card</div>
                <div className="text-[11px] text-theme-muted">Handwritten note in every box</div>
              </div>
              <div className="space-y-1 border-l border-theme-border pl-3">
                <div className="text-xs font-bold text-theme-dark">Pan-India Express</div>
                <div className="text-[11px] text-theme-muted">Live WhatsApp updates</div>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Banner Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover border-4 border-white bg-white group">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-theme-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 shadow-sm">
                    Most Loved Birthday Hamper
                  </span>
                  <h3 className="font-serif text-2xl font-bold">{featuredProduct.title}</h3>
                  
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">₹{featuredProduct.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-white/70 line-through">₹{featuredProduct.originalPrice.toLocaleString('en-IN')}</span>
                    </div>

                    <button
                      onClick={() => addToCart(featuredProduct)}
                      className="bg-white text-theme-primary hover:bg-theme-tint font-bold text-xs px-4 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge Card: Light Wala Jhumka */}
              <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-lg border border-theme-border flex items-center gap-3 max-w-[210px] hidden sm:flex">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=150&q=80"
                  alt="Light Wala Jhumka"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[10px] text-theme-primary font-bold uppercase">Trending Hit</span>
                  <p className="text-xs font-bold text-theme-dark leading-tight">Light Wala Jhumka</p>
                  <p className="text-xs font-bold text-theme-primary">₹899 <span className="text-[10px] text-stone-400 line-through">₹1,499</span></p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
