import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center pb-16 relative z-0">
      {/* Badge */}
      <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24">
        <p>AI-Powered City Relocation Assistant</p>
        <Link to="/search" className="flex items-center gap-1 font-medium hover:text-indigo-400 transition-colors">
          Explore
          <svg className="mt-0.5" width="19" height="19" viewBox="0 0 19 19" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3.959 9.5h11.083m0 0L9.501 3.96m5.541 5.54-5.541 5.542" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Find Your Perfect City to Relocate
      </h1>

      {/* Subtitle */}
      <p className="text-slate-300 md:text-base text-center max-w-2xl mt-3 max-md:px-2 line-clamp-3">
        Unlock your potential with tailored locality strategies. Discover ideal neighborhoods based on budget, commute, safety, and lifestyle preferences using our AI engine.
      </p>

      {/* CTA Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-8 text-sm">
        <Link to="/search" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-center flex items-center justify-center">
          Start Searching
        </Link>
        <Link to="/map" className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 hover:bg-white/20 transition rounded-full px-6 py-3">
          <span>Explore Map</span>
          <svg className="mt-0.5" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* City Images */}
      <div aria-label="Photos of cities" className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6 justify-center">
        <img alt="City 1" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140" width="120"
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=735&auto=format&fit=crop" />
        <img alt="City 2" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140" width="120"
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=687&auto=format&fit=crop" />
        <img alt="City 3" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140" width="120"
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=687&auto=format&fit=crop" />
        <img alt="City 4" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140" width="120"
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=687&auto=format&fit=crop" />
        <img alt="City 5" className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140" width="120"
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=764&auto=format&fit=crop" />
      </div>
    </div>
  );
};

export default Home;
