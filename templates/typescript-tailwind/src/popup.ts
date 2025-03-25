import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div class="min-h-screen bg-gray-100 p-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Chrome Extension Template
              </div>
              <p class="mt-1 text-gray-500">
                This is a template for creating Chrome extensions with TypeScript and Tailwind CSS.
              </p>
              <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}); 