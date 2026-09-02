export type ServicePageContent = {
  pageTitle: string;
  metaDescription: string;
  introduction: string;
  workItems: string[];
  problems: string[];
  considerations: string[];
  safetyNotice?: string;
  heroTitle?: string;
  whatsappMessage?: string;
  process?: readonly (readonly [string, string])[];
  faqs?: { question: string; answer: string }[];
};

export const servicePageContent: Record<string, ServicePageContent> = {
  "electrical/new-wiring": {
    pageTitle: "New Electrical Wiring Services in Lahore",
    metaDescription: "New electrical wiring for Lahore homes, offices, shops and extensions, including circuit planning, points, distribution-board connections and testing.",
    introduction: "Planning electrical work for a new home, office, shop or additional room requires careful attention to power requirements, circuit distribution and future usage. We provide new electrical wiring services in Lahore for residential and commercial properties. The work scope is assessed according to the property layout, required light points, sockets, appliances and electrical load.",
    workItems: ["Wiring for new homes and commercial properties", "Wiring for newly constructed rooms or floors", "Light, fan and socket points", "Dedicated appliance circuits", "Distribution board connections", "Cable routing and organisation", "Earthing requirements", "Circuit labelling", "Final connection checks", "Testing before handover"],
    problems: ["Too few power points for the planned room", "Mixed lighting and appliance loads", "No dedicated circuit for heavy equipment", "Unclear cable routes before finishing work", "Limited distribution-board capacity", "Future extension requirements"],
    considerations: ["Property layout and room usage", "Expected appliance and equipment loads", "Concealed or surface cable routes", "Distribution-board space and protection", "Earthing arrangement and access"],
  },
  "electrical/rewiring-and-upgrades": {
    pageTitle: "Old Electrical Wiring Repair and Rewiring in Lahore",
    metaDescription: "Inspection, targeted repair and rewiring support for old or damaged electrical systems in Lahore properties.",
    introduction: "Old or damaged wiring can lead to repeated electrical faults, unstable connections and interruptions in power. Our old wiring inspection and repair service helps identify affected circuits and determine whether targeted repair or complete rewiring is more suitable for the property.",
    workItems: ["Inspection of old electrical wiring", "Repair of loose or damaged connections", "Replacement of deteriorated cables", "Partial or complete property rewiring", "Repair of damaged electrical points", "Correction of overloaded circuits", "Replacement of unsafe joints", "Distribution board connection review", "Circuit organisation", "Testing after completion"],
    problems: ["Frequently tripping breakers", "Flickering lights", "Burning smell near a switch or socket", "Sparking electrical points", "Warm or discoloured sockets", "Frequently damaged appliances", "Dead switches or sockets", "Old exposed wiring"],
    considerations: ["Age and visible condition of existing cables", "Extent of concealed wiring damage", "Current circuit loading", "Access required for partial or complete replacement", "Condition of the distribution board"],
    safetyNotice: "Avoid touching exposed wiring, sparking points or heat-damaged accessories. Keep people away from the affected area and isolate the electricity supply only when it is safe and you know how to do so.",
  },
  "electrical/fault-finding": {
    pageTitle: "Electrical Fault Diagnosis and Repair in Lahore",
    metaDescription: "Electrical fault diagnosis in Lahore for tripping breakers, dead points, short circuits, flickering lights and damaged connections.",
    introduction: "Electrical faults can affect one point, one circuit or the complete property. We inspect the visible symptoms, identify the likely source of the fault and explain the required repair before work begins. Diagnosis is important because similar symptoms can result from different circuit, accessory or connected-appliance problems.",
    workItems: ["Affected-area and fault-history review", "Power failure checks for selected rooms", "Short-circuit assessment", "Breaker tripping diagnosis", "Loose connection inspection", "Faulty switch and socket checks", "Damaged cable assessment", "Appliance connection review", "Voltage-related symptom assessment", "Repair testing"],
    problems: ["Power loss in one room or circuit", "Repeated short circuit or breaker trip", "Loose or intermittent connection", "Flickering lights", "Sparking point", "Damaged cable", "Fault after connecting an appliance", "Unstable supply symptoms"],
    considerations: ["When and where the fault occurs", "Loads connected when the issue appears", "Recent electrical or renovation work", "Visible heat, moisture or physical damage", "Circuit access and safe isolation"],
    safetyNotice: "Do not repeatedly reset a breaker, touch sparking accessories or continue using a point that smells burnt. Isolate the affected circuit when it is safe to do so and arrange an assessment.",
  },
  "electrical/db-and-breakers": {
    pageTitle: "Distribution Board and Circuit Breaker Services in Lahore",
    metaDescription: "Distribution-board inspection, breaker diagnosis, circuit organisation and compatible replacement services in Lahore.",
    introduction: "The distribution board controls and protects the property’s electrical circuits. Breaker problems, loose terminations, unclear circuit organisation or an unsuitable board can affect reliability and safe maintenance. We assess the board, connected circuits and property requirements before recommending repair, reorganisation or replacement.",
    workItems: ["Distribution board inspection", "Faulty breaker assessment", "Compatible breaker replacement", "MCB-related issue diagnosis", "Circuit organisation", "Circuit labelling", "Loose connection repair", "Breaker tripping diagnosis", "New circuit connections", "Testing after work"],
    problems: ["Breaker will not remain on", "One circuit repeatedly trips", "Loose or heat-affected termination", "Overcrowded board", "Missing circuit labels", "Space needed for a new circuit", "Visible enclosure damage", "Old or incompatible protective devices"],
    considerations: ["Board condition and available space", "Breaker and enclosure compatibility", "Connected load and circuit purpose", "Cable termination condition", "Whether repair or replacement is practical"],
    safetyNotice: "Do not remove the distribution-board cover or touch internal parts. Board repair is not always suitable; replacement depends on condition, compatibility and property requirements.",
  },
  "electrical/fixtures-and-repairs": {
    pageTitle: "Switch, Socket, Lighting and Fan Services in Lahore",
    metaDescription: "Installation and repair of switches, sockets, lights, ceiling fans, exhaust fans and additional electrical points in Lahore.",
    introduction: "Switches, sockets, lights and fans are used every day, and damaged or poorly connected points can become unreliable. We assess the accessory, its mounting, accessible connections and the related circuit before installing a replacement or repairing the point.",
    workItems: ["Switch installation and repair", "Socket installation and replacement", "Light fixture installation", "Ceiling fan installation", "Exhaust fan installation", "Dimmer and regulator replacement", "Loose point repair", "Burnt socket replacement", "Additional electrical points", "Indoor and outdoor lighting connections"],
    problems: ["Loose or cracked switch", "Socket not supplying power", "Burnt or discoloured accessory", "Light flickering at one point", "Fan not responding to its regulator", "Fixture hanging or mounted poorly", "Need for an additional point", "Outdoor fitting affected by moisture"],
    considerations: ["Accessory type and mounting size", "Existing point and circuit condition", "Connected load", "Indoor or outdoor location", "Replacement compatibility and finish"],
  },
  "solar/panel-installation": {
    pageTitle: "Solar Panel Installation Services in Lahore",
    metaDescription: "Assessment-led solar panel installation in Lahore with rooftop planning, mounting, cable routing, inverter connection and system testing.",
    introduction: "We provide solar panel installation support for homes and businesses in Lahore. Before installation, the property, available rooftop space, expected usage and system requirements should be reviewed so the proposed setup is suitable for the site.",
    workItems: ["Site and rooftop assessment", "Panel placement planning", "Mounting structure installation", "Solar panel fitting", "DC cable routing", "Inverter connection", "Battery connection where applicable", "Earthing and protection considerations", "System testing", "Basic usage and handover guidance"],
    problems: ["Limited usable rooftop area", "Shade from nearby structures or tanks", "Unclear panel orientation", "Long cable route to the inverter", "Existing equipment compatibility", "Need to separate essential backup loads"],
    considerations: ["Rooftop condition, access and shade", "Expected energy use and daytime load", "Panel, inverter and battery compatibility", "Mounting and cable route", "Protection, isolation and earthing"],
  },
  "solar/connection-and-setup": {
    pageTitle: "Solar System Connection and Setup in Lahore",
    metaDescription: "Solar panel, inverter, battery, changeover and load connection setup for compatible systems in Lahore.",
    introduction: "A solar system must be connected around its inverter design, panel arrangement, battery type, capacity and the property’s existing electrical setup. We review the installed equipment and connection requirements before configuring and testing the system.",
    workItems: ["Solar panel connections", "Inverter configuration", "Battery bank connections", "Changeover connections", "Load distribution", "Existing electrical system integration", "Cable inspection", "Protection-device inspection", "Initial system testing", "Basic operation guidance"],
    problems: ["Equipment installed but not commissioned", "Unclear changeover operation", "Backup loads connected incorrectly", "Battery bank awaiting connection", "Protection devices requiring review", "System settings not matched to equipment"],
    considerations: ["Inverter model and supported configuration", "Battery chemistry, voltage and capacity", "Panel string arrangement", "Existing distribution and changeover setup", "Cable and protection compatibility"],
  },
  "solar/repair-and-diagnostics": {
    pageTitle: "Solar System Repair and Fault Diagnosis in Lahore",
    metaDescription: "Solar fault diagnosis in Lahore for low production, inverter errors, charging problems, shutdowns and connection faults.",
    introduction: "Solar performance problems may originate from panels, strings, connectors, cables, protection devices, inverter settings, batteries or the connected electrical system. We review the symptoms and system status before recommending repair, adjustment or replacement.",
    workItems: ["Low solar production diagnosis", "Inverter error review", "Battery charging checks", "Loose or damaged connection inspection", "Unexpected shutdown assessment", "Changeover problem diagnosis", "Protection-device checks", "Panel or string issue assessment", "Monitoring display review", "Performance observations"],
    problems: ["Generation lower than expected", "Repeated inverter warning", "Battery not reaching charge", "System stops during the day", "Changeover does not transfer correctly", "One panel string appears inactive", "Monitoring values look incorrect", "Visible connector or cable damage"],
    considerations: ["Error history and time of failure", "Weather and shading conditions", "Equipment age and compatibility", "Battery condition and connected load", "Safe access to panels and system components"],
  },
  "solar/inverter-and-battery": {
    pageTitle: "Solar Inverter and Battery Services in Lahore",
    metaDescription: "Solar inverter and battery assessment in Lahore for errors, charging issues, terminals, configuration and backup performance.",
    introduction: "The inverter and battery arrangement affects solar conversion, charging and backup operation. We inspect visible connections, settings, equipment condition and load behaviour before advising whether adjustment, repair consultation or replacement is appropriate.",
    workItems: ["Inverter connection inspection", "Inverter error diagnosis", "Battery connection inspection", "Battery charging issue assessment", "Loose terminal correction", "Cable assessment", "Inverter configuration review", "Backup performance review", "Battery replacement consultation", "Compatibility assessment"],
    problems: ["Inverter error or alarm", "Battery not charging fully", "Reduced backup duration", "Loose or heating terminal", "Unexpected battery discharge", "Incorrect charging configuration", "Backup overload", "New battery compatibility question"],
    considerations: ["Inverter model and error history", "Battery type, age and visible condition", "Configured charging values", "Terminal and cable condition", "Actual backup load"],
    safetyNotice: "Not every inverter or battery can be repaired. After diagnosis, the appropriate repair route or compatible replacement recommendation will be explained.",
  },
  "solar/maintenance": {
    pageTitle: "Solar Panel Maintenance Services in Lahore",
    metaDescription: "Solar panel maintenance in Lahore with visual inspection, safe cleaning, cable checks and performance observations.",
    introduction: "Lahore dust, seasonal debris, shade and weather exposure can affect panel surfaces and visible installation components. Maintenance is planned around safe rooftop access, the panel layout and the condition of the installed system.",
    workItems: ["Visual panel inspection", "Dust and dirt assessment", "Safe panel cleaning", "Mounting structure inspection", "Cable inspection", "Connection checks", "Basic inverter review", "Monitoring display review", "Visible damage identification", "Maintenance recommendations"],
    problems: ["Heavy dust on panel surfaces", "Bird debris or leaves", "New shade affecting panels", "Loose visible cable support", "Blocked inverter ventilation", "Visible panel damage", "Unexpected performance change", "Maintenance overdue after weather exposure"],
    considerations: ["Safe access and roof condition", "Panel temperature and cleaning time", "Water and cleaning method", "Visible mounting and cable condition", "Performance before and after maintenance"],
  },
  "solar/panel-cleaning": {
    pageTitle: "Solar Panel Cleaning & Washing Services in Lahore",
    heroTitle: "Professional Solar Panel Cleaning in Lahore",
    metaDescription: "Professional solar panel cleaning and washing services in Lahore to remove dust, dirt and surface buildup while protecting the panels and system components.",
    introduction: "Remove accumulated dust, dirt and surface buildup with careful solar panel cleaning designed to protect your system and maintain clear panel surfaces.",
    whatsappMessage: "Assalam-o-Alaikum, I need Solar Panel Cleaning and Washing service in Lahore. My area is [AREA].",
    workItems: ["Initial visual inspection", "Assessment of dust and surface buildup", "Safe rooftop-access review", "Controlled solar panel washing", "Soft-brush panel cleaning", "Removal of bird droppings and loose dirt", "Cleaning around accessible panel edges", "Basic mounting-structure inspection", "Visible cable-condition check", "Final visual review"],
    problems: ["Visible dust layer", "Bird droppings", "Leaves or surface debris", "Reduced production compared with normal performance", "Panels not cleaned for an extended period", "Cleaning required before system inspection"],
    considerations: ["Do not use aggressive pressure washing", "Do not use harsh chemicals", "Do not stand or walk on solar panels", "Suitable rooftop safety equipment is required", "Damaged panels or wiring need separate assessment", "Cleaning cannot resolve inverter, battery or electrical faults"],
    safetyNotice: "Panel temperature, rooftop access, electrical components and mounting condition must be reviewed before cleaning. Aggressive pressure, harsh chemicals and walking on panels should be avoided.",
    process: [["Share system details", "Send the Lahore location, panel quantity and useful rooftop photos."], ["Review access", "Rooftop access, panel layout and safe working conditions are reviewed."], ["Inspect the system", "Visible panel, mounting and cable conditions are checked before washing."], ["Controlled cleaning", "Suitable tools and controlled methods remove surface buildup."], ["Final visual checks", "Accessible panels and surrounding components are reviewed after cleaning."], ["Maintenance observations", "Visible concerns and sensible next maintenance steps are explained."]],
    faqs: [{ question: "How often should solar panels be cleaned?", answer: "The suitable interval depends on Lahore dust, nearby construction, bird activity, rainfall, roof exposure and visible buildup. An inspection is more useful than assuming one fixed schedule." }, { question: "Do you use pressure washers on solar panels?", answer: "Aggressive pressure washing is avoided because it may affect seals, glass, wiring or surrounding components. The cleaning method is selected after panel condition is reviewed." }, { question: "Can cleaning improve solar performance?", answer: "Removing a heavy surface layer may improve sunlight exposure, but no output increase is guaranteed because performance also depends on shade, temperature, inverter settings and electrical condition." }, { question: "Do I need to turn the solar system off before cleaning?", answer: "Safe isolation requirements depend on the system and accessible components. The technician reviews the setup and follows the appropriate procedure before work." }, { question: "Can damaged panels be cleaned?", answer: "Cracked glass, loose wiring or damaged mounting needs separate assessment. Cleaning may be postponed where proceeding could be unsafe or worsen damage." }, { question: "Is the cleaning price based on the number of panels?", answer: "Panel quantity is one factor. Access, layout, buildup level, roof condition and the complete agreed scope also affect the quotation." }],
  },
  "solar/system-design": {
    pageTitle: "Solar System Design & Planning Services in Lahore",
    heroTitle: "Solar System Design & Planning in Lahore",
    metaDescription: "Solar system design and planning services in Lahore covering rooftop layout, system requirements, panel placement, inverter and battery considerations.",
    introduction: "Plan a practical solar setup around your property, rooftop space, energy requirements and preferred backup arrangement.",
    whatsappMessage: "Assalam-o-Alaikum, I need consultation for Solar System Design and Planning in Lahore. My area is [AREA].",
    workItems: ["Initial energy-requirement discussion", "Available electricity-bill review", "Rooftop-space assessment", "Panel-placement planning", "Basic shading considerations", "Solar panel quantity estimation", "Inverter-capacity considerations", "Battery and backup requirements", "Existing electrical-system review", "Cable-routing considerations", "Protection and earthing considerations", "Preliminary system layout", "Installation-scope planning"],
    problems: ["New solar system planning", "Unclear panel quantity", "Limited rooftop space", "Daytime and nighttime load planning", "Battery-backup requirement", "Existing inverter compatibility", "Shading and placement questions", "Cable-route and protection planning"],
    considerations: ["Property type and Lahore location", "Recent electricity usage or bills", "Daytime and nighttime load requirements", "Major appliances", "Available rooftop area", "Existing inverter or battery equipment", "Required backup expectations", "Rooftop and electrical-setup photographs"],
    safetyNotice: "Any preliminary recommendation is subject to physical site inspection, technical calculations, equipment compatibility and confirmed installation conditions.",
    process: [["Understand requirements", "Discuss electricity usage, important loads and backup expectations."], ["Review information", "Review available bills, property details, equipment and photographs."], ["Assess placement", "Consider rooftop area, orientation, shade and practical panel positions."], ["Consider equipment", "Review panel quantity, inverter capacity, batteries and protection requirements."], ["Prepare direction", "Organise a preliminary system layout and installation scope."], ["Confirm after assessment", "Final design follows physical inspection, calculations and compatibility checks."]],
    faqs: [{ question: "What information is needed to design a solar system?", answer: "Property type, Lahore location, recent usage, major loads, rooftop area, backup expectations and existing equipment provide the starting point." }, { question: "Can the system be planned using my electricity bill?", answer: "Bills help show past usage, but daytime load, seasonal variation, backup goals and site conditions must also be considered." }, { question: "How is the number of solar panels calculated?", answer: "Panel quantity depends on energy requirements, panel rating, usable roof area, shade, inverter limits and the confirmed design." }, { question: "Is a rooftop inspection required?", answer: "A physical inspection is normally required before final design to confirm dimensions, shade, roof condition, access and cable routes." }, { question: "Can you plan a system with battery backup?", answer: "Yes. Backup expectations, essential loads, battery type, inverter support and charging requirements are considered." }, { question: "Can an existing inverter be included in the new design?", answer: "It may be included if its model, capacity, voltage ranges, condition and supported configuration are compatible with the proposed system." }],
  },
  "solar/troubleshooting": {
    pageTitle: "Solar Panel Troubleshooting Services in Lahore",
    heroTitle: "Solar Panel & System Troubleshooting in Lahore",
    metaDescription: "Solar system and panel troubleshooting services in Lahore for low production, inverter errors, charging issues, shutdowns and connection-related faults.",
    introduction: "Identify possible causes of low production, inverter errors, charging problems and unexpected solar-system interruptions.",
    whatsappMessage: "Assalam-o-Alaikum, I need Solar Panel Troubleshooting in Lahore. My system issue is [ISSUE] and my area is [AREA].",
    workItems: ["System details and fault-history review", "Inverter and monitoring-information review", "Accessible panel inspection", "Connection and connector checks", "Relevant cable inspection", "Protection-device assessment", "Inverter behaviour assessment", "Battery charging and backup review", "Likely fault-area identification", "Testing after approved work"],
    problems: ["Low solar production", "Unexpected system shutdown", "Inverter error messages", "Battery not charging correctly", "Weak backup duration", "Solar power not reaching selected loads", "Loose or damaged connectors", "Cable-related concerns", "Faulty protection devices", "Changeover problems", "Monitoring or display issues", "Inconsistent daytime performance", "Visible panel damage", "One solar string performing differently"],
    considerations: ["Inverter brand and model", "Battery type and system capacity", "Error codes or warning lights", "Photos or videos of the issue", "When the problem started", "Recent repair or installation work", "Current system behaviour", "Safe access to system components"],
    safetyNotice: "Do not open an inverter, distribution board or exposed electrical connection without suitable technical experience. If there is smoke, burning smell, sparking or exposed wiring, isolate the supply only when it is safe and seek professional assistance.",
    process: [["Collect fault details", "Share the system type, symptoms, history and Lahore location."], ["Review monitoring", "Check available inverter errors, warning lights or monitoring information."], ["Inspect components", "Review accessible panels, connectors, cables and protection devices."], ["Assess equipment", "Check relevant inverter and battery behaviour according to the system."], ["Identify fault area", "Explain the likely cause and practical repair or replacement options."], ["Complete approved work", "Carry out only the confirmed scope and compatible corrective work."], ["Test the system", "Review operation again after the approved work is completed."]],
    faqs: [{ question: "What information should I share before the visit?", answer: "Share the inverter model, battery type, system capacity, error codes, symptoms, when the issue began and useful photos or videos." }, { question: "Can low solar production be caused by dirty panels?", answer: "Yes, surface buildup can contribute, but shade, heat, wiring, strings, settings and equipment faults can produce similar symptoms and should be assessed." }, { question: "Can inverter errors be diagnosed?", answer: "Displayed errors and operating behaviour can be reviewed alongside connections, protection and compatible equipment information." }, { question: "Do all solar faults require equipment replacement?", answer: "No. Some faults may involve settings, connections or individual components. Replacement is recommended only when diagnosis and compatibility support it." }, { question: "Can existing system wiring be inspected?", answer: "Accessible DC and AC wiring, connectors and protection devices can be reviewed within the confirmed safe scope." }, { question: "Will you test the system after repair?", answer: "The relevant operating behaviour is checked after approved repair work, subject to available sunlight, loads and accessible equipment." }],
  },
  "ac/installation": {
    pageTitle: "AC Installation Services in Lahore",
    metaDescription: "Split AC installation in Lahore with indoor and outdoor placement, piping, drainage, electrical connection and cooling tests.",
    introduction: "Correct AC installation depends on the unit type and capacity, wall condition, indoor and outdoor placement, pipe length, drainage route and electrical supply. We review the location before confirming the installation materials and scope.",
    workItems: ["Split AC installation", "Indoor unit positioning", "Outdoor unit positioning", "Bracket installation", "Copper pipe routing", "Drainage pipe setup", "Electrical connection", "Insulation and sealing", "Initial cooling test", "Basic usage guidance"],
    problems: ["No suitable indoor mounting point", "Difficult outdoor-unit access", "Long or concealed pipe route", "Drainage route without enough slope", "Wall surface requiring review", "Electrical point not suitable for the unit"],
    considerations: ["AC type and cooling capacity", "Wall and bracket condition", "Pipe length and route", "Drainage and sealing", "Dedicated electrical supply"],
  },
  "ac/repair": {
    pageTitle: "AC Repair and Fault Diagnosis in Lahore",
    metaDescription: "AC fault diagnosis in Lahore for poor cooling, startup problems, leakage, weak airflow, noise and repeated shutdowns.",
    introduction: "An AC fault may involve airflow, drainage, controls, sensors, electrical components, the outdoor unit or the refrigerant circuit. The technician reviews the symptoms and tests the relevant components before recommending parts, repair or replacement.",
    workItems: ["AC not cooling diagnosis", "AC not starting checks", "Unusual noise assessment", "Indoor water leakage review", "Outdoor unit inspection", "Weak airflow assessment", "Electrical fault checks", "Thermostat or sensor symptom review", "Compressor-related symptom assessment", "Repeated shutdown diagnosis"],
    problems: ["Warm air from the indoor unit", "Unit does not start", "Repeated clicking or unusual noise", "Water dripping indoors", "Outdoor unit not operating", "Weak airflow", "Breaker trips with AC use", "Unit shuts down repeatedly"],
    considerations: ["Unit model, capacity and age", "Fault timing and error indications", "Filter and airflow condition", "Outdoor-unit access and ventilation", "Whether a part is testable and available"],
    safetyNotice: "A repair cannot be promised before inspection. Diagnosis determines whether adjustment, cleaning, repair, a compatible part or replacement should be recommended.",
  },
  "ac/maintenance-and-service": {
    pageTitle: "AC Maintenance and Servicing in Lahore",
    metaDescription: "AC servicing in Lahore with filter and indoor-unit cleaning, drainage checks, airflow review and maintenance recommendations.",
    introduction: "Routine servicing helps address accumulated dust, restricted airflow, drainage concerns and visible operating issues before heavy seasonal use. The service scope depends on unit condition, accessibility and whether a separate fault is present.",
    workItems: ["Filter cleaning", "Indoor unit cleaning", "Outdoor unit inspection", "Drainage line inspection", "Cooling performance review", "Electrical connection checks", "Noise and vibration inspection", "Visible leakage inspection", "Airflow assessment", "Maintenance recommendations"],
    problems: ["Dusty or restricted filters", "Weak airflow", "Odour when the unit starts", "Slow drainage", "Unusual vibration", "Outdoor coil obstructed by debris", "Cooling performance has reduced", "Service overdue before summer"],
    considerations: ["Unit accessibility and condition", "Filter and coil contamination", "Drain route", "Outdoor-unit airflow", "Whether symptoms require separate diagnosis"],
  },
  "ac/shifting": {
    pageTitle: "AC Shifting and Reinstallation Services in Lahore",
    metaDescription: "AC removal, shifting and reinstallation in Lahore with route assessment, mounting, reconnection and cooling tests.",
    introduction: "Shifting a split AC involves more than moving the units. The old installation, new mounting location, existing pipe and cable condition, drainage route and electrical point should be reviewed before reinstallation.",
    workItems: ["Safe indoor and outdoor unit removal", "Existing pipe inspection", "Existing cable inspection", "Transportation preparation", "New installation-point assessment", "Bracket and mounting setup", "Pipe and drainage reconnection", "Electrical reconnection", "Sealing and insulation", "Cooling test after reinstallation"],
    problems: ["Moving AC to another room", "Relocating to a new property", "Renovation requires temporary removal", "Outdoor unit needs a better location", "Existing pipe route is unsuitable", "Old brackets or insulation need replacement"],
    considerations: ["Access at both locations", "Condition and length of reusable pipe", "New wall and mounting surface", "Drainage route", "Electrical supply at the new point"],
  },
  "ac/leakage-and-cooling": {
    pageTitle: "AC Leakage and Cooling Problem Diagnosis in Lahore",
    metaDescription: "Diagnosis of AC water leakage, weak cooling, icing, drainage, airflow and outdoor-unit performance problems in Lahore.",
    introduction: "Water leakage and weak cooling can result from drainage blockage, restricted airflow, insulation condition, ice formation, installation issues or a refrigerant-circuit fault. We assess the visible symptoms before recommending corrective work.",
    workItems: ["Indoor water leakage diagnosis", "Drainage blockage inspection", "Pipe insulation checks", "Weak cooling assessment", "Uneven cooling review", "Ice formation assessment", "Airflow problem checks", "Visible refrigerant-related symptom review", "Outdoor unit performance check", "Temperature and system checks"],
    problems: ["Water dripping from indoor unit", "Drain line overflowing", "Ice on coil or pipe", "Room not reaching a comfortable temperature", "Airflow differs across the room", "Outdoor unit runs poorly", "Cooling drops after some time", "Pipe insulation is damaged"],
    considerations: ["Location and timing of leakage", "Filter, coil and airflow condition", "Drain slope and blockage", "Pipe insulation and visible joints", "Indoor and outdoor temperature observations"],
  },
};

