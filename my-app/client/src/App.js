import React from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import './App.css';

function App() {
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: "Computer Science Club",
      organization: "CSE Department",
      avatar: "",
      timeAgo: "2h ago",
      category: "Tech",
      title: "Hackathon 2025: Build the Future",
      description: "Join us for a 24-hour hackathon where you'll collaborate with fellow students to create innovative solutions. All skill levels welcome! Free food, prizes, and great networking opportunities await.",
      eventDate: "Dec 15, 2025 • 9:00 AM",
      location: "Computer Science Building, Room 101",
      attendees: 0,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      likes: 0,
      comments: 0,
      shares: 0
    },
    {
      id: 2,
      author: "Student Activities Board",
      organization: "SAB",
      avatar: "",
      timeAgo: "4h ago",
      category: "Social",
      title: "Winter Wonderland Party 🎄",
      description: "Get ready for the most magical night of the semester! Join us for music, dancing, hot cocoa, and winter festivities. Don't miss out on this amazing celebration with your fellow students!",
      eventDate: "Dec 20, 2025 • 7:00 PM",
      location: "Student Union Ballroom",
      attendees: 0,
      image: "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&q=80",
      likes: 0,
      comments: 0,
      shares: 0
    },
    {
      id: 3,
      author: "Career Development Center",
      organization: "Career Services",
      avatar: "",
      timeAgo: "6h ago",
      category: "Career",
      title: "Spring Career Fair - 200+ Employers",
      description: "Connect with top employers from across the nation! This is your chance to network, interview, and land internships or full-time positions. Dress professionally and bring plenty of resumes.",
      eventDate: "Jan 25, 2026 • 10:00 AM - 4:00 PM",
      location: "Main Arena",
      attendees: 0,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      likes: 0,
      comments: 0,
      shares: 0
    },
    {
      id: 4,
      author: "Biology Research Lab",
      organization: "Biology Department",
      avatar: "",
      timeAgo: "8h ago",
      category: "Research",
      title: "Undergraduate Research Opportunities",
      description: "We're looking for motivated students to join our marine biology research team. This is a paid position with flexible hours that will give you hands-on experience in a cutting-edge lab environment.",
      eventDate: "Applications due: Dec 31, 2025",
      location: "Life Sciences Building",
      attendees: 0,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      likes: 0,
      comments: 0,
      shares: 0
    },
    {
      id: 5,
      author: "International Student Association",
      organization: "ISA",
      avatar: "",
      timeAgo: "1d ago",
      category: "Cultural",
      title: "Global Food Festival",
      description: "Experience flavors from around the world! Our annual food festival features authentic dishes from over 30 countries, cultural performances, and a chance to celebrate our diverse community.",
      eventDate: "Jan 15, 2026 • 5:00 PM",
      location: "Campus Green (Weather permitting)",
      attendees: 0,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      likes: 0,
      comments: 0,
      shares: 0
    },
    {
      id: 6,
      author: "Fitness & Wellness Center",
      organization: "Campus Recreation",
      avatar: "",
      timeAgo: "1d ago",
      category: "Wellness",
      title: "Free Yoga & Meditation Sessions",
      description: "Start your semester off right! Join us for free yoga and meditation sessions every Monday, Wednesday, and Friday. All levels welcome - bring your own mat or borrow one of ours.",
      eventDate: "Starting Jan 10, 2026 • 7:00 AM",
      location: "Recreation Center, Studio A",
      attendees: 0,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      likes: 0,
      comments: 0,
      shares: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Feed Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Campus Feed</h2>
          <p className="text-gray-600 dark:text-gray-400">Discover events, opportunities, and connect with your community</p>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium">
            Load More Posts
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
