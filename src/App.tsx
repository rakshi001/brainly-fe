import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="p-6 bg-white shadow-lg rounded-xl max-w-sm">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Tailwind Works! 🎉
          </h1>
          <p className="text-gray-700">
            This is a small component styled with Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
