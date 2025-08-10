import React from 'react';

// Main App component
function App() {
  // Array of product data with new image URLs
  const products = [
    {
      name: 'Eco-Friendly Animal Puzzles',
      description: 'Handcrafted puzzles for a smarter, greener playtime.',
      image: 'https://i.ibb.co/qYL0XyC9/Whats-App-Image-2025-08-02-at-22-11-18-1.jpg', // New product image URL
      alt: 'Eco-Friendly Animal Puzzles',
    },
    {
      name: 'Resin Miniature Car Collection',
      description: 'Durable, artistic, and safe. A collector\'s dream.',
      image: 'https://i.ibb.co/MxbJf5NK/Whats-App-Image-2025-08-02-at-22-11-16.jpg', // New product image URL
      alt: 'Resin Miniature Car Collection',
    },
    {
      name: 'Ocean Wave Keychains',
      description: 'Carry a piece of the ocean with you, a reminder of what we protect.',
      image: 'https://i.ibb.co/BHWY18S6/Whats-App-Image-2025-08-02-at-22-11-17.jpg', // New product image URL
      alt: 'Ocean Wave Keychains',
    },
    {
      name: 'Custom Resin Art Frames',
      description: 'Preserve your memories in a beautiful, sustainable way.',
      image: 'https://i.ibb.co/VchPFszc/Whats-App-Image-2025-07-31-at-23-01-23.jpg', // New product image URL
      alt: 'Custom Resin Art Frames',
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Header and Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">Resin Era</a>
          <div className="flex space-x-6 text-lg font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
            <a href="#impact" className="hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-cover bg-center h-[70vh] flex items-center" style={{ backgroundImage: "url(/hero-bg.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Sustainable Fun, <br />Artistic Play.</h1>
          <p className="text-xl md:text-2xl font-medium mb-8">Crafted with care, designed for a better world.</p>
          <a href="#products" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">Explore Collection</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story: From Plastic to Purpose</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600">
            Resin Era was born from a simple idea: playtime shouldn't come at the cost of our planet. We handcraft beautiful, durable toys from eco-friendly resin, offering a sustainable alternative to mass-produced plastic toys that harm our environment.
          </p>
          <div className="flex justify-center">
            <img src="/about-bg.jpg" alt="A child playing with a resin toy" className="rounded-3xl shadow-xl w-full max-w-lg" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Sustainable Creations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={product.image} alt={product.alt} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Every Resin Era toy you choose helps reduce plastic waste and supports a cleaner planet for future generations.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">The Plastic Problem</h3>
              <p className="text-lg mb-4">
                Plastic toys contribute to mountains of non-biodegradable waste, taking hundreds of years to break down and releasing harmful chemicals into our environment.
              </p>
              <img src="/plastic-waste.jpg" alt="A landfill filled with plastic waste" className="rounded-2xl shadow-lg mt-4" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Our Solution</h3>
              <p className="text-lg mb-4">
                We use high-quality, eco-friendly resin that is durable, non-toxic, and biodegradable, ensuring that our toys leave a positive legacy, not a negative one.
              </p>
              <img src="/kids-nature.jpg" alt="Children playing in nature" className="rounded-2xl shadow-lg mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Have a question or want to collaborate? Reach out to us.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:info@resinera.com" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">Email Us</a>
            {/* यहां Instagram handle बदल दिया गया है। */}
            <a href="https://www.instagram.com/_resinera__" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg">Instagram</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Resin Era. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
