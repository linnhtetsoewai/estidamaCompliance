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
    { code:'IDP-R2', title:'Tenant Fit-Out Design & Construction Guide', desc:"To ensure that the design and construction of interior space fit-out will contribute to the overall project's sustainability objectives and targets.", pts:'R', req:true },
    { code:'IDP-R3', title:'Basic Commissioning', desc:'To ensure that the building performs as designed to protect occupant health and provide comfort and ongoing building efficiency.', pts:'R', req:true },
    { code:'IDP-1', title:'Life Cycle Costing', desc:'To enable effective long-term decisions about building design and construction in order to maximize efficiency over the whole life of the development.', pts:4, req:false, uiType:'straight',
      pointOptions:[
        { pts:4, desc:'Use Life Cycle Cost analysis during design' },
      ]
    },
    { code:'IDP-2', title:'Guest Worker Accommodation', desc:'To promote fair labor practices in building construction.', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Develop a Guest Worker Accommodation Plan.' },
      ]
    },
    { code:'IDP-3', title:'Construction Environmental Management', desc:'To reduce the environmental impacts associated with construction practices.', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:"Develop the CEMP in accordance with Abu Dhabi Environment Agency's regulations." },
        { pts:1, desc:'Project Lead Contractor is ISO 14001 or EHSMS Certified.' },
      ]
    },
    { code:'IDP-4', title:'Building Envelope Verification', desc:'To ensure the building envelope meets the design intent and minimizes building impacts from condensation, water ingress, air infiltration and improper drainage.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'The project team member has performed the above tasks during design' },
      ]
    },
    { code:'IDP-5', title:'Re-Commissioning', desc:'To ensure that the building performs as designed to protect occupant health and comfort, as well as providing for ongoing building efficiency.', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Demonstrate that a re-commissioning Plan was developed' },
      ]
    },
    { code:'IDP-6', title:'Sustainability Communication', desc:'To promote the efficient ongoing operation of the building by enabling occupants to appreciate, understand and therefore contribute to responsible resource use in the building.', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Develop an Occupant Handbook.' },
        { pts:1, desc:'Design an occupant feedback mechanism to give information on how they impact building performance.' },
      ]
    },
  ],
  NS: [
    { code:'NS-R1', title:'Natural Systems Assessment', desc:'To ensure that at the commencement of the design process, the environmental baseline conditions surrounding, connected to and on the site are considered and assessed.', pts:'R', req:true },
    { code:'NS-R2', title:'Natural Systems Protection', desc:'To protect significant and valuable Natural Systems assets identified in NS-R1 Natural Systems Assessment.', pts:'R', req:true },
    { code:'NS-R3', title:'Natural Systems Design & Management Strategy', desc:'To minimize demand for resources, promote soil protection and enhancement and ensure the long term survival and management of landscaped/habitat areas.', pts:'R', req:true },
    { code:'NS-1', title:'Reuse of Land', desc:'To encourage new developments to reuse land that has already been built on and infill existing urban areas rather than using undisturbed land.', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Demonstrate that at least 75% of the site area has been previously developed' },
      ]
    },
    { code:'NS-2', title:'Remediation of Contaminated Land', desc:'To encourage and promote the remediation of land for building development.', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Demonstrate the site is contaminated and an assessment report and remediation strategy has been prepared.' },
      ]
    },
    { code:'NS-3', title:'Ecological Enhancement', desc:'To enhance the ecological value of the site.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'50% of plants to comprise of native and adaptive drought and / or saline tolerant species including a minimum of 5 different types of species.' },
        { pts:2, desc:'70% of plants to comprise native and adaptive drought and / or saline tolerant species including a minimum of 10 different types of species.' },
      ]
    },
    { code:'NS-4', title:'Habitat Creation & Restoration', desc:'To restore or re-create a habitat that is self sustaining.', pts:6, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:4, desc:'Prepare a Habitat Creation or Restoration Strategy; and Allocate an on-site or off-site habitat creation or restoration site of minimum areas as defined above.' },
        { pts:2, desc:'Demonstrate that through collaboration, off-site ecological corridors have been designed to link similar habitat types.' },
      ]
    },
  ],
  LBo: [
    { code:'LBo-R1', title:'Plan 2030', desc:'To ensure that all new development supports the vision for the Emirate of Abu Dhabi, as defined by the applicable Plan 2030, and/or Development Code, and/ or Area Plan.', pts:'R', req:true },
    { code:'LBo-R2', title:'Urban Systems Assessment', desc:'To ensure that, before the design process begins, a thorough understanding of the project site is developed within its urban context to better inform project programming, connectivity and built form.', pts:'R', req:true },
    { code:'LBo-R3', title:'Outdoor Thermal Comfort Strategy', desc:'To increase outdoor thermal comfort during transition months and reduce thermal discomfort during summer months in public spaces and walkways.', pts:'R', req:true },
    { code:'LBo-1', title:'Improved Outdoor Thermal Comfort', desc:'To improve outdoor thermal comfort during transition months and further reduce thermal discomfort during summer months in public spaces and walkways.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'50% Car Park, 65% Open Space, 80% Primary Walkway, 80% Secondary Walkway, 55% Cycle Tracks' },
        { pts:2, desc:'55% Car Park, 70% Open Space, 85% Primary Walkway, 85% Secondary Walkway, 65% Cycle Tracks' },
      ]
    },
    { code:'LBo-2', title:'Pearl Rated Communities', desc:'To encourage new buildings to be built within Pearl Rated communities.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the building is located within a Pearl Rated community.' },
      ]
    },
    { code:'LBo-3', title:'Accessible Community Facilities', desc:'To minimize reliance on private car use by locating buildings in areas with a mix of uses and amenities.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the building is located within 350m safe walking distance of any of the five listed amenities.' },
      ]
    },
    { code:'LBo-4', title:'Active Urban Environments', desc:'To encourage active lifestyles by providing building occupants and users with recreational public open spaces.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate provision of outdoor spaces compliant with the Credit Requirements.' },
      ]
    },
    { code:'LBo-5', title:'Private Outdoor Space', desc:'To improve the occupiers quality of life by providing private outdoor space.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Residential Only: Provide 90% of units with outdoor amenity space as per the Credit Requirements' },
      ]
    },
    { code:'LBo-6', title:'Public Transport', desc:'To encourage the use of public transport by building occupants and visitors.', pts:3, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Demonstrate that the building is within 350m of a tram and/or bus stop with a 15 minute frequency.' },
        { pts:3, desc:'Demonstrate that the building is also within 350m of a metro or regional rail station.' },
      ]
    },
    { code:'LBo-7', title:'Bicycle Facilities', desc:'To minimize greenhouse gas emissions, improve connectivity and encourage bicycle use (particularly during the cooler winter months).', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Meet the Credit Requirements for bicycle parking facilities according to above.' },
        { pts:1, desc:'Meet the Additional Credit Requirements for shower, locker and changing facilities and/or cycle lanes according to above.' },
      ]
    },
    { code:'LBo-8', title:'Preferred Car Parking Spaces', desc:'To encourage car sharing and more fuel-efficient forms of personal transport.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Design Preferred Parking Spaces complying with the Credit Requirements.' },
      ]
    },
    { code:'LBo-9', title:'Travel Plan', desc:'To reduce single occupancy vehicle use by managing the demand for travel and by maximizing the availability of alternatives to traveling by car.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Develop a Travel Plan for the project.' },
      ]
    },
    { code:'LBo-10', title:'Light Pollution Reduction', desc:'To encourage the reduction of night time light pollution and its associated impacts on human and ecological health.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Demonstrate light pollution reduction in compliance with the Credit Requirements.' },
      ]
    },
  ],
  LBi: [
    { code:'LBi-R1', title:'Healthy Ventilation Delivery', desc:'To protect the quality of air drawn into buildings for ventilation and to ensure minimum delivery of outdoor fresh air.', pts:'R', req:true },
    { code:'LBi-R2', title:'Smoking Control', desc:'To eliminate or minimize exposure of building occupants to the harmful effects of tobacco smoke.', pts:'R', req:true },
    { code:'LBi-R3', title:'Legionella Prevention', desc:'To manage the risk of Legionella in water based building systems.', pts:'R', req:true },
    { code:'LBi-1', title:'Ventilation Quality', desc:'To promote the provision of building systems that support the wellbeing and comfort of occupants by providing sufficient outside air ventilation.', pts:3, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'CO2 sensors at all return points' },
        { pts:1, desc:'Ventilation exceeds minimum requirements by 15%' },
        { pts:1, desc:'Mixed Mode Operation (not available to retail use type)' },
      ]
    },
    { code:'LBi-2.1', title:'Material Emissions: Adhesives & Sealants', desc:'Confirm the use of low emission adhesives and sealants to encourage the desirability of these spaces in relation to improved occupant health.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'95% of all adhesives & sealants meet criteria; or Schools : 100% of all adhesives & sealants meet criteria' },
      ]
    },
    { code:'LBi-2.2', title:'Material Emissions: Paints & Coatings', desc:'Confirm the use of low emission Paints and Coatings to encourage the desirability of these spaces in relation to improved occupant health.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'95% of all surface areas meet criteria Schools : 100% of all surface areas meet criteria' },
      ]
    },
    { code:'LBi-2.3', title:'Material Emissions: Carpet & Hard Flooring', desc:'Confirm the use of low emission flooring systems to encourage the desirability of these spaces in relation to improved occupant health.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'100% of all carpets, carpet cushion, hard flooring and associated finishes comply Construction Rating' },
      ]
    },
    { code:'LBi-2.4', title:'Material Emissions: Ceiling Systems', desc:'Confirm the use of low emission ceiling systems to encourage the desirability of these spaces in relation to improved occupant health.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'All ceiling systems meet credit criteria' },
      ]
    },
    { code:'LBi-2.5', title:'Material Emissions: Formaldehyde Reduction', desc:'To mitigate the health risks associated with formaldehyde in building materials and products.', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'All internal construction materials meet formaldehyde class E1 levels (available to schools only in association with additional credit requirement).  Schools must achieve this credit point' },
        { pts:1, desc:'All internal construction and furniture meets formaldehyde class E1 levels. Schools must achieve this credit point' },
      ]
    },
    { code:'LBi-3', title:'Construction Indoor Air Quality Management', desc:'To implement construction practices that promote a high degree of indoor air quality (IAQ) for construction workers and building occupants.', pts:2, req:false, uiType:'straight',
      pointOptions:[
        { pts:2, desc:'Develop a construction IAQ plan' },
      ]
    },
    { code:'LBi-4', title:'Car Park Air Quality Management', desc:'To facilitate the provision of adequate air quality within enclosed car parks.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Ensure car parking ventilation design meets the credit requirements.' },
      ]
    },
    { code:'LBi-5.1', title:'Thermal Comfort & Controls: Thermal Zoning', desc:'To promote logical thermal zoning strategies in relation to the on-floor ventilation system, to achieve improved occupant comfort, future flexibility and energy efficiency.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Compliant thermal zoning strategy and controls' },
      ]
    },
    { code:'LBi-5.2', title:'Thermal Comfort & Controls: Occupant Control', desc:'To promote projects that provide individual comfort controls for the wellbeing, productivity and thermal comfort of occupants.', pts:1, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'50% of the living areas and bedrooms within the residential unit.' },
        { pts:1, desc:'75% of the living areas and bedrooms within the residential unit.' },
      ]
    },
    { code:'LBi-5.3', title:'Thermal Comfort & Controls: Thermal Comfort Modeling', desc:'To promote projects that are designed to deliver optimal thermal comfort.', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Category C Performance: PMV levels between -0.7 and +0.7 (15% PPD) & 90% acceptability limits for Mixed Mode (if applicable).' },
        { pts:1, desc:'Category B Performance: PMV levels between -0.5 and +0.5 (10% PPD) & 90% acceptability limits for Mixed Mode (if applicable).' },
      ]
    },
    { code:'LBi-6', title:'High Frequency Lighting', desc:'To promote indoor visual comfort through the use of high frequency lighting solutions.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General: All high frequency fluorescent ballasts and occupancy sensors meeting credit requirements. Residential: 95% high frequency fluorescent ballasts and communal area occupancy sensors meeting credit requirements.' },
      ]
    },
    { code:'LBi-7', title:'Daylight & Glare', desc:'To promote building designs that maximize the use of natural daylight indoors.', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'General : min 250 Lux for 50% of occupied area. Resi: min 200 Lux for 50% of living/bedrooms Schools : min 300 Lux for 75% of occupied area Retail development is not eligible. Meet requirements for occupancy sensors relevant to space type. Meet requirements for glare control relevant to space type.' },
        { pts:1, desc:'General : min 250 Lux for 75% of occupied area Resi: min 200 Lux for 75% of living/bedrooms Schools : min 300 Lux for 90% of occupied area Retail development is not eligible. Meet requirements for occupancy sensors relevant to space type. Meet requirements for glare control relevant to space type.' },
      ]
    },
    { code:'LBi-8', title:'Views', desc:'To provide building occupants with a visual connection to the outdoors.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General: 75% of occupied areas have views through vision glazing. Residential: 75% of bedrooms and living spaces have views and meet minimum vision glazing requirements. Retail not eligible for this Credit Point.' },
      ]
    },
    { code:'LBi-9', title:'Indoor Noise Pollution', desc:'Provide acoustic conditions that are commensurate with the sensitivity and/or acoustic privacy requirements of the proposed use.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General : 40-50 dB(A)Leq Retail : less than 50 dB(A)Leq Restaurants : less than 45 dB(A)Leq Residential : less than 35dB(A)Leq(8hour) and 45DB(A)Lmax,fast in bedrooms and less than 40dB(A)Leq in other areas Schools : Meet the requirements of tables 1.1 to 1.6 in Building Bulletin 93 (BB93)' },
      ]
    },
    { code:'LBi-10', title:'Safe & Secure Environment', desc:'To provide a safe and secure environment for building occupants and visitors.', pts:2, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Develop & Implement Safety & Security Plan' },
        { pts:1, desc:'Schools only: Transit Safety & Security Plan' },
      ]
    },
  ],
  PW: [
    { code:'PW-R1', title:'Minimum Interior Water Use Reduction', desc:"To develop and implement a comprehensive water strategy during the early stages of design as a tool to minimize the project's interior potable water consumption.", pts:'R', req:true },
    { code:'PW-R2', title:'Exterior Water Monitoring', desc:'To encourage the provision of metering facilities on all exterior water uses enabling effective management of outdoor water consumption and prevention of leaks.', pts:'R', req:true },
    { code:'PW-1', title:'Improved Interior Water Use Reduction', desc:"To promote further reductions in the project's interior potable water consumption through the use of efficient fixtures and appliances, and the use of recycled water.", pts:15, req:false, uiType:'dropdown',
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
    { code:'PW-2.1', title:'Exterior Water Use Reduction: Landscaping', desc:'To minimize landscaping water demands through effective plant selection, irrigation strategies, and promoting the use of recycled water.', pts:4, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Average landscape irrigation demand < 4 liters/m2/day' },
        { pts:4, desc:'Average landscape irrigation demand < 2 liters/m2/day' },
        { pts:1, desc:'Demonstrate that a water efficient irrigation system has been incorporated into the landscape design.' },
        { pts:1, desc:'Demonstrate that best practices for ongoing system management and operation have been established.' },
        { pts:2, desc:'Demonstrate that 100% of the exterior irrigation demand can be served using the Exterior Water Allowance, and that a recycled water mainline loop has been installed where recycled water is not immediately available.' },
        { pts:2, desc:'Schools only: Demonstrate that non-water turf substitutes are installed in place of turf.' },
      ]
    },
    { code:'PW-2.2', title:'Exterior Water Use Reduction: Heat Rejection', desc:'To reduce potable water use for heat rejection by promoting the use of recycled water and/or alternatives to water-based heat rejection.', pts:8, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'25% cooling water via recycled water' },
        { pts:3, desc:'50% cooling water via recycled water' },
        { pts:4, desc:'75% cooling water via recycled water' },
        { pts:5, desc:'100% cooling water via recycled water' },
        { pts:8, desc:'Demonstrate that no water is required for heat rejection.' },
      ]
    },
    { code:'PW-2.3', title:'Exterior Water Use Reduction: Water Features', desc:'Reduce potable water use in exterior water features by minimizing evaporative loss and through the use of recycled water.', pts:4, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Demonstrate that the water make-up requirements for all exterior water features can be served using the Exterior Water Allowance.' },
        { pts:1, desc:'Demonstrate that all external swimming pools are provided with adequate pool blankets.' },
        { pts:4, desc:'Demonstrate that there are no exterior water features or swimming pools.' },
      ]
    },
    { code:'PW-3', title:'Water Monitoring & Leak Detection', desc:'To encourage the provision of metering facilities that allow the water consumption of the building to be recorded and monitored to allow future improvement and understanding of the use of water in buildings.', pts:4, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:2, desc:'Demonstrate that metering facilities that monitor the water consumption of major individual interior uses are installed.' },
        { pts:2, desc:'Demonstrate that a leak detection system has been installed' },
      ]
    },
    { code:'PW-4', title:'Stormwater Management', desc:'To minimize peak stormwater discharge and protect the stormwater drainage system and receiving water bodies from pollutant loading during and after storm events.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the post-development peak runoff rate and quantity from the 2-year 24-hour design storm does not exceed the pre development peak run-off rate and quantity through structural methods, or a combination of both structural and non-structural methods.' },
        { pts:2, desc:'Demonstrate that the post-development peak runoff rate and quantity from the 2-year 24-hour design storm does not exceed the pre development peak run-off rate and quantity through the use of non-structural methods only' },
        { pts:1, desc:'Stormwater management system is designed to meet Quality Control criteria as per Credit Requirements.' },
        { pts:1, desc:'An OMP has been developed.' },
      ]
    },
  ],
  RE: [
    { code:'RE-R1', title:'Minimum Energy Performance', desc:'To create a decision-support tool to assist the project team in making informed decisions about the options, implications and benefits of various aspects of the building design in order to achieve a minimum level of energy efficiency.', pts:'R', req:true },
    { code:'RE-R2', title:'Energy Monitoring & Reporting', desc:'To encourage the provision of metering facilities that allow the energy performance of the building to be recorded and monitored to allow future improvement and understanding of the use of energy in buildings.', pts:'R', req:true },
    { code:'RE-R3', title:'Ozone Impacts of Refrigerants & Fire Suppression Systems', desc:'To promote the selection of refrigerants and fire suppression systems that minimise impacts on the environment', pts:'R', req:true },
    { code:'RE-1', title:'Improved Energy Performance', desc:'To promote further reductions in the projects energy consumption and hence carbon emissions associated with building operation.', pts:15, req:false, uiType:'dropdown',
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
    { code:'RE-2', title:'Cool Building Strategies', desc:"To determine the most effective solution to reducing a building's cooling demand by incorporating passive design strategies as a priority.", pts:5, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'10% reduction in the annual external heat gain' },
        { pts:2, desc:'20% reduction in the annual external heat gain' },
        { pts:3, desc:'30% reduction in the annual external heat gain' },
        { pts:4, desc:'40% reduction in the annual external heat gain' },
        { pts:5, desc:'50% reduction in the annual external heat gain' },
        { pts:1, desc:'Demonstrate that roofing materials with a high SRI will be used.' },
      ]
    },
    { code:'RE-3', title:'Energy Efficient Appliances', desc:'To minimise the energy consumed by common building appliances.', pts:3, req:false, uiType:'straight',
      pointOptions:[
        { pts:3, desc:'Demonstrate that all developer purchased and/or leased installed appliances shall be energy efficient, and that tenant guidelines outlining the benefits of energy efficient appliances will be produced.' },
      ]
    },
    { code:'RE-4', title:'Vertical Transportation', desc:'To promote projects that specify and install energy efficient vertical movement and transportation systems', pts:3, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Demonstrate that easily accessible stairs shall be provided to at least the first three floors of the building.' },
        { pts:1, desc:'Demonstrate that all lifts within the building shall be energy efficient.' },
        { pts:1, desc:'Demonstrate that all escalators/ travelators within the building shall be energy efficient.' },
      ]
    },
    { code:'RE-5', title:'Peak Load Reduction', desc:'To reduce energy demand and consequent increased infrastructure requirements to cater for loads at peak use times through efficient building and services design and site- based renewable energy generation.', pts:4, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:2, desc:'Demonstrate peak electrical load shall be less than 80% above annual average electrical load.' },
        { pts:4, desc:'Demonstrate peak electrical load shall be less than 60% above annual average electrical load.' },
      ]
    },
    { code:'RE-6', title:'Renewable Energy', desc:'To reward projects for the use of renewable technologies, therefore reducing the carbon emissions associated with building operation and the reliance on fossil fuel based power generation.', pts:8, req:false, uiType:'dropdown',
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
    { code:'RE-7', title:'Global Warming Impacts of Refrigerants & Fire Suppression Systems', desc:'To promote the selection of refrigerants and fire suppression systems that minimise impacts on the environment.', pts:4, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Demonstrate that the weighted average of all refrigerants shall have a GWP of 10 or less.' },
        { pts:1, desc:'Demonstrate that a permanent refrigerant leak detection system shall be installed.' },
        { pts:1, desc:'Demonstrate that an automatic refrigerant pump down system shall be installed.' },
        { pts:1, desc:"Demonstrate that 100% of gaseous fire systems shall have a GWP of 1 or less" },
      ]
    },
  ],
  SM: [
    { code:'SM-R1', title:'Hazardous Materials Elimination', desc:'To eliminate exposure of building occupants to asbestos and minimize toxic effects of chromated copper arsenate (CCA) treated timber on people and the environment.', pts:'R', req:true },
    { code:'SM-R2', title:'Basic Construction Waste Management', desc:'To reduce the long-term environmental impacts associated with construction waste collection, transport and disposal.', pts:'R', req:true },
    { code:'SM-R3', title:'Basic Operational Waste Management', desc:'To reduce the long-term environmental impacts associated with operational waste collection, transport and disposal.', pts:'R', req:true },
    { code:'SM-1', title:'Non-Polluting Materials', desc:'To promote the selection of materials that do not have long-term negative impacts on human health or pollute natural systems.', pts:3, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:"Building meets the Zero ODP, Low GWP Insulation' Credit Requirements through design." },
        { pts:1, desc:"Building meets the 'Chlorine Free Materials' Credit Requirements through design." },
        { pts:1, desc:"Building meets the 'Low Toxicity Materials' Credit Requirements through design." },
      ]
    },
    { code:'SM-2', title:'Design for Materials Reduction', desc:'To reduce the overall amount of material used in the development of buildings.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'General: Building is designed with at least one material reduction initiative. Offices only: At least two initiatives are required.' },
      ]
    },
    { code:'SM-3', title:'Design for Flexibility & Adaptability', desc:'To lengthen the useful life of buildings through designs that are easily adaptable for other program uses.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Building is designed to meet Credit Requirements for flexibility and adaptability.' },
      ]
    },
    { code:'SM-4', title:'Design for Disassembly', desc:'To facilitate the future deconstruction and reuse of buildings and their structural and envelope components.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Building is designed to meet Credit Requirements for design for disassembly' },
      ]
    },
    { code:'SM-5', title:'Modular Flooring Systems', desc:'To minimize waste associated with replacement of flooring systems through the use of modular systems.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'At least 95% (by surface area) of finished floor areas are specified with modular flooring products.' },
      ]
    },
    { code:'SM-6', title:'Design for Durability', desc:'To promote a long life building by protecting its components from condensation, water ingress, improper drainage and protecting vulnerable areas of the building envelope and surroundings.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Develop a Building Durability Plan.' },
      ]
    },
    { code:'SM-7', title:'Building Reuse', desc:'To encourage the reuse and improvement of existing building stock, reduce waste and other environmental impacts associated with new materials extraction, manufacturing, and transport.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'At least 25% of the building structural system, by surface area, will be reused.' },
        { pts:2, desc:'At least 50% of the building structural system, by surface area, will be reused.' },
      ]
    },
    { code:'SM-8', title:'Material Reuse', desc:'To promote the selection of previously used or salvaged materials in order to reduce demand on natural resources and reduce waste', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'The cost of specified reused materials equal to at least 3% of the Total Material Cost.' },
      ]
    },
    { code:'SM-9', title:'Regional Materials', desc:'To encourage the selection of building materials that have reduced transport impacts and promotes regional economies', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Cost of regional materials specified equal to 10% of Total Material Cost.' },
        { pts:2, desc:'Cost of regional materials specified equal to 20% of Total Material Cost.' },
      ]
    },
    { code:'SM-10', title:'Recycled Materials', desc:'To increase the demand for recycled materials to reduce the amount of waste going to disposal.', pts:8, req:false, uiType:'checkbox',
      pointOptions:[
        { pts:1, desc:'Steel-framed: at least 50% of specified structural steel (by weight) has 25% post-consumer recycled content or is reused Concrete-framed: at least 80% of specified rebar or stressing steel has 90% post-consumer recycled content.' },
        { pts:1, desc:'Specified concrete mix and reduction in cement use will achieve an embodied GHG of concrete as per table SM10.1, rows B1, C1 and D1.' },
        { pts:2, desc:'Specified concrete mix and reduction in cement use will achieve an embodied GHG of concrete as per table SM10.1, rows B2, C2 and D2.' },
        { pts:1, desc:'At least 15% of all specified aggregates to be used for structural or non-structural applications are recycled.' },
        { pts:2, desc:'Only recycled aggregate is specified for use as base, sub-base or backfill.' },
        { pts:1, desc:'Cost of specified recycled materials equal to at least 10% of Total Material Costs.' },
      ]
    },
    { code:'SM-11', title:'Rapidly Renewable Materials', desc:'To increase the use of fast growing materials as an alternative to slow growing materials and finite resources.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'at least 75% (by area) of one or more specified building components are rapidly renewable; at least 35% (by area) of two or more specified building components are rapidly renewable; or at least 15% (by area) of four or more specified building components are rapidly renewable.' },
      ]
    },
    { code:'SM-12', title:'Reused or Certified Timber', desc:'To encourage the use of timber sourced from legal and sustainable sources.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'At least 50% (by cost) of the specified timber comply with the Credit Requirements.' },
        { pts:2, desc:'At least 70% (by cost) of the specified timber comply with the Credit Requirements.' },
      ]
    },
    { code:'SM-13', title:'Improved Construction Waste Management', desc:'To further reduce the long-term environmental impacts associated with construction waste collection, transport and disposal.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Demonstrate CDWMP aims for a minimum of 50% demolition and construction waste (by weight or volume) to be recycled / salvaged.' },
        { pts:2, desc:'Demonstrate CDWMP aims for a minimum of 70% demolition and construction waste (by weight or volume) to be recycled / salvaged.' },
      ]
    },
    { code:'SM-14', title:'Improved Operational Waste Management', desc:'To further reduce the long-term environmental impacts associated with operational waste collection, transport and disposal.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'General: An OWMP is developed for a minimum targeted diversion rate of 60% (by weight or volume. Multi-Residential: An OWMP is developed for a minimum targeted diversion rate of 50% (by weight or volume.' },
        { pts:2, desc:'General: An OWMP is developed for a minimum targeted diversion rate of 80% (by weight or volume. Multi-Residential: An OWMP is developed for a minimum targeted diversion rate of 70% (by weight or volume.' },
      ]
    },
    { code:'SM-15', title:'Organic Waste Management', desc:'To encourage the recovery and reuse of organic waste from building operations including landscaping and food waste.', pts:2, req:false, uiType:'dropdown',
      pointOptions:[
        { pts:1, desc:'Landscaping waste or food waste collection and/or treatment is proposed onsite.' },
        { pts:2, desc:'Food and landscaping waste collection and/or treatment are proposed onsite.' },
      ]
    },
  ],
  IP: [
    { code:'IP-1', title:'Innovative Cultural & Regional Practices', desc:'Develop designs that showcase cultural and regional practices, while contributing to the environmental performance of the building.', pts:1, req:false, uiType:'straight',
      pointOptions:[
        { pts:1, desc:'Develop a design strategy for incorporating solutions that showcase cultural and regional practices' },
      ]
    },
    { code:'IP-2', title:'Innovating Practice', desc:'To reward design and construction practices that result in a significant positive impact in relation to any of the four pillars of Estidama.', pts:2, req:false, uiType:'straight',
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
