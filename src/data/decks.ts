import type { Deck } from '../types';

export const decks: Deck[] = [
  {
    id: 'building-codes',
    title: 'Kentucky Building Codes',
    description: 'Essential building code requirements for Kentucky home inspections',
    category: 'Codes & Standards',
    icon: '🏗️',
    cards: [
      {
        id: 'bc-1',
        question: 'What are the minimum dimensions for an egress window in a sleeping room?',
        answer: 'Minimum opening area of 5.7 square feet, minimum height of 24 inches, minimum width of 20 inches, and maximum sill height of 44 inches from the floor.',
        category: 'Building Codes'
      },
      {
        id: 'bc-2',
        question: 'What is the required height for stairway handrails?',
        answer: 'Handrails must be installed between 34 and 38 inches above the stair nosing. They must be continuous for the full length of the stairs.',
        category: 'Building Codes'
      },
      {
        id: 'bc-3',
        question: 'Where are GFCI outlets required in residential construction?',
        answer: 'GFCI protection is required in bathrooms, kitchens (countertop receptacles), garages, outdoors, crawl spaces, unfinished basements, laundry areas, and within 6 feet of sinks.',
        category: 'Building Codes'
      },
      {
        id: 'bc-4',
        question: 'What is the minimum ceiling height requirement for habitable spaces?',
        answer: 'Habitable rooms must have a minimum ceiling height of 7 feet over at least 50% of the floor area. No portion of the room can be less than 5 feet in height.',
        category: 'Building Codes'
      },
      {
        id: 'bc-5',
        question: 'Where must smoke detectors be installed in a residence?',
        answer: 'Smoke detectors are required in each sleeping room, outside each sleeping area in the immediate vicinity, and on each level of the dwelling including basements.',
        category: 'Building Codes'
      },
      {
        id: 'bc-6',
        question: 'What is the maximum riser height and minimum tread depth for residential stairs?',
        answer: 'Maximum riser height is 7-3/4 inches, and minimum tread depth is 10 inches (measured horizontally). The greatest variation between risers or treads cannot exceed 3/8 inch.',
        category: 'Building Codes'
      },
      {
        id: 'bc-7',
        question: 'What is the minimum guard rail height required for decks and balconies?',
        answer: 'Guards are required when there is a drop of more than 30 inches, and they must be at least 36 inches high measured from the deck surface.',
        category: 'Building Codes'
      },
      {
        id: 'bc-8',
        question: 'What is the maximum spacing allowed between balusters in a guard rail?',
        answer: 'The maximum spacing is 4 inches. This prevents a 4-inch sphere from passing through, which is a child safety requirement.',
        category: 'Building Codes'
      }
    ]
  },
  {
    id: 'electrical-systems',
    title: 'Electrical Systems',
    description: 'Electrical inspection fundamentals and safety requirements',
    category: 'Systems',
    icon: '⚡',
    cards: [
      {
        id: 'el-1',
        question: 'What is the minimum service panel amperage for modern residential homes?',
        answer: '100 amps is the minimum for most modern homes, though 200 amps is now standard for new construction to accommodate increased electrical loads.',
        category: 'Electrical'
      },
      {
        id: 'el-2',
        question: 'What gauge wire is required for a 20-amp circuit?',
        answer: '12 AWG (American Wire Gauge) copper wire is required for 20-amp circuits. 14 AWG is only rated for 15-amp circuits.',
        category: 'Electrical'
      },
      {
        id: 'el-3',
        question: 'What are the most common electrical defects found during home inspections?',
        answer: 'Missing GFCI protection, improper grounding, double-tapped breakers, aluminum wiring connections, insufficient clearances around panels, and overloaded circuits.',
        category: 'Electrical'
      },
      {
        id: 'el-4',
        question: 'What is the purpose of a ground wire in an electrical system?',
        answer: 'The ground wire provides a safe path for electrical current in case of a fault, directing it to the earth and preventing shock hazards. It protects against electrical fires and equipment damage.',
        category: 'Electrical'
      },
      {
        id: 'el-5',
        question: 'What is a double-tapped breaker and why is it a concern?',
        answer: 'A double-tapped breaker has two wires connected to a single breaker terminal not designed for it. This creates a fire hazard due to loose connections and improper current flow.',
        category: 'Electrical'
      },
      {
        id: 'el-6',
        question: 'What is the required working clearance in front of an electrical panel?',
        answer: 'Minimum 36 inches of clear working space in front of the panel, 30 inches wide, and 6.5 feet high. Nothing can be stored in this space.',
        category: 'Electrical'
      },
      {
        id: 'el-7',
        question: 'What special considerations apply to aluminum wiring?',
        answer: 'Aluminum wiring oxidizes and expands/contracts more than copper, creating loose connections. It requires special CO/ALR rated devices and proper connection methods. Many insurance companies flag it.',
        category: 'Electrical'
      },
      {
        id: 'el-8',
        question: 'What is an AFCI breaker and where is it required?',
        answer: 'Arc Fault Circuit Interrupter breakers detect dangerous arcing conditions. They are required for most branch circuits in living areas, bedrooms, and other habitable spaces in newer construction.',
        category: 'Electrical'
      }
    ]
  },
  {
    id: 'plumbing-basics',
    title: 'Plumbing Basics',
    description: 'Fundamental plumbing systems and common issues',
    category: 'Systems',
    icon: '🚰',
    cards: [
      {
        id: 'pl-1',
        question: 'What is the purpose of a P-trap under sinks?',
        answer: 'A P-trap holds water to create a seal that prevents sewer gases from entering the home. It should maintain a 2-4 inch water seal at all times.',
        category: 'Plumbing'
      },
      {
        id: 'pl-2',
        question: 'What is the minimum drain pipe size for a toilet?',
        answer: '3 inches is the minimum drain pipe size for toilets. The main drain line is typically 4 inches in diameter.',
        category: 'Plumbing'
      },
      {
        id: 'pl-3',
        question: 'What is the purpose of plumbing vents?',
        answer: 'Vents allow air into the drainage system to prevent vacuum formation and maintain proper drainage flow. They also allow sewer gases to escape safely above the roof.',
        category: 'Plumbing'
      },
      {
        id: 'pl-4',
        question: 'What is the required temperature and pressure relief valve setting for water heaters?',
        answer: 'T&P relief valves are typically set to open at 150 PSI or 210°F. They must discharge to within 6 inches of the floor through proper piping.',
        category: 'Plumbing'
      },
      {
        id: 'pl-5',
        question: 'What are the most common locations for plumbing leaks?',
        answer: 'Under sinks (supply line connections), around toilets (wax ring, supply line), water heaters (tank bottom, connections), washing machine hoses, and at pipe joints.',
        category: 'Plumbing'
      },
      {
        id: 'pl-6',
        question: 'What is the minimum water pressure for residential plumbing?',
        answer: 'Minimum static water pressure should be 40-45 PSI. Maximum should not exceed 80 PSI (a pressure reducing valve is recommended above 80 PSI).',
        category: 'Plumbing'
      },
      {
        id: 'pl-7',
        question: 'What is the expected lifespan of a standard water heater?',
        answer: 'Conventional tank water heaters typically last 8-12 years. Tankless units can last 15-20 years with proper maintenance. Age can be determined from the serial number.',
        category: 'Plumbing'
      },
      {
        id: 'pl-8',
        question: 'What is cross-contamination in plumbing and how is it prevented?',
        answer: 'Cross-contamination occurs when non-potable water enters the potable water supply. It is prevented using backflow prevention devices, air gaps, and proper installation of fixtures.',
        category: 'Plumbing'
      }
    ]
  },
  {
    id: 'structure-types',
    title: 'Structure Types',
    description: 'Identify common residential structure types and construction methods',
    category: 'Structural',
    icon: '🏘️',
    cards: [
      {
        id: 'st-1',
        question: 'What type of foundation structure is shown?',
        answer: 'Slab-on-Grade Foundation: A concrete slab poured directly on the ground, common in warmer climates. No crawl space or basement. Cost-effective but difficult to access plumbing.',
        category: 'Structure',
        imageUrl: '/images/structures/slab-foundation.jpg'
      },
      {
        id: 'st-2',
        question: 'What type of roof structure is shown?',
        answer: 'Gable Roof: The most common roof type featuring two sloping sides that meet at a ridge. Provides excellent water drainage and attic ventilation. Simple, cost-effective design.',
        category: 'Structure',
        imageUrl: '/images/structures/gable-roof.jpg'
      },
      {
        id: 'st-3',
        question: 'What type of roof structure is shown?',
        answer: 'Hip Roof: All sides slope downward to the walls, with no vertical ends. More stable in high winds than gable roofs. More complex and expensive to build.',
        category: 'Structure',
        imageUrl: '/images/structures/hip-roof.jpg'
      },
      {
        id: 'st-4',
        question: 'What type of foundation structure is shown?',
        answer: 'Crawl Space Foundation: Elevated foundation creating a shallow space (18-48 inches) beneath the home. Allows access to plumbing and wiring. Requires proper ventilation and moisture control.',
        category: 'Structure',
        imageUrl: '/images/structures/crawl-space.jpg'
      },
      {
        id: 'st-5',
        question: 'What type of wall framing is shown?',
        answer: 'Platform Framing (Stick-Built): Most common modern construction method. Each floor is framed as a separate platform. Walls are built on-site using 2x4 or 2x6 lumber.',
        category: 'Structure',
        imageUrl: '/images/structures/platform-framing.jpg'
      },
      {
        id: 'st-6',
        question: 'What type of roof structure is shown?',
        answer: 'Mansard Roof: Four-sided roof with a steep lower slope and shallow upper slope. Provides additional living space (like an attic). Common in French architecture and older homes.',
        category: 'Structure',
        imageUrl: '/images/structures/mansard-roof.jpg'
      },
      {
        id: 'st-7',
        question: 'What type of foundation structure is shown?',
        answer: 'Full Basement Foundation: Complete story below ground level with 8+ foot ceilings. Provides living/storage space and utility access. Requires proper waterproofing and drainage.',
        category: 'Structure',
        imageUrl: '/images/structures/basement-foundation.jpg'
      },
      {
        id: 'st-8',
        question: 'What type of roof structure is shown?',
        answer: 'Flat Roof (Low-Slope): Nearly horizontal roof with minimal pitch (usually 1/4 inch per foot). Common in commercial buildings and modern residential. Requires careful drainage and waterproofing.',
        category: 'Structure',
        imageUrl: '/images/structures/flat-roof.jpg'
      },
      {
        id: 'st-9',
        question: 'What type of support structure is shown?',
        answer: 'Floor Joist System: Horizontal structural members that support floors and ceilings. Typically 2x8, 2x10, or 2x12 lumber spaced 16 or 24 inches on center. Transfers loads to beams and foundation.',
        category: 'Structure',
        imageUrl: '/images/structures/floor-joists.jpg'
      },
      {
        id: 'st-10',
        question: 'What type of exterior wall system is shown?',
        answer: 'Brick Veneer: Non-structural decorative brick layer over wood frame construction. 1-inch air gap between brick and sheathing. Requires weep holes for drainage and metal ties for support.',
        category: 'Structure',
        imageUrl: '/images/structures/brick-veneer.jpg'
      }
    ]
  }
];

export default decks;
