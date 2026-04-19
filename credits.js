// Static PBRS credit catalog loaded by PBRS_Pearl_Checklist.html
const SECTIONS = {
  IDP: 'IDP — Integrated Development Process',
  NS:  'NS — Natural Systems',
  LBo: 'LB — Livable Buildings (Outdoors)',
  LBi: 'LB — Livable Buildings (Indoors)',
  PW:  'PW — Precious Water',
  RE:  'RE — Resourceful Energy',
  SM:  'SM — Stewarding Materials',
  IP:  'IP — Innovating Practice',
};

const CREDITS = {
IDP:[
  {code:'IDP-R1',title:'Integrated Development Strategy',desc:'Appoint Pearl Qualified Professional (PQP) for the project',pts:'R',req:true,criteria:{
    concept:['Appoint Pearl Qualified Professional (PQP) for the project','Assemble Integrated Development Process (IDP) team with all key disciplines (architecture, MEP, civil, landscape, sustainability)','Hold IDP kick-off workshop — document sustainability objectives and targets','Define sustainability vision statement and credit scorecard'],
    schematic:['Conduct minimum 3 IDP workshops — document with signed meeting minutes','Demonstrate cross-disciplinary integration of sustainability decisions','Update sustainability scorecard to reflect schematic design decisions','Review EIDP evidence showing IDP is influencing design'],
    detailed:['Finalise IDP summary report covering all design stages','Confirm all major design decisions are aligned with IDP outcomes','Prepare IDP report for design rating submission to Estidama']}},
  {code:'IDP-R2',title:'Tenant Fit-Out Design & Construction Guide',desc:'Confirm whether project is Core & Shell (credit only applies to Core & Shell)',pts:'R',req:true,criteria:{
    concept:['Confirm whether project is Core & Shell (credit only applies to Core & Shell)'],
    schematic:['Draft Tenant Fit-Out Guide framework covering sustainability vision and credit targets'],
    detailed:['Finalise Tenant Fit-Out Design & Construction Guide','Confirm guide is attached to lease documents for all future tenants']}},
  {code:'IDP-R3',title:'Basic Commissioning',desc:'Appoint Independent Commissioning Agent (ICA) reporting directly to the owner',pts:'R',req:true,criteria:{
    concept:["Appoint Independent Commissioning Agent (ICA) reporting directly to the owner","Define Owner's Project Requirements (OPR) document with owner"],
    schematic:['ICA reviews schematic design documents and provides written comments',"Develop Commissioning Plan including OPR and Basis of Design narrative"],
    detailed:['Include comprehensive commissioning requirements in project specifications','Issue final Commissioning Plan prior to construction start']}},
  {code:'IDP-1',title:'Life Cycle Costing',desc:'Engage qualified Chartered Surveyor with previous LCC experience on min. 2 similar projects',pts:4,req:false,pointOptions:[
    {pts:1,label:'1 pt — LCC during concept design',desc:'Engage qualified LCC professional; start analysis during concept stage'},
    {pts:2,label:'2 pts — LCC updated at schematic',desc:'Update LCC model with schematic design decisions and demonstrate influence on design'},
    {pts:3,label:'3 pts — LCC finalized at detailed design',desc:'Finalize LCC report; document all design decisions informed by LCC analysis'},
    {pts:4,label:'4 pts — Comprehensive LCC with alternatives',desc:'Complete LCC comparing multiple design alternatives with documented recommendations incorporated'}
  ],criteria:{
    concept:['Engage qualified Chartered Surveyor with previous LCC experience on min. 2 similar projects','Start Life Cycle Cost (LCC) analysis during concept design to evaluate and compare design options'],
    schematic:['Update LCC model with schematic design decisions and technology choices','Provide evidence from EIDP that LCC results are influencing design'],
    detailed:['Finalise LCC report at end of detailed design stage','Document summary of all design decisions informed by LCC analysis']}},
  {code:'IDP-2',title:'Guest Worker Accommodation',desc:'Provide adequate accommodation and welfare provisions for construction guest workers',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Basic accommodation plan',desc:'Develop Construction Guest Worker Accommodation Plan framework covering minimum facilities'},
    {pts:2,label:'2 pts — Comprehensive accommodation plan',desc:'Finalise comprehensive plan covering accommodation, welfare, healthcare, transport, grievance mechanism, recreational facilities'}
  ],criteria:{
    concept:['Confirm whether project will use construction guest workers'],
    schematic:['Draft Construction Guest Worker Accommodation Plan framework'],
    detailed:['Finalise plan covering: accommodation facilities, welfare, healthcare, transport, grievance mechanism, recreational facilities']}},
  {code:'IDP-3',title:'Construction Environmental Management',desc:'Develop and implement comprehensive environmental management plan during construction',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — CEMP framework',desc:'Draft Construction Environmental Management Plan (CEMP) framework covering key environmental controls'},
    {pts:2,label:'2 pts — Finalized CEMP',desc:'Finalise CEMP covering dust, noise, vibration, waste, water quality, ecology protection with tender integration'}
  ],criteria:{
    concept:['Define scope of works and identify environmental sensitivities on and adjacent to site'],
    schematic:['Draft Construction Environmental Management Plan (CEMP) framework'],
    detailed:['Finalise CEMP covering dust, noise, vibration, waste, water quality, ecology protection','Include CEMP requirements in tender and contract documents']}},
  {code:'IDP-4',title:'Building Envelope Verification',desc:'Define building envelope performance targets (U-values, SHGC, airtightness)',pts:1,req:false,criteria:{
    concept:['Define building envelope performance targets (U-values, SHGC, airtightness)'],
    schematic:['Specify building envelope performance criteria in outline specifications'],
    detailed:['Include envelope air permeability testing requirements in specifications','Appoint independent testing agent for post-construction air permeability verification']}},
  {code:'IDP-5',title:'Re-Commissioning',desc:'Confirm owner commitment to ongoing commissioning beyond initial handover for performance verification',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Re-commissioning included',desc:'Include re-commissioning requirements within the commissioning plan'},
    {pts:2,label:'2 pts — Year 1-2 re-commissioning plan',desc:'Develop Re-Commissioning Plan for Year 1 tuning and Year 2 re-commissioning with O&M Manual and Building Log Book'}
  ],criteria:{
    concept:["Confirm owner's commitment to ongoing commissioning beyond initial handover"],
    schematic:['Include re-commissioning requirements within the commissioning plan'],
    detailed:['Develop Re-Commissioning Plan for Year 1 tuning and Year 2 re-commissioning','Specify O&M Manual and Building Log Book (BLB) requirements in contracts']}},
  {code:'IDP-6',title:'Sustainability Communication',desc:'Develop and implement sustainability communication strategy for occupants and stakeholders',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Communication strategy framework',desc:'Draft Sustainability Communication Strategy framework targeting key audiences'},
    {pts:2,label:'2 pts — Full communication plan',desc:'Finalise Sustainability Communication Plan covering occupant information, in-building displays, and annual reporting'}
  ],criteria:{
    concept:['Define target audience and scope of sustainability communication strategy'],
    schematic:['Draft Sustainability Communication Strategy framework'],
    detailed:['Finalise Sustainability Communication Plan covering occupant information, in-building displays, and annual reporting']}},
],
NS:[
  {code:'NS-R1',title:'Natural Systems Assessment',desc:'Undertake Preliminary Environmental Review (PER) of site by qualified ecologist',pts:'R',req:true,criteria:{
    concept:['Undertake Preliminary Environmental Review (PER) of site by qualified ecologist','Identify all natural systems on, adjacent to, and hydrologically connected to the site'],
    schematic:['Conduct detailed Natural Systems Assessment (NSA) — map habitats, species, groundwater, coastal features','NSA to be prepared by a qualified ecological consultant'],
    detailed:['Finalise NSA report and confirm all significant natural assets are documented','Confirm NSA findings are embedded in design and construction plans']}},
  {code:'NS-R2',title:'Natural Systems Protection',desc:'Identify priority habitats and species requiring protection',pts:'R',req:true,criteria:{
    concept:['Identify priority habitats and species requiring protection','Define site exclusion zones and protective buffer distances'],
    schematic:['Develop Natural Systems Protection Plan with qualified ecologist','Confirm design layout avoids all significant natural assets'],
    detailed:['Finalise protection measures in construction drawings and specifications','Include natural systems protection requirements in all construction contracts']}},
  {code:'NS-R3',title:'Natural Systems Design & Management Strategy',desc:'Identify opportunities to integrate and enhance natural systems within the design',pts:'R',req:true,criteria:{
    concept:['Identify opportunities to integrate and enhance natural systems within the design'],
    schematic:['Develop Natural Systems Design & Management Strategy following hierarchy: protect → restore → enhance'],
    detailed:['Finalise strategy covering design, construction phase, and long-term operational management']}},
  {code:'NS-1',title:'Reuse of Land',desc:'Confirm site qualifies as previously developed land (brownfield) per PBRS definition',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Documentary evidence of prior development',desc:'Gather documentary evidence (site history maps, photographs, official records) confirming prior development'},
    {pts:2,label:'2 pts — Finalized land reuse narrative',desc:'Submit complete land reuse narrative with documented site history demonstrating prior development'}
  ],criteria:{
    concept:['Confirm site qualifies as previously developed land (brownfield) per PBRS definition'],
    schematic:['Gather documentary evidence of prior development on site'],
    detailed:['Finalise land reuse narrative with site history maps, photographs, and official records']}},
  {code:'NS-2',title:'Remediation of Contaminated Land',desc:'To encourage and promote the remediation of land for building development',pts:2,req:false,criteria:{
    concept:['Demonstrate the site is contaminated by undertaking investigative analysis through completion of Phase I and Phase II American Society for Testing and Materials (ASTM) analysis, or similar','Demonstrate that a Site Contamination Assessment Report has been provided identifying, estimating and evaluating the hazard risks on site','Demonstrate that the results of the Contamination Assessment Report have informed the overall design and layout of the development'],
    schematic:['Demonstrate the site is contaminated and an assessment report and remediation strategy has been prepared'],
    detailed:['Demonstrate that the land, prior to development, was identified as contaminated through the site contamination assessment report and that adequate remedial steps were taken to decontaminate or safely encapsulate the site prior to construction']}},
  {code:'NS-3',title:'Ecological Enhancement',desc:'Restore native plant communities to support local biodiversity and ecological enhancement',pts:2,req:false,pointOptions:[
    {pts:2,label:'80%+ of landscaped areas with native species',desc:'Achieve 80% or more of landscaped areas with native plant species'}
  ],criteria:{
    concept:['Identify specific opportunities for ecological enhancement beyond baseline mitigation'],
    schematic:['Develop Ecological Enhancement Plan with qualified ecologist'],
    detailed:['Finalise design details for green roofs, habitat boxes, bioswales, and enhanced planting']}},
  {code:'NS-4',title:'Habitat Creation & Restoration',desc:'Enhance site biodiversity through ecological design and habitat creation',pts:3,req:false,pointOptions:[
    {pts:1,label:'1 pt — Basic biodiversity measures',desc:'Implement basic biodiversity measures (plantings, habitat features)'},
    {pts:3,label:'3 pts — Comprehensive biodiversity strategy',desc:'Implement comprehensive biodiversity strategy with species count targets'}
  ],criteria:{
    concept:['Identify degraded, lost, or functionally reduced habitats on or adjacent to the site'],
    schematic:['Develop Habitat Creation & Restoration Plan with qualified ecologist — target priority habitat types'],
    detailed:['Finalise species selections, planting plans, and habitat management commitments','Secure long-term habitat management agreement (minimum 10 years)']}},
],
LBo:[
  {code:'LBo-R1',title:'Plan 2030',desc:'Review Abu Dhabi Plan 2030 requirements applicable to the site',pts:'R',req:true,criteria:{
    concept:["Review Abu Dhabi Plan 2030 requirements applicable to the site",'Confirm project complies with land use, density, open space, and sustainability policies'],
    schematic:['Demonstrate project design positively responds to Plan 2030 urban structure framework'],
    detailed:['Confirm all Plan 2030 compliance documented in drawings and planning submission']}},
  {code:'LBo-R2',title:'Urban Systems Assessment',desc:'Undertake Urban Systems Assessment mapping existing context: pedestrian routes, transport, public space, community facilities',pts:'R',req:true,criteria:{
    concept:['Undertake Urban Systems Assessment mapping existing context: pedestrian routes, transport, public space, community facilities'],
    schematic:['Demonstrate project design responds positively to Urban Systems Assessment findings'],
    detailed:['Finalise Urban Systems Assessment report for design rating submission']}},
  {code:'LBo-R3',title:'Outdoor Thermal Comfort Strategy',desc:'Define all outdoor spaces requiring thermal comfort assessment',pts:'R',req:true,criteria:{
    concept:['Define all outdoor spaces requiring thermal comfort assessment','Appoint specialist consultant for outdoor microclimate analysis'],
    schematic:['Conduct outdoor thermal comfort simulations (CFD/UTCI analysis)','Develop Outdoor Thermal Comfort Strategy — shading, planting, materials, misting'],
    detailed:['Finalise outdoor shading structures and confirm compliance with thermal comfort targets in all key spaces']}},
  {code:'LBo-1',title:'Improved Outdoor Thermal Comfort',desc:'Limit impervious surfaces and reduce urban heat island effect through outdoor thermal management',pts:1,req:false,pointOptions:[
    {pts:1,label:'Hardscape limited to 50% or less of site',desc:'Limit site hardscape (paving, roof) to 50% or less of total site area'}
  ],criteria:{
    concept:['Set outdoor thermal comfort performance target (UTCI or PMV-based) beyond minimum'],
    schematic:['Simulate outdoor thermal comfort for all key pedestrian spaces','Demonstrate measurable improvement above the minimum strategy requirement'],
    detailed:['Confirm shading elements, high-reflectance materials, and vegetation in detailed construction drawings']}},
  {code:'LBo-2',title:'Pearl Rated Communities',desc:'Confirm site is located within a Pearl Rated Community development',pts:1,req:false,criteria:{
    concept:['Confirm site is located within a Pearl Rated Community development'],
    schematic:['Obtain written confirmation from the community master developer'],
    detailed:['Document evidence of Pearl Rated Community location in credit submission']}},
  {code:'LBo-3',title:'Accessible Community Facilities',desc:'Map all community facilities within 800m walking distance of the main building entrance',pts:1,req:false,criteria:{
    concept:['Map all community facilities within 800m walking distance of the main building entrance'],
    schematic:['Confirm minimum 4 different community facility types are within walking distance'],
    detailed:['Finalise site plan showing pedestrian walking routes to all identified community facilities']}},
  {code:'LBo-4',title:'Active Urban Environments',desc:'Assess ground floor activation opportunities along all street-facing facades',pts:1,req:false,criteria:{
    concept:['Assess ground floor activation opportunities along all street-facing facades'],
    schematic:['Design active uses (retail, café, services) occupying min. 50% of ground floor street-facing frontage'],
    detailed:['Confirm active use layouts, frontage transparency, and access points in detailed drawings']}},
  {code:'LBo-6',title:'Public Transport',desc:'Locate development near quality public transit infrastructure',pts:2,req:false,pointOptions:[
    {pts:1,label:'Lighting design limiting spillover and glare',desc:'Implement lighting design limiting spillover and glare'},
    {pts:2,label:'Full night-sky compliance',desc:'Achieve full night-sky compliance with no upward light'}
  ],criteria:{
    concept:['Map all public transport stops within 500m of the building main entrance'],
    schematic:['Confirm frequency and types of public transport services available','Assess walking routes and their quality for pedestrians'],
    detailed:['Provide covered, weather-protected pedestrian routes to nearest public transport stops']}},
  {code:'LBo-7',title:'Bicycle Facilities',desc:'Support non-motorized transportation through site design',pts:1,req:false,pointOptions:[
    {pts:1,label:'Located near quality public transit',desc:'Locate within specified distance of public transit with defined frequency/service'}
  ],criteria:{
    concept:['Define projected cycling demand and target levels for the building use'],
    schematic:['Design secure long-stay cycle parking, shower, and changing facilities','Calculate quantities per PBRS requirements'],
    detailed:['Finalise cycle storage layout, quantities, security measures, and wayfinding in construction drawings']}},
  {code:'LBo-8',title:'Preferred Car Parking Spaces',desc:'Identify preferred parking spaces and related allocation criteria',pts:1,req:false,criteria:{
    concept:['Identify preferred parking spaces and define allocation criteria'],
    schematic:['Reserve preferred parking spaces for low-emission, carpools, or accessible use'],
    detailed:['Confirm signage, location, and counts in detailed parking drawings']}},
  {code:'LBo-9',title:'Travel Plan',desc:'Confirm commitment to developing a comprehensive Travel Plan',pts:1,req:false,criteria:{
    concept:['Confirm commitment to developing a comprehensive Travel Plan'],
    schematic:['Draft Travel Plan framework with baseline travel assessment'],
    detailed:['Finalise Travel Plan with mode share targets, monitoring programme, and responsible party']}},
  {code:'LBo-10',title:'Light Pollution Reduction',desc:'Identify sensitive receivers around the site: residential buildings, habitats, night sky',pts:1,req:false,criteria:{
    concept:['Identify sensitive receivers around the site: residential buildings, habitats, night sky'],
    schematic:['Establish lighting design criteria to limit spill light and upward light emission'],
    detailed:['Confirm all external luminaires comply with light pollution limits and BUG ratings in detailed specifications']}},
],
LBi:[
  {code:'LBi-R1',title:'Healthy Ventilation Delivery',desc:'Confirm HVAC strategy provides adequate outdoor air to all occupied spaces',pts:'R',req:true,criteria:{
    concept:['Confirm HVAC strategy provides adequate outdoor air to all occupied spaces'],
    schematic:['Demonstrate ventilation rates meet ASHRAE 62.1 minimum requirements for all spaces'],
    detailed:['Include ventilation performance testing and TAB (Testing, Adjusting, Balancing) requirements in mechanical specifications']}},
  {code:'LBi-R2',title:'Smoking Control',desc:'Define no-smoking policy for all indoor areas and building entrances',pts:'R',req:true,criteria:{
    concept:['Define no-smoking policy for all indoor areas and building entrances'],
    schematic:['Locate any designated outdoor smoking areas minimum 7.5m from all building entrances and air intakes'],
    detailed:['Confirm no-smoking signage, policy documentation, and lease enforcement provisions']}},
  {code:'LBi-R3',title:'Legionella Prevention',desc:'Identify all domestic water systems and cooling towers at risk of Legionella growth',pts:'R',req:true,criteria:{
    concept:['Identify all domestic water systems and cooling towers at risk of Legionella growth'],
    schematic:['Develop Legionella Risk Assessment and Water Safety Control Strategy with specialist'],
    detailed:['Include Legionella prevention measures — temperature maintenance, biocide dosing, monitoring — in MEP specs and O&M Manual']}},
  {code:'LBi-1',title:'Ventilation Quality',desc:'Set enhanced IAQ target beyond ASHRAE 62.1 minimum outdoor air rates',pts:3,req:false,pointOptions:[
    {pts:1,label:'1 pt — Demand-controlled ventilation',desc:'Implement CO₂ or VOC sensing with demand-controlled ventilation'},
    {pts:2,label:'2 pts — Enhanced filtration (MERV 13)',desc:'Specify enhanced filtration to MERV 13 or higher'},
    {pts:3,label:'3 pts — Full advanced IAQ strategy',desc:'Combine demand-controlled ventilation with MERV 13+ filtration and continuous IAQ monitoring'}
  ],criteria:{
    concept:['Set enhanced IAQ target beyond ASHRAE 62.1 minimum outdoor air rates'],
    schematic:['Design for improved outdoor air supply — consider demand-controlled ventilation with CO₂ sensing','Evaluate enhanced filtration to MERV 13 or higher'],
    detailed:['Specify CO2/VOC sensors, IAQ monitoring system, and enhanced filtration in mechanical specifications']}},
  {code:'LBi-2.1',title:'Material Emissions: Adhesives & Sealants',desc:'Flag low-VOC adhesives and sealants as a project-wide requirement',pts:1,req:false,criteria:{
    concept:['Flag low-VOC adhesives and sealants as a project-wide requirement'],
    schematic:['Specify VOC content limits for all adhesives and sealants per SCAQMD Rule 1168'],
    detailed:['Confirm all specified adhesive and sealant products meet required VOC limits in specifications and materials schedule']}},
  {code:'LBi-2.2',title:'Material Emissions: Paints & Coatings',desc:'Flag low-VOC paints and coatings as a project-wide requirement',pts:1,req:false,criteria:{
    concept:['Flag low-VOC paints and coatings as a project-wide requirement'],
    schematic:['Specify VOC content limits per GS-11 (architectural paints) and GS-03 (anti-corrosive coatings)'],
    detailed:['Confirm all specified paint and coating products meet VOC limits in specifications']}},
  {code:'LBi-2.3',title:'Material Emissions: Carpet & Hard Flooring',desc:'Identify flooring product categories and flag low-emission requirement across all',pts:1,req:false,criteria:{
    concept:['Identify flooring product categories and flag low-emission requirement across all'],
    schematic:['Specify carpet meeting CRI Green Label Plus; hard flooring per FloorScore or equivalent'],
    detailed:['Confirm all flooring products meet emission certification standards in specifications and finishes schedule']}},
  {code:'LBi-5.1',title:'Thermal Comfort: Thermal Zoning',desc:'Identify occupancy patterns and areas with different thermal comfort requirements',pts:1,req:false,criteria:{
    concept:['Identify occupancy patterns and areas with different thermal comfort requirements'],
    schematic:['Design HVAC with independently controlled thermal zones for different occupancy types and orientations'],
    detailed:['Confirm independent zone control reflected in MEP drawings and BMS configuration']}},
  {code:'LBi-5.3',title:'Thermal Comfort: Thermal Comfort Modelling',desc:'Commit to thermal comfort modelling using ASHRAE 55 PMV/PPD methodology',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — PMV modeling for representative spaces',desc:'Conduct thermal comfort simulation for all representative occupied space types demonstrating PMV compliance'},
    {pts:2,label:'2 pts — Comprehensive PMV analysis',desc:'Submit comprehensive thermal comfort modelling report confirming all spaces achieve ASHRAE 55 criteria (PMV between -0.5 and +0.5)'}
  ],criteria:{
    concept:['Commit to thermal comfort modelling using ASHRAE 55 PMV/PPD methodology'],
    schematic:['Conduct thermal comfort simulation for all representative occupied space types','Demonstrate spaces achieve PMV between -0.5 and +0.5'],
    detailed:['Submit thermal comfort modelling report confirming compliance with ASHRAE 55 criteria']}},
  {code:'LBi-6',title:'High Frequency Lighting',desc:'Identify all spaces with fluorescent lighting and specify high-frequency ballast requirement',pts:1,req:false,criteria:{
    concept:['Identify all spaces with fluorescent lighting and specify high-frequency ballast requirement'],
    schematic:['Confirm all fluorescent fittings use high-frequency ballasts (≥40kHz) or are replaced by LED'],
    detailed:['Include high-frequency ballast or LED-only requirement in electrical specifications']}},
  {code:'LBi-7',title:'Daylight & Glare',desc:'Set daylight performance target for all regularly occupied spaces',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Daylight or glare control',desc:'Achieve minimum 2% daylight factor for 75%+ of regularly occupied spaces OR implement comprehensive glare control'},
    {pts:2,label:'2 pts — Full daylight and glare strategy',desc:'Achieve 2% daylight factor for 75%+ of occupied spaces AND implement external/internal glare control for all glazed facades'}
  ],criteria:{
    concept:['Set daylight performance target for all regularly occupied spaces'],
    schematic:['Conduct daylight simulation — achieve min. 2% daylight factor (or equivalent LEED EQ metric)','Design glare control strategy: external overhangs, internal blinds, fritting, for all glazed facades'],
    detailed:['Confirm daylight simulation results and glare control specifications in detailed design package']}},
  {code:'LBi-9',title:'Indoor Noise Pollution',desc:'Identify all noise-sensitive spaces: offices, classrooms, bedrooms, meeting rooms',pts:1,req:false,criteria:{
    concept:['Identify all noise-sensitive spaces: offices, classrooms, bedrooms, meeting rooms'],
    schematic:['Develop acoustic strategy — partition performance, HVAC background noise limits (NR/NC), façade sound reduction'],
    detailed:['Confirm all acoustic specifications meet target background noise levels and sound insulation ratings in all sensitive spaces']}},
],
PW:[
  {code:'PW-R1',title:'Minimum Interior Water Use Reduction',desc:'Establish water consumption baseline using PBRS standard fixture flow rates',pts:'R',req:true,criteria:{
    concept:['Establish water consumption baseline using PBRS standard fixture flow rates','Define minimum reduction target: 15% below baseline'],
    schematic:['Select water-efficient sanitary fixtures and fittings — dual-flush WCs, flow-restricted taps','Calculate projected water consumption against PBRS baseline'],
    detailed:['Specify all fixtures with confirmed flow rates in plumbing specifications','Finalise water efficiency calculations demonstrating minimum 15% reduction']}},
  {code:'PW-R2',title:'Exterior Water Monitoring',desc:'Identify all exterior water uses: irrigation, cooling towers, water features, washing',pts:'R',req:true,criteria:{
    concept:['Identify all exterior water uses: irrigation, cooling towers, water features, washing'],
    schematic:['Design dedicated sub-metering for each exterior water use category'],
    detailed:['Include sub-meters with data-logging capability in MEP drawings and specifications']}},
  {code:'PW-1',title:'Improved Interior Water Use Reduction',desc:'Achieve further reductions in building potable water consumption beyond minimum baseline',pts:15,req:false,pointOptions:[
    {pts:1,label:'4% potable water reduction',desc:'4% potable water reduction vs. baseline'},
    {pts:2,label:'8% potable water reduction',desc:'8% reduction vs. baseline'},
    {pts:3,label:'12% potable water reduction',desc:'12% reduction vs. baseline'},
    {pts:4,label:'16% potable water reduction',desc:'16% reduction vs. baseline'},
    {pts:5,label:'20% potable water reduction',desc:'20% reduction vs. baseline'},
    {pts:6,label:'24% potable water reduction',desc:'24% reduction vs. baseline'},
    {pts:7,label:'28% potable water reduction',desc:'28% reduction vs. baseline'},
    {pts:8,label:'32% potable water reduction',desc:'32% reduction vs. baseline'},
    {pts:9,label:'36% potable water reduction',desc:'36% reduction vs. baseline'},
    {pts:10,label:'40% potable water reduction',desc:'40% reduction vs. baseline'},
    {pts:11,label:'44% potable water reduction',desc:'44% reduction vs. baseline'},
    {pts:12,label:'48% potable water reduction',desc:'48% reduction vs. baseline'},
    {pts:13,label:'52% potable water reduction',desc:'52% reduction vs. baseline'},
    {pts:14,label:'56% potable water reduction',desc:'56% reduction vs. baseline'},
    {pts:15,label:'60% or greater potable water reduction',desc:'60% potable water reduction vs. baseline'}
  ],criteria:{
    concept:['Set enhanced water reduction target beyond the 15% minimum (targeting 30–50%+)'],
    schematic:['Select ultra-low flow fixtures: dual-flush WCs (3/4.5L), 6L/min taps, waterless urinals','Calculate projected savings for each level of improvement to identify achievable credit points'],
    detailed:['Confirm all fixture flow rates in plumbing specifications','Finalise calculations demonstrating credit level achieved and attach to credit submission']}},
  {code:'PW-2.1',title:'Exterior Water Reduction: Landscaping',desc:'Minimize landscaping water demands through effective plant selection, irrigation strategies, and recycled water use',pts:10,req:false,pointOptions:[
    {pts:2,label:'Plant selection: <4 L/m²/day irrigation',desc:'Average landscape irrigation demand <4 liters/m²/day'},
    {pts:4,label:'Plant selection: <2 L/m²/day irrigation',desc:'Average landscape irrigation demand <2 liters/m²/day'},
    {pts:1,label:'Water efficient irrigation system',desc:'Water Efficient Irrigation System incorporated into landscape design'},
    {pts:1,label:'Irrigation operation & maintenance plan',desc:'Irrigation Operation & Maintenance Plan developed'},
    {pts:2,label:'Recycled water serving exterior irrigation',desc:'100% of exterior irrigation demand served via Exterior Water Allowance + recycled water mainline loop'},
    {pts:2,label:'Non-water turf substitutes (Schools only)',desc:'Non-water turf substitutes installed in place of turf on playing fields'}
  ],criteria:{
    concept:['Define landscape concept based on native and adaptive low-water plant palette','Set irrigation water use reduction target vs. conventional landscaping baseline'],
    schematic:['Develop detailed planting schedule with water demand calculations per irrigation zone','Design efficient drip or micro-irrigation system with smart controller and soil moisture sensors'],
    detailed:['Finalise irrigation design with zone scheduling, controller specification, and water budget calculations','Confirm use of treated sewage effluent (TSE) or recycled water for irrigation']}},
  {code:'PW-2.2',title:'Exterior Water Reduction: Heat Rejection',desc:'Reduce potable water consumption for heat rejection through recycled water use or elimination of water-based cooling',pts:8,req:false,pointOptions:[
    {pts:2,label:'>25% cooling water via recycled water',desc:'>25% of cooling tower/district cooling water make-up requirements served via Exterior Water Allowance'},
    {pts:3,label:'>50% cooling water via recycled water',desc:'>50% served via Exterior Water Allowance'},
    {pts:4,label:'>75% cooling water via recycled water',desc:'>75% served via Exterior Water Allowance'},
    {pts:5,label:'100% cooling water via recycled water',desc:'100% served via Exterior Water Allowance'},
    {pts:8,label:'No water for heat rejection',desc:'Project uses no water for heat rejection (passive cooling, dry coolers, or other alternative methods)'}
  ],criteria:{
    concept:['Confirm cooling tower or heat rejection system type, scale, and water use implications'],
    schematic:['Specify water-efficient heat rejection equipment','Design water treatment system to maximise cycles of concentration (target ≥5 cycles)'],
    detailed:['Confirm makeup water quantities, blowdown rates, and cycles of concentration in MEP specifications and calculations']}},
  {code:'PW-3',title:'Water Monitoring & Leak Detection',desc:'Encourage monitoring of interior water use to enable identification and correction of leaks',pts:2,req:false,pointOptions:[
    {pts:2,label:'Sub-metering for water monitoring',desc:'Install sub-metering systems monitoring individual water end-uses (fixtures, equipment) with central data logging and reporting capability to identify leaks and usage patterns'}
  ],criteria:{
    concept:['Identify all major water end-uses requiring individual sub-metering'],
    schematic:['Design comprehensive sub-metering strategy covering all end-uses','Include automatic leak detection and pulse-monitoring system'],
    detailed:['Specify sub-meters, pulse data loggers, and leak detection equipment in MEP drawings and specifications']}},
  {code:'PW-4',title:'Stormwater Management',desc:'Minimize stormwater run-off volumes and treat stormwater on-site to reduce impact on receiving waters',pts:3,req:false,pointOptions:[
    {pts:1,label:'Stormwater management: 50%+ of site',desc:'Implement stormwater management controls treating run-off from 50% or more of site area on-site'},
    {pts:2,label:'Stormwater management: 75%+ of site',desc:'Implement controls treating 75% or more of site area; meet infiltration/retention targets'},
    {pts:3,label:'Full on-site stormwater treatment',desc:'Achieve full on-site treatment with infiltration to natural groundwater recharge or retention for beneficial reuse'}
  ],criteria:{
    concept:['Assess site stormwater runoff volumes and peak flow rates using local rainfall data','Identify opportunities for stormwater attenuation and beneficial reuse'],
    schematic:['Design stormwater attenuation strategy: detention tanks, permeable paving, bioswales','Model post-development runoff and demonstrate reduction vs. pre-development baseline'],
    detailed:['Finalise stormwater design with calculations and confirm performance against runoff reduction targets']}},
],
RE:[
  {code:'RE-R1',title:'Minimum Energy Performance',desc:'Define building energy performance target: minimum 10% improvement over ASHRAE 90.1 baseline',pts:'R',req:true,criteria:{
    concept:['Define building energy performance target: minimum 10% improvement over ASHRAE 90.1 baseline','Appoint energy modeller and establish energy modelling brief (EUI targets per building use)'],
    schematic:['Conduct parametric energy model per ANSI/ASHRAE/IESNA 90.1-2007','Demonstrate minimum 10% energy cost saving vs. baseline building'],
    detailed:['Finalise energy model with all detailed design inputs including actual equipment schedules','Include energy performance target and modelling summary in design documentation']}},
  {code:'RE-R2',title:'Energy Monitoring & Reporting',desc:'Define all major energy end-uses requiring dedicated sub-metering (HVAC, lighting, small power, lifts, specialist equipment)',pts:'R',req:true,criteria:{
    concept:['Define all major energy end-uses requiring dedicated sub-metering (HVAC, lighting, small power, lifts, specialist equipment)'],
    schematic:['Design energy metering strategy covering all major end-use categories'],
    detailed:['Include energy sub-meters and BMS energy reporting dashboard in MEP specifications']}},
  {code:'RE-R3',title:'Ozone Impacts of Refrigerants & Fire Suppression',desc:'Identify all refrigerants planned for HVAC, refrigeration, and fire suppression systems',pts:'R',req:true,criteria:{
    concept:['Identify all refrigerants planned for HVAC, refrigeration, and fire suppression systems'],
    schematic:['Confirm zero ODP (Ozone Depletion Potential) refrigerants and fire suppression agents are selected for all systems'],
    detailed:['Include zero ODP refrigerant and fire agent requirements in MEP and fire protection specifications']}},
  {code:'RE-1',title:'Improved Energy Performance',desc:'Encourage improved energy performance beyond minimum baseline',pts:15,req:false,pointOptions:[
    {pts:1,label:'4% energy improvement',desc:'4% improvement in energy performance vs. baseline'},
    {pts:2,label:'8% energy improvement',desc:'8% improvement vs. baseline'},
    {pts:3,label:'12% energy improvement',desc:'12% improvement vs. baseline'},
    {pts:4,label:'16% energy improvement',desc:'16% improvement vs. baseline'},
    {pts:5,label:'20% energy improvement',desc:'20% improvement vs. baseline'},
    {pts:6,label:'24% energy improvement',desc:'24% improvement vs. baseline'},
    {pts:7,label:'28% energy improvement',desc:'28% improvement vs. baseline'},
    {pts:8,label:'32% energy improvement',desc:'32% improvement vs. baseline'},
    {pts:9,label:'36% energy improvement',desc:'36% improvement vs. baseline'},
    {pts:10,label:'40% energy improvement',desc:'40% improvement vs. baseline'},
    {pts:11,label:'44% energy improvement',desc:'44% improvement vs. baseline'},
    {pts:12,label:'48% energy improvement',desc:'48% improvement vs. baseline'},
    {pts:13,label:'52% energy improvement',desc:'52% improvement vs. baseline'},
    {pts:14,label:'56% energy improvement',desc:'56% improvement vs. baseline'},
    {pts:15,label:'60% or greater energy improvement',desc:'60% or greater improvement in energy performance vs. baseline'}
  ],criteria:{
    concept:['Set energy improvement target beyond 10% minimum — assess potential for 20–40%+ improvement'],
    schematic:['Optimise energy model: building fabric, HVAC CoP, lighting density, controls, and renewables','Model different improvement scenarios to identify achievable credit points'],
    detailed:['Finalise energy model reflecting all detailed design decisions and specifications','Document all energy efficiency measures with performance data in specifications']}},
  {code:'RE-2',title:'Cool Building Strategies',desc:'Reduce cooling energy consumption and urban heat island effect through passive design and reflective materials',pts:3,req:false,pointOptions:[
    {pts:1,label:'High-reflectance roof: 75%+ of roof area',desc:'Achieve solar reflectance \u22650.65 for roof surfaces (minimum 75% of roof area)'},
    {pts:1,label:'High-reflectance hardscape: 50%+ of non-building paved areas',desc:'Achieve solar reflectance \u22650.65 for site hardscape surfaces (minimum 50% of non-building paved areas)'},
    {pts:1,label:'Tree canopy or vegetation shading: 30%+ of hardscape',desc:'Provide tree canopy or vegetation shading 30% or more of site hardscape at maturity'}
  ],criteria:{
    concept:['Identify passive cooling and heat island reduction strategies suitable for project type and climate'],
    schematic:['Integrate passive measures: external shading, high-performance glazing, night purge ventilation','Select high-reflectance roofing materials (SRI ≥ 29 for low-slope, ≥ 78 for steep-slope roofs)','Select paving materials with SRI ≥ 29 for at least 50% of site hardscape'],
    detailed:['Confirm SRI values, shading geometry dimensions, and cool roof product specifications in drawings and specs']}},
  {code:'RE-3',title:'Energy Efficient Appliances',desc:'Promote use of energy-efficient appliances to reduce plug loads',pts:1,req:false,pointOptions:[
    {pts:1,label:'90%+ ENERGY STAR certified appliances',desc:'Specify ENERGY STAR certified appliances for 90% or more of applicable major appliances (refrigerators, dishwashers, cooking equipment, etc.)'}
  ],criteria:{
    concept:['Identify all major energy-consuming appliances and fixed equipment categories'],
    schematic:['Specify Energy Star or equivalent rated equipment for all applicable categories'],
    detailed:['Confirm energy efficiency ratings of all specified appliances in equipment schedule and specifications']}},
  {code:'RE-4',title:'Vertical Transportation',desc:'Improve efficiency of elevators and escalators to reduce energy consumption',pts:2,req:false,pointOptions:[
    {pts:1,label:'Energy-efficient elevators with regenerative drives',desc:'Install energy-efficient elevators with regenerative drives or equivalent efficiency measures'},
    {pts:2,label:'Regenerative drives + escalator controls',desc:'Install regenerative drive elevators AND implement escalator controls (auto-start, variable speed)'}
  ],criteria:{
    concept:['Define vertical transportation requirements: number of lifts, escalators, travel height, usage intensity'],
    schematic:['Specify high-efficiency permanent magnet motors, regenerative drives, and automatic standby mode for all passenger lifts'],
    detailed:['Confirm lift energy performance class and specifications — confirm with lift manufacturer energy data']}},
  {code:'RE-5',title:'Peak Load Reduction',desc:'Reduce peak demand charges through demand management and load reduction strategies',pts:2,req:false,pointOptions:[
    {pts:1,label:'10%+ peak demand reduction',desc:'Implement demand reduction strategy (thermal storage, load shifting, etc.) reducing peak demand 10% or more'},
    {pts:2,label:'20%+ peak demand reduction',desc:'Achieve peak demand reduction of 20% or greater vs. baseline'}
  ],criteria:{
    concept:['Assess demand management opportunities: thermal storage, load shifting, smart controls'],
    schematic:['Design demand response capability in BMS — automatic load shedding, pre-cooling, intelligent scheduling'],
    detailed:['Include demand management, peak load control logic, and thermal storage specifications in MEP and BMS specifications']}},
  {code:'RE-6',title:'Renewable Energy',desc:'Encourage on-site renewable energy generation to offset grid consumption',pts:15,req:false,pointOptions:[
    {pts:1,label:'4% from on-site renewable sources',desc:'4% of annual energy provided by on-site renewable sources'},
    {pts:2,label:'8% from on-site renewable sources',desc:'8% of annual energy from on-site renewable'},
    {pts:3,label:'12% from on-site renewable sources',desc:'12% from on-site renewable'},
    {pts:4,label:'16% from on-site renewable sources',desc:'16% from on-site renewable'},
    {pts:5,label:'20% from on-site renewable sources',desc:'20% from on-site renewable'},
    {pts:6,label:'24% from on-site renewable sources',desc:'24% from on-site renewable'},
    {pts:7,label:'28% from on-site renewable sources',desc:'28% from on-site renewable'},
    {pts:8,label:'32% from on-site renewable sources',desc:'32% from on-site renewable'},
    {pts:9,label:'36% from on-site renewable sources',desc:'36% from on-site renewable'},
    {pts:10,label:'40% from on-site renewable sources',desc:'40% from on-site renewable'},
    {pts:11,label:'44% from on-site renewable sources',desc:'44% from on-site renewable'},
    {pts:12,label:'48% from on-site renewable sources',desc:'48% from on-site renewable'},
    {pts:13,label:'52% from on-site renewable sources',desc:'52% from on-site renewable'},
    {pts:14,label:'56% from on-site renewable sources',desc:'56% from on-site renewable'},
    {pts:15,label:'60%+ from on-site renewable sources',desc:'60% or greater of annual energy from on-site renewable sources'}
  ],criteria:{
    concept:['Assess on-site renewable energy potential: rooftop PV, building-integrated PV, solar thermal, wind'],
    schematic:['Size renewable energy systems and model annual generation output','Confirm available roof/façade areas, structural capacity, and shading constraints for PV'],
    detailed:['Finalise PV/solar thermal design, energy generation calculations, grid connection, and protection relay specifications']}},
  {code:'RE-7',title:'Global Warming Impacts of Refrigerants',desc:'Select refrigerants and fire suppression agents with low global warming potential',pts:1,req:false,pointOptions:[
    {pts:1,label:'Low-GWP refrigerants (GWP <365) and fire suppression agents',desc:'Specify refrigerants with GWP <365 (excluding CFCs) and fire suppression agents with GWP <150 or equivalent low-GWP alternatives'}
  ],criteria:{
    concept:['Identify all refrigerants planned for HVAC and refrigeration systems','Establish low GWP refrigerant selection policy for project'],
    schematic:['Select low GWP refrigerants for all systems','Assess and document lifecycle GWP using TEWI (Total Equivalent Warming Impact) methodology'],
    detailed:['Confirm low GWP refrigerant selections with manufacturers and include in MEP specifications']}},
],
SM:[
  {code:'SM-R1',title:'Hazardous Materials Elimination',desc:'Define prohibited materials list: asbestos, lead paint, PCBs, urea-formaldehyde insulation, PVC if applicable',pts:'R',req:true,criteria:{
    concept:['Define prohibited materials list: asbestos, lead paint, PCBs, urea-formaldehyde insulation, PVC if applicable'],
    schematic:['Confirm no prohibited materials are included in outline specification materials lists'],
    detailed:['Include comprehensive hazardous materials prohibition clause in all work section specifications']}},
  {code:'SM-R2',title:'Basic Construction Waste Management',desc:'Estimate construction and demolition waste volumes by material type',pts:'R',req:true,criteria:{
    concept:['Estimate construction and demolition waste volumes by material type','Set minimum waste diversion target: 50% by weight or volume'],
    schematic:['Develop Construction & Demolition Waste Management Plan (CDWMP) framework identifying waste streams and recyclers'],
    detailed:['Finalise CDWMP with specific waste stream targets, approved recycling facilities, and reporting templates','Include CDWMP in tender and construction contract documents']}},
  {code:'SM-R3',title:'Basic Operational Waste Management',desc:'Estimate annual operational waste volumes at full building occupancy',pts:'R',req:true,criteria:{
    concept:['Estimate annual operational waste volumes at full building occupancy','Review Centre of Waste Management (CWM) Abu Dhabi requirements and available infrastructure'],
    schematic:["Design waste storage areas with segregation: green (plastics/glass/metal), blue (paper/cardboard), black (general waste)",'Ensure maximum 30m carry distance from any point in building to nearest waste collection point'],
    detailed:['Finalise waste room sizes and bin configurations in architectural drawings','Confirm minimum 40% waste diversion rate in Operational Waste Strategy']}},
  {code:'SM-1',title:'Non-Polluting Materials',desc:'Eliminate use of polluting materials; promote selection of low-environmental-impact alternatives',pts:3,req:false,pointOptions:[
    {pts:1,label:'Zero ODP, Low GWP insulation (ODP=0, GWP<5)',desc:'All thermal insulation materials have ODP = 0 AND Global Warming Potential (GWP) < 5'},
    {pts:1,label:'Chlorine-free materials for key product groups',desc:'Replace chlorine-based materials (PVC, CPE, CPVC, CSPE, polychloroprene) with sustainable alternatives for 3+ product groups at specified coverage: Insulation 80%+, Waterproofing 50%+, Cladding 90%+, Floor/wall coverings 90%+'},
    {pts:1,label:'Mercury elimination from all materials',desc:'Eliminate mercury from all building materials (lighting, switches, controls, measuring devices); use mercury-free alternatives'}
  ],criteria:{
    concept:['Identify all material categories with indoor pollution potential: paints, varnishes, adhesives, sealants, flooring, ceiling tiles'],
    schematic:['Specify low-VOC or zero-VOC products across all identified categories with specific VOC content limits'],
    detailed:['Confirm all specified materials meet VOC and chemical emission standards — compile materials compliance schedule']}},
  {code:'SM-6',title:'Design for Durability',desc:'Define design life targets for key building components (structure, envelope, services, finishes)',pts:1,req:false,criteria:{
    concept:['Define design life targets for key building components (structure, envelope, services, finishes)'],
    schematic:["Develop Building Durability Plan (BDP) covering envelope waterproofing, structural protection, component service lives"],
    detailed:['Finalise BDP with component lifespan schedule, maintenance plan, and protective detail specifications','Include BDP in O&M Manual']}},
  {code:'SM-7',title:'Building Reuse',desc:'Confirm whether existing building structure or fabric on site is available and structurally suitable for reuse',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Partial reuse (25-50%)',desc:'Retain and reuse 25-50% of existing building structure, façade, or internal elements'},
    {pts:2,label:'2 pts — Significant reuse (50%+)',desc:'Retain and reuse 50% or more of existing building structure, façade, or internal elements'}
  ],criteria:{
    concept:['Confirm whether existing building structure or fabric on site is available and structurally suitable for reuse'],
    schematic:['Undertake structural assessment of reusable elements','Calculate and demonstrate percentage of existing structure, façade, or internal elements to be retained'],
    detailed:['Confirm all retained/reused elements in structural and architectural drawings and specification']}},
  {code:'SM-9',title:'Regional Materials',desc:'Define regional sourcing target: materials extracted and manufactured within 800km of site',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — 15% regional materials',desc:'Specify materials sourced within 800km comprising 15% or more of total material value'},
    {pts:2,label:'2 pts — 25%+ regional materials',desc:'Specify materials sourced within 800km comprising 25% or more of total material value'}
  ],criteria:{
    concept:['Define regional sourcing target: materials extracted and manufactured within 800km of site'],
    schematic:['Identify key structural and finishing materials available from verified regional sources'],
    detailed:['Specify regional materials requirements in specifications and confirm sourcing in materials schedule with supplier locations']}},
  {code:'SM-10',title:'Recycled Materials',desc:'Reduce extraction of virgin materials by specifying recycled content',pts:1,req:false,pointOptions:[
    {pts:1,label:'20%+ recycled content materials',desc:'Specify materials with recycled content (post-consumer and/or post-industrial) comprising 20% or more of total material cost'}
  ],criteria:{
    concept:['Set recycled content target for the project by total material value (targeting 10–20%+)'],
    schematic:['Identify materials with significant post-consumer/post-industrial recycled content: structural steel, concrete with GGBS/PFA, insulation'],
    detailed:['Specify minimum recycled content percentages by material value in specifications','Compile recycled materials schedule with manufacturer documentation']}},
  {code:'SM-13',title:'Improved Construction Waste Management',desc:'Divert construction waste from landfill through recycling/reuse',pts:1,req:false,pointOptions:[
    {pts:1,label:'50%+ construction waste diversion',desc:'Divert 50% or more of construction waste from landfill through recycling, reuse, or salvage'}
  ],criteria:{
    concept:['Set enhanced waste diversion target beyond 50% minimum (targeting 75% or higher)'],
    schematic:['Identify additional waste streams for recovery: structural timber, steelwork, formwork, packaging, concrete'],
    detailed:['Finalise enhanced CDWMP with specific recyclers, diversion calculation methodology, and reporting system']}},
],
IP:[
  {code:'IP-1',title:'Innovative Cultural & Regional Practices',desc:'Identify a specific opportunity for cultural or regional design innovation addressing one of the Estidama pillars (environmental, cultural, social, economic)',pts:1,req:false,criteria:{
    concept:['Identify a specific opportunity for cultural or regional design innovation addressing one of the Estidama pillars (environmental, cultural, social, economic)'],
    schematic:['Develop brief outline of proposed innovative solution with supporting feasibility rationale'],
    detailed:['Prepare Innovative Solution Report demonstrating cultural/regional innovation — submit to Estidama for approval']}},
  {code:'IP-2',title:'Innovating Practice',desc:'Identify an area of genuine design or technical innovation going beyond existing PBRS credit requirements',pts:2,req:false,pointOptions:[
    {pts:1,label:'1 pt — Innovation concept',desc:'Develop innovation concept brief with feasibility study and preliminary cost-benefit analysis'},
    {pts:2,label:'2 pts — Approved innovation implementation',desc:'Submit Innovative Solution Report with measurable performance impacts and Estidama approval'}
  ],criteria:{
    concept:['Identify an area of genuine design or technical innovation going beyond existing PBRS credit requirements'],
    schematic:['Develop innovation concept brief with preliminary feasibility study, cost-benefit analysis, and risk assessment'],
    detailed:['Prepare full Innovative Solution Report with measurable performance impacts across Estidama pillars — submit to Estidama for approval']}},
],
};

const ALL_CREDITS = Object.values(CREDITS).flat();
const RATING_THRESHOLDS = [
  {min:0,label:'1 Pearl'},{min:60,label:'2 Pearl'},{min:85,label:'3 Pearl'},{min:115,label:'4 Pearl'},{min:140,label:'5 Pearl'}
];
const STAGES = ['concept','schematic','detailed'];
const STAGE_LABELS = {concept:'Concept Design',schematic:'Schematic Design',detailed:'Detailed Design'};

