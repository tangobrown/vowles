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
      "Let's turn that dusty, forgotten roof space into a bright, beautiful room you'll actually want to spend time in. An extra bedroom, a home office or a quiet retreat, adding real space and genuine value to your home.",
    heroSlot: "loft-hero",
    introHeading: "More room, without the upheaval of moving",
    introBody:
      "A loft conversion is one of the kindest ways to add space and value to your home, and the lovely thing is it all happens up above your head, with the rest of the house left to get on as normal. Paul looks after the whole job from start to finish, from the very first sketch and structural calculations through to the final coat of paint, so you've got one friendly, trusted local builder throughout rather than a chain of subcontractors.",
    subServicesTitle: "What we can do up there",
    subServices: [
      { label: "Dormer conversions", text: "Extend headroom and usable floor space with a flat or pitched dormer." },
      { label: "Velux / rooflight conversions", text: "Keep the existing roofline and flood the room with natural daylight." },
      { label: "Hip-to-gable & L-shaped", text: "Reclaim awkward roof shapes for a larger, squarer, more usable room." },
      { label: "Structural steel & floor strengthening", text: "Building-control-approved support, properly calculated, beneath your feet." },
      { label: "Staircases", text: "Space-saving stairs designed to fit and finished to match your home." },
      { label: "Insulation & plastering", text: "Warm, quiet, fully finished walls and ceilings, ready to decorate." },
      { label: "Electrics, heating & plumbing", text: "First-fix through to a room that's genuinely ready to live in." },
      { label: "En-suites & storage", text: "Lovely optional extras, like a tucked-in shower room or built-in eaves storage." },
    ],
    galleryEyebrow: "Recent work",
    galleryHeading: "Lofts we've transformed",
    gallerySlots: [
      { id: "loft-gal-1", label: "Dormer conversion mid-build" },
      { id: "loft-gal-2", label: "Bespoke oak staircase" },
      { id: "loft-gal-3", label: "New pine staircase and balustrade" },
      { id: "loft-gal-4", label: "Structural steel above the ceiling" },
      { id: "loft-gal-5", label: "Steel and timber structural junction" },
      { id: "loft-gal-6", label: "Freshly-fitted oak staircase" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Loft conversion questions, answered",
    faqIntro:
      "A few of the things homeowners ask Paul most often. Got one that isn't here? Do just pick up the phone. Paul's always happy to talk it through, no pressure at all.",
    faqs: [
      { q: "How long does a loft conversion take?", a: "Most take around 6 to 8 weeks on site, depending on the type and any structural work involved. Paul will give you a realistic timeline before anything starts, and keep you gently updated as the job progresses." },
      { q: "Will I need planning permission?", a: "Many loft conversions fall under permitted development, but it really does depend on your roof, the design and your property. Paul handles building regulations as standard and is happy to advise on planning from the very first visit." },
      { q: "Can I stay in the house during the work?", a: "Yes, in most cases you can. The bulk of the work happens up in the loft and is sealed off from the rest of the home, so day-to-day life carries on with as little disruption as possible." },
      { q: "How much does a loft conversion cost?", a: "It varies with the size, type and finish you're after. After a free, no-obligation visit Paul gives you a clear, itemised quote with no hidden extras, so you always know exactly where you stand." },
      { q: "Will it add value to my home?", a: "A well-built loft conversion is one of the most reliable ways to add both living space and value, often returning more than it costs when it's done properly." },
      { q: "Do you handle everything, or do I need other trades?", a: "Paul looks after the whole job from start to finish, including the structural work, carpentry, electrics, plumbing and plastering, coordinating any specialists so you only ever deal with one trusted, friendly person." },
    ],
    testimonials: [
      {
        quote:
          "We have recently had a small loft conversion with skylight windows completed by Paul and Harry. We are very impressed by the quality of their work and such tidy and respectful workers too.",
        name: "Ally",
        town: "Exeter",
      },
      {
        quote:
          "Paul has done an amazing job converting our loft into an incredible bedroom and en suite. His workmanship is first class and we are very pleased with the end result. Whilst on site he kept everything very clean and tidy.",
        name: "Andy Balsdon",
        town: "Brixham",
      },
      {
        quote:
          "The professionalism and personal approach from Paul was excellent throughout our loft conversion. Paul took care of the lion's share of the entire job, fitting it neatly into the exact estimated time originally discussed.",
        name: "Robert Clutterbuck",
        town: "Teignmouth",
      },
    ],
  },

  "extensions": {
    name: "Extensions",
    eyebrow: "Extensions",
    heroSubhead:
      "Let's add the space your family really needs, whether that's a bigger kitchen, an extra bedroom or a proper utility. Built to last and looked after from start to finish, so an extension feels far less daunting than you'd think.",
    heroSlot: "ext-hero",
    introHeading: "The space you need, without the cost of moving",
    introBody:
      "Outgrowing your home doesn't have to mean leaving the place you love. A well-planned extension gives you the room you need and adds real value, and because Paul looks after the whole project himself, from groundworks and structure through to carpentry and finish, you've got one friendly point of contact from the first drawing to the final handover. Clear timelines, tidy sites and honest pricing all the way through.",
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
      { id: "ext-gal-1", label: "Vaulted extension mid-build" },
      { id: "ext-gal-2", label: "Finished extension with bi-fold doors" },
      { id: "ext-gal-3", label: "Installing gable-end glazing" },
      { id: "ext-gal-4", label: "Cedar-clad extension in progress" },
      { id: "ext-gal-5", label: "Vaulted extension at plaster stage" },
      { id: "ext-gal-6", label: "Timber-frame extension going up" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Extension questions, answered",
    faqIntro:
      "The things homeowners ask Paul most often when they're thinking about extending. Got a question that isn't here? Do give him a call. He'd love to help.",
    faqs: [
      { q: "How long does an extension take?", a: "A single-storey extension is typically 10 to 14 weeks, and a double-storey a little longer, depending on size and ground conditions. Paul gives you a realistic programme before work starts and keeps you updated throughout." },
      { q: "Will I need planning permission?", a: "Some extensions fall under permitted development, while others need a planning application. It depends on the size, position and your property. Paul advises on this early and handles building regulations as standard." },
      { q: "Can I stay in the house during the build?", a: "In most cases, yes. There'll be noisy and dusty stages along the way, but Paul works hard to keep the home liveable and the site sealed, clean and safe day to day." },
      { q: "How much does an extension cost?", a: "It depends on the size, complexity and finish. After a free site visit you'll get a clear, itemised quote with no hidden extras, so you can plan with real confidence." },
      { q: "Do you handle the foundations and structural work?", a: "Yes, the groundworks, foundations, steelwork and structural openings are all part of the service, properly engineered and signed off by building control." },
      { q: "Will the extension match the rest of my house?", a: "Absolutely. The materials, brickwork, render and rooflines are all chosen to blend with your existing home, so the extension looks like it was always meant to be there." },
    ],
  },

  "kitchens": {
    name: "Kitchens",
    eyebrow: "Kitchens",
    heroSubhead:
      "The heart of the home, fitted beautifully and built to last. From careful installs of your chosen kitchen to the bespoke carpentry and building work behind it, Paul creates a kitchen that looks lovely and works beautifully for years to come.",
    heroSlot: "kit-hero",
    introHeading: "A kitchen built around how you live",
    introBody:
      "A great kitchen is every bit as much about the carpentry and building behind it as the units on show. Paul fits supplied kitchens to a lovely, meticulous standard, and he can happily handle everything around them too, from the walls and floors to the plastering and the services beneath, so it all comes together as one properly finished room rather than a patchwork of different trades.",
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
      { id: "kit-gal-1", label: "Grey shaker kitchen with glass splashback" },
      { id: "kit-gal-2", label: "Bespoke shaker kitchen with marble island" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Kitchen questions, answered",
    faqIntro:
      "What homeowners most often ask Paul about a new kitchen. If yours isn't covered here, do just get in touch.",
    faqs: [
      { q: "Do I buy the kitchen, or do you supply it?", a: "Either works beautifully. Many clients buy their kitchen from a supplier they like and Paul fits it, and he's also happy to advise on suppliers and coordinate the order if you'd prefer." },
      { q: "How long does a kitchen fit take?", a: "A straightforward replacement is usually 1 to 2 weeks, or a little more if there's structural work, replastering or new flooring. Paul gives you a clear schedule up front." },
      { q: "Can you knock through to make it open-plan?", a: "Yes, the structural openings, beams and the making-good around them are all part of what Paul does, properly calculated and building-control approved." },
      { q: "Will you handle plumbing and electrics too?", a: "Yes. Paul coordinates the plumbing and electrical work so the sinks, appliances, sockets and lighting are all done and certified as part of the job." },
      { q: "How much does a new kitchen cost?", a: "It depends on the units, worktops and any building work involved. After a visit you'll get a clear, itemised quote that separates the fit from any extras." },
      { q: "Can I use the kitchen during the work?", a: "There'll be a short period without a working kitchen during the changeover. Paul plans the sequence carefully to keep that window as short and predictable as it can be." },
    ],
  },

  "media-walls": {
    name: "Media Walls",
    eyebrow: "Media Walls",
    heroSubhead:
      "Bespoke feature walls with lovely carpentry on show. A made-to-measure media wall turns a blank living-room wall into a real centrepiece, and it shows off exactly the kind of work Paul loves doing best.",
    heroSlot: "media-hero",
    introHeading: "A centrepiece, made to measure",
    introBody:
      "A media wall is where carefully planned carpentry meets the tech and the finish. Paul designs and builds each one around your room, your TV and your kit, hiding the cables away, framing in an electric fire, and integrating shelving and storage, so the result is a clean, modern feature that looks built-in because it genuinely is.",
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
      { id: "media-gal-1", label: "Slatted media wall with recessed TV" },
      { id: "media-gal-2", label: "Bespoke slatted office feature wall" },
      { id: "media-gal-3", label: "Slatted feature wall in a vaulted room" },
      { id: "media-gal-4", label: "Oak trim and panelling detail" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Media wall questions, answered",
    faqIntro: "The questions Paul hears most about bespoke media walls. Anything else at all, do just ask.",
    faqs: [
      { q: "How long does a media wall take to build?", a: "Most are completed in around 1 to 2 weeks, depending on the size, the finish and any electrical work. Paul will confirm timings when he quotes." },
      { q: "Can you fit an electric fire and TV together?", a: "Yes, and it's a lovely look. Integrating an inset electric fire below a recessed TV is one of the most popular setups, and Paul builds the framing and ventilation to suit." },
      { q: "Will the cables and devices be hidden?", a: "Completely. The power and AV cabling is routed inside the wall, with consoles and boxes housed in concealed but easily accessible compartments." },
      { q: "Do you handle the electrics?", a: "Yes. Any additional sockets, fused spurs and lighting are coordinated and certified as part of the build." },
      { q: "Can you match it to my interior?", a: "Absolutely. Slatted timber, painted MDF, panelling or a mix of them, Paul designs the finish around your room and your colour scheme." },
      { q: "How much does a media wall cost?", a: "It varies with the size, materials and the tech involved. You'll get a clear, itemised quote once Paul has seen the space." },
    ],
  },

  "cut-roofs": {
    name: "Cut Roofs",
    eyebrow: "Cut Roofs",
    heroSubhead:
      "Traditional roof carpentry, cut by hand on site. From new builds to complex extensions and repairs, Paul cuts roofs the proper way, accurate, strong and built to last for generations.",
    heroSlot: "roof-hero",
    introHeading: "Proper roof carpentry, cut on site",
    introBody:
      "A cut roof, built rafter by rafter on site rather than craned in as a truss, gives you strength, flexibility and a usable roof space that prefabricated systems simply can't match. It's skilled, traditional carpentry, and it's exactly the kind of work Paul takes real pride in. Set out correctly, cut accurately, and built to carry the loads it should for the whole life of the building.",
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
      { id: "roof-gal-1", label: "Cut roof with worker on the ridge" },
      { id: "roof-gal-2", label: "Rafters and breather membrane detail" },
      { id: "roof-gal-3", label: "Inside a cut roof structure" },
      { id: "roof-gal-4", label: "Roof valley from the scaffold walkway" },
      { id: "roof-gal-5", label: "Steel truss and timber rafters" },
      { id: "roof-gal-6", label: "Structural steel rafters going up" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Cut roof questions, answered",
    faqIntro: "What clients most often ask about traditional roof carpentry. If yours isn't here, do give Paul a call.",
    faqs: [
      { q: "What's the difference between a cut roof and trusses?", a: "A cut roof is built piece by piece on site, which gives more flexibility and usable loft space, whereas trusses are prefabricated and craned in. Paul cuts roofs traditionally where the strength, shape or future use call for it." },
      { q: "Can you cut a roof for an awkward or complex shape?", a: "Yes, and it's work he really enjoys. Hips, valleys, dormers and link roofs into existing buildings are all part of what he does, set out accurately on site." },
      { q: "Do you handle the structural calculations?", a: "Yes. The timber and any supporting steel are correctly sized, and the work is carried out to meet building regulations." },
      { q: "Can you leave the timbers exposed?", a: "Absolutely. Vaulted and open ceilings that show off the carpentry are a lovely option, and something Paul really enjoys building." },
      { q: "Do you do roof repairs as well as new roofs?", a: "Yes, from replacing failed rafters and timbers through to altering and extending existing roof structures." },
      { q: "How much does a cut roof cost?", a: "It depends entirely on the size and complexity. After assessing the job, Paul gives you a clear, itemised quote." },
    ],
  },

  "flooring-decking": {
    name: "Flooring & Decking",
    eyebrow: "Flooring & Decking",
    heroSubhead:
      "Quality floors indoors and decking made to enjoy outdoors. Whether it's solid timber underfoot or a deck to make the most of the garden, Paul lays it level, solid and beautifully finished.",
    heroSlot: "floor-hero",
    introHeading: "Solid underfoot, indoors and out",
    introBody:
      "Floors and decks get used every single day, so it really matters that they're built right. Paul prepares the base properly, sets everything dead level, and finishes it all neatly at the edges and thresholds, whether that's engineered oak in the lounge or a hardwood deck stepping out into the garden. Done well, they look wonderful and last for years.",
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
      { id: "floor-gal-1", label: "Raised deck substructure" },
      { id: "floor-gal-2", label: "Solid oak floor in a heritage building" },
      { id: "floor-gal-3", label: "Oak floor and bespoke staircase" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Flooring & decking questions, answered",
    faqIntro: "The questions Paul hears most about floors and decks. Anything else at all, do just ask.",
    faqs: [
      { q: "Can you level an uneven floor before laying?", a: "Yes. Proper subfloor preparation, including levelling, ply and battening, is part of the job, so the finished floor sits lovely and flat and feels solid underfoot." },
      { q: "What decking materials do you use?", a: "Both timber, in hardwood and softwood, and low-maintenance composite. Paul will happily talk through the look, lifespan and upkeep of each, so you can choose what suits you best." },
      { q: "How long does decking take to build?", a: "Most domestic decks take a few days to a week or so, depending on the size, height and groundwork. Paul confirms timings when he quotes." },
      { q: "Will the deck need much maintenance?", a: "Composite needs very little, while timber benefits from occasional cleaning and treating. Paul builds with proper drainage and ventilation so it lasts beautifully either way." },
      { q: "Can you match new flooring to existing rooms?", a: "Yes. The flooring, skirting and thresholds are all finished to tie in neatly with your adjoining rooms." },
      { q: "How much does flooring or decking cost?", a: "It depends on the material and the area. After measuring up, Paul gives you a clear, itemised quote." },
    ],
  },

  "maintenance": {
    name: "Maintenance Contracts",
    eyebrow: "Maintenance Contracts",
    heroSubhead:
      "Reliable, friendly care for homes and businesses. One trusted local tradesman on hand for the repairs, jobs and upkeep that keep a property in lovely order, with no chasing and no surprises.",
    heroSlot: "maint-hero",
    introHeading: "One trusted tradesman, on call",
    introBody:
      "Properties always need looking after, and finding someone reliable for that steady stream of smaller jobs is honestly half the battle. A maintenance arrangement with Paul means you've got a skilled, trustworthy local builder who knows your property and turns up when he says he will. It's ideal for busy households, landlords, holiday lets and small businesses right across South Devon.",
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
      { id: "maint-gal-1", label: "Bespoke timber driveway gates" },
      { id: "maint-gal-2", label: "Wall panelling in a period home" },
      { id: "maint-gal-3", label: "Hallway panelling and fitted bench" },
      { id: "maint-gal-4", label: "Heritage staircase and panelling" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Maintenance questions, answered",
    faqIntro: "What clients most often ask about ongoing maintenance. If yours isn't here, do just get in touch.",
    faqs: [
      { q: "Do I have to sign a long contract?", a: "Not at all. Arrangements are lovely and flexible, from a simple 'call when you need me' understanding through to regular planned visits. Paul will set up whatever suits your property best." },
      { q: "Is this just for businesses, or homes too?", a: "Both, very happily. Busy households, landlords, holiday-let owners and small businesses all use Paul for their ongoing upkeep and repairs." },
      { q: "How quickly can you come out?", a: "For maintenance clients Paul prioritises reactive jobs and will give you a realistic timeframe when you call, so you're never left waiting and wondering." },
      { q: "Is there a minimum job size?", a: "No job is too small, and that's rather the whole point. Small repairs and odd jobs are exactly what a maintenance arrangement is for." },
      { q: "Do you cover holiday lets and rentals?", a: "Yes. Quick, reliable turnarounds between guests or tenants are a big part of the maintenance work Paul does." },
      { q: "How does pricing work?", a: "Either per visit or as an agreed arrangement for regular work. Paul keeps it all transparent, so you always know exactly where you stand." },
    ],
  },

  "windows-doors": {
    name: "Windows & Doors",
    eyebrow: "Windows & Doors",
    heroSubhead:
      "Supply and fit, with the everyday jobs done properly. From a single internal door to new windows throughout, Paul fits them square, sealed and finished to a standard you'll notice and enjoy every single time you use them.",
    heroSlot: "doors-hero",
    introHeading: "The everyday jobs, done properly",
    introBody:
      "Windows and doors are used countless times a day, so a really good fit always shows. Paul supplies and installs internal and external doors, windows and frames, hung square, sealed against the weather and finished neatly. Whether it's that one door you've been meaning to sort for years or a full set of windows for the whole house, it'll be done with care.",
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
      { id: "doors-gal-1", label: "Timber French doors on a summerhouse" },
      { id: "doors-gal-2", label: "New French doors, garden view" },
      { id: "doors-gal-3", label: "Freshly-painted summerhouse doors" },
      { id: "doors-gal-4", label: "Building a summerhouse window frame" },
      { id: "doors-gal-5", label: "Bi-fold doors on a vaulted extension" },
      { id: "doors-gal-6", label: "Installing gable-end glazing" },
    ],
    faqEyebrow: "Good to know",
    faqHeading: "Windows & doors questions, answered",
    faqIntro: "The questions Paul hears most about windows and doors. Anything else at all, do just ask.",
    faqs: [
      { q: "Will you supply the doors and windows, or do I?", a: "Either is absolutely fine. Paul can supply and fit, or happily fit units you've bought yourself, whatever works best for you." },
      { q: "Is no job too small?", a: "Exactly right. From rehanging a single sticking door to fitting windows throughout the whole house, it's all genuinely welcome." },
      { q: "Do you fit bi-fold and French doors?", a: "Yes. Bi-folds, French doors and patio doors are all part of the service, fitted square and running beautifully smoothly." },
      { q: "Can you make good around new frames?", a: "Yes. The frames, linings, skirting and architrave are all finished neatly, so the opening looks properly done rather than patched." },
      { q: "Will new doors and windows help with draughts?", a: "A proper fit and good sealing make a real difference to both warmth and noise, and Paul draught-proofs and seals as part of the job." },
      { q: "How much does it cost?", a: "It depends on the units and how many. After seeing the job, Paul gives you a clear, itemised quote that separates the supply from the fitting." },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);
