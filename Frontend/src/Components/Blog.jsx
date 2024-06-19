import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/blog/img1.png';
import img2 from '../assets/blog/img2.jpg';
import img3 from '../assets/blog/img3.jpeg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Latest in Mobile Technology: What to Expect in 2024',
      excerpt: 'Stay ahead with the newest advancements in mobile technology. From foldable phones to 5G networks, find out what\'s coming next...',
      imageUrl: img1,
      link: 'https://libertytechnology.co/mobile-application-development-trends-2024/',
    },
    {
      id: 2,
      title: 'Top 10 Mobile Apps for Productivity',
      excerpt: 'Boost your productivity with these top-rated mobile apps. Whether you\'re managing your schedule, taking notes, or staying connected...',
      imageUrl: img2,
      link: 'https://zapier.com/blog/best-productivity-apps/',
    },
    {
      id: 3,
      title: 'How to Choose the Right Mobile Phone for You',
      excerpt: 'Choosing the perfect mobile phone can be overwhelming. Our comprehensive guide helps you navigate the options and find the best fit...',
      imageUrl: img3,
      link: 'https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/5-tips-for-picking-the-right-smartphone.htm',
    },
  ];

  return (
    <div className="blog-container px-4 lg:px-24 my-20 max-w-7xl mx-auto">
      <h2 className="text-6xl font-bold text-blue-700 mb-12 text-center">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">{post.title}</h3>
              <p className="text-gray-700 mb-6">{post.excerpt}</p>
              <Link to={post.link} className="text-blue-700 font-semibold hover:text-blue-900">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
