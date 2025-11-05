# Structure Images Directory

Place your structure identification images in this folder.

## Required Images

Add the following images to make the "Structure Types" deck work:

1. **slab-foundation.jpg** - Photo of a slab-on-grade foundation
2. **gable-roof.jpg** - Photo of a gable roof
3. **hip-roof.jpg** - Photo of a hip roof
4. **crawl-space.jpg** - Photo of a crawl space foundation
5. **platform-framing.jpg** - Photo of platform/stick-built framing
6. **mansard-roof.jpg** - Photo of a mansard roof
7. **basement-foundation.jpg** - Photo of a full basement foundation
8. **flat-roof.jpg** - Photo of a flat/low-slope roof
9. **floor-joists.jpg** - Photo of floor joist system
10. **brick-veneer.jpg** - Photo of brick veneer wall system

## Image Requirements

- **Format:** JPG, PNG, or WebP
- **Size:** Recommended 800-1200px wide
- **Aspect Ratio:** 4:3 or 16:9 works best
- **File Size:** Keep under 500KB per image (compress if needed)
- **Quality:** Clear, well-lit photos showing the structure clearly

## Where to Find Images

**Option 1: Take Your Own Photos**
- During inspections
- From your own library
- Make sure you have rights to use them

**Option 2: Use Stock Photos**
- Unsplash.com (free, no attribution required)
- Pexels.com (free, no attribution required)
- Pixabay.com (free)

**Option 3: Use Educational Resources**
- HUD.gov housing resources
- FEMA building guides
- University construction programs

**Search Terms Examples:**
- "slab on grade foundation construction"
- "gable roof residential"
- "crawl space foundation"
- "residential framing construction"

## After Adding Images

1. Place all images in this directory: `public/images/structures/`
2. Ensure filenames match exactly (case-sensitive)
3. Test by running: `npm run dev`
4. Navigate to the "Structure Types" deck
5. Images should display on the flashcards

## Placeholder Behavior

Until you add images, the cards will show a broken image icon. The deck will still be functional - users can flip cards to see the answers even without images.

## Adding More Structure Cards

To add more structure identification cards:

1. Find or take a photo of the structure
2. Save it in this directory
3. Edit `src/data/decks.ts`
4. Add a new card to the 'structure-types' deck with:
   ```javascript
   {
     id: 'st-11',
     question: 'What type of structure is shown?',
     answer: 'Description of the structure and key identifying features...',
     category: 'Structure',
     imageUrl: '/images/structures/your-image-name.jpg'
   }
   ```

## Image Copyright

⚠️ **Important:** Ensure you have the right to use all images. For commercial use:
- Take your own photos
- Use royalty-free stock photos
- Purchase licensed images
- Get written permission from photographers
