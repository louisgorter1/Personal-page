export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Louis Gorter · Systems Engineer",
  title: "Hardware calm. Software certain.",
  description:
    "I design IoT systems that blend precise sensing, low-power connectivity, and elegant interfaces for conservation teams. Every build is tuned like a MacBook launch: meticulous, minimal, and obsessively reliable.",
  actions: [
    { label: "Start a project", href: "#contact", variant: "primary" as const },
    {
      label: "View LinkedIn",
      href: "https://www.linkedin.com/in/louisgorter",
      variant: "ghost" as const,
    },
  ],
  stats: [
    { label: "Accuracy", value: "<20 m LoRaWAN telemetry" },
    { label: "Runtime", value: "Months-long deployments" },
    { label: "Stack", value: "GCP · Terraform · React · STM32" },
  ],
};

export const education = [
  {
    institution: "UCL, University College London",
    program: "MSc Systems Engineering for the Internet of Things",
    timeframe: "Expected Sept 2026",
    summary:
      "Exploring embedded systems, multi-agent systems, sensor networks, and inclusive design for ubiquitous computing.",
  },
  {
    institution: "Cardiff University",
    program: "BSc Computer Science (First Class)",
    timeframe: "2021–2025",
    summary:
      "Coursework across AI, secure communication networks, computational mathematics, databases, informatics, and IoT.",
  },
];

export const experiences = [
  {
    role: "Intern",
    organization: "Holiday Extras",
    timeframe: "2022",
    bullets: [
      "Scaled and automated Google Cloud Platform infrastructure with Terraform.",
      "Built accessible React UI components and supported manual testing for mobile and web.",
      "Maintained CI/CD pipelines in GitHub Actions, keeping shipping velocity high.",
      "Worked across Docker, Kubernetes, and cross-functional engineering squads.",
    ],
  },
  {
    role: "Lead Researcher",
    organization: "Wildlife Tracking Initiative",
    timeframe: "2024–2025",
    bullets: [
      "Designed LoRaWAN sea turtle tracking tags on STM32, GNSS, and wet/dry sensors.",
      "Implemented FlowFuse (Node-RED) backends with u-blox CloudLocate for efficient decoding.",
      "Validated sub-20 m accuracy while staying within $200 hardware constraints.",
    ],
  },
];

export const projects = [
  {
    title: "Wildlife Tracking Tag",
    stack: "LoRaWAN · GNSS · STM32",
    description:
      "Marine tracker enabling long-range positioning for sea turtles with The Things Network uplinks, FlowFuse orchestration, and u-blox CloudLocate assisted GNSS.",
    highlights: [
      "Reduced satellite costs from thousands to <$200 end-to-end.",
      "Achieved <20 m accuracy in 75% of trials.",
      "Delivered a cloud-connected pipeline from sensor to dashboard.",
    ],
  },
  {
    title: "Field Ops Interface",
    stack: "React · TypeScript · Vite",
    description:
      "Operational dashboard for conservation teams with signal monitoring, alert routing, and offline-first caching.",
    highlights: [
      "Component system audited for WCAG 2.2 AA contrast requirements.",
      "Configurable alert playbooks synced to FlowFuse automations.",
      "Edge caching keeps ranger tablets responsive with patchy connectivity.",
    ],
  },
];

export const leadership = [
  {
    title: "Volunteer Team Leader",
    organization: "Harnas Wildlife Sanctuary · Namibia",
    description:
      "Coordinated multicultural volunteer teams for habitat restoration, enrichment, and veterinary support.",
    bullets: [
      "Owned daily schedules, task orchestration, and stakeholder comms.",
      "Drove conservation projects from trail maintenance to community outreach.",
    ],
  },
  {
    title: "Climate Tech Society",
    organization: "Cardiff University",
    description:
      "Founded a student collective prototyping low-cost IoT for biodiversity monitoring.",
    bullets: [
      "Mentored peers on STM32 bring-up, embedded debugging, and product storytelling.",
      "Partnered with local NGOs to validate prototypes in live field trials.",
    ],
  },
];

export const skills = [
  "GCP",
  "Terraform",
  "React",
  "TypeScript",
  "Node-RED / FlowFuse",
  "Docker",
  "Kubernetes",
  "LoRaWAN",
  "STM32",
  "u-blox CloudLocate",
  "Python",
  "Figma",
];

export const focusAreas = [
  "IoT architecture spanning sensors, LPWAN connectivity, and cloud ingest.",
  "Human-centered UI for operations tooling.",
  "CI/CD and code review practices that keep teams shipping safely.",
];

export const contact = {
  email: "louisgorter@gmail.com",
  phone: "+44 7883 842 704",
  linkedIn: "https://www.linkedin.com/in/louisgorter",
};
