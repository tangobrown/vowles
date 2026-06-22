import type { Testimonial } from "@/lib/data";

export type ServicePage = {
  name: string;
  eyebrow: string;
  heroSubhead: string;
  heroSlot: string;
  introHeading: string;
  introBody: string;
  subServicesTitle: string;
  subServices: { label: string; text: string }[];
  galleryEyebrow: string;
  galleryHeading: string;
  gallerySlots: { id: string; label: string }[];
  faqEyebrow: string;
  faqHeading: string;
  faqIntro?: string;
  faqs: { q: string; a: string }[];
  testimonialsEyebrow?: string;
  testimonialsHeading?: string;
  testimonials?: Testimonial[];
};

export const SERVICE_PAGES: Record<string, ServicePage> = {
  "loft-conversions": {
    name: "Loft Conversions",
    eyebrow: "Loft Conversions",
    heroSubhead:
      "Turn that dusty, unused roof space into a bright, beautiful room — an extra bedroom, a home office or a quiet retreat — adding genuine space and real value to your home.",
    heroSlot: "loft-hero",
    introHeading: "More room, without the upheaval of moving",
    introBody:
      "A loft conversion is one of the most cost-effective ways to add space and value to a property — and it all happens above your head, with the rest of the house left to get on as normal. Paul handles the whole job end to end, from the first sketch and structural calculations through to the final coat of paint, so you deal with one trusted local builder rather than a chain of subcontractors.",
    subServicesTitle: "What we can do up there",
    subServices: [
      { label: "Dormer conversions", text: "Extend headroom and usable floor space with a flat or pitched dormer." },
      { label: "Velux / rooflight conversions", text: "Keep the existing roofline and flood the room with natural daylight." },
      { label: "Hip-to-gable & L-shaped", text: "Reclaim awkward roof shapes for a larger, squarer, more usable room." },
      { label: "Structural steel & floor strengthening", text: "Building-control-approved support, properly calculated, beneath your feet." },
      { label: "Staircases", text: "Space-saving stairs designed to fit and finished to match your home." },
      { label: "Insulation & plastering", text: "Warm, quiet, fully finished walls and ceilings — ready to decorate." },
      { label: "Electrics, heating & plumbing", text: "First-fix through to a room that's genuinely ready to live in." },
      { label: "En-suites & storage", text: "Optional extras — a tucked-in shower room or built-in eaves storage." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Lofts we've transformed",
    gallerySlots: [
      { id: "loft-gal-1", label: "Dormer conversion · Torquay" },
      { id: "loft-gal-2", label: "Master bedroom with en-suite · Teignmouth" },
      { id: "loft-gal-3", label: "Velux home office · Exeter" },
      { id: "loft-gal-4", label: "Hip-to-gable conversion · Newton Abbot" },
      { id: "loft-gal-5", label: "Children's loft bedroom · Torbay" },
      { id: "loft-gal-6", label: "Staircase & landing · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Loft conversion questions, answered",
    faqIntro:
      "A few of the things homeowners ask Paul most often. Got one that isn't here? Just pick up the phone — he's happy to talk it through.",
    faqs: [
      { q: "How long does a loft conversion take?", a: "Most take around 6–8 weeks on site, depending on the type and any structural work involved. Paul will give you a realistic timeline before anything starts, and keep you updated as the job progresses." },
      { q: "Will I need planning permission?", a: "Many loft conversions fall under permitted development, but it depends on your roof, the design and your property. Paul handles building regulations as standard and can advise on planning from the very first visit." },
      { q: "Can I stay in the house during the work?", a: "Yes — in most cases. The bulk of the work happens up in the loft and is sealed off from the rest of the home, so day-to-day life carries on with minimal disruption." },
      { q: "How much does a loft conversion cost?", a: "It varies with the size, type and finish you're after. After a free, no-obligation visit Paul gives you a clear, itemised quote with no hidden extras — so you know exactly where you stand." },
      { q: "Will it add value to my home?", a: "A well-built loft conversion is one of the most reliable ways to add both living space and value, often returning more than it costs when done properly." },
      { q: "Do you handle everything, or do I need other trades?", a: "Paul manages the whole job end to end — structural work, carpentry, electrics, plumbing and plastering — coordinating any specialists so you only ever deal with one trusted person." },
    ],
  },

  "extensions": {
    name: "Extensions",
    eyebrow: "Extensions",
    heroSubhead:
      "Add the space your family really needs — a bigger kitchen, an extra bedroom, a proper utility — built to last and managed end to end, so an extension feels less daunting than you'd think.",
    heroSlot: "ext-hero",
    introHeading: "The space you need, without the cost of moving",
    introBody:
      "Outgrowing your home doesn't have to mean leaving it. A well-planned extension gives you the room you need and adds real value, and because Paul handles the whole project — groundworks, structure, carpentry and finish — you've got one point of contact from the first drawing to the final handover. Clear timelines, tidy sites and honest pricing throughout.",
    subServicesTitle: "What we build",
    subServices: [
      { label: "Single-storey rear extensions", text: "Open up the back of the house for a bigger kitchen, dining or living space." },
      { label: "Side-return & wrap-around", text: "Reclaim narrow, wasted space down the side of the property." },
      { label: "Double-storey extensions", text: "Add downstairs living and an extra bedroom or bathroom above." },
      { label: "Kitchen & dining extensions", text: "Bright, open-plan rooms designed around how your family lives." },
      { label: "Foundations & groundworks", text: "Properly engineered, building-control-approved bases done right." },
      { label: "Steelwork & structural openings", text: "Knock-throughs and beams calculated and installed safely." },
      { label: "Roofing & rendering", text: "Weather-tight, well-insulated and finished to match the existing home." },
      { label: "Full fit-out", text: "Electrics, plumbing, plastering and decorating to a ready-to-use room." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Extensions we've built",
    gallerySlots: [
      { id: "ext-gal-1", label: "Rear kitchen extension · Torquay" },
      { id: "ext-gal-2", label: "Two-storey side extension · Exeter" },
      { id: "ext-gal-3", label: "Open-plan dining extension · Teignmouth" },
      { id: "ext-gal-4", label: "Wrap-around extension · Newton Abbot" },
      { id: "ext-gal-5", label: "Garden room extension · Torbay" },
      { id: "ext-gal-6", label: "Utility & boot room · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Extension questions, answered",
    faqIntro:
      "The things homeowners ask Paul most often when they're thinking about extending. Got a question that isn't here? Give him a call.",
    faqs: [
      { q: "How long does an extension take?", a: "A single-storey extension is typically 10–14 weeks, a double-storey longer, depending on size and ground conditions. Paul gives you a realistic programme before work starts and keeps you updated throughout." },
      { q: "Will I need planning permission?", a: "Some extensions fall under permitted development, others need a planning application — it depends on size, position and your property. Paul advises on this early and handles building regulations as standard." },
      { q: "Can I stay in the house during the build?", a: "In most cases yes. There'll be noisy and dusty stages, but Paul works to keep the home liveable and the site sealed, clean and safe day to day." },
      { q: "How much does an extension cost?", a: "It depends on the size, complexity and finish. After a free site visit you'll get a clear, itemised quote with no hidden extras, so you can plan with confidence." },
      { q: "Do you handle the foundations and structural work?", a: "Yes — groundworks, foundations, steelwork and structural openings are all part of the service, properly engineered and signed off by building control." },
      { q: "Will the extension match the rest of my house?", a: "Absolutely. Materials, brickwork, render and rooflines are all chosen to blend with the existing property so the extension looks like it was always there." },
    ],
  },

  "kitchens": {
    name: "Kitchens",
    eyebrow: "Kitchens",
    heroSubhead:
      "The heart of the home, fitted and built right. From careful installs of your chosen kitchen to bespoke carpentry and the building work behind it — Paul delivers a kitchen that looks and works beautifully.",
    heroSlot: "kit-hero",
    introHeading: "A kitchen built around how you live",
    introBody:
      "A great kitchen is as much about the carpentry and building behind it as the units on show. Paul fits supplied kitchens to a meticulous standard and can handle everything around them too — walls, floors, plastering and the services beneath — so it all comes together as one properly finished room rather than a patchwork of trades.",
    subServicesTitle: "What's involved",
    subServices: [
      { label: "Full kitchen installation", text: "Precise fitting of your chosen units, worktops and appliances." },
      { label: "Bespoke cabinetry & joinery", text: "Made-to-measure carpentry where off-the-shelf won't do." },
      { label: "Worktop fitting", text: "Laminate, solid timber, stone and composite, cut and fitted cleanly." },
      { label: "Walls & structural openings", text: "Open up to a dining space or knock through to create an island layout." },
      { label: "Flooring", text: "Hard-wearing, level, well-finished floors that suit kitchen life." },
      { label: "Plumbing & electrics", text: "Sinks, appliances, sockets and lighting, coordinated and signed off." },
      { label: "Plastering & finishing", text: "Smooth walls and ceilings, ready to decorate." },
      { label: "Tiling & splashbacks", text: "Neat, durable finishes that stand up to everyday use." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Kitchens we've fitted",
    gallerySlots: [
      { id: "kit-gal-1", label: "Shaker kitchen · Torquay" },
      { id: "kit-gal-2", label: "Open-plan island kitchen · Exeter" },
      { id: "kit-gal-3", label: "Handleless modern kitchen · Teignmouth" },
      { id: "kit-gal-4", label: "Country kitchen · Newton Abbot" },
      { id: "kit-gal-5", label: "Compact galley kitchen · Torbay" },
      { id: "kit-gal-6", label: "Kitchen-diner refit · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Kitchen questions, answered",
    faqIntro:
      "What homeowners most often ask Paul about a new kitchen. If yours isn't covered, just get in touch.",
    faqs: [
      { q: "Do I buy the kitchen, or do you supply it?", a: "Either works. Many clients buy their kitchen from a supplier they like and Paul fits it; he can also advise on suppliers and coordinate the order if you'd prefer." },
      { q: "How long does a kitchen fit take?", a: "A straightforward replacement is usually 1–2 weeks; more if there's structural work, replastering or new flooring. Paul gives you a clear schedule up front." },
      { q: "Can you knock through to make it open-plan?", a: "Yes — structural openings, beams and the making-good around them are all part of what Paul does, properly calculated and building-control approved." },
      { q: "Will you handle plumbing and electrics too?", a: "Yes. Paul coordinates the plumbing and electrical work so sinks, appliances, sockets and lighting are all done and certified as part of the job." },
      { q: "How much does a new kitchen cost?", a: "It depends on the units, worktops and any building work involved. After a visit you'll get a clear, itemised quote separating the fit from any extras." },
      { q: "Can I use the kitchen during the work?", a: "There'll be a short period without a working kitchen during the changeover. Paul plans the sequence to keep that window as short and predictable as possible." },
    ],
  },

  "media-walls": {
    name: "Media Walls",
    eyebrow: "Media Walls",
    heroSubhead:
      "Bespoke feature builds with the carpentry on show. A made-to-measure media wall turns a blank living-room wall into a striking centrepiece — and shows off exactly the kind of work Paul loves doing.",
    heroSlot: "media-hero",
    introHeading: "A centrepiece, made to measure",
    introBody:
      "A media wall is where carefully planned carpentry meets the tech and the finish. Paul designs and builds each one around your room, your TV and your kit — hiding the cables, framing an electric fire, and integrating shelving and storage — so the result is a clean, modern feature that looks built-in because it is.",
    subServicesTitle: "What we can build in",
    subServices: [
      { label: "Recessed TV mounting", text: "A flush, floating screen with brackets and weight properly supported." },
      { label: "Electric fire integration", text: "Frame in an inset electric fire for instant atmosphere." },
      { label: "Cable & device management", text: "Power, AV and consoles routed and hidden, with access kept easy." },
      { label: "Floating shelves & display", text: "Bespoke shelving sized and lit to suit the wall." },
      { label: "Concealed storage", text: "Push-to-open units and cupboards that keep clutter out of sight." },
      { label: "Integrated lighting", text: "LED backlighting and accent strips for a modern glow." },
      { label: "Panelling & finishes", text: "Slatted, painted or panelled surfaces to match your interior." },
      { label: "Soundbar & speaker housing", text: "Neat recesses that keep audio tidy and unobtrusive." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Media walls we've created",
    gallerySlots: [
      { id: "media-gal-1", label: "Slatted media wall with fire · Exeter" },
      { id: "media-gal-2", label: "Floating shelf media wall · Torquay" },
      { id: "media-gal-3", label: "Panelled feature wall · Teignmouth" },
      { id: "media-gal-4", label: "Full-width media unit · Newton Abbot" },
      { id: "media-gal-5", label: "LED-lit media wall · Torbay" },
      { id: "media-gal-6", label: "Concealed-storage build · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Media wall questions, answered",
    faqIntro: "The questions Paul hears most about bespoke media walls. Anything else, just ask.",
    faqs: [
      { q: "How long does a media wall take to build?", a: "Most are completed in around 1–2 weeks depending on size, the finish and any electrical work. Paul will confirm timings when he quotes." },
      { q: "Can you fit an electric fire and TV together?", a: "Yes — integrating an inset electric fire below a recessed TV is one of the most popular setups, and Paul builds the framing and ventilation to suit." },
      { q: "Will the cables and devices be hidden?", a: "Completely. Power and AV cabling is routed inside the wall, with consoles and boxes housed in concealed, accessible compartments." },
      { q: "Do you handle the electrics?", a: "Yes. Any additional sockets, fused spurs and lighting are coordinated and certified as part of the build." },
      { q: "Can you match it to my interior?", a: "Absolutely — slatted timber, painted MDF, panelling or a mix; Paul designs the finish around your room and colour scheme." },
      { q: "How much does a media wall cost?", a: "It varies with size, materials and the tech involved. You'll get a clear, itemised quote after Paul has seen the space." },
    ],
  },

  "cut-roofs": {
    name: "Cut Roofs",
    eyebrow: "Cut Roofs",
    heroSubhead:
      "Traditional roof carpentry, cut by hand on site. From new builds to complex extensions and repairs, Paul cuts roofs the proper way — accurate, strong and built to last for generations.",
    heroSlot: "roof-hero",
    introHeading: "Proper roof carpentry, cut on site",
    introBody:
      "A cut roof — built rafter by rafter on site rather than craned in as a truss — gives you strength, flexibility and a usable roof space that prefabricated systems can't match. It's skilled, traditional carpentry, and it's exactly the kind of work Paul takes pride in: set out correctly, cut accurately and built to carry the loads it should for the life of the building.",
    subServicesTitle: "What we cut & build",
    subServices: [
      { label: "Traditional cut roofs", text: "Rafters, purlins and ridges set out and cut by hand on site." },
      { label: "Hips, valleys & dormers", text: "Complex roof geometry handled with precision." },
      { label: "Extension & link roofs", text: "New roofs tied cleanly into the existing structure." },
      { label: "Vaulted & open ceilings", text: "Roof structures designed to leave the timber on show." },
      { label: "Roof repairs & alterations", text: "Replacing failed timbers and adapting existing roofs." },
      { label: "Structural timber & steel", text: "Beams and supports correctly sized and installed." },
      { label: "Felt, batten & breathable membranes", text: "Weather-tight detailing ready for the roof covering." },
      { label: "Fascias, soffits & guttering", text: "The finishing carpentry that protects the eaves." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Roofs we've cut",
    gallerySlots: [
      { id: "roof-gal-1", label: "Traditional cut roof · Newton Abbot" },
      { id: "roof-gal-2", label: "Hipped extension roof · Torquay" },
      { id: "roof-gal-3", label: "Vaulted oak ceiling · Exeter" },
      { id: "roof-gal-4", label: "Dormer roof structure · Teignmouth" },
      { id: "roof-gal-5", label: "Valley & link roof · Torbay" },
      { id: "roof-gal-6", label: "Re-roof & repair · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Cut roof questions, answered",
    faqIntro: "What clients most often ask about traditional roof carpentry. If yours isn't here, give Paul a call.",
    faqs: [
      { q: "What's the difference between a cut roof and trusses?", a: "A cut roof is built piece by piece on site, giving more flexibility and usable loft space; trusses are prefabricated and craned in. Paul cuts roofs traditionally where strength, shape or future use call for it." },
      { q: "Can you cut a roof for an awkward or complex shape?", a: "Yes — hips, valleys, dormers and link roofs into existing buildings are all part of the work, set out accurately on site." },
      { q: "Do you handle the structural calculations?", a: "Yes. Timber and any supporting steel are correctly sized and the work is carried out to meet building regulations." },
      { q: "Can you leave the timbers exposed?", a: "Absolutely — vaulted and open ceilings that show off the carpentry are a lovely option and something Paul enjoys building." },
      { q: "Do you do roof repairs as well as new roofs?", a: "Yes, from replacing failed rafters and timbers to altering and extending existing roof structures." },
      { q: "How much does a cut roof cost?", a: "It depends entirely on the size and complexity. After assessing the job Paul gives you a clear, itemised quote." },
    ],
  },

  "flooring-decking": {
    name: "Flooring & Decking",
    eyebrow: "Flooring & Decking",
    heroSubhead:
      "Quality floors indoors and decking that lasts outdoors. Whether it's solid timber underfoot or a deck to make the most of the garden, Paul lays it level, solid and beautifully finished.",
    heroSlot: "floor-hero",
    introHeading: "Solid underfoot, indoors and out",
    introBody:
      "Floors and decks get used every single day, so they have to be built right. Paul prepares the base properly, sets everything dead level, and finishes neatly at the edges and thresholds — whether that's engineered oak in the lounge or a hardwood deck stepping out into the garden. Done well, they look great and last for years.",
    subServicesTitle: "What we lay",
    subServices: [
      { label: "Solid & engineered wood floors", text: "Timber floors laid level and finished cleanly at the edges." },
      { label: "Laminate & LVT", text: "Hard-wearing, great-looking floors fitted to a crisp finish." },
      { label: "Subfloor preparation", text: "Levelling, ply and battening so the floor sits right." },
      { label: "Timber decking", text: "Hardwood and softwood decks built on a solid, ventilated frame." },
      { label: "Composite decking", text: "Low-maintenance boards for a deck that stays looking good." },
      { label: "Frames, posts & substructure", text: "Properly supported, drained and built to take the load." },
      { label: "Steps, balustrades & edging", text: "Safe, neat detailing that finishes the deck off." },
      { label: "Skirting & thresholds", text: "Clean transitions between rooms and surfaces." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Floors & decks we've laid",
    gallerySlots: [
      { id: "floor-gal-1", label: "Engineered oak flooring · Exeter" },
      { id: "floor-gal-2", label: "Hardwood garden deck · Torquay" },
      { id: "floor-gal-3", label: "Composite deck & steps · Teignmouth" },
      { id: "floor-gal-4", label: "LVT kitchen floor · Newton Abbot" },
      { id: "floor-gal-5", label: "Raised deck with balustrade · Torbay" },
      { id: "floor-gal-6", label: "Solid timber floor · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Flooring & decking questions, answered",
    faqIntro: "The questions Paul hears most about floors and decks. Anything else, just ask.",
    faqs: [
      { q: "Can you level an uneven floor before laying?", a: "Yes — proper subfloor preparation, including levelling, ply and battening, is part of the job so the finished floor sits flat and solid." },
      { q: "What decking materials do you use?", a: "Both timber (hardwood and softwood) and low-maintenance composite. Paul will talk through the look, lifespan and upkeep of each so you can choose what suits." },
      { q: "How long does decking take to build?", a: "Most domestic decks take a few days to a week or so, depending on size, height and groundwork. Paul confirms timings when he quotes." },
      { q: "Will the deck need much maintenance?", a: "Composite needs very little; timber benefits from occasional cleaning and treating. Paul builds with proper drainage and ventilation so it lasts either way." },
      { q: "Can you match new flooring to existing rooms?", a: "Yes — flooring, skirting and thresholds are all finished to tie in neatly with adjoining rooms." },
      { q: "How much does flooring or decking cost?", a: "It depends on the material and the area. After measuring up, Paul gives you a clear, itemised quote." },
    ],
  },

  "maintenance": {
    name: "Maintenance Contracts",
    eyebrow: "Maintenance Contracts",
    heroSubhead:
      "Reliable, ongoing care for homes and businesses. One trusted local tradesman on hand for the repairs, jobs and upkeep that keep a property in good order — no chasing, no surprises.",
    heroSlot: "maint-hero",
    introHeading: "One trusted tradesman, on call",
    introBody:
      "Properties need looking after, and finding someone reliable for the steady stream of smaller jobs is half the battle. A maintenance arrangement with Paul means you've got a skilled, trustworthy local builder who knows your property and turns up when he says he will — ideal for busy households, landlords, holiday lets and small businesses across South Devon.",
    subServicesTitle: "What we look after",
    subServices: [
      { label: "Carpentry repairs", text: "Doors, windows, stairs, skirting and the everyday fixes." },
      { label: "Door & lock adjustments", text: "Sticking doors eased, locks and hinges sorted." },
      { label: "Rot & damp-related repairs", text: "Replacing failed timber and making good." },
      { label: "Fencing & gates", text: "Repairs and replacements to keep boundaries secure." },
      { label: "Guttering & exterior timber", text: "Fascias, soffits and eaves kept sound and weather-tight." },
      { label: "Snagging & small building works", text: "The list of little jobs, handled in one visit." },
      { label: "Holiday-let & landlord turnarounds", text: "Quick, reliable fixes between tenancies and guests." },
      { label: "Planned & reactive visits", text: "Scheduled upkeep plus a number to call when something needs doing." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Properties we look after",
    gallerySlots: [
      { id: "maint-gal-1", label: "Holiday let turnaround · Torbay" },
      { id: "maint-gal-2", label: "Door & joinery repairs · Torquay" },
      { id: "maint-gal-3", label: "Fascia & guttering · Teignmouth" },
      { id: "maint-gal-4", label: "Fencing & gates · Newton Abbot" },
      { id: "maint-gal-5", label: "Office snagging · Exeter" },
      { id: "maint-gal-6", label: "Rot repair & make-good · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Maintenance questions, answered",
    faqIntro: "What clients most often ask about ongoing maintenance. If yours isn't here, just get in touch.",
    faqs: [
      { q: "Do I have to sign a long contract?", a: "No. Arrangements are flexible — from a simple 'call when you need me' understanding to regular planned visits. Paul will set up whatever suits your property." },
      { q: "Is this just for businesses, or homes too?", a: "Both. Busy households, landlords, holiday-let owners and small businesses all use Paul for ongoing upkeep and repairs." },
      { q: "How quickly can you come out?", a: "For maintenance clients Paul prioritises reactive jobs and will give you a realistic timeframe when you call — no being left waiting." },
      { q: "Is there a minimum job size?", a: "No job too small — that's rather the point. Small repairs and odd jobs are exactly what a maintenance arrangement is for." },
      { q: "Do you cover holiday lets and rentals?", a: "Yes — quick, reliable turnarounds between guests or tenants are a big part of the maintenance work Paul does." },
      { q: "How does pricing work?", a: "Either per visit or as an agreed arrangement for regular work. Paul keeps it transparent so you always know where you stand." },
    ],
  },

  "windows-doors": {
    name: "Windows & Doors",
    eyebrow: "Windows & Doors",
    heroSubhead:
      "Supply and fit — the everyday jobs done properly. From a single internal door to new windows throughout, Paul fits them square, sealed and finished to a standard you'll notice every time you use them.",
    heroSlot: "doors-hero",
    introHeading: "The everyday jobs, done properly",
    introBody:
      "Windows and doors are used countless times a day, so a good fit really shows. Paul supplies and installs internal and external doors, windows and frames — hung square, sealed against the weather and finished neatly — whether it's one door you've been meaning to sort for years or a full set of windows for the whole house.",
    subServicesTitle: "What we fit",
    subServices: [
      { label: "Internal doors", text: "Hung square and swinging sweetly, with neat ironmongery." },
      { label: "External & front doors", text: "Secure, weather-sealed and properly insulated." },
      { label: "Bi-fold & French doors", text: "Smooth-running doors that open the home to the garden." },
      { label: "Timber & uPVC windows", text: "Supplied and fitted square, level and sealed." },
      { label: "Frames & linings", text: "New frames and linings made good and finished cleanly." },
      { label: "Skirting & architrave", text: "The trim that finishes openings off properly." },
      { label: "Locks, handles & ironmongery", text: "Quality fittings fitted and adjusted to work for years." },
      { label: "Draught-proofing & sealing", text: "Warmer, quieter rooms with the gaps properly closed." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Windows & doors we've fitted",
    gallerySlots: [
      { id: "doors-gal-1", label: "Oak internal doors · Teignmouth" },
      { id: "doors-gal-2", label: "Bi-fold garden doors · Torquay" },
      { id: "doors-gal-3", label: "New front door · Exeter" },
      { id: "doors-gal-4", label: "Timber sash windows · Newton Abbot" },
      { id: "doors-gal-5", label: "French doors & frame · Torbay" },
      { id: "doors-gal-6", label: "Full window replacement · Kingsteignton" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Windows & doors questions, answered",
    faqIntro: "The questions Paul hears most about windows and doors. Anything else, just ask.",
    faqs: [
      { q: "Will you supply the doors and windows, or do I?", a: "Either. Paul can supply and fit, or fit units you've bought yourself — whatever works best for you." },
      { q: "Is no job too small?", a: "Exactly right — from rehanging a single sticking door to fitting windows throughout the house, it's all welcome." },
      { q: "Do you fit bi-fold and French doors?", a: "Yes — bi-folds, French doors and patio doors are all part of the service, fitted square and running smoothly." },
      { q: "Can you make good around new frames?", a: "Yes. Frames, linings, skirting and architrave are all finished neatly so the opening looks properly done, not patched." },
      { q: "Will new doors and windows help with draughts?", a: "A proper fit and good sealing make a real difference to warmth and noise — Paul draught-proofs and seals as part of the job." },
      { q: "How much does it cost?", a: "It depends on the units and how many. After seeing the job Paul gives you a clear, itemised quote separating supply from fitting." },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);
