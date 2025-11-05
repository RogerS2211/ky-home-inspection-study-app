# PWA Icon Instructions

The app requires two PNG icons for full PWA functionality:

- `icon-192.png` - 192x192 pixels
- `icon-512.png` - 512x512 pixels

## Temporary Development Icons

For development, the app will work without PNG icons, but you won't be able to install it as a PWA.

## Creating Icons

### Option 1: Online Tool (Easiest)
1. Visit https://realfavicongenerator.net/
2. Upload the `icon.svg` file from this directory
3. Download the generated icons
4. Rename and place them in this directory

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first, then run:
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png
```

### Option 3: Manual Design
Create 192x192 and 512x512 pixel PNG images with:
- Blue background (#1e40af)
- House emoji or icon in the center
- White or light colored icon for contrast

## Design Specifications

- Background color: #1e40af (primary blue)
- Icon: House/Home symbol
- Style: Simple, flat, professional
- Format: PNG with transparency support
- Purpose: "any maskable" (works on all platforms)
