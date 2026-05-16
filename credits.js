// Static PBRS credit catalog loaded by PBRS_Pearl_Checklist.html
const SECTIONS = {
  IDP: 'IDP - Integrated Development Process',
  NS:  'NS - Natural Systems',
  LBo: 'LB - Livable Buildings (Outdoors)',
  LBi: 'LB - Livable Buildings (Indoors)',
  PW:  'PW - Precious Water',
  RE:  'RE - Resourceful Energy',
  SM:  'SM - Stewarding Materials',
  IP:  'IP - Innovating Practice',
};

const CREDITS = {
  IDP: [
    { code:'IDP-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'IDP-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'IDP-R3', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'IDP-1', title:'Title placeholder', desc:'Desc placeholder', pts:4, req:false, uiType:'straight',
      pointOptions:[
        { pts:4, desc:'Use Life Cycle Cost analysis during design' },
      ]
    },
    { code:'IDP-2', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Develop a Guest Worker Accommodation Plan.' },
      ]
    },
    { code:'IDP-3', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:"Develop the CEMP in accordance with Abu Dhabi Environment Agency's regulations." },
        { pts:1, desc:'Project Lead Contractor is ISO 14001 or EHSMS Certified.' },
      ]
    },
    { code:'IDP-4', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'The project team member has performed the above tasks during design' },
      ]
    },
    { code:'IDP-5', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Demonstrate that a re-commissioning Plan was developed' },
      ]
    },
    { code:'IDP-6', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Develop an Occupant Handbook.' },
        { pts:1, desc:'Design an occupant feedback mechanism to give information on how they impact building performance.' },
      ]
    },
  ],
  NS: [
    { code:'NS-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'NS-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'NS-R3', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'NS-1', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Demonstrate that at least 75% of the site area has been previously developed' },
      ]
    },
    { code:'NS-2', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Demonstrate the site is contaminated and an assessment report and remediation strategy has been prepared.' },
      ]
    },
    { code:'NS-3', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'50% of plants to comprise of native and adaptive drought and / or saline tolerant species including a minimum of 5 different types of species.' },
        { pts:2, desc:'70% of plants to comprise native and adaptive drought and / or saline tolerant species including a minimum of 10 different types of species.' },
      ]
    },
    { code:'NS-4', title:'Title placeholder', desc:'Desc placeholder', pts:6, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:4, desc:'Prepare a Habitat Creation or Restoration Strategy; and Allocate an on-site or off-site habitat creation or restoration site of minimum areas as defined above.' },
        { pts:2, desc:'Demonstrate that through collaboration, off-site ecological corridors have been designed to link similar habitat types.' },
      ]
    },
  ],
  LBo: [
    { code:'LBo-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'LBo-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'LBo-R3', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'LBo-1', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'50% Car Park, 65% Open Space, 80% Primary Walkway, 80% Secondary Walkway, 55% Cycle Tracks' },
        { pts:2, desc:'55% Car Park, 70% Open Space, 85% Primary Walkway, 85% Secondary Walkway, 65% Cycle Tracks' },
      ]
    },
    { code:'LBo-2', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the building is located within a Pearl Rated community.' },
      ]
    },
    { code:'LBo-3', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the building is located within 350m safe walking distance of any of the five listed amenities.' },
      ]
    },
    { code:'LBo-4', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate provision of outdoor spaces compliant with the Credit Requirements.' },
      ]
    },
    { code:'LBo-5', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Residential Only: Provide 90% of units with outdoor amenity space as per the Credit Requirements' },
      ]
    },
    { code:'LBo-6', title:'Title placeholder', desc:'Desc placeholder', pts:3, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Demonstrate that the building is within 350m of a tram and/or bus stop with a 15 minute frequency.' },
        { pts:3, desc:'Demonstrate that the building is also within 350m of a metro or regional rail station.' },
      ]
    },
    { code:'LBo-7', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Meet the Credit Requirements for bicycle parking facilities according to above.' },
        { pts:1, desc:'Meet the Additional Credit Requirements for shower, locker and changing facilities and/or cycle lanes according to above.' },
      ]
    },
    { code:'LBo-8', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Design Preferred Parking Spaces complying with the Credit Requirements.' },
      ]
    },
    { code:'LBo-9', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Develop a Travel Plan for the project.' },
      ]
    },
    { code:'LBo-10', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate light pollution reduction in compliance with the Credit Requirements.' },
      ]
    },
  ],
  LBi: [
    { code:'LBi-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'LBi-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'LBi-R3', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'LBi-1', title:'Title placeholder', desc:'Desc placeholder', pts:3, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'CO2 sensors at all return points' },
        { pts:1, desc:'Ventilation exceeds minimum requirements by 15%' },
        { pts:1, desc:'Mixed Mode Operation (not available to retail use type)' },
      ]
    },
    { code:'LBi-2.1', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'95% of all adhesives & sealants meet criteria; or Schools : 100% of all adhesives & sealants meet criteria' },
      ]
    },
    { code:'LBi-2.2', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'95% of all surface areas meet criteria Schools : 100% of all surface areas meet criteria' },
      ]
    },
    { code:'LBi-2.3', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'100% of all carpets, carpet cushion, hard flooring and associated finishes comply Construction Rating' },
      ]
    },
    { code:'LBi-2.4', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'All ceiling systems meet credit criteria' },
      ]
    },
    { code:'LBi-2.5', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'All internal construction materials meet formaldehyde class E1 levels (available to schools only in association with additional credit requirement).  Schools must achieve this credit point' },
        { pts:1, desc:'All internal construction and furniture meets formaldehyde class E1 levels. Schools must achieve this credit point' },
      ]
    },
    { code:'LBi-3', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Develop a construction IAQ plan' },
      ]
    },
    { code:'LBi-4', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Ensure car parking ventilation design meets the credit requirements.' },
      ]
    },
    { code:'LBi-5.1', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Compliant thermal zoning strategy and controls' },
      ]
    },
    { code:'LBi-5.2', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'50% of the living areas and bedrooms within the residential unit.' },
        { pts:1, desc:'75% of the living areas and bedrooms within the residential unit.' },
      ]
    },
    { code:'LBi-5.3', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Category C Performance: PMV levels between -0.7 and +0.7 (15% PPD) & 90% acceptability limits for Mixed Mode (if applicable).' },
        { pts:1, desc:'Category B Performance: PMV levels between -0.5 and +0.5 (10% PPD) & 90% acceptability limits for Mixed Mode (if applicable).' },
      ]
    },
    { code:'LBi-6', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General: All high frequency fluorescent ballasts and occupancy sensors meeting credit requirements. Residential: 95% high frequency fluorescent ballasts and communal area occupancy sensors meeting credit requirements.' },
      ]
    },
    { code:'LBi-7', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'General : min 250 Lux for 50% of occupied area. Resi: min 200 Lux for 50% of living/bedrooms Schools : min 300 Lux for 75% of occupied area Retail development is not eligible. Meet requirements for occupancy sensors relevant to space type. Meet requirements for glare control relevant to space type.' },
        { pts:1, desc:'General : min 250 Lux for 75% of occupied area Resi: min 200 Lux for 75% of living/bedrooms Schools : min 300 Lux for 90% of occupied area Retail development is not eligible. Meet requirements for occupancy sensors relevant to space type. Meet requirements for glare control relevant to space type.' },
      ]
    },
    { code:'LBi-8', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General: 75% of occupied areas have views through vision glazing. Residential: 75% of bedrooms and living spaces have views and meet minimum vision glazing requirements. Retail not eligible for this Credit Point.' },
      ]
    },
    { code:'LBi-9', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General : 40-50 dB(A)Leq Retail : less than 50 dB(A)Leq Restaurants : less than 45 dB(A)Leq Residential : less than 35dB(A)Leq(8hour) and 45DB(A)Lmax,fast in bedrooms and less than 40dB(A)Leq in other areas Schools : Meet the requirements of tables 1.1 to 1.6 in Building Bulletin 93 (BB93)' },
      ]
    },
    { code:'LBi-10', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Develop & Implement Safety & Security Plan' },
        { pts:1, desc:'Schools only: Transit Safety & Security Plan' },
      ]
    },
  ],
  PW: [
    { code:'PW-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'PW-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'PW-1', title:'Title placeholder', desc:'Desc placeholder', pts:15, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'4% Potable Water Reduction' },
        { pts:2, desc:'8% Potable Water Reduction' },
        { pts:3, desc:'12% Potable Water Reduction' },
        { pts:4, desc:'16% Potable Water Reduction' },
        { pts:5, desc:'20% Potable Water Reduction' },
        { pts:6, desc:'24% Potable Water Reduction' },
        { pts:7, desc:'28% Potable Water Reduction' },
        { pts:8, desc:'32% Potable Water Reduction' },
        { pts:9, desc:'36% Potable Water Reduction' },
        { pts:10, desc:'40% Potable Water Reduction' },
        { pts:11, desc:'44% Potable Water Reduction' },
        { pts:12, desc:'48% Potable Water Reduction' },
        { pts:13, desc:'52% Potable Water Reduction' },
        { pts:14, desc:'56% Potable Water Reduction' },
        { pts:15, desc:'60% Potable Water Reduction' },
      ]
    },
    { code:'PW-2.1', title:'Title placeholder', desc:'Desc placeholder', pts:4, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Average landscape irrigation demand < 4 liters/m2/day' },
        { pts:4, desc:'Average landscape irrigation demand < 2 liters/m2/day' },
        { pts:1, desc:'Demonstrate that a water efficient irrigation system has been incorporated into the landscape design.' },
        { pts:1, desc:'Demonstrate that best practices for ongoing system management and operation have been established.' },
        { pts:2, desc:'Demonstrate that 100% of the exterior irrigation demand can be served using the Exterior Water Allowance, and that a recycled water mainline loop has been installed where recycled water is not immediately available.' },
        { pts:2, desc:'Schools only: Demonstrate that non-water turf substitutes are installed in place of turf.' },
      ]
    },
    { code:'PW-2.2', title:'Title placeholder', desc:'Desc placeholder', pts:8, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'25% cooling water via recycled water' },
        { pts:3, desc:'50% cooling water via recycled water' },
        { pts:4, desc:'75% cooling water via recycled water' },
        { pts:5, desc:'100% cooling water via recycled water' },
        { pts:8, desc:'Demonstrate that no water is required for heat rejection.' },
      ]
    },
    { code:'PW-2.3', title:'Title placeholder', desc:'Desc placeholder', pts:4, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Demonstrate that the water make-up requirements for all exterior water features can be served using the Exterior Water Allowance.' },
        { pts:1, desc:'Demonstrate that all external swimming pools are provided with adequate pool blankets.' },
        { pts:4, desc:'Demonstrate that there are no exterior water features or swimming pools.' },
      ]
    },
    { code:'PW-3', title:'Title placeholder', desc:'Desc placeholder', pts:4, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:2, desc:'Demonstrate that metering facilities that monitor the water consumption of major individual interior uses are installed.' },
        { pts:2, desc:'Demonstrate that a leak detection system has been installed' },
      ]
    },
    { code:'PW-4', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the post-development peak runoff rate and quantity from the 2-year 24-hour design storm does not exceed the pre development peak run-off rate and quantity through structural methods, or a combination of both structural and non-structural methods.' },
        { pts:2, desc:'Demonstrate that the post-development peak runoff rate and quantity from the 2-year 24-hour design storm does not exceed the pre development peak run-off rate and quantity through the use of non-structural methods only' },
        { pts:1, desc:'Stormwater management system is designed to meet Quality Control criteria as per Credit Requirements.' },
        { pts:1, desc:'An OMP has been developed.' },
      ]
    },
  ],
  RE: [
    { code:'RE-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'RE-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'RE-R3', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'RE-1', title:'Title placeholder', desc:'Desc placeholder', pts:15, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'14% Energy  improvement' },
        { pts:2, desc:'16% Energy  improvement' },
        { pts:3, desc:'18% Energy  improvement' },
        { pts:4, desc:'20% Energy  improvement' },
        { pts:5, desc:'22.5% Energy  improvement' },
        { pts:6, desc:'25% Energy  improvement' },
        { pts:7, desc:'27.5% Energy  improvement' },
        { pts:8, desc:'30% Energy  improvement' },
        { pts:9, desc:'32.5% Energy  improvement' },
        { pts:10, desc:'35% Energy  improvement' },
        { pts:11, desc:'40% Energy  improvement' },
        { pts:12, desc:'45% Energy  improvement' },
        { pts:13, desc:'50% Energy  improvement' },
        { pts:14, desc:'55% Energy  improvement' },
        { pts:15, desc:'60% Energy  improvement' },
      ]
    },
    { code:'RE-2', title:'Title placeholder', desc:'Desc placeholder', pts:5, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'10% reduction in the annual external heat gain' },
        { pts:2, desc:'20% reduction in the annual external heat gain' },
        { pts:3, desc:'30% reduction in the annual external heat gain' },
        { pts:4, desc:'40% reduction in the annual external heat gain' },
        { pts:5, desc:'50% reduction in the annual external heat gain' },
        { pts:1, desc:'Demonstrate that roofing materials with a high SRI will be used.' },
      ]
    },
    { code:'RE-3', title:'Title placeholder', desc:'Desc placeholder', pts:3, req:false, uiType:'straight',
      pointOptions:[
        { pts:3, desc:'Demonstrate that all developer purchased and/or leased installed appliances shall be energy efficient, and that tenant guidelines outlining the benefits of energy efficient appliances will be produced.' },
      ]
    },
    { code:'RE-4', title:'Title placeholder', desc:'Desc placeholder', pts:3, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Demonstrate that easily accessible stairs shall be provided to at least the first three floors of the building.' },
        { pts:1, desc:'Demonstrate that all lifts within the building shall be energy efficient.' },
        { pts:1, desc:'Demonstrate that all escalators/ travelators within the building shall be energy efficient.' },
      ]
    },
    { code:'RE-5', title:'Title placeholder', desc:'Desc placeholder', pts:4, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Demonstrate peak electrical load shall be less than 80% above annual average electrical load.' },
        { pts:4, desc:'Demonstrate peak electrical load shall be less than 60% above annual average electrical load.' },
      ]
    },
    { code:'RE-6', title:'Title placeholder', desc:'Desc placeholder', pts:8, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'1% from onsite renewable sorces' },
        { pts:2, desc:'3% from onsite renewable sorces' },
        { pts:3, desc:'5% from onsite renewable sorces' },
        { pts:4, desc:'7% from onsite renewable sorces' },
        { pts:5, desc:'10% from onsite renewable sorces' },
        { pts:6, desc:'13% from onsite renewable sorces' },
        { pts:7, desc:'16% from onsite renewable sorces' },
        { pts:8, desc:'20% from onsite renewable sorces' },
        { pts:1, desc:"Demonstrate that 20% of the project's non-renewable energy use will be supplied by offsite renewable energy." },
      ]
    },
    { code:'RE-7', title:'Title placeholder', desc:'Desc placeholder', pts:4, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the weighted average of all refrigerants shall have a GWP of 10 or less.' },
        { pts:1, desc:'Demonstrate that a permanent refrigerant leak detection system shall be installed.' },
        { pts:1, desc:'Demonstrate that an automatic refrigerant pump down system shall be installed.' },
        { pts:1, desc:"Demonstrate that 100% of gaseous fire systems shall have a GWP of 1 or less" },
      ]
    },
  ],
  SM: [
    { code:'SM-R1', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'SM-R2', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'SM-R3', title:'Title placeholder', desc:'Desc placeholder', pts:'R', req:true },
    { code:'SM-1', title:'Title placeholder', desc:'Desc placeholder', pts:3, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:"Building meets the Zero ODP, Low GWP Insulation' Credit Requirements through design." },
        { pts:1, desc:"Building meets the 'Chlorine Free Materials' Credit Requirements through design." },
        { pts:1, desc:"Building meets the 'Low Toxicity Materials' Credit Requirements through design." },
      ]
    },
    { code:'SM-2', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General: Building is designed with at least one material reduction initiative. Offices only: At least two initiatives are required.' },
      ]
    },
    { code:'SM-3', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Building is designed to meet Credit Requirements for flexibility and adaptability.' },
      ]
    },
    { code:'SM-4', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Building is designed to meet Credit Requirements for design for disassembly' },
      ]
    },
    { code:'SM-5', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'At least 95% (by surface area) of finished floor areas are specified with modular flooring products.' },
      ]
    },
    { code:'SM-6', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Develop a Building Durability Plan.' },
      ]
    },
    { code:'SM-7', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'At least 25% of the building structural system, by surface area, will be reused.' },
        { pts:2, desc:'At least 50% of the building structural system, by surface area, will be reused.' },
      ]
    },
    { code:'SM-8', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'The cost of specified reused materials equal to at least 3% of the Total Material Cost.' },
      ]
    },
    { code:'SM-9', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Cost of regional materials specified equal to 10% of Total Material Cost.' },
        { pts:2, desc:'Cost of regional materials specified equal to 20% of Total Material Cost.' },
      ]
    },
    { code:'SM-10', title:'Title placeholder', desc:'Desc placeholder', pts:8, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Steel-framed: at least 50% of specified structural steel (by weight) has 25% post-consumer recycled content or is reused Concrete-framed: at least 80% of specified rebar or stressing steel has 90% post-consumer recycled content.' },
        { pts:1, desc:'Specified concrete mix and reduction in cement use will achieve an embodied GHG of concrete as per table SM10.1, rows B1, C1 and D1.' },
        { pts:2, desc:'Specified concrete mix and reduction in cement use will achieve an embodied GHG of concrete as per table SM10.1, rows B2, C2 and D2.' },
        { pts:1, desc:'At least 15% of all specified aggregates to be used for structural or non-structural applications are recycled.' },
        { pts:2, desc:'Only recycled aggregate is specified for use as base, sub-base or backfill.' },
        { pts:1, desc:'Cost of specified recycled materials equal to at least 10% of Total Material Costs.' },
      ]
    },
    { code:'SM-11', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'at least 75% (by area) of one or more specified building components are rapidly renewable; at least 35% (by area) of two or more specified building components are rapidly renewable; or at least 15% (by area) of four or more specified building components are rapidly renewable.' },
      ]
    },
    { code:'SM-12', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'At least 50% (by cost) of the specified timber comply with the Credit Requirements.' },
        { pts:2, desc:'At least 70% (by cost) of the specified timber comply with the Credit Requirements.' },
      ]
    },
    { code:'SM-13', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Demonstrate CDWMP aims for a minimum of 50% demolition and construction waste (by weight or volume) to be recycled / salvaged.' },
        { pts:2, desc:'Demonstrate CDWMP aims for a minimum of 70% demolition and construction waste (by weight or volume) to be recycled / salvaged.' },
      ]
    },
    { code:'SM-14', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'General: An OWMP is developed for a minimum targeted diversion rate of 60% (by weight or volume. Multi-Residential: An OWMP is developed for a minimum targeted diversion rate of 50% (by weight or volume.' },
        { pts:2, desc:'General: An OWMP is developed for a minimum targeted diversion rate of 80% (by weight or volume. Multi-Residential: An OWMP is developed for a minimum targeted diversion rate of 70% (by weight or volume.' },
      ]
    },
    { code:'SM-15', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Landscaping waste or food waste collection and/or treatment is proposed onsite.' },
        { pts:2, desc:'Food and landscaping waste collection and/or treatment are proposed onsite.' },
      ]
    },
  ],
  IP: [
    { code:'IP-1', title:'Title placeholder', desc:'Desc placeholder', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Develop a design strategy for incorporating solutions that showcase cultural and regional practices' },
      ]
    },
    { code:'IP-2', title:'Title placeholder', desc:'Desc placeholder', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Innovative solution report.' },
      ]
    },
  ],
};

const ALL_CREDITS = Object.values(CREDITS).flat();
const RATING_THRESHOLDS = [
  {min:0,label:'1 Pearl'},{min:60,label:'2 Pearl'},{min:85,label:'3 Pearl'},{min:115,label:'4 Pearl'},{min:140,label:'5 Pearl'}
];
const STAGES = ['concept','schematic','detailed'];
const STAGE_LABELS = {concept:'Concept Design',schematic:'Schematic Design',detailed:'Detailed Design'};

