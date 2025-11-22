# Jegede Lab Website

A professional research lab website for **Dr. Olukayode O. Jegede**, Assistant Professor of Environmental Toxicology at UC Davis.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
jegede-lab/
├── public/
│   ├── images/          # Lab photos, portraits, logos
│   └── favicon.ico
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Next.js pages
│   ├── data/            # JSON data files
│   └── styles/          # Global styles
├── package.json
└── tailwind.config.js
```

## Customization

### Adding Images

Place images in `public/images/` and update the paths in:
- `src/data/people.json` for team member photos
- `src/data/youtube.json` for video thumbnails

### Updating Content

Edit JSON files in `src/data/`:
- `publications.json` - Research publications
- `people.json` - Lab members
- `research.json` - Research projects
- `youtube.json` - YouTube videos

### Colors

UC Davis brand colors are configured in `tailwind.config.js`:
- Navy Blue: `#022851`
- Gold: `#FFBF00`

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Jegede Lab, UC Davis. All rights reserved.






