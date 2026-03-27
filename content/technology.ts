export const technologyIntro = {
  farmerInterface:
    "A mobile-first experience for plot-linked profiles, crop choices, advisories, and field updates—designed for low bandwidth and high clarity.",
  fieldAgentInterface:
    "Tools for registration, monitoring visits, group coordination, and exception handling—so ground truth stays current.",
  adminInterface:
    "Dashboards for institutions and program teams: cohorts, compliance views, exports, and operational controls across the network.",
} as const;

export const technologyFeaturePillars = [
  {
    title: "Structured Crop Planning",
    bullets: [
      "Season and variety planning aligned to land parcels and advisories",
      "Input needs and expected output linked to aggregation windows",
      "Changes tracked for audit and institutional review",
    ],
  },
  {
    title: "Production Monitoring",
    bullets: [
      "Field visits, crop health notes, and interventions in one timeline",
      "Photos and checklists where programs require evidence",
      "Exceptions surfaced early for coaching and risk review",
    ],
  },
  {
    title: "Aggregation & Market Linkage",
    bullets: [
      "Lot building, grading hooks, and logistics coordination for FPOs",
      "Buyer and mandi engagement with traceable quantities",
      "Pricing and delivery signals shared with participating institutions",
    ],
  },
  {
    title: "Transparent Record Keeping",
    bullets: [
      "Transactions, receipts, and settlements documented end-to-end",
      "Role-based access for farmers, groups, FPOs, banks, and buyers",
      "Exportable views for credit, audit, and program reporting",
    ],
  },
] as const;
