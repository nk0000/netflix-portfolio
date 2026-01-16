export const sections = [
  {
    id: "engineering",
    title: "Engineering Projects",
    items: [
    {
        engineer: {
        title: "Thrust Pad Assembly",
        preview: "Geometry Logic & Solver Preparation",
        sections: [
            {
            heading: "Engineering Focus",
            text: "Developed geometry logic and prepared solver-ready models for thrust pad assemblies.",
            },
        ],
        },
        pm: {
        title: "Thrust Pad Assembly Modeling",
        preview: "Ensuring solver-ready geometry for analysis",
        sections: [
            {
            heading: "Objective",
            text: "Enable reliable solver inputs by validating geometry logic early in the pipeline.",
            },
        ],
        },
    },

    {
        engineer: {
        title: "Micro-Geometry Sensitivity",
        preview: "1st & 2nd Generation Static Solvers",
        sections: [
            {
            heading: "Engineering Focus",
            text: "Analyzed sensitivity of micro-geometry parameters across solver generations.",
            },
        ],
        },
        pm: {
        title: "Improving Solver Accuracy via Micro-Geometry",
        preview: "Understanding solver behavior changes",
        sections: [
            {
            heading: "Insight",
            text: "Identified how micro-geometry tuning impacts solver stability and output accuracy.",
            },
        ],
        },
    },

    {
        engineer: {
        title: "GBTE Solver – Precession Behavior Analysis",
        preview: "Dynamic behavior investigation",
        sections: [
            {
            heading: "Engineering Focus",
            text: "Studied precession behavior in GBTE solver under varying load conditions.",
            },
        ],
        },
        pm: {
        title: "Analyzing GBTE Solver Dynamics",
        preview: "Understanding edge-case solver behavior",
        sections: [
            {
            heading: "Problem",
            text: "Unexpected precession patterns affecting result interpretation.",
            },
        ],
        },
    },

    {
        engineer: {
        title: "Thermal Effects of Gear Mesh Contact",
        preview: "Spur and Helical Gears",
        sections: [
            {
            heading: "Engineering Focus",
            text: "Evaluated thermal effects arising from gear mesh contact in spur and helical gears.",
            },
        ],
        },
        pm: {
        title: "Thermal Impact on Gear Performance",
        preview: "Reliability under thermal stress",
        sections: [
            {
            heading: "Outcome",
            text: "Improved understanding of thermal limits impacting gear efficiency.",
            },
        ],
        },
    },

    {
        engineer: {
        title: "Solid–Fluid Thermal Interaction",
        preview: "Solver Modeling Limits",
        sections: [
            {
            heading: "Engineering Focus",
            text: "Explored solver limitations in modeling solid–fluid thermal interactions.",
            },
        ],
        },
        pm: {
        title: "Modeling Limits in Thermal Simulations",
        preview: "Balancing accuracy vs complexity",
        sections: [
            {
            heading: "Decision",
            text: "Defined practical modeling boundaries to keep simulations usable and performant.",
            },
        ],
        },
    },

    {
        engineer: {
        title: "Member Portal",
        preview: "Full-stack MVC + Azure Application",
        sections: [
            {
            heading: "Engineering Focus",
            text: "Built a full-stack member portal using MVC architecture deployed on Azure.",
            },
        ],
        },
        pm: {
        title: "Delivering a Member Portal Platform",
        preview: "From requirements to deployment",
        sections: [
            {
            heading: "Impact",
            text: "Delivered an end-to-end platform supporting real user workflows.",
            },
        ],
        },
    },
    ],
  },

  {
    id: "product",
    title: "Product Case Studies",
    items: [
      {
        engineer: {
          title: "AI-Powered Q&A System",
          preview: "Semantic search with Gemini + ChromaDB",
          sections: [
            {
              heading: "System Design",
              text: "Vector embeddings with fast retrieval pipeline.",
            },
            {
              heading: "Tech Stack",
              text: "Python, Gemini API, ChromaDB",
            },
          ],
        },
        pm: {
          title: "Building an AI Q&A Experience",
          preview: "Reducing search friction for users",
          sections: [
            {
              heading: "User Problem",
              text: "Users struggled to find answers in large documents.",
            },
            {
              heading: "Impact",
              text: "Improved task completion and reduced time-to-answer.",
            },
          ],
        },
      },
    ],
  },

  {
    id: "career",
    title: "Career Journey",
    items: [
      {
        engineer: {
          title: "Cognizant → Hexagon",
          preview: "Transition into CAD & manufacturing systems",
          sections: [
            {
              heading: "Role",
              text: "Worked on backend systems supporting CAD workflows.",
            },
            {
              heading: "Growth",
              text: "Developed strong systems and domain expertise.",
            },
          ],
        },
        pm: {
          title: "Early Career Growth",
          preview: "Building foundations in systems & problem solving",
          sections: [
            {
              heading: "Learning",
              text: "Developed structured thinking and execution skills.",
            },
            {
              heading: "Outcome",
              text: "Prepared for product-oriented responsibilities.",
            },
          ],
        },
      },
    ],
  },
];
