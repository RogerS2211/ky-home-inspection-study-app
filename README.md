# Kentucky Home Inspector Study Guide - PWA

A Progressive Web App (PWA) for studying Kentucky home inspector certification materials. Features interactive flashcards, progress tracking, offline support, and mobile-first design.

## Features

- **Interactive Flashcards**: Tap to flip cards with smooth 3D animations
- **Progress Tracking**: Track your study progress with confidence ratings (Hard/Good/Easy)
- **Offline Support**: Works offline after initial load using service workers
- **Installable**: Can be installed on mobile and desktop devices
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Multiple Decks**: Study different topics including:
  - Kentucky Building Codes
  - Electrical Systems
  - Plumbing Basics

## Tech Stack

- **React 18** + **TypeScript** - Modern UI framework with type safety
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Workbox** - Service worker and PWA support
- **Context API** - State management
- **localStorage** - Persistent progress tracking

## Project Structure

```
ky-home-inspector-pwa/
├── public/
│   ├── icons/              # PWA icons
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Card.tsx
│   │   ├── ConfidenceButtons.tsx
│   │   ├── Header.tsx
│   │   └── ProgressBar.tsx
│   ├── contexts/          # React Context for state management
│   │   └── StudyContext.tsx
│   ├── data/              # Flashcard content
│   │   └── decks.ts
│   ├── hooks/             # Custom React hooks
│   │   ├── useCardFlip.ts
│   │   └── useLocalStorage.ts
│   ├── pages/             # Main application pages
│   │   ├── Home.tsx
│   │   ├── DeckSelection.tsx
│   │   └── Study.tsx
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind imports
├── vite.config.ts         # Vite configuration with PWA plugin
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd ky-home-inspector-pwa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Adding New Flashcards

Edit `src/data/decks.ts` to add new decks or cards:

```typescript
{
  id: 'new-deck',
  title: 'New Deck Title',
  description: 'Deck description',
  category: 'Category Name',
  icon: '🎯',
  cards: [
    {
      id: 'card-1',
      question: 'Your question here?',
      answer: 'Your answer here.',
      category: 'Category'
    }
  ]
}
```

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. The production files will be in the `dist/` directory

3. Test the production build locally:
   ```bash
   npm run preview
   ```

## PWA Setup

### Generating Icons

The app needs two icon sizes for PWA support. You can generate them using online tools or the following methods:

#### Option 1: Using Online Tool
1. Use [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your base icon (512x512 recommended)
3. Download the generated icons
4. Place `icon-192.png` and `icon-512.png` in `public/icons/`

#### Option 2: Using ImageMagick (CLI)
```bash
# Install ImageMagick first
convert public/icons/icon.svg -resize 192x192 public/icons/icon-192.png
convert public/icons/icon.svg -resize 512x512 public/icons/icon-512.png
```

#### Option 3: Manual Creation
- Create 192x192px and 512x512px PNG images
- Use the home inspector theme (house icon on blue background #1e40af)
- Save as `icon-192.png` and `icon-512.png` in `public/icons/`

### Testing PWA Features

1. Build and serve the production version
2. Open Chrome DevTools > Application tab
3. Check "Service Workers" and "Manifest" sections
4. Use Lighthouse to audit PWA compliance

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   npm run build
   vercel --prod
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm i -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts` with base path:
   ```typescript
   export default defineConfig({
     base: '/repo-name/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## How to Use

1. **Home Page**: View stats and click "Start Studying"
2. **Deck Selection**: Choose a deck to study
3. **Study Mode**:
   - Tap cards to flip and reveal answers
   - Rate your confidence (Hard/Good/Easy)
   - Use Previous/Next buttons to navigate
   - Progress is automatically saved
4. **Track Progress**: See mastery percentage on deck selection page

## Features Explained

### Progress Tracking
- Each card rating is stored in localStorage
- Cards rated "Easy" twice are marked as "Mastered"
- Study streak tracks consecutive days of study
- All progress persists across sessions

### Confidence Ratings
- 🔴 **Hard**: You didn't know the answer well
- 🟡 **Good**: You knew it with some effort
- 🟢 **Easy**: You knew it immediately

### Offline Support
- Service worker caches all app assets
- Works completely offline after first load
- Progress saves locally in browser

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Troubleshooting

### PWA Not Installing
- Ensure you're using HTTPS (or localhost)
- Check that icons exist in `public/icons/`
- Verify manifest in DevTools > Application > Manifest

### Service Worker Not Updating
- Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Clear cache and reload
- Check "Update on reload" in DevTools > Application > Service Workers

### Progress Not Saving
- Check browser console for localStorage errors
- Verify localStorage is enabled
- Check available storage space

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#1e40af',    // Main brand color
  success: '#10b981',    // Success/mastered
  warning: '#f59e0b',    // Warning/good
  danger: '#ef4444',     // Danger/hard
}
```

### Content
- Add decks: Edit `src/data/decks.ts`
- Modify pages: Edit files in `src/pages/`
- Add features: Create components in `src/components/`

## Future Enhancements

Potential features to add:
- Spaced repetition algorithm (SM-2)
- Search functionality
- Card categories and filtering
- Dark mode
- Export/import progress
- Backend sync for multi-device support
- Social sharing
- Audio pronunciation guides
- Image support for diagrams

## License

This project is provided as-is for educational purposes.

## Credits

Built with ❤️ for Kentucky home inspector students

---

For questions or issues, please open an issue on the GitHub repository.
