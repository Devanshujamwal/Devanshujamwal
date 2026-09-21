export const portfolio = {
  name: "Devanshu Jamwal",
  location: "Calgary, Alberta, Canada",
  headline: "IT Support • Systems • Networking • Cloud",
  intro: "Information Technology Services graduate from SAIT, focused on troubleshooting, infrastructure, and reliable end-user support.",
  about: "My work brings together user support, networking, systems administration, cloud, and cybersecurity fundamentals. I enjoy understanding how systems fit together and explaining technical problems clearly.",
  availability: "Open to entry-level IT opportunities",
  email: "jamwaldevanshu@gmail.com",
  github: "https://github.com/Devanshujamwal",
  linkedin: "https://www.linkedin.com/in/devanshujamwal/",
  resume: { path: "/resume/Devanshu-Jamwal-Resume.pdf", available: false },
};

export const navigation = ["Home", "Projects", "About", "Skills", "Experience", "Education", "Contact"];
export const skillGroups = [
  { name: "Systems", skills: ["Windows", "Linux", "macOS", "Microsoft 365"] },
  { name: "Networking", skills: ["TCP/IP", "DNS", "DHCP", "VLANs", "OSPF", "NAT", "Cisco Networking", "Wireshark"] },
  { name: "Cloud", skills: ["Microsoft Azure", "Virtual Machines", "Virtual Networks", "Azure Storage", "RBAC", "Azure Monitor", "Log Analytics", "Entra ID concepts"] },
  { name: "Security", skills: ["Palo Alto Networks", "Wazuh", "SIEM fundamentals", "Endpoint Monitoring", "Firewall Policies", "Network Security"] },
  { name: "Virtualization", skills: ["VMware"] },
  { name: "Support & tools", skills: ["ServiceNow", "Jira", "Git", "GitHub", "VS Code"] },
  { name: "Programming", skills: ["Python", "C/C++", "HTML/CSS", "Next.js"] },
];
export const experiences = [
  { role: "IT Technician", company: "Excitel", date: "[ADD DATE]", location: "[ADD LOCATION]", points: ["Hardware and software troubleshooting, network connectivity, and technical support.", "End-user assistance and problem resolution."] },
  { role: "IT Support Intern", company: "Hathway", date: "[ADD DATE]", location: "[ADD LOCATION]", points: ["Help desk support and device configuration across Windows, macOS, and Linux.", "Troubleshooting and user support."] },
];
export type Evidence = { title: string; description: string; href?: string; image?: string; alt?: string; placeholder?: string };
export type CaseNote = { title: string; text: string; placeholder?: string };
export type Project = {
  slug: string; number: string; title: string; category: string; type: string;
  summary: string; overview: string; objective: string; environment: string; role: string;
  diagram: "network" | "azure" | "security" | "python"; diagramCaption: string;
  technologies: string[]; featuredTechnologies: string[]; github?: string;
  implementation: CaseNote[]; troubleshooting: CaseNote[]; validation: CaseNote[];
  learned: CaseNote[]; evidence: Evidence[];
};
const networkRepo = "https://github.com/Devanshujamwal/Network-Design-Company-Infrastructure-Implementation";
const pythonRepo = "https://github.com/Devanshujamwal/Library-management-system";
export const projects: Project[] = [
  {
    slug: "enterprise-network", number: "01", title: "Enterprise Multi-Site Network Infrastructure", category: "Networking", type: "Academic project / hands-on lab",
    summary: "A team-built Packet Tracer project covering multi-site addressing, network design, and connectivity.",
    overview: "An academic network infrastructure project for CPNT-219. The team report assigns Devanshu to Site 3 and includes his IPv4 VLSM and IPv6 addressing tables. The repository includes the original Packet Tracer file.",
    objective: "Connect the lab sites and document how addressing, routing, and local services support end-to-end connectivity.",
    environment: "Cisco Packet Tracer · academic lab", role: "Site 3 · addressing tables in the team report", diagram: "network",
    diagramCaption: "Conceptual overview using the city labels from the original portfolio brief. The report also uses London for Site 2; reconcile naming and link layout with the Packet Tracer file before treating this as an as-built diagram.",
    technologies: ["Cisco", "Packet Tracer", "TCP/IP", "IPv4", "Subnetting", "VLANs", "Routing", "OSPF", "DHCP", "NAT", "DNS"], featuredTechnologies: ["Cisco", "Packet Tracer", "OSPF", "VLANs"], github: networkRepo,
    implementation: [
      { title: "Documented IPv4 design", text: "The Site 3 report records a 10.9.0.0/18 allocation with /21, /24, /24, and /25 LAN subnet entries. Device tables list router interfaces, switch management addresses, and endpoint gateways. These are report entries, not verified running configurations." },
      { title: "IPv6 & configuration evidence", text: "The report includes IPv6 global-unicast, link-local, and gateway assignments. Router exports and service configuration excerpts are still needed to establish the implemented routing and services.", placeholder: "[ADD RUNNING CONFIGURATION EXCERPTS]" },
    ],
    troubleshooting: [
      { title: "Documentation review finding", text: "On report page 12, Router0 Eth1/0 is listed as 10.9.0.110, while the corresponding endpoints use 10.9.0.1 as their gateway. That discrepancy needs comparison with the running configuration; it is not proof of a live fault." },
      { title: "Diagnosis & resolution", text: "Record whether the discrepancy was a documentation error or a configuration issue, then add the actual checks, correction, and retest.", placeholder: "[ADD DIAGNOSTIC OUTPUT AND FIX]" },
    ],
    validation: [
      { title: "Connectivity", text: "The assignment requires end-to-end IPv4 and IPv6 connectivity checks. The available report does not include executed ping results.", placeholder: "[ADD PING / TRACEROUTE RESULTS]" },
      { title: "Routing & services", text: "Attach routing, address-assignment, and name-resolution evidence from the actual lab.", placeholder: "[ADD VERIFIED TEST RESULTS]" },
    ],
    learned: [{ title: "Reflection", text: "Describe a design decision, what the troubleshooting process taught you, and what you would improve.", placeholder: "[ADD PERSONAL REFLECTION]" }],
    evidence: [
      { title: "Packet Tracer project", description: "Original .pkt file in the project repository.", href: networkRepo + "/blob/main/NETWORK%20PROJECT.pkt" },
      { title: "Site 3 IPv4 addressing", description: "Original report, page 12. Includes the gateway discrepancy discussed above.", image: "/projects/network-site3-addressing.png", alt: "Original Site 3 IPv4 subnet and device addressing table, report page 12" },
      { title: "Site 3 IPv6 addressing", description: "Original report, page 13. These are documented assignments, not runtime output.", image: "/projects/network-site3-ipv6.png", alt: "Original Site 3 IPv6 address table, report page 13" },
      { title: "Topology & configuration", description: "A screenshot from the actual Packet Tracer project.", placeholder: "[ADD SCREENSHOT]" },
    ],
  },
  {
    slug: "azure-infrastructure", number: "02", title: "Microsoft Azure Cloud Infrastructure Lab", category: "Cloud infrastructure", type: "Hands-on lab",
    summary: "Compute, network access, and monitoring in a non-production Azure learning environment.",
    overview: "A hands-on lab covering Azure resources, Windows and Linux virtual machines, network security, access control, and monitoring. This is a learning environment; deployment records have not been added.",
    objective: "Understand how compute, networking, permissions, and monitoring work together in Azure.", environment: "Microsoft Azure · non-production lab", role: "[ADD LAB SCOPE AND CONTRIBUTION]", diagram: "azure",
    diagramCaption: "Conceptual architecture based on the listed lab technologies. Subnet layout, resource counts, rule values, and monitoring connections remain to be documented.",
    technologies: ["Microsoft Azure", "Virtual Machines", "Virtual Networks", "NSGs", "RBAC", "Azure Storage", "Azure Monitor", "Log Analytics", "Windows", "Linux"], featuredTechnologies: ["Azure", "Virtual Networks", "RBAC", "Monitoring"],
    implementation: [
      { title: "Resources & networking", text: "Document the resource group, VNet, subnets, operating systems, and access paths used.", placeholder: "[ADD DEPLOYMENT DETAILS]" },
      { title: "Access & monitoring", text: "Explain the actual NSG rules, role assignments, storage configuration, and monitoring setup.", placeholder: "[ADD CONFIGURATION AND RATIONALE]" },
    ],
    troubleshooting: [
      { title: "Observed issue", text: "Describe an actual access, connectivity, or monitoring problem in the lab.", placeholder: "[ADD SYMPTOM AND EXPECTED BEHAVIOUR]" },
      { title: "Investigation", text: "Show which settings or logs were checked and how the root cause was established.", placeholder: "[ADD INVESTIGATION NOTES AND RESOLUTION]" },
    ],
    validation: [
      { title: "Access control", text: "Record checks for intended access and restricted access, including the identity used.", placeholder: "[ADD ACCESS TESTS AND OBSERVED RESULTS]" },
      { title: "Monitoring", text: "Attach an actual metric, log query, or activity record and explain what it confirms.", placeholder: "[ADD MONITORING EVIDENCE]" },
    ],
    learned: [{ title: "Reflection", text: "Explain one lesson about cloud networking, least-privilege access, or operational visibility.", placeholder: "[ADD PERSONAL REFLECTION]" }],
    evidence: [
      { title: "Resource & network configuration", description: "Redact subscription identifiers and any sensitive access details.", placeholder: "[ADD SCREENSHOT]" },
      { title: "Monitoring & access checks", description: "Actual query output, access checks, or monitoring screenshots.", placeholder: "[ADD VALIDATION EVIDENCE]" },
    ],
  },
  {
    slug: "security-monitoring", number: "03", title: "Security Monitoring & Threat Detection Lab", category: "Security monitoring", type: "Hands-on cybersecurity lab",
    summary: "Endpoint visibility and basic security-event investigation with Wazuh and network telemetry.",
    overview: "A cybersecurity learning lab focused on Windows and Linux events, SIEM fundamentals, and investigation context. It is presented as lab work; no professional SOC experience or detection results are claimed.",
    objective: "Understand how endpoint events become alerts and what evidence is needed to investigate them.", environment: "Windows / Linux · cybersecurity lab", role: "[ADD LAB SCOPE AND CONTRIBUTION]", diagram: "security",
    diagramCaption: "Conceptual flow from event sources to investigation. Actual event sources, integrations, detection rules, and results are still to be documented.",
    technologies: ["Wazuh", "SIEM", "Windows", "Linux", "Wireshark", "Palo Alto", "MITRE ATT&CK concepts"], featuredTechnologies: ["Wazuh", "Windows / Linux", "Wireshark", "SIEM"],
    implementation: [
      { title: "Telemetry sources", text: "List the endpoints, log sources, and agent or collection configuration actually used.", placeholder: "[ADD COLLECTION CONFIGURATION]" },
      { title: "Event review", text: "Add the real event fields or detection rule reviewed and explain the investigation context.", placeholder: "[ADD EVENT OR RULE DETAILS]" },
    ],
    troubleshooting: [
      { title: "Collection issue", text: "Describe an actual missing-event, agent-connectivity, or timestamp issue.", placeholder: "[ADD OBSERVED ISSUE]" },
      { title: "Investigation trail", text: "Record the source checks, relevant log entries, and the outcome without assuming an alert is malicious.", placeholder: "[ADD ANALYSIS AND RESOLUTION]" },
    ],
    validation: [
      { title: "Event delivery", text: "Compare an endpoint event with its collected record and timestamp.", placeholder: "[ADD SOURCE AND SIEM RECORDS]" },
      { title: "Alert interpretation", text: "Document a controlled lab event, observed alert behaviour, and the limits of the conclusion.", placeholder: "[ADD ACTUAL OBSERVATIONS]" },
    ],
    learned: [{ title: "Reflection", text: "Describe what a specific investigation taught you about log quality, context, or false positives.", placeholder: "[ADD PERSONAL REFLECTION]" }],
    evidence: [
      { title: "Endpoint & SIEM evidence", description: "Actual agent status and event records from the lab.", placeholder: "[ADD SCREENSHOT]" },
      { title: "Investigation notes", description: "A redacted event timeline with the reasoning behind the conclusion.", placeholder: "[ADD INVESTIGATION RECORD]" },
    ],
  },
  {
    slug: "python-library-system", number: "04", title: "Python Library Management System", category: "Scripting & software", type: "Academic software project · three-person team",
    summary: "A Python team project with a Book class, command-line catalogue functions, and a supplied test script.",
    overview: "Developed as part of a three-person academic team. The repository contains book.py, library_app.py, test_book.py, and the project brief. Implementation details below are drawn from those files; individual ownership is not recorded.",
    objective: "Apply object-oriented programming to library records and develop the application collaboratively.", environment: "Python · academic project", role: "Three-person team · [ADD YOUR CONTRIBUTION]", diagram: "python",
    diagramCaption: "Module relationships from the repository. File handling is represented as implemented; the diagram does not imply that all application paths have passed testing.",
    technologies: ["Python", "Object-Oriented Programming", "Debugging", "Testing", "Team Collaboration", "Git/GitHub"], featuredTechnologies: ["Python", "OOP", "Testing", "Team project"], github: pythonRepo,
    implementation: [
      { title: "Book model", text: "book.py defines a Book class with ISBN, title, author, genre, and availability. Getters, setters, borrow_it(), and return_it() manage those values." },
      { title: "Catalogue operations", text: "library_app.py contains loading, ISBN lookup, add/remove, menu, and save functions. The loader reads comma-separated records into Book objects." },
      { title: "Team contribution", text: "The team size is known, but the code does not establish who implemented each function.", placeholder: "[ADD YOUR SPECIFIC CONTRIBUTION]" },
    ],
    troubleshooting: [
      { title: "Code-review observation", text: "In the current source, load_books() assigns FILE locally while save_books() references FILE outside that scope. This is a review finding, not a claimed historical fix." },
      { title: "Resolution record", text: "Add your reproduction steps, chosen correction, and retest evidence. No correction has been applied to the original project.", placeholder: "[ADD REPRODUCTION, FIX, AND RETEST]" },
    ],
    validation: [
      { title: "Existing test script", text: "test_book.py exercises construction, borrowing, title matching, returning, setters, and formatted output. It prints observations rather than using assertions." },
      { title: "Execution evidence", text: "The supplied test_book.py was executed during the portfolio review on 21 September 2026 and exited with code 0. Its output shows borrowing, a title match, and updated book records. This verifies that script run, not the complete application.", placeholder: "[ADD FULL APPLICATION CHECKS]" },
    ],
    learned: [{ title: "Reflection", text: "Explain what you personally learned about class design, debugging, testing, or integrating team contributions.", placeholder: "[ADD PERSONAL REFLECTION]" }],
    evidence: [
      { title: "Book model", description: "Class definition and record behaviour.", href: pythonRepo + "/blob/main/book.py" },
      { title: "Application source", description: "Catalogue and command-line functions.", href: pythonRepo + "/blob/main/library_app.py" },
      { title: "Test script", description: "Supplied print-based checks for the Book class.", href: pythonRepo + "/blob/main/test_book.py" },
      { title: "Executed Book checks", description: "Actual stdout from test_book.py, with source identifiers and the scope of the check.", href: "/projects/python-validation.txt" },
      { title: "Application output", description: "Add a real run showing the relevant inputs and output.", placeholder: "[ADD SCREENSHOT]" },
    ],
  },
];

