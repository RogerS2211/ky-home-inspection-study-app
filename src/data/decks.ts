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
  },
  {
    id: 'hvac-systems',
    title: 'HVAC Systems',
    description: 'Heating, ventilation, and air conditioning inspection essentials',
    category: 'Systems',
    icon: '🌡️',
    cards: [
      {
        id: 'hv-1',
        question: 'What is the minimum clearance required around an outdoor AC condenser unit?',
        answer: 'Minimum 24 inches on all sides for proper airflow and service access. Top clearance should be at least 60 inches. Vegetation and debris should not obstruct airflow.',
        category: 'HVAC'
      },
      {
        id: 'hv-2',
        question: 'What is the purpose of a secondary drain pan under an AC air handler?',
        answer: 'Catches condensate overflow if primary drain clogs, preventing water damage to ceilings and walls. Required when unit is installed in attic or above finished spaces. Must have its own drain line or float switch.',
        category: 'HVAC'
      },
      {
        id: 'hv-3',
        question: 'What are the most common causes of poor airflow in HVAC systems?',
        answer: 'Dirty air filters (most common), closed or blocked supply registers, undersized ductwork, disconnected ducts, crushed flexible ducts, dirty evaporator coils, and improper blower speed.',
        category: 'HVAC'
      },
      {
        id: 'hv-4',
        question: 'What is the expected lifespan of a residential HVAC system?',
        answer: 'Central AC units: 15-20 years, Gas furnaces: 15-20 years, Heat pumps: 12-15 years. Proper maintenance can extend lifespan. Age can be determined from unit serial number.',
        category: 'HVAC'
      },
      {
        id: 'hv-5',
        question: 'What clearance is required around a furnace for safety and maintenance?',
        answer: 'Minimum 30 inches in front for service access, 6 inches on sides and rear (unless manufacturer specifies more). Combustible materials must be kept clear. Adequate combustion air must be provided.',
        category: 'HVAC'
      },
      {
        id: 'hv-6',
        question: 'What are signs of a refrigerant leak in an AC system?',
        answer: 'Ice buildup on evaporator coils or refrigerant lines, reduced cooling capacity, longer run times, hissing sounds, oil spots near connections, higher electric bills, and visible frost on outdoor unit.',
        category: 'HVAC'
      },
      {
        id: 'hv-7',
        question: 'What is the purpose of a heat exchanger in a gas furnace?',
        answer: 'Separates combustion gases from household air while transferring heat. Cracked heat exchangers are dangerous as they can leak carbon monoxide into living spaces. Should be inspected annually.',
        category: 'HVAC'
      },
      {
        id: 'hv-8',
        question: 'How often should HVAC air filters be replaced?',
        answer: 'Standard 1-inch filters: every 1-3 months. Thicker pleated filters: every 3-6 months. Depends on usage, pets, and air quality. Dirty filters reduce efficiency and can damage equipment.',
        category: 'HVAC'
      },
      {
        id: 'hv-9',
        question: 'What is the minimum BTU capacity recommended per square foot for heating?',
        answer: 'General rule: 30-40 BTU per square foot in moderate climates, 40-50 in cold climates. Factors include insulation quality, ceiling height, windows, and climate zone. Proper Manual J calculation recommended.',
        category: 'HVAC'
      },
      {
        id: 'hv-10',
        question: 'What causes an AC unit to freeze up?',
        answer: 'Low refrigerant levels, restricted airflow (dirty filter/coils), thermostat issues, low outdoor temperature operation, blocked return air, or blower motor failure. Should be shut off and thawed before diagnosis.',
        category: 'HVAC'
      },
      {
        id: 'hv-11',
        question: 'What is the difference between a heat pump and a standard AC unit?',
        answer: 'Heat pump provides both heating and cooling by reversing refrigerant flow. AC only cools. Heat pumps have a reversing valve and different controls. More efficient in moderate climates.',
        category: 'HVAC'
      },
      {
        id: 'hv-12',
        question: 'What are the requirements for combustion air in a furnace room?',
        answer: 'Need adequate air for combustion and ventilation. Two openings required: one within 12 inches of ceiling, one within 12 inches of floor. Size depends on BTU rating. Each opening minimum 100 sq inches per 1000 BTU/hr.',
        category: 'HVAC'
      },
      {
        id: 'hv-13',
        question: 'What is a SEER rating and what is considered efficient?',
        answer: 'Seasonal Energy Efficiency Ratio measures AC cooling efficiency. Minimum for new units is SEER 14 (as of 2023). SEER 16-20 is high efficiency. Higher SEER = lower operating costs.',
        category: 'HVAC'
      },
      {
        id: 'hv-14',
        question: 'What are common defects found in ductwork?',
        answer: 'Disconnected or loose connections, crushed flexible ducts, inadequate support/sagging, missing insulation, air leaks at seams, undersized ducts, return air leaks in unconditioned spaces, and asbestos wrap on old ducts.',
        category: 'HVAC'
      },
      {
        id: 'hv-15',
        question: 'What is the purpose of a condensate drain line and how should it terminate?',
        answer: 'Removes water produced by AC evaporator coil. Should drain by gravity to exterior, utility sink, or approved drain. Must have trap to prevent air infiltration. Should not drain onto roof, into crawlspace, or near foundation.',
        category: 'HVAC'
      }
    ]
  },
  {
    id: 'roofing-exteriors',
    title: 'Roofing & Exteriors',
    description: 'Roof systems, materials, and common exterior defects',
    category: 'Structural',
    icon: '🏠',
    cards: [
      {
        id: 'rf-1',
        question: 'What is the expected lifespan of common roofing materials?',
        answer: 'Asphalt 3-tab shingles: 15-20 years, Architectural shingles: 25-30 years, Metal roofing: 40-70 years, Clay/concrete tile: 50-100 years, Slate: 75-200 years, Wood shakes: 20-30 years.',
        category: 'Roofing'
      },
      {
        id: 'rf-2',
        question: 'What are the most common causes of roof leaks?',
        answer: 'Damaged or missing shingles, worn flashing around chimneys/vents, clogged gutters causing ice dams, improper valley installation, deteriorated pipe boots, nail pops, and aging underlayment.',
        category: 'Roofing'
      },
      {
        id: 'rf-3',
        question: 'What is the minimum roof pitch for asphalt shingles?',
        answer: 'Minimum 2:12 pitch (2 inches of rise per 12 inches of run). Below this requires special low-slope roofing materials. Steeper pitches shed water better and last longer.',
        category: 'Roofing'
      },
      {
        id: 'rf-4',
        question: 'What is the purpose of roof flashing and where is it required?',
        answer: 'Prevents water penetration at vulnerable areas. Required at chimneys, skylights, vent pipes, valleys, wall intersections, roof edges, and where roof meets vertical surfaces. Should be metal (aluminum, galvanized steel, or copper).',
        category: 'Roofing'
      },
      {
        id: 'rf-5',
        question: 'What are signs of granule loss on asphalt shingles?',
        answer: 'Bare spots exposing black asphalt, granules in gutters, uneven color/texture, curling or cupping edges. Indicates advanced age and UV damage. Means roof is near end of life.',
        category: 'Roofing'
      },
      {
        id: 'rf-6',
        question: 'What is the purpose of roof underlayment (felt paper)?',
        answer: 'Secondary water barrier between shingles and roof deck. Protects against wind-driven rain and during shingle installation. Ice and water shield required at eaves in cold climates for ice dam protection.',
        category: 'Roofing'
      },
      {
        id: 'rf-7',
        question: 'What is an ice dam and how does it form?',
        answer: 'Ice buildup at roof eaves preventing meltwater drainage. Caused by heat loss through roof melting snow, which refreezes at cold eaves. Water backs up under shingles causing leaks. Prevented by proper insulation and ventilation.',
        category: 'Roofing'
      },
      {
        id: 'rf-8',
        question: 'What clearance is required between siding and grade?',
        answer: 'Minimum 6-8 inches between wood siding and soil/grade. Prevents moisture wicking, rot, and termite access. Concrete foundation should extend at least 6 inches above grade.',
        category: 'Exteriors'
      },
      {
        id: 'rf-9',
        question: 'What are common siding defects to look for?',
        answer: 'Cracks, warping, loose or missing pieces, water damage/rot, peeling paint, improper caulking, inadequate clearance from grade, damaged or missing trim, and insect damage.',
        category: 'Exteriors'
      },
      {
        id: 'rf-10',
        question: 'What is the proper slope for gutters?',
        answer: 'Minimum 1/4 inch per 10 feet toward downspouts (1/16 inch per foot). Too flat causes standing water; too steep looks bad and may overflow. Should be free of debris and properly secured.',
        category: 'Exteriors'
      },
      {
        id: 'rf-11',
        question: 'How should downspouts discharge water?',
        answer: 'Minimum 4-6 feet away from foundation via extensions or underground drains. Should discharge onto splash blocks or solid surfaces. Never discharge into crawlspace or near foundation.',
        category: 'Exteriors'
      },
      {
        id: 'rf-12',
        question: 'What are the different types of roof ventilation systems?',
        answer: 'Ridge vents (most effective), soffit vents (intake), gable vents, turtle/box vents, power attic fans, and turbine vents. Need balanced intake (soffit) and exhaust (ridge/upper) for proper airflow.',
        category: 'Roofing'
      },
      {
        id: 'rf-13',
        question: 'What is proper chimney flashing installation?',
        answer: 'Step flashing along sides (woven with shingles), counter flashing embedded in mortar joints, cricket/saddle above chimney if wider than 30 inches. Should be metal, properly sealed, and weathertight.',
        category: 'Roofing'
      },
      {
        id: 'rf-14',
        question: 'What causes wood siding to rot?',
        answer: 'Prolonged moisture exposure from: ground contact, clogged gutters, splash-back, leaky windows, poor caulking, lack of paint/stain, wood-to-wood contact, and inadequate ventilation behind siding.',
        category: 'Exteriors'
      },
      {
        id: 'rf-15',
        question: 'What is the purpose of a drip edge on roofing?',
        answer: 'Metal flashing at roof edges directing water into gutters and away from fascia. Prevents water from wicking back under shingles and rotting roof deck/fascia. Required by most building codes.',
        category: 'Roofing'
      },
      {
        id: 'rf-16',
        question: 'How do you identify hail damage on a roof?',
        answer: 'Random dents with exposed substrate (not aligned), bruising on shingles, dents on metal flashing/vents, damaged gutters, granule loss in impact areas. Compare to undamaged areas.',
        category: 'Roofing'
      },
      {
        id: 'rf-17',
        question: 'What is the recommended attic ventilation ratio?',
        answer: '1 square foot of ventilation per 150 square feet of attic space (with vapor barrier). 1:300 without vapor barrier. Should be balanced 50/50 between intake (soffit) and exhaust (ridge/gable).',
        category: 'Roofing'
      },
      {
        id: 'rf-18',
        question: 'What are signs of improper roof ventilation?',
        answer: 'Excessive heat in summer, ice dams in winter, mold/mildew in attic, premature shingle aging, condensation in attic, peeling exterior paint, and warped roof decking.',
        category: 'Roofing'
      }
    ]
  },
  {
    id: 'foundation-structure',
    title: 'Foundation & Structure',
    description: 'Foundation systems, structural integrity, and defect identification',
    category: 'Structural',
    icon: '🏗️',
    cards: [
      {
        id: 'fn-1',
        question: 'What are the most common types of foundation cracks and their significance?',
        answer: 'Vertical cracks: Usually minor settling. Horizontal cracks: Serious lateral pressure concern. Stair-step cracks in block/brick: Moderate concern, possible settlement. Cracks wider than 1/4 inch or showing displacement need evaluation.',
        category: 'Foundation'
      },
      {
        id: 'fn-2',
        question: 'What causes foundation settlement and how is it identified?',
        answer: 'Causes: Poor soil compaction, expansive clay soils, tree roots, poor drainage, plumbing leaks. Signs: Cracks in foundation/walls, doors/windows sticking, sloping floors, gaps around trim, chimney lean.',
        category: 'Foundation'
      },
      {
        id: 'fn-3',
        question: 'What is the purpose of foundation ventilation in crawl spaces?',
        answer: 'Reduces moisture buildup preventing mold, wood rot, and pest infestation. Requirement: 1 square foot vent per 150 square feet of crawlspace (with ground cover), or 1:1500 without. Vents should be operable.',
        category: 'Foundation'
      },
      {
        id: 'fn-4',
        question: 'What are signs of moisture problems in a crawl space?',
        answer: 'Musty odors, visible mold, standing water, efflorescence on foundation walls, wood rot, rusted metal, damp insulation, condensation on pipes/ducts, and pest activity.',
        category: 'Foundation'
      },
      {
        id: 'fn-5',
        question: 'What is the proper grading slope around a foundation?',
        answer: 'Minimum 6 inches drop over first 10 feet away from foundation (6% slope). Prevents water from ponding against foundation causing leaks and structural damage. Should be maintained continuously.',
        category: 'Foundation'
      },
      {
        id: 'fn-6',
        question: 'What is efflorescence and what does it indicate?',
        answer: 'White chalky deposits on masonry from water-soluble salts. Indicates moisture intrusion through foundation walls. Not structurally significant itself but signals moisture problem needing correction.',
        category: 'Foundation'
      },
      {
        id: 'fn-7',
        question: 'What is bowing or bulging in a foundation wall and what causes it?',
        answer: 'Inward displacement of foundation wall from lateral soil pressure. Causes: Hydrostatic pressure, expansive soils, poor drainage, frost heave. Serious structural concern requiring professional evaluation and possible reinforcement.',
        category: 'Foundation'
      },
      {
        id: 'fn-8',
        question: 'What is the purpose of a vapor barrier in a crawl space?',
        answer: 'Prevents ground moisture from entering crawl space. Should be minimum 6-mil polyethylene covering entire ground surface, overlapped 12 inches, extended 6 inches up walls. Reduces mold, rot, and improves indoor air quality.',
        category: 'Foundation'
      },
      {
        id: 'fn-9',
        question: 'What are common causes of floor sagging or bouncing?',
        answer: 'Undersized joists, excessive joist spans, deteriorated joists from water damage, inadequate support posts, rotted sill plates, termite damage, removed load-bearing walls, and foundation settlement.',
        category: 'Structure'
      },
      {
        id: 'fn-10',
        question: 'What is the maximum allowable span for floor joists?',
        answer: 'Depends on joist size, spacing, species, and load. Example: 2x10 joists at 16" o.c. can span roughly 16 feet. Tables in building codes specify exact spans. Deflection should not exceed L/360.',
        category: 'Structure'
      },
      {
        id: 'fn-11',
        question: 'What are signs of termite damage in wooden structures?',
        answer: 'Mud tubes on foundation, hollow-sounding wood, discarded wings near windows, wood damage that looks like water damage, small holes in wood, frass (termite droppings), sagging floors or ceilings.',
        category: 'Structure'
      },
      {
        id: 'fn-12',
        question: 'What is the difference between a load-bearing and non-load-bearing wall?',
        answer: 'Load-bearing: Supports weight from above (roof, upper floors). Usually perpendicular to joists. Removal requires engineered beam/header. Non-load-bearing (partition): Only supports itself. Can be removed without structural reinforcement.',
        category: 'Structure'
      },
      {
        id: 'fn-13',
        question: 'What causes cracks in drywall and when are they concerning?',
        answer: 'Minor: Normal settling, temperature/humidity changes. Concerning: Wide cracks (1/4"+), cracks above doors/windows, cracks with displacement, new cracks, or those following structural lines. May indicate foundation/structural issues.',
        category: 'Structure'
      },
      {
        id: 'fn-14',
        question: 'What is a sistering joists and when is it needed?',
        answer: 'Reinforcing existing joists by attaching new lumber alongside damaged/undersized joists. Needed for: Sagging floors, deteriorated joists, increased load capacity, joist damage from notching/boring. Should extend full span.',
        category: 'Structure'
      },
      {
        id: 'fn-15',
        question: 'What is the purpose of anchor bolts in foundation construction?',
        answer: 'Secure sill plate to foundation, preventing house from sliding or lifting during high winds or seismic events. Typically 1/2" diameter, embedded 7" into concrete, spaced maximum 6 feet apart.',
        category: 'Foundation'
      },
      {
        id: 'fn-16',
        question: 'What are common post-tension slab foundation issues?',
        answer: 'Cracked or exposed cables (corrosion risk), edge heaving, foundation movement, improperly cut cables during remodeling. Cutting post-tension cables is extremely dangerous and requires professional evaluation.',
        category: 'Foundation'
      },
      {
        id: 'fn-17',
        question: 'What is the purpose of a sump pump and where should it discharge?',
        answer: 'Removes water from basement/crawl space preventing flooding. Should discharge minimum 10-20 feet from foundation, away from house, to lower grade area. Needs check valve and should have battery backup.',
        category: 'Foundation'
      },
      {
        id: 'fn-18',
        question: 'What causes and indicates foundation heaving?',
        answer: 'Upward movement from expansive soils absorbing moisture or frost action. Signs: Floors pushing up, cracks moving up, doors/windows binding at top, chimney separating, gaps at ceiling. Opposite of settlement.',
        category: 'Foundation'
      }
    ]
  },
  {
    id: 'interior-components',
    title: 'Interior Components',
    description: 'Windows, doors, walls, ceilings, and interior finishes',
    category: 'Interior',
    icon: '🚪',
    cards: [
      {
        id: 'in-1',
        question: 'What are the most common window defects found during inspections?',
        answer: 'Broken seals (foggy glass), damaged screens, rotted sills, failed caulking, broken hardware, stuck or inoperable, cracked/broken glass, water stains, improper flashing, and missing weep holes.',
        category: 'Interior'
      },
      {
        id: 'in-2',
        question: 'What is a broken window seal and how do you identify it?',
        answer: 'Failure of seal between double/triple pane glass allowing moisture between panes. Identified by foggy/cloudy appearance, water droplets between panes, or mineral deposits. Cannot be repaired - requires glass unit replacement.',
        category: 'Interior'
      },
      {
        id: 'in-3',
        question: 'What causes doors to stick or not close properly?',
        answer: 'Foundation settlement, house settling, humidity swelling wood, loose hinges, house shifting, improper installation, painted shut, or damaged frame. Check if structural issue or simple adjustment needed.',
        category: 'Interior'
      },
      {
        id: 'in-4',
        question: 'What is tempered or safety glass and where is it required?',
        answer: 'Stronger glass that breaks into small granular pieces. Required within 24" of doors, in bathroom/shower enclosures, near stairs, large windows near floor. Identified by small etched label in corner.',
        category: 'Interior'
      },
      {
        id: 'in-5',
        question: 'What are signs of past or present water intrusion on ceilings/walls?',
        answer: 'Water stains (brown/yellow discoloration), peeling paint, soft/sagging drywall, bubbling paint, visible mold, musty odors, loose tape at seams, and efflorescence on masonry.',
        category: 'Interior'
      },
      {
        id: 'in-6',
        question: 'What causes popping or nail pops in drywall?',
        answer: 'Normal lumber shrinkage, house settling, temperature/humidity changes, improper fastening, or structural movement. Cosmetic unless widespread or indicating structural issues. Simple repair: resecure and patch.',
        category: 'Interior'
      },
      {
        id: 'in-7',
        question: 'What is the purpose of window flashing and where should it be installed?',
        answer: 'Prevents water intrusion around window openings. Should be installed above and around window, directing water away from opening. Common defect is missing head flashing allowing water behind siding.',
        category: 'Interior'
      },
      {
        id: 'in-8',
        question: 'What are the different types of interior wall finishes and their issues?',
        answer: 'Drywall: Cracks, nail pops, water damage. Plaster: Cracking, loose/bulging. Paneling: Moisture damage, loose boards. Tile: Loose tiles, cracked grout. Each requires different inspection focus.',
        category: 'Interior'
      },
      {
        id: 'in-9',
        question: 'What is the expected lifespan of interior components?',
        answer: 'Windows: 15-30 years, Interior doors: 30+ years, Paint: 5-10 years, Drywall: 30-70 years, Hardwood floors: 25-100+ years, Carpet: 5-15 years, Tile: 75-100 years.',
        category: 'Interior'
      },
      {
        id: 'in-10',
        question: 'What causes floor squeaks and how serious are they?',
        answer: 'Loose subfloor, rubbing between joists and subfloor, loose bridging, or gaps between components. Usually not structural - more annoying. Can be fixed by screwing subfloor to joists or shimming.',
        category: 'Interior'
      },
      {
        id: 'in-11',
        question: 'What is the minimum distance between a window sill and the floor?',
        answer: 'Windows with sills less than 18 inches above floor should have fall protection (guards/rails) or tempered glass. Prevents children falling through. Building code requirement for safety.',
        category: 'Interior'
      },
      {
        id: 'in-12',
        question: 'What are common issues with sliding doors?',
        answer: 'Damaged/worn rollers, dirty tracks, bent/misaligned tracks, loose handles, damaged weatherstripping, broken locks, cracked glass, and difficulty opening/closing. Check for smooth operation.',
        category: 'Interior'
      },
      {
        id: 'in-13',
        question: 'What is the purpose of weep holes in windows?',
        answer: 'Allow water that enters window frame to drain out rather than pooling inside. Usually at bottom of exterior window frame. Should be kept clear of debris and paint. Plugged weep holes cause rot.',
        category: 'Interior'
      },
      {
        id: 'in-14',
        question: 'What causes ceiling cracks and when are they concerning?',
        answer: 'Minor: Truss uplift, normal settling, temperature changes. Concerning: Wide cracks (1/4"+), sagging ceilings, cracks with water stains, cracks between ceiling and wall (separation), structural cracks.',
        category: 'Interior'
      },
      {
        id: 'in-15',
        question: 'What is truss uplift and how does it present?',
        answer: 'Ceiling cracks along interior walls, especially in winter. Caused by bottom chord of trusses expanding when exposed to attic heat/humidity while top chord remains cold. Cosmetic issue, not structural.',
        category: 'Interior'
      }
    ]
  },
  {
    id: 'insulation-ventilation',
    title: 'Insulation & Ventilation',
    description: 'Thermal barriers, energy efficiency, and proper air circulation',
    category: 'Systems',
    icon: '🌬️',
    cards: [
      {
        id: 'iv-1',
        question: 'What is R-value and what are recommended values for different areas?',
        answer: 'R-value measures insulation effectiveness. Kentucky recommendations: Attic: R-38 to R-60, Walls: R-13 to R-21, Floors: R-25 to R-30, Basement walls: R-10 to R-15. Higher R-value = better insulation.',
        category: 'Insulation'
      },
      {
        id: 'iv-2',
        question: 'What are the most common types of insulation and their applications?',
        answer: 'Fiberglass batts: Walls/attics, inexpensive. Blown cellulose: Attics, retrofits. Spray foam: Air sealing, high R-value. Rigid foam: Basements, exteriors. Rockwool: Fire resistance. Each has pros/cons.',
        category: 'Insulation'
      },
      {
        id: 'iv-3',
        question: 'What are signs of inadequate attic insulation?',
        answer: 'Ice dams in winter, high energy bills, uneven indoor temperatures, visible rafters through insulation, compressed/damaged insulation, attic insulation below ceiling joists, heat/cool loss.',
        category: 'Insulation'
      },
      {
        id: 'iv-4',
        question: 'What is a vapor barrier and where should it be installed?',
        answer: 'Prevents moisture migration through walls/ceilings. Installed on warm side of insulation (interior in cold climates, exterior in hot-humid). Prevents condensation in wall cavities. Usually 6-mil polyethylene.',
        category: 'Insulation'
      },
      {
        id: 'iv-5',
        question: 'What are dangers of recessed lights in insulated ceilings?',
        answer: 'Heat buildup causing fire hazard if non-IC rated fixtures covered with insulation. Use IC-rated (insulation contact) or AT-rated (airtight) fixtures. Minimum 3" clearance for non-IC fixtures.',
        category: 'Insulation'
      },
      {
        id: 'iv-6',
        question: 'What is the purpose of baffles in attic insulation?',
        answer: 'Maintains airflow from soffit vents to ridge/upper vents. Prevents insulation from blocking soffit vents. Essential for proper attic ventilation and preventing moisture problems. Should extend past insulation.',
        category: 'Ventilation'
      },
      {
        id: 'iv-7',
        question: 'What are signs of poor attic ventilation?',
        answer: 'Excessive heat in summer, ice dams in winter, mold/mildew, condensation, rusted fasteners, warped sheathing, prematurely aged shingles, musty odors, and frost in attic during winter.',
        category: 'Ventilation'
      },
      {
        id: 'iv-8',
        question: 'What is the proper way to insulate around electrical boxes?',
        answer: 'Should not compress insulation tightly around boxes. Use fire-rated putty pads or foam sealant designed for electrical boxes. Maintain insulation continuity but allow heat dissipation. No paper-faced insulation touching boxes.',
        category: 'Insulation'
      },
      {
        id: 'iv-9',
        question: 'What causes attic condensation and how is it prevented?',
        answer: 'Warm moist air from living space meeting cold attic surfaces. Prevention: Proper ventilation (intake and exhaust), air sealing penetrations (lights, pipes, vents), adequate insulation, bathroom/kitchen fans venting outside.',
        category: 'Ventilation'
      },
      {
        id: 'iv-10',
        question: 'What are the different types of attic ventilation systems?',
        answer: 'Passive: Ridge vents, soffit vents, gable vents, turtle vents. Active: Power attic fans, solar fans. Best: Balanced passive system with continuous soffit and ridge vents. Mixing types can reduce effectiveness.',
        category: 'Ventilation'
      },
      {
        id: 'iv-11',
        question: 'What is the purpose of a house wrap or weather-resistant barrier?',
        answer: 'Prevents water and air infiltration while allowing water vapor to escape. Installed over sheathing, under siding. Protects against wind-driven rain. Should overlap properly and be sealed at openings.',
        category: 'Insulation'
      },
      {
        id: 'iv-12',
        question: 'What are common insulation installation defects?',
        answer: 'Gaps and voids, compressed insulation (reduces R-value), missing vapor barriers, wrong side vapor barrier, covering recessed lights, blocking vents, damage from pests/moisture, insufficient depth.',
        category: 'Insulation'
      }
    ]
  },
  {
    id: 'insulation-types',
    title: 'Insulation Types & Fire Safety',
    description: 'Visual identification of insulation materials, fire ratings, and safety concerns',
    category: 'Systems',
    icon: '🧱',
    cards: [
      {
        id: 'ins-1',
        question: 'What type of insulation is shown?',
        answer: 'Fiberglass Batt Insulation: Pink/yellow flexible blankets. CLASS A - Non-combustible, melts at 1,500°F. Kraft paper/foil facings ARE flammable. ID: Fluffy texture, R-13 to R-38. Inspector concerns: Exposed paper facing (fire hazard), compression/gaps (reduced R-value), moisture damage.',
        category: 'Insulation',
        imageUrl: '/images/insulation/fiberglass-batts.jpg'
      },
      {
        id: 'ins-2',
        question: 'What type of insulation is shown?',
        answer: 'Cellulose (Blown-in): Gray loose-fill, shredded paper appearance. CLASS 1 - Fire-retardant treated but combustible, ignites at 400°F. ID: Fluffy gray, recycled newsprint in attics. Inspector concerns: Settling (reduces R-value), moisture absorption/mold, covering recessed lights, burying junction boxes. Can smolder.',
        category: 'Insulation',
        imageUrl: '/images/insulation/cellulose-blown.jpg'
      },
      {
        id: 'ins-3',
        question: 'What type of insulation is shown?',
        answer: 'Open-Cell Spray Foam: Soft, spongy (can indent). COMBUSTIBLE - Ignites at 700°F, REQUIRES thermal barrier. R-3.5/inch. ID: Light/airy, yellowish, expands significantly. Inspector concerns: Missing thermal barrier (code violation), voids/gaps, shrinkage, covering electrical, off-gassing if improperly mixed.',
        category: 'Insulation',
        imageUrl: '/images/insulation/open-cell-foam.jpg'
      },
      {
        id: 'ins-4',
        question: 'What type of insulation is shown?',
        answer: 'Closed-Cell Spray Foam: Dense, rigid (cannot indent). COMBUSTIBLE - Ignites at 700°F, REQUIRES thermal barrier. R-6 to R-7/inch, vapor barrier properties. ID: Hard/smooth, tan/cream, minimal expansion. Inspector concerns: Missing thermal barrier (code violation), covering electrical, improper mixing, trapping moisture.',
        category: 'Insulation',
        imageUrl: '/images/insulation/closed-cell-foam.jpg'
      },
      {
        id: 'ins-5',
        question: 'What type of insulation is shown?',
        answer: 'Mineral Wool/Rockwool: Gray-brown rigid batts. CLASS A - Non-combustible, withstands 2,150°F. BEST fire resistance. ID: Dense/heavy, scratchy texture, maintains shape. R-15 to R-30. Inspector concerns: Heavier (attic load), gaps, moisture retention if wet. Excellent for fire-rated assemblies.',
        category: 'Insulation',
        imageUrl: '/images/insulation/mineral-wool.jpg'
      },
      {
        id: 'ins-6',
        question: 'What type of insulation is shown?',
        answer: 'EPS Rigid Foam (Expanded Polystyrene): White beadboard like coffee cups. COMBUSTIBLE - Melts/drips, adds fuel to fire. R-3.6 to R-4.2/inch. ID: White bead structure, lightweight, breaks easily, squeaks. Inspector concerns: REQUIRES thermal barrier (code violation if exposed), UV deterioration, pest damage, melts/drips in fire.',
        category: 'Insulation',
        imageUrl: '/images/insulation/eps-foam.jpg'
      },
      {
        id: 'ins-7',
        question: 'What type of insulation is shown?',
        answer: 'XPS Rigid Foam (Extruded Polystyrene): Blue (Dow) or pink (Owens Corning) boards. COMBUSTIBLE - Melts at 165-210°F, drips molten material. R-5/inch. ID: Blue/pink/green, smooth texture, denser than EPS. Inspector concerns: REQUIRES thermal barrier (common code violation), UV deterioration, melts rapidly, off-gassing.',
        category: 'Insulation',
        imageUrl: '/images/insulation/xps-foam.jpg'
      },
      {
        id: 'ins-8',
        question: 'What type of insulation is shown?',
        answer: 'Polyisocyanurate (Polyiso): Foil-faced boards, silver/reflective. COMBUSTIBLE but BEST fire performance of foam boards - Forms char layer, doesn\'t melt/drip. R-6 to R-6.5/inch (highest). ID: Foil on both sides, manufacturer text on foil. Inspector concerns: REQUIRES thermal barrier, foil conducts electricity, R-value drops in cold.',
        category: 'Insulation',
        imageUrl: '/images/insulation/polyiso-foam.jpg'
      },
      {
        id: 'ins-9',
        question: 'What type of insulation is shown?',
        answer: 'Radiant Barrier: Aluminum foil/metalized film, shiny surface. CLASS A - Non-flammable but MELTS, doesn\'t add fuel. Reflects radiant heat only. ID: Shiny metallic in attics, often perforated, may have backing. Inspector concerns: REQUIRES air gap (ineffective if touching surfaces), dust accumulation, damaged/torn sections, stapling holes. Not a substitute for mass insulation.',
        category: 'Insulation',
        imageUrl: '/images/insulation/radiant-barrier.jpg'
      },
      {
        id: 'ins-10',
        question: 'What type of insulation is shown?',
        answer: 'Vermiculite: Lightweight pebbles, silver-gold/gray-brown. FIRE-RESISTANT - Non-combustible. CRITICAL: 70-80% contains ASBESTOS from Libby, Montana mine (1919-1990). ID: Pebble-like, pours like gravel, accordion particles. Inspector concerns: ASSUME ASBESTOS - Never disturb, recommend professional testing/abatement, note in report, health hazard if airborne.',
        category: 'Insulation',
        imageUrl: '/images/insulation/vermiculite.jpg'
      },
      {
        id: 'ins-11',
        question: 'What type of insulation is shown?',
        answer: 'Natural Fiber: Cotton, wool, hemp, or cork. FIRE RATINGS VARY - Treated can be Class A, untreated more flammable. Cork naturally fire-resistant. ID: Visible fiber texture (cotton=denim, wool=fuzzy, hemp=coarse, cork=granular), tan/brown/gray. Inspector concerns: Moisture absorption (mold), pest attraction, settling, fire treatment verification needed. Performance varies by material.',
        category: 'Insulation',
        imageUrl: '/images/insulation/natural-fiber.jpg'
      }
    ]
  },
  {
    id: 'safety-standards',
    title: 'Safety & Standards',
    description: 'Code requirements, safety hazards, and best practices',
    category: 'Codes & Standards',
    icon: '⚠️',
    cards: [
      {
        id: 'sf-1',
        question: 'What are the three types of carbon monoxide sources in homes?',
        answer: 'Fuel-burning appliances (furnaces, water heaters, fireplaces), vehicle exhaust from attached garages, and generators. CO is colorless, odorless, deadly. CO detectors required near bedrooms.',
        category: 'Safety'
      },
      {
        id: 'sf-2',
        question: 'Where are carbon monoxide detectors required?',
        answer: 'Outside each sleeping area, on every level of home including basements, near attached garages. Should be within 15 feet of bedroom doors. Battery-powered or hardwired. Replace every 5-7 years.',
        category: 'Safety'
      },
      {
        id: 'sf-3',
        question: 'What are the clearances required around gas water heaters?',
        answer: 'Minimum 6 inches from combustible materials, 30 inches in front for service, adequate combustion air. Must be on solid, level base. Flue must be properly vented. No storage of flammables nearby.',
        category: 'Safety'
      },
      {
        id: 'sf-4',
        question: 'What is TPRV and why is it critical on water heaters?',
        answer: 'Temperature Pressure Relief Valve prevents tank explosion from excessive heat/pressure. Set to open at 150 PSI or 210°F. Must discharge within 6" of floor via proper piping. Test annually. Never cap or plug.',
        category: 'Safety'
      },
      {
        id: 'sf-5',
        question: 'What are anti-scald requirements for water heaters?',
        answer: 'Water heater thermostats should be set to 120°F maximum to prevent scalding (especially children/elderly). Some jurisdictions require anti-scald valves at fixtures. 140°F+ can cause severe burns in seconds.',
        category: 'Safety'
      },
      {
        id: 'sf-6',
        question: 'What are common electrical safety hazards found in homes?',
        answer: 'Overloaded circuits, double-tapped breakers, missing GFCI/AFCI protection, improper grounding, aluminum wiring, knob-and-tube wiring, exposed wiring, insufficient panel clearance, DIY electrical work.',
        category: 'Safety'
      },
      {
        id: 'sf-7',
        question: 'What is the purpose of AFCI breakers and where are they required?',
        answer: 'Arc Fault Circuit Interrupter prevents fires from electrical arcing. Required for 15/20-amp branch circuits in living areas, bedrooms, closets, hallways, family rooms (NEC 2023). Not required for bathrooms, garages, exterior.',
        category: 'Safety'
      },
      {
        id: 'sf-8',
        question: 'What are the testing requirements for GFCI outlets?',
        answer: 'Should be tested monthly using test button. During inspection, use GFCI tester to verify proper operation and trip time. Must trip within 25 milliseconds. Replace if fails to trip or trips randomly.',
        category: 'Safety'
      },
      {
        id: 'sf-9',
        question: 'What are common trip hazards that should be noted?',
        answer: 'Uneven sidewalks/steps, height variations in stairs exceeding 3/8", loose carpeting, threshold differences, poor lighting, clutter, missing handrails, slippery surfaces, and unexpected level changes.',
        category: 'Safety'
      },
      {
        id: 'sf-10',
        question: 'What are requirements for garage door opener auto-reverse?',
        answer: 'Must have two safety features: photo-eye sensors within 6" of floor (no higher), and pressure-reverse (stops/reverses if resistance met). Test both during inspection. Required since 1993.',
        category: 'Safety'
      },
      {
        id: 'sf-11',
        question: 'What are asbestos concerns in home inspections?',
        answer: 'Common in homes pre-1980: pipe insulation, HVAC duct wrap, vinyl floor tiles, roofing, siding, popcorn ceilings. Do not disturb. Note "suspected asbestos" and recommend testing before renovation. Health hazard when airborne.',
        category: 'Safety'
      },
      {
        id: 'sf-12',
        question: 'What are lead paint concerns and when should they be noted?',
        answer: 'Homes built before 1978 likely contain lead paint. Health hazard to children. Note peeling/chipping paint. Disclose lead paint disclosure requirements. Recommend testing/remediation before renovation.',
        category: 'Safety'
      },
      {
        id: 'sf-13',
        question: 'What is the purpose of proper stairway lighting?',
        answer: 'Prevents falls. Light switches required at top and bottom of stairs (3-way switches). Minimum 11 foot-candles of light. Should illuminate all treads. Common defect: missing switch at one end.',
        category: 'Safety'
      },
      {
        id: 'sf-14',
        question: 'What are mold concerns and when should they be reported?',
        answer: 'Visible mold growth, musty odors, water stains indicate moisture problems. Note location, extent, and probable cause. Recommend moisture control and mold remediation. Health concerns: allergies, respiratory issues.',
        category: 'Safety'
      },
      {
        id: 'sf-15',
        question: 'What is radon and why is it a concern?',
        answer: 'Radioactive gas from soil decay, second leading cause of lung cancer. Colorless, odorless. Recommend radon testing (separate from home inspection). Mitigation available if levels exceed 4.0 pCi/L. Common in basements/crawlspaces.',
        category: 'Safety'
      }
    ]
  }
];

export default decks;
