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
    id: 'the-dark-side',
    title: 'THE DARK SIDE',
    category: 'FB Ad',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative food photography and branding project',
    backgroundColor: '#fbbf24',
    client: 'Food Brand',
    tools: ['Photoshop', 'Meta Ads Manager', 'Canva'],
    overview: 'Created a comprehensive food photography and branding project for a premium food brand.',
    goals: [
      'Increase brand awareness among target demographic',
      'Generate leads for online coaching programs',
      'Build engaged social media community'
    ],
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Reach', value: '50K+' },
        { label: 'Engagement Rate', value: '8.5%' },
        { label: 'Leads Generated', value: '120' },
        { label: 'Cost per Lead', value: 'Rs. 250' }
      ],
      quote: {
        text: 'The creative work exceeded our expectations and helped establish our brand identity.',
        author: 'John Doe',
        position: 'Brand Manager'
      }
    }
  },
  {
    id: 'justice-robot',
    title: 'JUSTICE ROBOT',
    category: 'Post Design',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Industrial design and 3D modeling project',
    backgroundColor: '#9ca3af',
    client: 'Tech Company',
    tools: ['Photoshop', 'Illustrator'],
    overview: 'Created industrial design concepts and 3D models for a tech startup.',
    goals: [
      'Create innovative product designs',
      'Create consistent brand identity',
      'Develop prototypes'
    ],
    gallery: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Design Concepts', value: '15' },
        { label: 'Prototypes', value: '5' },
        { label: 'Client Satisfaction', value: '100%' }
      ]
    }
  },
  {
    id: 'color-current',
    title: 'COLOR CURRENT',
    category: 'Videography',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vintage camera photography and styling project',
    backgroundColor: '#7dd3fc',
    client: 'Photography Studio',
    tools: ['Photoshop', 'Premiere Pro', 'Meta Ads Manager'],
    overview: 'Created vintage-inspired photography series featuring retro cameras and styling.',
    goals: [
      'Create nostalgic visual content',
      'Showcase vintage aesthetics',
      'Build photography portfolio'
    ],
    gallery: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Photos Taken', value: '200+' },
        { label: 'Client Projects', value: '12' },
        { label: 'Social Engagement', value: '85%' }
      ],
      quote: {
        text: 'The vintage photography style perfectly captured our brand essence.',
        author: 'Sarah Johnson',
        position: 'Creative Director'
      }
    }
  },
  {
    id: 'subsequent-sneeze',
    title: 'SUBSEQUENT SNEEZE',
    category: 'Social Media Managing',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Minimalist product design and branding',
    backgroundColor: '#d4a574',
    client: 'Lifestyle Brand',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    overview: 'Developed minimalist product design and branding for a lifestyle brand.',
    goals: [
      'Create clean, minimalist aesthetic',
      'Develop brand identity',
      'Appeal to modern consumers'
    ],
    gallery: [
      'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Brand Recognition', value: '90%' },
        { label: 'Sales Increase', value: '60%' },
        { label: 'Customer Satisfaction', value: '95%' }
      ]
    }
  },
  {
    id: 'wiggly-finger',
    title: 'WIGGLY FINGER',
    category: 'Thumbnails',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative fashion and lifestyle photography',
    backgroundColor: '#10b981',
    client: 'Fashion Brand',
    tools: ['Photoshop', 'Lightroom'],
    overview: 'Created creative fashion and lifestyle photography for a modern brand.',
    goals: [
      'Showcase fashion products',
      'Create lifestyle content',
      'Build brand awareness'
    ],
    gallery: [
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Photo Shoots', value: '25' },
        { label: 'Social Reach', value: '500K+' },
        { label: 'Engagement Rate', value: '12%' }
      ]
    }
  },
  {
    id: 'share-spark',
    title: 'SHARE SPARK',
    category: 'Post Design',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Audio equipment design and branding project',
    backgroundColor: '#fbbf24',
    client: 'Audio Company',
    tools: ['Photoshop', 'Lightroom', 'After Effects'],
    overview: 'Designed branding and marketing materials for premium audio equipment.',
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
  },
  {
    id: 'random-risk',
    title: 'RANDOM RISK',
    category: 'Videography',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sports and lifestyle photography project',
    backgroundColor: '#0ea5e9',
    client: 'Sports Brand',
    tools: ['Photoshop', 'Lightroom'],
    overview: 'Created dynamic sports and lifestyle photography for athletic brand.',
    goals: [
      'Capture athletic performance',
      'Create inspiring content',
      'Build brand identity'
    ],
    gallery: [
      'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Campaign Reach', value: '1M+' },
        { label: 'Engagement Rate', value: '15%' }
      ]
    }
  },
  {
    id: 'stream-shop',
    title: 'STREAM SHOP',
    category: 'Video Editing',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'E-commerce branding and packaging design',
    backgroundColor: '#dc2626',
    client: 'E-commerce Brand',
    tools: ['Illustrator', 'Photoshop'],
    overview: 'Developed comprehensive branding and packaging for e-commerce platform.',
    goals: [
      'Create memorable unboxing experience',
      'Build brand recognition',
      'Increase customer loyalty'
    ],
    gallery: [
      'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Customer Satisfaction', value: '98%' },
        { label: 'Repeat Purchases', value: '45%' }
      ]
    }
  },
  {
    id: 'freezing-birthday',
    title: 'FREEZING BIRTHDAY',
    category: 'Social Media Managing',
    image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative product design and styling',
    backgroundColor: '#ca8a04',
    client: 'Design Studio',
    tools: ['Photoshop', 'Illustrator'],
    overview: 'Created unique product designs with creative styling and photography.',
    goals: [
      'Develop unique aesthetic',
      'Create viral content',
      'Build design portfolio'
    ],
    gallery: [
      'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    outcome: {
      stats: [
        { label: 'Social Shares', value: '50K+' },
        { label: 'Design Awards', value: '3' }
      ]
    }
  }
];