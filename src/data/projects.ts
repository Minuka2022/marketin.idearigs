export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  tools: string[];
  overview: string;
  goals: string[];
  gallery: string[];
  backgroundColor?: string;
  outcome: {
    stats?: { label: string; value: string }[];
    quote?: {
      text: string;
      author: string;
      position: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: 'fitness-coach-ads',
    title: 'FITNESS COACH ADS',
    category: 'Creative',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-converting Instagram ad campaign for a fitness coach targeting young professionals',
    backgroundColor: '#fef3c7',
    client: 'FitLife Coach',
    tools: ['Photoshop', 'Meta Ads Manager', 'Canva'],
    overview: 'Created a comprehensive Instagram ad campaign for a fitness coach targeting busy professionals aged 25-40 in Colombo. The campaign focused on quick home workouts and nutrition tips.',
    goals: [
      'Increase brand awareness among target demographic',
      'Generate leads for online coaching programs',
      'Build engaged social media community'
    ],
    gallery: [
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Reach', value: '50K+' },
        { label: 'Engagement Rate', value: '8.5%' },
        { label: 'Leads Generated', value: '120' },
        { label: 'Cost per Lead', value: 'Rs. 250' }
      ],
      quote: {
        text: 'Idearigs transformed my online presence completely. The ad campaigns they created brought me more clients than I ever imagined!',
        author: 'Saman Perera',
        position: 'Fitness Coach'
      }
    }
  },
  {
    id: 'tuition-class-thumbnails',
    title: 'MATH TUITION BRAND',
    category: 'Design',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eye-catching YouTube thumbnails for mathematics tuition classes',
    backgroundColor: '#a7f3d0',
    client: 'MathGenius Academy',
    tools: ['Photoshop', 'Illustrator'],
    overview: 'Designed a series of YouTube thumbnails for a popular mathematics tuition class in Kandy. The thumbnails needed to stand out and attract A/L students.',
    goals: [
      'Increase YouTube video click-through rates',
      'Create consistent brand identity',
      'Appeal to A/L mathematics students'
    ],
    gallery: [
      'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'CTR Improvement', value: '45%' },
        { label: 'Video Views', value: '25K+' },
        { label: 'Subscriber Growth', value: '300%' }
      ]
    }
  },
  {
    id: 'restaurant-social-media',
    title: 'SPICE GARDEN SOCIAL',
    category: 'Photo',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete social media content strategy for a local restaurant',
    backgroundColor: '#fecaca',
    client: 'Spice Garden Restaurant',
    tools: ['Photoshop', 'Premiere Pro', 'Meta Ads Manager'],
    overview: 'Developed a comprehensive social media strategy for a traditional Sri Lankan restaurant, including food photography, video content, and targeted advertising.',
    goals: [
      'Increase foot traffic to restaurant',
      'Build online brand presence',
      'Showcase authentic Sri Lankan cuisine'
    ],
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Instagram Followers', value: '5K+' },
        { label: 'Monthly Reach', value: '100K+' },
        { label: 'Revenue Increase', value: '35%' }
      ],
      quote: {
        text: 'Our restaurant has never been busier! The social media campaigns brought so many new customers.',
        author: 'Nimal Silva',
        position: 'Restaurant Owner'
      }
    }
  },
  {
    id: 'tech-startup-vfx',
    title: 'INNOVATE VFX VIDEO',
    category: 'Style',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional VFX promotional video for a tech startup',
    backgroundColor: '#bfdbfe',
    client: 'InnovateLK',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    overview: 'Created a high-impact promotional video with advanced VFX for a Sri Lankan tech startup launching their mobile app.',
    goals: [
      'Create buzz around app launch',
      'Demonstrate app features visually',
      'Attract potential investors'
    ],
    gallery: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Video Views', value: '100K+' },
        { label: 'App Downloads', value: '10K+' },
        { label: 'Investor Interest', value: '15 Meetings' }
      ]
    }
  }
  {
    id: 'brand-packaging',
    title: 'PREMIUM PACKAGING',
    category: 'Style',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury product packaging design for premium brand',
    backgroundColor: '#d4a574',
    client: 'Luxury Brand Co.',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    overview: 'Designed premium packaging for a luxury product line targeting high-end consumers.',
    goals: [
      'Create premium brand perception',
      'Stand out on retail shelves',
      'Enhance unboxing experience'
    ],
    gallery: [
      'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Sales Increase', value: '40%' },
        { label: 'Brand Recognition', value: '85%' }
      ]
    }
  },
  {
    id: 'headphone-campaign',
    title: 'AUDIO EXPERIENCE',
    category: 'Design',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Product photography and marketing campaign for premium headphones',
    backgroundColor: '#fbbf24',
    client: 'SoundWave Audio',
    tools: ['Photoshop', 'Lightroom', 'After Effects'],
    overview: 'Created a comprehensive marketing campaign for premium headphones including product photography and video content.',
    goals: [
      'Showcase product quality',
      'Target audiophile market',
      'Increase online sales'
    ],
    gallery: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Online Sales', value: '60%' },
        { label: 'Engagement', value: '12%' }
      ]
    }
  }
];