export const labItems = [
  { name: "Router", short: "RTR", description: "Cisco routing concepts: IPv4 addressing, OSPF, NAT, and route verification.", concepts: ["IPv4", "OSPF", "NAT"] },
  { name: "Switch", short: "SW", description: "Local network segmentation using VLANs, access ports, and trunk links.", concepts: ["VLANs", "Switching", "Trunking"] },
  { name: "Firewall", short: "FW", description: "Palo Alto coursework covering zones, security policies, NAT, and traffic inspection.", concepts: ["Zones", "Policies", "Traffic logs"] },
  { name: "Windows Server", short: "WIN", description: "Windows administration concepts, services, permissions, and user support.", concepts: ["Windows", "Services", "Permissions"] },
  { name: "Linux Server", short: "LNX", description: "Linux administration, command-line troubleshooting, logs, and service management.", concepts: ["Linux", "Logs", "Services"] },
  { name: "Azure", short: "AZR", description: "Azure compute, networking, access control, storage, and monitoring concepts.", concepts: ["VMs", "VNets", "RBAC"] },
  { name: "Endpoint", short: "END", description: "End-user troubleshooting across hardware, software, and network connectivity.", concepts: ["Diagnostics", "Configuration", "User support"] },
];
export const education = {
  school: "Southern Alberta Institute of Technology (SAIT)", program: "Information Technology Services Diploma", location: "Calgary, Alberta", date: "[ADD GRADUATION DATE]",
  coursework: ["Networking", "Cloud Computing", "Cybersecurity", "Virtualization", "Systems Administration", "Linux", "Scripting", "Programming"],
  training: ["Microsoft Azure", "Cisco Networking", "Palo Alto Networks", "Red Hat Linux"],
};
