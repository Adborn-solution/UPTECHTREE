import React from "react";
import "../styles/BlogPage.css";

const BlogPage = () => {
  const blogs = [
    {
      title: "Top 7 Benefits of Having a Professional Business Website",
      date: "January 12, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "Web Development Trends Every Business Should Know in 2025",
      date: "January 10, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "Mobile Apps vs Websites: Which One is Better for Your Business?",
      date: "January 8, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "Why Cloud Solutions Are Important for Modern Businesses",
      date: "January 6, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "How UI/UX Design Impacts Your Customer Experience",
      date: "December 18, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "Top 7 Benefits of Having a Professional Business Website",
      date: "January 10, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "Top 7 Benefits of Having a Professional Business Website",
      date: "January 8, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
    {
      title: "Top 7 Benefits of Having a Professional Business Website",
      date: "January 6, 2025",
      time: "5 min read",
      img: "/images/blog1.png",
    },
  ];

  return (
    <div className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <span className="badge">✦ Blog</span>

        <h1>
          Insights, Ideas & <span>Technology Trends</span>
        </h1>

        <p>
          Explore recent insights, latest technology trends, and practical guides
          to help your business grow in the digital world.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="blog-container">

        <h3 className="section-title">Latest Blog</h3>

        <div className="blog-grid">

          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt="" />

              <div className="blog-content">

                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span>{blog.time}</span>
                </div>

                <h4>{blog.title}</h4>

                <p>
                  A professional website builds trust, improves visibility, and
                  helps you attract more customers.
                </p>

                <a href="/blog-details">Read More →</a>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">

        <h3>Subscribe to Our Newsletter</h3>
        <p>Stay updated with the latest technology insights and business tips.</p>

        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>

      </section>

    </div>
  );
};

export default BlogPage;