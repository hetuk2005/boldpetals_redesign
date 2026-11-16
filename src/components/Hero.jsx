import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { playChime } from '../utils/sound';

export default function Hero() {
  const { addToCart } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: "fairy-birthday-hamper",
      collectionTag: "COLLECTION VOL. 01 — CELESTIAL DREAMS",
      title: "The Fairy Birthday Hamper",
      tagline: "Woven in ambient fairy lights, bespoke tiaras & whispered poetry.",
      price: 2699,
      originalPrice: 3099,
      badge: "Viral Sensation",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85",
      accent: "from-atelier-wine to-atelier-crimson",
    },
    {
      id: "light-wala-jhumka",
      collectionTag: "COLLECTION VOL. 02 — ROYAL ILLUMINATION",
      title: "Light Wala Jhumka",
      tagline: "Subtle micro-LED warmth meets antique gold Awadhi filigree.",
      price: 899,
      originalPrice: 1499,
      badge: "Trending ₹600 Off",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
      accent: "from-amber-950 to-atelier-wine",
    },
    {
      id: "shinchan-viral-box",
      collectionTag: "COLLECTION VOL. 03 — POP CULTURE ARCHIVE",
      title: "Shinchan Viral Box",
      tagline: "Nostalgic anime whimsy, bespoke tumblers & collector keepsakes.",
      price: 2099,
      originalPrice: 2899,
      badge: "Fan Favorite",
      image: "https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=1200&q=85",
      accent: "from-atelier-crimson to-rose-950",
    }
  ];

  // Auto rotate slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const current = heroSlides[activeSlide];

  const handleNext = () => {
    playChime('click');
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    playChime('click');
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleQuickAdd = () => {
    playChime('unboxing');
    addToCart({
      id: current.id,
      title: current.title,
      price: current.price,
      image: current.image
    });
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-atelier-obsidian pt-6 pb-12 sm:pb-16">
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-atelier-wine/30 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-atelier-rose/15 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        
        {/* Top Lookbook Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="font-syne text-xs uppercase tracking-[0.25em] text-atelier-gold">
              {current.collectionTag}
            </span>
          </div>

          {/* Interactive Slide Counters & Arrows */}
          <div className="flex items-center gap-4 font-syne text-xs">
            <span className="text-atelier-pearl tracking-widest font-bold">
              0{activeSlide + 1} <span className="text-atelier-sand/40">/ 0{heroSlides.length}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-atelier-pearl hover:border-atelier-rose hover:text-atelier-rose transition-colors"
                aria-label="Previous Lookbook Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-atelier-pearl hover:border-atelier-rose hover:text-atelier-rose transition-colors"
                aria-label="Next Lookbook Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Statement */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Superhead Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-atelier-rose/20 text-xs font-syne uppercase tracking-widest text-atelier-pearl">
              <Sparkles className="w-3.5 h-3.5 text-atelier-gold animate-pulse" />
              <span>Awadhi Craftsmanship • Curated in Lucknow</span>
            </div>

            {/* Monumental Editorial Headline */}
            <div className="space-y-2">
              <h1 className="font-italiana text-5xl sm:text-7xl xl:text-8xl text-atelier-pearl leading-[0.95] tracking-tight">
                Emotions, <br />
                <span className="italic font-serif text-atelier-rose font-normal">unboxed in pure</span> splendour.
              </h1>
            </div>

            {/* Description */}
            <p className="text-atelier-sand/80 text-sm sm:text-base max-w-lg font-sans font-light leading-relaxed">
              {current.tagline} Beyond gifts—Bold Petals creates sensory heirlooms, glowing jhumka sets, and bespoke unboxings designed to make hearts stop.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleQuickAdd}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-atelier-rose via-atelier-crimson to-atelier-wine hover:from-atelier-crimson hover:to-atelier-rose text-white px-8 py-4 rounded-full font-syne text-xs uppercase tracking-widest font-bold shadow-glow-rose hover:scale-[1.02] transition-all duration-300"
              >
                <span>Acquire This Piece — ₹{current.price.toLocaleString('en-IN')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#unboxing-lab"
                className="inline-flex items-center justify-center gap-2 border border-atelier-champagne/20 hover:border-atelier-gold text-atelier-pearl hover:text-atelier-gold px-7 py-4 rounded-full font-syne text-xs uppercase tracking-widest transition-all duration-300 glass-card"
              >
                <Plus className="w-3.5 h-3.5 text-atelier-gold" />
                <span>Custom Box Studio</span>
              </a>
            </div>

            {/* Slide Quick Select Tabs */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 overflow-x-auto no-scrollbar">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => { playChime('click'); setActiveSlide(idx); }}
                  className={`text-left transition-all duration-300 flex-shrink-0 group ${
                    activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <div className="font-syne text-[10px] uppercase tracking-widest text-atelier-gold font-bold">
                    0{idx + 1}
                  </div>
                  <div className="font-italiana text-sm text-atelier-pearl group-hover:text-atelier-rose">
                    {slide.title}
                  </div>
                </button>
              ))}
            </div>

          </div>

          {/* Right Hero Visual (Full-Bleed Editorial Frame with Floating Elements) */}
          <div className="lg:col-span-5 relative">
            
            {/* The Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-dramatic group aspect-[4/5] bg-atelier-velvet">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian/90 via-atelier-obsidian/20 to-transparent"></div>

              {/* Bottom Frame Details */}
              <div className="absolute bottom-6 left-6 right-6 text-atelier-pearl">
                <span className="inline-block bg-atelier-gold/90 text-atelier-obsidian font-syne text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-2">
                  {current.badge}
                </span>
                <h3 className="font-italiana text-2xl sm:text-3xl font-normal leading-tight">
                  {current.title}
                </h3>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/15">
                  <div className="flex items-baseline gap-2">
                    <span className="font-syne text-lg font-bold text-atelier-pearl">
                      ₹{current.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-atelier-sand/50 line-through">
                      ₹{current.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] font-syne uppercase tracking-widest text-atelier-sand/70">
                    Inspected & Wrapped in Lucknow
                  </span>
                </div>
              </div>

              {/* Floating Rotating Atelier Seal */}
              <div className="absolute top-5 right-5 w-20 h-20 rounded-full border border-white/20 glass-card flex items-center justify-center animate-spin-slow">
                <svg className="w-16 h-16 text-atelier-gold" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="font-syne text-[8px] uppercase tracking-[0.25em] fill-atelier-pearl">
                    <textPath xlinkHref="#circlePath">
                      • BOLD PETALS ATELIER • ESTD 2023 •
                    </textPath>
                  </text>
                </svg>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
