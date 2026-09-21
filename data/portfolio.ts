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
  { role: "IT Technician", company: "Excitel", date: "Jan 2023 – Nov 2023", location: "New Delhi, India", points: ["Diagnosed and resolved hardware, software, and internet connectivity issues for residential and business customers.", "Collaborated with ISP and technical teams, supported endpoint-security migration, and assisted with hardware and software asset management."] },
  { role: "IT Support Intern", company: "Hathway", date: "Jul 2022 – Dec 2022", location: "New Delhi, India", points: ["Provided help desk support and assisted with day-to-day user issues.", "Installed and configured Windows, macOS, and Linux systems and supported device troubleshooting and onboarding."] },
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
    environment: "Cisco Packet Tracer · academic lab", role: "Site 3 · IPv4 and IPv6 addressing documentation", diagram: "network",
    diagramCaption: "Conceptual overview using the city labels from the original portfolio brief. The report also uses London for Site 2; reconcile naming and link layout with the Packet Tracer file before treating this as an as-built diagram.",
    technologies: ["Cisco", "Packet Tracer", "TCP/IP", "IPv4", "Subnetting", "VLANs", "Routing", "OSPF", "DHCP", "NAT", "DNS"], featuredTechnologies: ["Cisco", "Packet Tracer", "OSPF", "VLANs"], github: networkRepo,
    implementation: [],
    troubleshooting: [],
    validation: [],
    learned: [],
    evidence: [],
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
  school: "Southern Alberta Institute of Technology (SAIT)", program: "Information Technology Services Diploma", location: "Calgary, Alberta", date: "Jan 2024 – Apr 2026",
  coursework: ["Networking", "Cloud Computing", "Cybersecurity", "Virtualization", "Systems Administration", "Linux", "Scripting", "Programming"],
  training: ["Microsoft Azure", "Cisco Networking", "Palo Alto Networks", "Red Hat Linux"],
};
