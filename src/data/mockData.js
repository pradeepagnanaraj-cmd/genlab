// Mock Data for School Supplies Exchange Platform

export const CATEGORIES = [
  {
    id: "books",
    name: "Books",
    icon: "📚",
    bgColor: "#E0F2FE", // Soft blue
    color: "#0369A1",
    count: 42
  },
  {
    id: "notebooks",
    name: "Notebooks",
    icon: "📓",
    bgColor: "#F3E8FF", // Soft purple
    color: "#7E22CE",
    count: 28
  },
  {
    id: "backpacks",
    name: "Backpacks",
    icon: "🎒",
    bgColor: "#DCFCE7", // Soft green
    color: "#15803D",
    count: 19
  },
  {
    id: "stationery",
    name: "Stationery",
    icon: "✏️",
    bgColor: "#FEF9C3", // Soft yellow
    color: "#A16207",
    count: 54
  },
  {
    id: "calculators",
    name: "Calculators",
    icon: "🧮",
    bgColor: "#FFE4E6", // Soft pink
    color: "#BE123C",
    count: 15
  },
  {
    id: "art-supplies",
    name: "Art Supplies",
    icon: "🎨",
    bgColor: "#FFEDD5", // Soft orange
    color: "#C2410C",
    count: 23
  },
  {
    id: "others",
    name: "Others",
    icon: "📦",
    bgColor: "#E0F2FE", // Soft cyan
    color: "#0891B2",
    count: 31
  }
];

export const INITIAL_ITEMS = [
  {
    id: "1",
    title: "Thomas Calculus (14th Edition) Hardcover",
    category: "Books",
    price: 15.00,
    isFree: false,
    condition: "Like New",
    location: "Central Campus Library, Block A",
    description: "Used for one semester. Great condition with no highlighting inside. Perfect for Engineering and Math majors.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u101",
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviewsCount: 18,
      verified: true,
      joined: "Sep 2024"
    },
    postedDate: "2 days ago",
    views: 142
  },
  {
    id: "2",
    title: "TI-84 Plus CE Graphing Calculator",
    category: "Calculators",
    price: 45.00,
    isFree: false,
    condition: "Good",
    location: "North Student Center",
    description: "Works perfectly! Includes rechargeable battery, charging cable, and protective cover. Slight cosmetic scratches on back.",
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u102",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5.0,
      reviewsCount: 32,
      verified: true,
      joined: "Jan 2024"
    },
    postedDate: "1 day ago",
    views: 230
  },
  {
    id: "3",
    title: "Ergonomic Water-resistant Backpack (Dark Blue)",
    category: "Backpacks",
    price: 0,
    isFree: true,
    condition: "Like New",
    location: "West Dorms Hall 3",
    description: "Donating my spare laptop backpack. Fits up to 15.6 inch laptops, padded straps, multiple pockets. Clean and unused!",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u103",
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      reviewsCount: 12,
      verified: true,
      joined: "Mar 2025"
    },
    postedDate: "3 hours ago",
    views: 89
  },
  {
    id: "4",
    title: "5-Pack Spiral College Ruled Notebooks (Unopened)",
    category: "Notebooks",
    price: 5.00,
    isFree: false,
    condition: "Brand New",
    location: "Science Complex Plaza",
    description: "Brand new pack of 5 subjects spiral notebooks. Bought extra for last semester that I didn't use.",
    image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u104",
      name: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      rating: 4.7,
      reviewsCount: 9,
      verified: false,
      joined: "May 2025"
    },
    postedDate: "4 days ago",
    views: 75
  },
  {
    id: "5",
    title: "Professional Acrylic Paint Set & Canvas Pack",
    category: "Art Supplies",
    price: 12.00,
    isFree: false,
    condition: "Like New",
    location: "Fine Arts Studio B",
    description: "24 colors acrylic paint tubes (most unopened) plus 3 blank 8x10 cotton canvas panels and brushes.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u105",
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviewsCount: 21,
      verified: true,
      joined: "Feb 2024"
    },
    postedDate: "Just now",
    views: 31
  },
  {
    id: "6",
    title: "Faber-Castell Highlighters & Gel Pen Bundle",
    category: "Stationery",
    price: 0,
    isFree: true,
    condition: "Good",
    location: "Student Union Lounge",
    description: "Free study bundle! 6 pastel highlighters, 10 black gel pens, and sticky notes. Giving away to anyone who needs them.",
    image: "https://images.unsplash.com/photo-1585336261026-8f5786372969?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u101",
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviewsCount: 18,
      verified: true,
      joined: "Sep 2024"
    },
    postedDate: "5 hours ago",
    views: 112
  },
  {
    id: "7",
    title: "Organic Chemistry Model Kit (Molymod)",
    category: "Others",
    price: 18.00,
    isFree: false,
    condition: "Like New",
    location: "Chemistry Lab Building",
    description: "Complete 200-piece molecular model kit. Essential for O-Chem 1 & 2. All pieces included in original plastic box.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u102",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5.0,
      reviewsCount: 32,
      verified: true,
      joined: "Jan 2024"
    },
    postedDate: "3 days ago",
    views: 164
  },
  {
    id: "8",
    title: "Casio FX-991EX Scientific Calculator",
    category: "Calculators",
    price: 20.00,
    isFree: false,
    condition: "Like New",
    location: "Engineering Quad",
    description: "Solar powered non-programmable scientific calculator. Approved for all standardized engineering exams.",
    image: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48e?auto=format&fit=crop&w=600&q=80",
    seller: {
      id: "u106",
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5.0,
      reviewsCount: 15,
      verified: true,
      joined: "Aug 2024"
    },
    postedDate: "1 week ago",
    views: 198
  }
];

export const INITIAL_USER = {
  id: "",
  name: "Student User",
  email: "",
  mobile: "",
  avatar: ""
};

export const INITIAL_NOTIFICATIONS = [
  {
    id: "n1",
    title: "New Message Received",
    message: "Sarah Chen sent you a message about 'TI-84 Plus CE Calculator'",
    time: "10 minutes ago",
    read: false,
    type: "message",
    link: "/messages"
  },
  {
    id: "n2",
    title: "Item Listed Successfully",
    message: "Your item 'Organic Chemistry Textbook' is now live on the exchange platform.",
    time: "2 hours ago",
    read: false,
    type: "system",
    link: "/my-listings"
  },
  {
    id: "n3",
    title: "Item Saved as Favorite",
    message: "A user saved your listed item 'Art Brush Set' as favorite.",
    time: "Yesterday",
    read: true,
    type: "alert",
    link: "/my-listings"
  },
  {
    id: "n4",
    title: "Platform Community Milestone",
    message: "Over 1,000 school supplies exchanged this month! Thank you for participating.",
    time: "3 days ago",
    read: true,
    type: "system",
    link: "/about"
  }
];

export const INITIAL_CONVERSATIONS = [
  {
    id: "c1",
    partner: {
      id: "u102",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      online: true
    },
    item: {
      id: "2",
      title: "TI-84 Plus CE Graphing Calculator",
      price: "$45.00"
    },
    messages: [
      { id: "m1", sender: "u102", text: "Hi! Is the TI-84 calculator still available?", timestamp: "10:15 AM" },
      { id: "m2", sender: "me", text: "Hello Sarah! Yes it is. Would you like to meet at the North Student Center?", timestamp: "10:18 AM" },
      { id: "m3", sender: "u102", text: "That works great for me! Does 2 PM today suit you?", timestamp: "10:20 AM" }
    ],
    unread: 1,
    lastUpdated: "10:20 AM"
  }
];
