function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex gap-2 bg-black">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name "
        className="flex-1 px-4 py-2 rounded text-black outline-none"
      />

      <button
        onClick={onSearch}
        className="px-5 py-2 bg-white text-black rounded hover:bg-black hover:text-red-600  duration-300 "
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
