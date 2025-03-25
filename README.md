# Chrome Extension Templates

A collection of boilerplate templates for creating Chrome extensions with different tech stacks.

## Available Templates

### React + Tailwind CSS
A modern template using React 18 with TypeScript and Tailwind CSS for styling.
- React 18 with TypeScript support
- Tailwind CSS for styling
- Webpack configuration
- ESLint and Prettier setup
- Popup, background, and content script examples

### TypeScript + Tailwind CSS
A lightweight template using TypeScript and Tailwind CSS.
- TypeScript support
- Tailwind CSS for styling
- Webpack configuration
- ESLint and Prettier setup
- Popup, background, and content script examples

## Getting Started

1. Choose a template from the `templates` directory:
   - `react-tailwind/` for React + Tailwind CSS
   - `typescript-tailwind/` for TypeScript + Tailwind CSS

2. Copy the template to your new project:
   ```bash
   cp -r templates/react-tailwind your-extension-name
   # or
   cp -r templates/typescript-tailwind your-extension-name
   ```

3. Navigate to your project directory:
   ```bash
   cd your-extension-name
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start development:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

7. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory

## Project Structure

Each template follows a similar structure:
```
├── public/              # Static files
│   ├── manifest.json   # Chrome extension manifest
│   ├── popup.html      # Popup HTML file
│   └── icons/          # Extension icons
├── src/                # Source files
│   ├── popup.ts(x)     # Popup script/component
│   ├── background.ts   # Background script
│   ├── content.ts(x)   # Content script/component
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
├── webpack.config.cjs  # Webpack configuration
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.cjs # PostCSS configuration
```

## Development

Each template includes the following npm scripts:
- `npm run dev`: Start development mode with hot reloading
- `npm run build`: Build for production
- `npm run watch`: Watch for changes and rebuild
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Contributing

Feel free to:
1. Submit issues and enhancement requests
2. Create new templates for different tech stacks
3. Improve existing templates
4. Add new features to templates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
