# Chrome Extension Template with TypeScript and Tailwind CSS

This template provides a foundation for creating Chrome extensions using TypeScript and Tailwind CSS.

## Features

- TypeScript support
- Tailwind CSS for styling
- Webpack configuration for development and production
- ESLint and Prettier setup
- Popup, background, and content script examples

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory

## Project Structure

```
├── public/              # Static files
│   ├── manifest.json   # Chrome extension manifest
│   ├── popup.html      # Popup HTML file
│   └── icons/          # Extension icons
├── src/                # Source files
│   ├── popup.ts        # Popup script
│   ├── background.ts   # Background script
│   ├── content.ts      # Content script
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
├── webpack.config.cjs  # Webpack configuration
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.cjs # PostCSS configuration
```

## Development

- `npm run dev`: Start development mode with hot reloading
- `npm run build`: Build for production
- `npm run watch`: Watch for changes and rebuild
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Adding New Features

1. Create new TypeScript files in the `src` directory
2. Import and use them in `popup.ts` or `content.ts`
3. Add new styles using Tailwind CSS classes
4. Update the manifest.json if you need new permissions

## Contributing

Feel free to submit issues and enhancement requests! 