function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
      
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-300 leading-tight">
            Hi 👋,<br />
            My name is
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mt-2">
            Shohaab Aslam
          </h2>

          <p className="text-3xl md:text-5xl font-semibold text-gray-400 mt-4">
            I build things for web <br />
            Expert In MERN Full Stack Application Agentic AI Enthusiast Researcher 
          </p>

        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-r from-blue-400 to-purple-500">
            
            <img
              src="/images/profile.jpeg"   // 👉 replace with your image
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
            
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;