import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const Popup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Chrome Extension Template
            </div>
            <p className="mt-1 text-gray-500">
              This is a template for creating Chrome extensions with React and Tailwind CSS.
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
} 