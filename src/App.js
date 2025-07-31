import React, { useState } from 'react';
import { Flower2, Sparkles, Box, Palette, Store, Mail, Instagram, Facebook, Twitter, Menu, X, Blocks, Lightbulb } from 'lucide-react'; // Added Lightbulb icon for Eco-Fact

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ecoFact, setEcoFact] = useState("Click the button to get an amazing eco-fact!");
  const [isLoadingFact, setIsLoadingFact] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      <div className="p-3 bg-blue-100 rounded-full mb-4">
        {icon && React.createElement(icon, { className: "w-8 h-8 text-blue-600" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  // Function to generate an eco-fact using Gemini API
  const generateEcoFact = async () => {
    setIsLoadingFact(true);
    setEcoFact("Generating a fresh eco-fact for you...");

    let chatHistory = [];
    const prompt = "Generate a concise (max 2-3 sentences) and interesting eco-fact or sustainability tip for a children's eco-friendly toy website. Make it easy to understand and positive.";
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // If you want to use models other than gemini-2.5-flash-preview-05-20 or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    let response;
    let result;
    let retries = 0;
    const maxRetries = 5;
    const baseDelay = 1000; // 1 second

    while (retries < maxRetries) {
      try {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          result = await response.json();
          break; // Exit loop if successful
        } else if (response.status === 429) {
          // Too Many Requests - implement exponential backoff
          const delay = baseDelay * Math.pow(2, retries);
          await new Promise(resolve => setTimeout(resolve, delay));
          retries++;
        } else {
          // Other errors
          console.error('API Error:', response.status, response.statusText);
          const errorBody = await response.text();
          console.error('Error details:', errorBody);
          setEcoFact("Failed to load eco-fact. Please try again later.");
          break; // Do not retry for non-rate limit errors
        }
      } catch (error) {
        console.error('Network or fetch error:', error);
        setEcoFact("Network error. Please check your connection.");
        break; // Exit loop on network error
      }
    }

    if (result && result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      const text = result.candidates[0].content.parts[0].text;
      setEcoFact(text);
    } else {
      setEcoFact("Could not generate eco-fact. Try again!");
    }
    setIsLoadingFact(false);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 font-inter text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50 rounded-b-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-green-600" /> Resin Era
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
            <a href="#product-showcase" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a> {/* New link */}
            <a href="#impact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Our Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>
          <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={toggleMenu}>About Us</a>
            <a href="#product-showcase" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={toggleMenu}>Products</a> {/* New link */}
            <a href="#impact" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={toggleMenu}>Our Impact</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium py-2" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[70vh] flex items-center justify-center text-white text-center p-4 overflow-hidden rounded-b-3xl shadow-lg"
          style={{ backgroundImage: "url('https://i.ibb.co/8LyN0bny/Whats-App-Image-2025-07-28-at-21-01-13.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50 rounded-b-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
              Playtime That Doesn't Pollute.
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
              Discover eco-friendly, durable, and artistic toys that shape a better future.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white rounded-xl shadow-xl mx-auto my-12 max-w-6xl p-8 relative overflow-hidden"
          style={{ backgroundImage: "url('https://i.ibb.co/6RMK13B4/R.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-white opacity-80"></div> {/* Semi-transparent overlay for readability */}
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
              The Resin Era Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Flower2}
                title="Eco-Friendly Materials"
                description="Crafted from sustainable resin, our toys are a safe alternative to traditional plastics, reducing environmental impact."
              />
              <FeatureCard
                icon={Sparkles}
                title="Premium & Artistic Design"
                description="Each Resin Era toy is a piece of art, designed to be visually appealing and inspire creativity in children."
              />
              <FeatureCard
                icon={Blocks}
                title="Durable & Long-Lasting"
                description="Built to withstand years of play, our toys are designed for longevity, reducing waste and offering lasting value."
              />
              <FeatureCard
                icon={Box}
                title="Smaller Carbon Footprint"
                description="From production to disposal, we minimize our environmental impact, ensuring a healthier planet for future generations."
              />
              <FeatureCard
                icon={Palette}
                title="Inspiring Creativity"
                description="Our unique designs and DIY kits encourage imagination, problem-solving, and artistic expression."
              />
              <FeatureCard
                icon={Store}
                title="Ethically Sourced"
                description="We partner with local artists and ensure ethical practices throughout our supply chain, supporting communities."
              />
            </div>
          </div>
        </section>

        {/* Eco-Fact of the Day Section (Gemini API Integration) */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-xl mx-auto my-12 max-w-6xl p-8 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 flex items-center justify-center gap-3">
              <Lightbulb className="w-9 h-9 text-yellow-500" /> ✨ Eco-Fact of the Day ✨
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              {ecoFact}
            </p>
            <button
              onClick={generateEcoFact}
              disabled={isLoadingFact}
              className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingFact ? 'Generating...' : 'Get a New Eco-Fact'}
            </button>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section id="product-showcase" className="py-16 bg-white rounded-xl shadow-xl mx-auto my-12 max-w-6xl p-8 relative overflow-hidden"
          style={{ backgroundImage: "url('https://i.ibb.co/CpHkQZ8J/R-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-white opacity-80"></div> {/* Semi-transparent overlay for readability */}
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
              Our Product Showcase
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/GvRzXTV3/Whats-App-Image-2025-07-29-at-21-56-09.jpg"
                  alt="Product 1"
                  className="w-48 h-48 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x192/E0E0E0/666666?text=Product+1"; }}
                />
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/7JYx2jRs/Whats-App-Image-2025-07-29-at-22-08-41.jpg"
                  alt="Product 2"
                  className="w-48 h-48 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x192/E0E0E0/666666?text=Product+2"; }}
                />
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/Csbfcqft/Whats-App-Image-2025-07-29-at-22-23-19.jpg"
                  alt="Product 3"
                  className="w-48 h-48 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x192/E0E0E0/666666?text=Product+3"; }}
                />
              </div>
              <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/0RSxHzZm/Whats-App-Image-2025-07-29-at-22-18-07.jpg"
                  alt="Product 4"
                  className="w-48 h-48 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x192/E0E0E0/666666?text=Product+4"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - MOVED HERE */}
        <section className="py-16 bg-blue-50 rounded-xl shadow-xl mx-auto my-12 max-w-6xl p-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://i.ibb.co/SXZf4LXt/maxresdefault.jpg"
                alt="Plastic waste problem"
                className="rounded-lg shadow-lg w-full"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/666666?text=Plastic+Problem"; }}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                The Hidden Cost of Plastic Toys
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Did you know that most plastic toys are made from synthetic materials like PVC and polystyrene, full of chemicals that can leach into the environment and even end up in kids' mouths?
              </p>
              <p className="text-lg text-gray-700 mb-4">
                These toys don't decompose for hundreds of years, contributing to massive landfills and breaking down into harmful microplastics that enter our food chain.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Resin Era offers a conscious choice for a healthier planet and safer playtime.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-16 bg-blue-50 rounded-xl shadow-xl mx-auto my-12 max-w-6xl p-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
              Our Vision: Shaping a Better Future
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-lg text-gray-700 mb-4">
                  At Resin Era, we believe that the only thing that should outlast childhood are the values kids grow up with. By choosing eco-friendly toys, we're not just playing; we're teaching responsibility and environmental consciousness from a young age.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our commitment extends beyond just products. We're building a movement, evolving into an eco-conscious lifestyle brand for kids, from toys to gifts to educational tools.
                </p>
                <p className="text-lg text-gray-700 font-semibold">
                  Join us in building a future where playtime doesn't pollute.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://i.ibb.co/jkmChsjY/w3-DHg-UGU8v-Ukrt3-Fd-Rr-Ybg.jpg"
                  alt="Kids and nature"
                  className="rounded-lg shadow-lg w-full"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/666666?text=Future+Impact"; }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12 mt-12 rounded-t-lg">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Connect with Resin Era</h2>
          <p className="text-lg mb-8">
            Have questions or want to collaborate? Reach out to us!
          </p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="mailto:resinera6@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
              <Mail className="w-6 h-6" /> resinera6@gmail.com
            </a>
            {/* You can add a phone number here if applicable */}
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/shopresinera" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} resinera.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
