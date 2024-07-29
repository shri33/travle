import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-4xl">
        <img
          src="/jaipur.jpg"
          alt="Jaipur"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-5xl font-bold">Jaipur</h1>
          <p className="text-xl">Rajasthan</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          className="border rounded py-2 px-4"
          placeholder="Search..."
        />
        <Button onClick={() => alert('Filter Clicked')}>Filter</Button>
      </div>
    </div>
  );
};

export default Home;
