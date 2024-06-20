const Hero = () => {
  return (
    <section className="py-12 container mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Find Your Next
        <br /> Dream Job
      </h1>
      <p className="text-center text-gray-600"></p>
      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search..."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
};
export default Hero;