export function buildServiceFaqs(key: string, serviceName: string, category: "solar" | "electrical" | "ac") {
  const content = servicePageContent[key];
  if (content.faqs) return content.faqs;
  const categoryEquipment = category === "solar" ? "panels, inverter, batteries and protection equipment" : category === "electrical" ? "circuits, accessories, cables and distribution equipment" : "indoor unit, outdoor unit, piping, drainage and electrical connection";
  return [
    { question: `Is an inspection required for ${serviceName.toLowerCase()}?`, answer: `An inspection is normally needed when the site condition, fault source or complete ${serviceName.toLowerCase()} scope cannot be confirmed from the initial information. It helps match the recommendation to the actual Lahore property and equipment.` },
    { question: "What information should I provide before the visit?", answer: `Share your Lahore area, property type, a clear description of the requirement, when the issue started and useful photos. For ${serviceName.toLowerCase()}, equipment model details or displayed error information can also help.` },
    { question: "Are materials and replacement parts included?", answer: `Materials are not assumed automatically. After reviewing ${categoryEquipment}, the required items should be listed in the agreed scope and quotation before work begins.` },
    { question: "How is the final quotation determined?", answer: `The quotation reflects access, existing condition, required materials, compatibility and the complete work scope. ${content.considerations[0]} and ${content.considerations[1].toLowerCase()} can both affect the recommendation.` },
    { question: `Can the existing ${category === "solar" ? "solar equipment" : category === "electrical" ? "electrical system" : "AC system"} always be repaired?`, answer: `Repair depends on condition, test findings, compatible parts and whether the result would be practical. Diagnosis may lead to adjustment, targeted repair, partial replacement or a replacement recommendation; no repair is promised before assessment.` },
    { question: "What can change the service scope?", answer: `Hidden damage, restricted access, incompatible equipment, unsafe existing work or additional faults can change the scope. Any extra requirement should be explained before additional work starts.` },
  ];
}
