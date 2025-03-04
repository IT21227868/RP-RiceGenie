const Navbar = () => {
  return (
    <div className="bg-darkgreen" id="navbar">
      <nav className="bg-darkgreen shadow-lg p-5">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-10">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="text-2xl font-bold text-primary">
                  <img src="./logo.png" alt="" className="w-16"/>
                </a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/variety-input"
                    className="text-white text-[16px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Variety Prediction
                  </a>
                  <a
                    href="/varieties"
                    className="text-white text-[16px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    All Rice Varieties
                  </a>
                  <a
                    href="/variety-process"
                    className="text-white text-[16px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Recommendation Process
                  </a>
                  <a
                    href=""
                    className="text-white text-[16px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Crop Calendar
                  </a>
                  <a
                    href=""
                    className="text-white text-[16px] hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md font-medium transition duration-300 ease-in-out"
                  >
                    Variety Distribution
                  </a>
                </div>
              </div>
            </div>
            {/* Profile Image Section */}
            <div className="flex items-center space-x-4 ms-40">
              <a href="/profile">
                <img
                  src="https://r2.erweima.ai/imgcompressed/compressed_99726877699680553dd6912404bcbb83.webp" // Replace with the correct path to your profile image
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
