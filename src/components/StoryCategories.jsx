import React from 'react';

export default function StoryCategories({ onSelectCategory }) {
  const stories = [
    {
      id: 'hampers',
      name: 'Gift Hampers',
      tag: 'Viral Boxes',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=250&q=80',
    },
    {
      id: 'jewellery',
      name: 'Glowing Jhumkas',
      tag: 'Trending ₹899',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=250&q=80',
    },
    {
      id: 'accessories',
      name: 'Butterfly Claws',
      tag: 'Starts ₹59',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=250&q=80',
    },
    {
      id: 'jewellery',
      name: '16 Jhumka Tray',
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=250&q=80',
    },
    {
      id: 'budget',
      name: 'Under ₹999',
      tag: 'Pocket Friendly',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=250&q=80',
    },
    {
      id: 'hampers',
      name: 'Shinchan Box',
      tag: 'Anime Pop',
      image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=250&q=80',
    },
    {
      id: 'accessories',
      name: 'Velvet Bangle Box',
      tag: 'Bridal Chest',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=250&q=80',
    }
  ];

  return (
    <section className="bg-white py-5 border-b border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Scroller */}
        <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar py-1">
          {stories.map((story, idx) => (
            <button
              key={idx}
              onClick={() => onSelectCategory(story.id)}
              className="flex flex-col items-center flex-shrink-0 text-center w-20 sm:w-24 group focus:outline-none"
            >
              {/* Instagram-style Ring Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-theme-primary to-theme-secondary group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden p-[2px] bg-white">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Title & Micro Tag */}
              <span className="text-xs font-semibold text-theme-dark mt-2 group-hover:text-theme-primary transition-colors line-clamp-1">
                {story.name}
              </span>
              <span className="text-[10px] text-theme-muted">{story.tag}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
