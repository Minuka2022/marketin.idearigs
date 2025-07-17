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
    title: 'Fitness Coach Instagram Ads',
    category: 'Ad Campaign',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-converting Instagram ad campaign for a fitness coach targeting young professionals',
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
    title: 'Mathematics Tuition Thumbnails',
    category: 'Thumbnail Design',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eye-catching YouTube thumbnails for mathematics tuition classes',
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
    title: 'Restaurant Social Media Campaign',
    category: 'Content Creation',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete social media content strategy for a local restaurant',
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
    title: 'Tech Startup VFX Video',
    category: 'VFX Video',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional VFX promotional video for a tech startup',
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
];